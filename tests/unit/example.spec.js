import { shallowMount, mount } from "@vue/test-utils";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue"
//importar vuex para simular el store
import { createStore } from 'vuex';
//importar lo relacionado a router
import { createRouter, createWebHistory } from 'vue-router'
//importar componente Login para routes
import Login from '@/views/Login.vue'
//importar Home
import Home from '@/views/Home.vue'
//importar componente principal App.vue
import App from '../../src/App.vue'




// routes
const routes = createRouter({ // nombre router no importa, este es el que se ba a usar
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ] 
})

// store
const store = createStore({
  state: {
    bigTitle: "This is a big title!!!",
    userLogged: null
  },
  //obtiene elementos del STATE
  getters: {
    getElement1(state) {
      return state.bigTitle;
    },
    isLoggedIn(state) {
      return state.userLogged != null ? true : false;
    }
  },
  actions: {
    setTitleAction(context, newTitle) {
      context.commit("setTitle", newTitle);
    },
    setUserAction(context, user) {
      context.commit("setUser", user);
    }
  },
  mutations: {
    setTitle(state, newTitle) {
      state.bigTitle = newTitle;
    },
    setUser(state, user) {
      state.userLogged = user;
      console.log(state.userLogged);
    }
  }
});

/* Pruebas de CARGA DE COMPONENTES */

  /* Footer */
describe('Footer.vue', () => {
  it('carga de componente Footer', () => {
    const wrapperFooter = shallowMount(Footer);
    console.log(wrapperFooter.html()); // me va a mostrar todo el contenido del componente Footer
    expect(wrapperFooter.html()); // expresar lo que espero, en este caso: que wrapper.html exista
  })
})

/* Header (VUEX) */

describe('Header.vue', () => {
  it('carga de componente Header', () => {
    const wrapperHeader = shallowMount(Header, { 
      global:{ // creo este objeto global para que el plugin store entre en mi test
        plugins: [store] // se agrega este plugins definido dentro del contexto
      }
    })
    console.log(wrapperHeader.html()); // me va a mostrar todo el contenido del componente Footer
    expect(wrapperHeader.html()); // expresar lo que espero, en este caso: que wrapper.html exista
  })
})

/* Header con props */

describe('Header.vue', () => {
  it('mostrar mensaje props en componente Header', () => {
    const message = "Welcome";
    const wrapperHeader = shallowMount(Header, {
      global:{ // creo este objeto global para que el plugin store entre en mi test
        plugins: [store] // se agrega este plugins definido dentro del contexto
      },
      props:{         // props: { message }
        title2: message // describiendo una prueba en donde voy a escribir un mensaje en el props "title2"
      }
    })
    console.log(wrapperHeader.html()); // me va a mostrar todo el contenido del componente
    // debo poder identificar dónde está siendo ocupado el props para poder hacer mi prueba
    // porque si no, tendria que ir al tag padre donde está, si el prop está "suelto"
    // desde la prueba unitaria, debo ser capaz de identificar la etiqueta donde está el prop que quiero usar para el test
    // y buscar dentro de la etiqueta el mensaje que acabamos de enviar, si es verdadero (test pasa) o falso (test no pasa)
    // cómo buscar dentro del componente el elemento? según lo siguiente:

    /* expect(wrapperHeader.find("h2").text()).toBe(message); */ 
    // expresar lo que espero, en este caso: que el prop este en un h2 ( <h2>{{ title2 }}</h2> )
    // si encontré el elemento h2 y rescato la propiedad "text" de ese elemento, y si ese es el contenido del mensaje, entonces la prueba pasa, si no, no pasa
    
    // también puedo identificar una etiqueta con un ID:
    expect(wrapperHeader.find("#testId").text()).toBe(message);
  })
})

/* Prueba VUE ROUTER */

//esperamos que luego de haber hecho un push en la ruta del Login, el componente Login exista
describe('App', () => {
  //debe ser una llamada ASYNC, debemos esperar a que router esté listo para hacer el wrapper
  it('renderizando vista Login en App', async () => { //así se hace llamada asíncrona 
    routes.push("/Login");
    //esperamos a que router esté listo
    await routes.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [store, routes] // como Login usa el store y router, hay que declararlas en el contexto de archivo de pruebas
      }
    });
    expect(wrapper.findComponent(Login).exists()).toBe(true); // tiene que existir el componente Login
  }) 
})
// import HelloWorld from "@/components/HelloWorld.vue";

/* describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
}); */


/* MOCKS */

// es una forma de burlarse del sistema simulando entornos como el store o router
// lo hicimos definiendo store en este archivo de pruebas (global -> plugins -> store, router, etc)
// en las versiones anteriores de Vue, Mocks se usa con Local Vue
// para Vue 3, se utilizan componentes globales (ya lo hicimos)