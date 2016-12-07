"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var COURSES = [
    {
        id: 1,
        name: 'Angular 2',
        image: '/img/angular.png',
        price: 1000
    },
    {
        id: 2,
        name: 'Pyton',
        image: '/img/python.png',
        price: 1500000
    }
];
var CoursesComponent = (function () {
    function CoursesComponent() {
        this.title = 'cursos disponibles';
        this.courses = COURSES;
    }
    CoursesComponent = __decorate([
        core_1.Component({
            selector: 'courses',
            template: "\n\t\t<h2>{{title}}</h2>\n\t\t<div class=\"courses_list\">\n\t\t\t<coursebox\n\t\t\t[course]=\"course_info\"\n\t\t\t*ngFor = \"let course_info of courses\"\n\t\t\t>\n\t\t\t</coursebox>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], CoursesComponent);
    return CoursesComponent;
}());
exports.CoursesComponent = CoursesComponent;
//# sourceMappingURL=courses.component.js.map