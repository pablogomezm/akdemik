//definimos clase con ES6
class DataService{
    apiUserInfo
    apiCourses
    apiOneCourse
    constructor(){
        this.apiUserInfo = "https://rest-courses-api.herokuapp.com/api/v1/users/me";
        this.apiCourses = "https://rest-courses-api.herokuapp.com/api/v1/courses";
        this.apiOneCourse = "https://rest-courses-api.herokuapp.com/api/v1/courses/";
    }
    getAll(){
        return fetch(this.apiUserInfo);
    }
    getAllCourses(){
        return fetch(this.apiCourses);
    }
    getOneCourse(slug){
        return fetch(this.apiOneCourse + slug);
    }
}

export default DataService