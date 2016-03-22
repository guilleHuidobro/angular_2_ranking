System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', 'rxjs/add/operator/toPromise'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var ApiFirebaseService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            ApiFirebaseService = (function () {
                /**
                 * ApiFirebaseService Constructor.
                 *
                 * @param {Http} _http - Private Http service injected into this component.
                 * HTTP Info: https://angular.io/docs/ts/latest/api/http/Http-class.html
                 */
                function ApiFirebaseService(_http) {
                    this._http = _http;
                    //private BASE_URL: string = 'https://angular2crud.firebaseio.com';
                    this.BASE_URL = 'https://vivid-fire-4443.firebaseio.com';
                    //private LOCAL_STORAGE_SESSION_KEY: string = 'firebase:session::angular2crud';
                    this.LOCAL_STORAGE_SESSION_KEY = 'firebase:session::vivid-fire-4443';
                    this.firebase = new Firebase(this.BASE_URL);
                }
                /**
                 * Get a list of all contacts.
                 */
                ApiFirebaseService.prototype.getContacts = function () {
                    var url = this.BASE_URL + '/.json';
                    return this._http.get(url) // HTTP GET request to URL.
                        .map(function (res) {
                        return res.json(); // Map response to JSON.
                    })
                        .map(function (data) {
                        var contacts = [];
                        if (data) {
                            // For < 4 items in an Array, Firebase converts your data to an object.
                            if (typeof data === 'object') {
                                data = Object.keys(data).map(function (key) { return data[key]; }); // Convert object to array.
                            }
                            data.forEach(function (contact) {
                                if (contact !== null) {
                                    contacts.push(contact);
                                }
                            });
                        }
                        return contacts; // Final contact list returned.
                    });
                };
                /**
                 * Initialize API.
                 */
                ApiFirebaseService.prototype.init = function () { };
                /**
                 * CREATE a contact.
                 *
                 * @param {Contact} contact - Contact object.
                 */
                ApiFirebaseService.prototype.createContact = function (contact) {
                    var _this = this;
                    var url = this.BASE_URL;
                    return this.getContacts().toPromise().then(function (res) {
                        contact.id = -1;
                        res.forEach(function (c) {
                            if (c.id > contact.id) {
                                contact.id = c.id; // Find the max contact ID.
                            }
                        });
                        contact.id++; // Set the new contact ID to one greater than the max.
                        url += '/' + contact.id + '.json';
                        return _this._http.put(url, JSON.stringify(contact)).toPromise(); // PUT new contact.
                    });
                };
                /**
                 * Get (READ) contact by id.
                 *
                 * @param {number | string} id - Contact id.
                 */
                ApiFirebaseService.prototype.getContact = function (id) {
                    var url = this.BASE_URL + '/' + id + '.json';
                    return this._http.get(url).map(function (res) { return res.json(); });
                };
                /**
                 * UPDATE a contact.
                 *
                 * @param {Contact} contact - Contact object.
                 */
                ApiFirebaseService.prototype.updateContact = function (contact) {
                    var url = this.BASE_URL + '/' + contact.id + '.json';
                    return this._http.put(url, JSON.stringify(contact)).toPromise();
                };
                /**
                 * DELETE contact by id.
                 *
                 * @param {number | string} id - Contact id.
                 */
                ApiFirebaseService.prototype.deleteContact = function (id) {
                    var url = this.BASE_URL + '/' + id + '.json';
                    return this._http.delete(url).toPromise();
                };
                /**
                 * Create a new user account.
                 *
                 * @param {string} email - Email of new user.
                 * @param {string} password - Password of new user.
                 * @param {Function} success - Callback function after create operation completes.
                 */
                ApiFirebaseService.prototype.createAccount = function (email, password, success) {
                    this.firebase.createUser({
                        email: email,
                        password: password
                    }, function (error, userData) {
                        if (error) {
                            console.log("Error creating user:", error);
                            success(false);
                        }
                        else {
                            console.log("Successfully created user account with uid:", userData.uid);
                            success(true);
                        }
                    });
                };
                /**
                 * Login a user account.
                 *
                 * @param {string} email - Email of user.
                 * @param {string} password - Password of user.
                 * @param {Function} success - Callback function after login operation completes.
                 */
                ApiFirebaseService.prototype.loginAccount = function (email, password, success) {
                    this.firebase.authWithPassword({
                        email: email,
                        password: password
                    }, function (error, authData) {
                        if (error) {
                            console.log("Login Failed!", error);
                            success(false);
                        }
                        else {
                            console.log("Authenticated successfully with payload:", authData);
                            success(true);
                        }
                    });
                };
                /**
                 * Logout a user account.
                 *
                 * @param {Function} success - Callback function after logout operation completes.
                 */
                ApiFirebaseService.prototype.logoutAccount = function (success) {
                    this.firebase.unauth(); // De-authenticate logged in user.
                    var authData = this.firebase.getAuth(); // Check to make sure it worked.
                    if (authData) {
                        console.log("User " + authData.uid + " is logged in with " + authData.provider);
                        success(false);
                    }
                    else {
                        console.log("User is logged out");
                        success(true);
                    }
                };
                /**
                 * Delete a user account.
                 *
                 * @param {string} email - Email of user we are deleting.
                 * @param {string} password - Password of user we are deleting.
                 * @param {Function} success - Callback function after delete operation completes.
                 */
                ApiFirebaseService.prototype.deleteAccount = function (email, password, success) {
                    this.firebase.removeUser({
                        email: email,
                        password: password
                    }, function (error) {
                        if (error === null) {
                            console.log("User removed successfully");
                            success(true);
                        }
                        else {
                            console.log("Error removing user:", error);
                            success(false);
                        }
                    });
                };
                /**
                 * Returns the email of the logged in user.
                 */
                ApiFirebaseService.prototype.getLoggedInAccountEmail = function () {
                    var authData = this.firebase.getAuth(); // Get current auth.
                    if (authData) {
                        return authData.password.email;
                    }
                    else {
                        console.log("User is logged out");
                    }
                };
                /**
                 * Return the local storage session value.
                 */
                ApiFirebaseService.prototype.getLocalStorageSession = function () {
                    return localStorage.getItem(this.LOCAL_STORAGE_SESSION_KEY);
                };
                ApiFirebaseService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ApiFirebaseService);
                return ApiFirebaseService;
            })();
            exports_1("ApiFirebaseService", ApiFirebaseService);
        }
    }
});
//# sourceMappingURL=api-firebase.service.js.map