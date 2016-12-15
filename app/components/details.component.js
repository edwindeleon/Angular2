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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var api_services_1 = require('../services/api.services');
var CourseDatail = (function () {
    function CourseDatail(route, location, ApiService) {
        this.route = route;
        this.location = location;
        this.ApiService = ApiService;
    }
    CourseDatail.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.ApiService.getCourse(id)
                .then(function (course) { return _this.course = course; });
        });
    };
    CourseDatail = __decorate([
        core_1.Component({
            selector: 'detail',
            template: "\n\t\t<div class=\"detail-course\" *ngIf=\"course\">\n\t\t\t<img [src]=\"course.image\">\n\t\t\t<h2>{{course.name}}</h2>\n\t\t\t<span class=\"number\">\n\t\t\t\tCosto de {{course.price | currency : 'USD': true :'1.2-2'}}\n\t\t\t</span>\n\t\t\t<p>\n\t\t\t{{course.description}} impartido por {{course.instructor}}\n\t\t\t</p>\n\t\t</div>\n\t",
            providers: [api_services_1.ApiService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, common_1.Location, api_services_1.ApiService])
    ], CourseDatail);
    return CourseDatail;
}());
exports.CourseDatail = CourseDatail;
//# sourceMappingURL=details.component.js.map