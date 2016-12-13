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
var cart_services_1 = require('../services/cart.services');
var CartComponent = (function () {
    function CartComponent(CartService) {
        this.CartService = CartService;
    }
    CartComponent.prototype.keys = function () {
        return Object.keys(this.courses);
    };
    CartComponent.prototype.ngOnInit = function () {
        this.courses = this.CartService.getCourses();
        this.details = this.CartService.getDetail();
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: 'cart',
            template: "\n\t\t<div class=\"cart\">\n\t\t\t<h2>Carrito</h2>\n\t\t\t<span>{{details.items}} articulos agregados</span>\n\n\t\t\t<div *ngFor=\"let key of keys()\" class=\"detail\">\n\t\t\t\t{{courses[key].name}}\n\t\t\t\t{{courses[key].price | currency : 'USD' : true : '1.2-2'}}\n\t\t\t\tx\n\t\t\t\t{{courses[key].quantity}}\n\t\t\t\t<span class=\"total\">\n\t\t\t\t\t{{courses[key].quantity * courses[key].price | currency : 'USD' : true : '1.2-2'}}\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<span>{{details.total | currency : 'USD' : true : '1.2-2'}} total</span>\n\t\t\t\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [cart_services_1.CartService])
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map