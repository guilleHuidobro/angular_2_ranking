System.register(['angular2/core', './api-elastic.service', './api-firebase.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, api_elastic_service_1, api_firebase_service_1;
    var ApiService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (api_elastic_service_1_1) {
                api_elastic_service_1 = api_elastic_service_1_1;
            },
            function (api_firebase_service_1_1) {
                api_firebase_service_1 = api_firebase_service_1_1;
            }],
        execute: function() {
            ApiService = (function () {
                /**
                 * ApiService Constructor.
                 *
                 * @param {ApiElasticService} _apiElasticService - Private Elastic service.
                 * @param {ApiFirebaseService} _apiFirebaseService - Private Firebase service.
                 */
                function ApiService(_apiElasticService, _apiFirebaseService) {
                    this._apiElasticService = _apiElasticService;
                    this._apiFirebaseService = _apiFirebaseService;
                    this.elastic = false;
                    this.firebase = true;
                }
                /**
                 * Get a list of all contacts.
                 */
                ApiService.prototype.getContacts = function () {
                    if (this.elastic) {
                        return this._apiElasticService.getContacts();
                    }
                    else if (this.firebase) {
                        return this._apiFirebaseService.getContacts();
                    }
                };
                /**
                 * Initialize API.
                 */
                ApiService.prototype.init = function () {
                    if (this.elastic) {
                        return this._apiElasticService.init();
                    }
                    else if (this.firebase) {
                        return this._apiFirebaseService.init();
                    }
                };
                /**
                 * CREATE a contact.
                 *
                 * @param {Contact} contact - Contact object.
                 */
                ApiService.prototype.createContact = function (contact) {
                    if (this.elastic) {
                        return this._apiElasticService.createContact(contact);
                    }
                    else if (this.firebase) {
                        return this._apiFirebaseService.createContact(contact);
                    }
                };
                /**
                 * Get (READ) contact by id.
                 *
                 * @param {number | string} id - Contact id.
                 */
                ApiService.prototype.getContact = function (id) {
                    if (this.elastic) {
                        return this._apiElasticService.getContact(id);
                    }
                    else if (this.firebase) {
                        return this._apiFirebaseService.getContact(id);
                    }
                };
                /**
                 * UPDATE a contact.
                 *
                 * @param {Contact} contact - Contact object.
                 */
                ApiService.prototype.updateContact = function (contact) {
                    if (this.elastic) {
                        return this._apiElasticService.updateContact(contact);
                    }
                    else if (this.firebase) {
                        return this._apiFirebaseService.updateContact(contact);
                    }
                };
                /**
                 * DELETE contact by id.
                 *
                 * @param {number | string} id - Contact id.
                 */
                ApiService.prototype.deleteContact = function (id) {
                    if (this.elastic) {
                        return this._apiElasticService.deleteContact(id);
                    }
                    else if (this.firebase) {
                        return this._apiFirebaseService.deleteContact(id);
                    }
                };
                /**
                 * Create a new user account.
                 *
                 * @param {string} email - Email of new user.
                 * @param {string} password - Password of new user.
                 * @param {Function} success - Callback function after create operation completes.
                 */
                ApiService.prototype.createAccount = function (email, password, success) {
                    if (this.elastic) {
                        console.log('ERROR: createAccount(email, password, success) for Elastic is not implemented.');
                    }
                    else if (this.firebase) {
                        return this._apiFirebaseService.createAccount(email, password, success);
                    }
                };
                /**
                 * Login a user account.
                 *
                 * @param {string} email - Email of user.
                 * @param {string} password - Password of user.
                 * @param {Function} success - Callback function after login operation completes.
                 */
                ApiService.prototype.loginAccount = function (email, password, success) {
                    if (this.elastic) {
                        console.log('ERROR: loginAccount(email, password, success) for Elastic is not implemented.');
                    }
                    else if (this.firebase) {
                        return this._apiFirebaseService.loginAccount(email, password, success);
                    }
                };
                /**
                 * Logout a user account.
                 *
                 * @param {Function} success - Callback function after logout operation completes.
                 */
                ApiService.prototype.logoutAccount = function (success) {
                    if (this.elastic) {
                        console.log('ERROR: logoutAccount(success) for Elastic is not implemented.');
                    }
                    else if (this.firebase) {
                        return this._apiFirebaseService.logoutAccount(success);
                    }
                };
                /**
                 * Delete a user account.
                 *
                 * @param {string} email - Email of user we are deleting.
                 * @param {string} password - Password of user we are deleting.
                 * @param {Function} success - Callback function after delete operation completes.
                 */
                ApiService.prototype.deleteAccount = function (email, password, success) {
                    if (this.elastic) {
                        console.log('ERROR: deleteAccount(email, password, success) for Elastic is not implemented.');
                    }
                    else if (this.firebase) {
                        return this._apiFirebaseService.deleteAccount(email, password, success);
                    }
                };
                /**
                 * Returns the email of the logged in user.
                 */
                ApiService.prototype.getLoggedInAccountEmail = function () {
                    if (this.elastic) {
                        console.log('ERROR: getLoggedInAccountEmail() for Elastic is not implemented.');
                    }
                    else if (this.firebase) {
                        return this._apiFirebaseService.getLoggedInAccountEmail();
                    }
                };
                /**
                 * Return the local storage session value.
                 */
                ApiService.prototype.getLocalStorageSession = function () {
                    if (this.elastic) {
                        console.log('ERROR: getLocalStorageSession() for Elastic is not implemented.');
                    }
                    else if (this.firebase) {
                        return this._apiFirebaseService.getLocalStorageSession();
                    }
                };
                ApiService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [api_elastic_service_1.ApiElasticService, api_firebase_service_1.ApiFirebaseService])
                ], ApiService);
                return ApiService;
            })();
            exports_1("ApiService", ApiService);
        }
    }
});
//# sourceMappingURL=api.service.js.map