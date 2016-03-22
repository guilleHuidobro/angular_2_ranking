System.register(['angular2/core', 'angular2/router', './api.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, api_service_1;
    var AccountLoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (api_service_1_1) {
                api_service_1 = api_service_1_1;
            }],
        execute: function() {
            AccountLoginComponent = (function () {
                /**
                 * AccountLoginComponent Constructor.
                 *
                 * @param {Router} _router - Private Router injected into this component.
                 * @param {ApiService} _apiService - Private ApiService injected into this component.
                 * Note: Underscore convention in Angular 2 signifies a private variable.
                 */
                function AccountLoginComponent(_router, _apiService) {
                    this._router = _router;
                    this._apiService = _apiService;
                    this.loginError = false; // True if there is a login error.
                }
                /**
                 * Submit click handler.
                 */
                AccountLoginComponent.prototype.onSubmit = function (email, password) {
                    var _this = this;
                    this.loginError = false;
                    this._apiService.loginAccount(email, password, function (success) {
                        if (success) {
                            _this._router.navigate(['Ranking']);
                        }
                        else {
                            _this.loginError = true;
                        }
                    });
                };
                AccountLoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        template: "\n            <h4>Login</h4>\n\n            <span class=\"error\" *ngIf=\"loginError\">\n                Invalid Email/Password Combination. \n                Please Try Again.\n                <br>\n                <br>\n            </span>\n\n            <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(email.value, password.value)\">\n                <label for=\"email\">Email</label>\n                <input type=\"email\" #email id=\"email\" required>\n\n                <label for=\"password\">Password</label>\n                <input type=\"password\" #password required>\n\n                <button type=\"submit\">Submit</button>\n                <a href=\"create\">Create Account</a>\n            </form>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, api_service_1.ApiService])
                ], AccountLoginComponent);
                return AccountLoginComponent;
            })();
            exports_1("AccountLoginComponent", AccountLoginComponent);
        }
    }
});
//# sourceMappingURL=account-login.component.js.map