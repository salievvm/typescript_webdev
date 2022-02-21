"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Decorators
var Decorators;
(function (Decorators) {
    // 1. Class decorator
    var logClass = function (constructor) {
        console.log(constructor);
    };
    // 2. Property decorator
    var logProperty = function (target, propertyKey) {
        console.log(propertyKey);
    };
    // 3. Method decorator
    var logMethod = function (target, propertyKey, descriptor) {
        console.log(propertyKey);
    };
    // 4. Accessor decorator (setter getter)
    var logSet = function (target, propertyKey, descriptor) {
        console.log(propertyKey);
    };
    var User = /** @class */ (function () {
        function User(name, age, secret) {
            this.name = name;
            this.age = age;
            this.secret = secret;
        }
        User.prototype.getPass = function () {
            return "".concat(this.name).concat(this.age);
        };
        User.prototype.getSecret = function () {
            return Math.pow(this.age, 2);
        };
        Object.defineProperty(User.prototype, "myAge", {
            get: function () {
                return this.age;
            },
            set: function (age) {
                this.age = age;
            },
            enumerable: false,
            configurable: true
        });
        __decorate([
            logProperty
        ], User.prototype, "secret", void 0);
        __decorate([
            logMethod
        ], User.prototype, "getPass", null);
        __decorate([
            logMethod
        ], User.prototype, "getSecret", null);
        __decorate([
            logSet
        ], User.prototype, "myAge", null);
        User = __decorate([
            logClass
        ], User);
        return User;
    }());
    var user = new User('Slava', 25, 1234);
    user.secret;
    user.getPass();
    user.myAge = 33;
    user.getSecret();
})(Decorators || (Decorators = {}));
