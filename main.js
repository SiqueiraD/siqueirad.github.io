(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_directives/alert.component.html":
/*!**************************************************!*\
  !*** ./src/app/_directives/alert.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "./src/app/_directives/alert.component.ts":
/*!************************************************!*\
  !*** ./src/app/_directives/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/_directives/alert.component.html")
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/_directives/index.ts":
/*!**************************************!*\
  !*** ./src/app/_directives/index.ts ***!
  \**************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/_directives/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/index.ts":
/*!**********************************!*\
  !*** ./src/app/_guards/index.ts ***!
  \**********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/fake-backend.ts":
/*!******************************************!*\
  !*** ./src/app/_helpers/fake-backend.ts ***!
  \******************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FakeBackendInterceptor = /** @class */ (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        // array in local storage for registered users
        var users = JSON.parse(localStorage.getItem('users')) || [];
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () {
            // authenticate
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                // find if any user matches login credentials
                var filteredUsers = users.filter(function (user) {
                    return user.username === request.body.username && user.password === request.body.password;
                });
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    var user = filteredUsers[0];
                    var body = {
                        id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: body }));
                }
                else {
                    // else return 400 bad request
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Username or password is incorrect' } });
                }
            }
            // get users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: users }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // get user by id
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id_1 = parseInt(urlParts[urlParts.length - 1]);
                    var matchedUsers = users.filter(function (user) { return user.id === id_1; });
                    var user = matchedUsers.length ? matchedUsers[0] : null;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: user }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // register user
            if (request.url.endsWith('/users/register') && request.method === 'POST') {
                // get new user object from post body
                var newUser_1 = request.body;
                // validation
                var duplicateUser = users.filter(function (user) { return user.username === newUser_1.username; }).length;
                if (duplicateUser) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Username "' + newUser_1.username + '" is already taken' } });
                }
                // save new user
                newUser_1.id = users.length + 1;
                users.push(newUser_1);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
            }
            // delete user
            if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id = parseInt(urlParts[urlParts.length - 1]);
                    for (var i = 0; i < users.length; i++) {
                        var user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }
                    // respond 200 OK
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // pass through any requests not handled above
            return next.handle(request);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());
    };
    FakeBackendInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());

var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: ErrorInterceptor, JwtInterceptor, FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_0__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"]; });

/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fake-backend */ "./src/app/_helpers/fake-backend.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["FakeBackendInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["fakeBackendProvider"]; });






/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/users/authenticate", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/image.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/image.service.ts ***!
  \********************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _localStorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage.service */ "./src/app/_services/localStorage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



function getBase64Image(img) {
    var dataURL = img;
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
var ImageService = /** @class */ (function () {
    function ImageService(http, localStorage) {
        this.http = http;
        this.localStorage = localStorage;
    }
    ImageService.prototype.uploadImage = function (image, src) {
        var formData = new FormData();
        formData.append('image', image);
        var imgData = getBase64Image(src);
        return this.localStorage.setItem("imgData", imgData);
    };
    ImageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _localStorage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]])
    ], ImageService);
    return ImageService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AlertService, AuthenticationService, UserService, ImageService, LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });

/* harmony import */ var _image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image.service */ "./src/app/_services/image.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return _image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"]; });

/* harmony import */ var _localStorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localStorage.service */ "./src/app/_services/localStorage.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return _localStorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]; });








/***/ }),

/***/ "./src/app/_services/localStorage.service.ts":
/*!***************************************************!*\
  !*** ./src/app/_services/localStorage.service.ts ***!
  \***************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
        this.subjects = {};
    }
    LocalStorageService.prototype.getItem = function (key, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        if (this.subjects.hasOwnProperty(key)) {
            return this.subjects[key];
        }
        if (!window.localStorage.getItem(key) && defaultValue) {
            window.localStorage.setItem(key, JSON.stringify(defaultValue));
        }
        var value = window.localStorage.getItem(key)
            ? JSON.parse(window.localStorage.getItem(key))
            : defaultValue;
        return this.subjects[key] = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](value);
    };
    LocalStorageService.prototype.setItem = function (key, value) {
        window.localStorage.setItem(key, JSON.stringify(value));
        if (this.subjects.hasOwnProperty(key)) {
            this.subjects[key].next(value);
        }
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](value);
    };
    LocalStorageService.prototype.remove = function (key) {
        window.localStorage.removeItem(key);
        if (this.subjects.hasOwnProperty(key)) {
            this.subjects[key].next(null);
        }
    };
    LocalStorageService.prototype.removeAll = function () {
        window.localStorage.clear();
    };
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users");
    };
    UserService.prototype.getById = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/" + id);
    };
    UserService.prototype.register = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/register", user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/" + user.id, user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/" + id);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- main app container -->\n<div class=\"jumbotron\">\n    <div class=\"container\">\n        <!-- <div class=\"row\">\n            <div class=\"col-sm-6 offset-sm-3\"> -->\n                <alert></alert>\n                <router-outlet></router-outlet>\n            <!-- </div>\n        </div> -->\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_directives */ "./src/app/_directives/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");
/* harmony import */ var _principal_principal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./principal/principal.component */ "./src/app/principal/principal.component.ts");
/* harmony import */ var _principal_watermark_watermark_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./principal/watermark/watermark.component */ "./src/app/principal/watermark/watermark.component.ts");
/* harmony import */ var _principal_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./principal/upload-image/upload-image.component */ "./src/app/principal/upload-image/upload-image.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// used to create fake backend










;



;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_8__["routing"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _directives__WEBPACK_IMPORTED_MODULE_9__["AlertComponent"],
                _home__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _login__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _register__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                _principal_principal_component__WEBPACK_IMPORTED_MODULE_15__["PrincipalComponent"],
                _principal_watermark_watermark_component__WEBPACK_IMPORTED_MODULE_16__["WatermarkComponent"],
                _principal_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_17__["UploadImageComponent"]
            ],
            providers: [
                _guards__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"],
                _services__WEBPACK_IMPORTED_MODULE_11__["AlertService"],
                _services__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"],
                _services__WEBPACK_IMPORTED_MODULE_11__["UserService"],
                _services__WEBPACK_IMPORTED_MODULE_11__["ImageService"],
                _services__WEBPACK_IMPORTED_MODULE_11__["LocalStorageService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _helpers__WEBPACK_IMPORTED_MODULE_6__["JwtInterceptor"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _helpers__WEBPACK_IMPORTED_MODULE_6__["ErrorInterceptor"],
                    multi: true
                },
                // provider used to create fake backend
                _helpers__WEBPACK_IMPORTED_MODULE_6__["fakeBackendProvider"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _principal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./principal */ "./src/app/principal/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");






var appRoutes = [
    { path: 'home', component: _home__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'principal', component: _principal__WEBPACK_IMPORTED_MODULE_3__["PrincipalComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: 'principal' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Hi {{currentUser.firstName}}!</h1>\n<p>You're logged in with Angular 6!!</p>\n<h3>All registered users:</h3>\n<ul>\n    <li *ngFor=\"let user of users\">\n        {{user.username}} ({{user.firstName}} {{user.lastName}})\n        - <a (click)=\"deleteUser(user.id)\" class=\"text-danger\">Delete</a>\n    </li>\n</ul>\n<p><a [routerLink]=\"['/login']\">Logout</a></p>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService) {
        this.userService = userService;
        this.users = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
    };
    HomeComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function () {
            _this.loadAllUsers();
        });
    };
    HomeComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (users) {
            _this.users = users;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html") }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/index.ts":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "./src/app/login/index.ts":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Login</h2>\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html") }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/principal/index.ts":
/*!************************************!*\
  !*** ./src/app/principal/index.ts ***!
  \************************************/
/*! exports provided: PrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _principal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./principal.component */ "./src/app/principal/principal.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function() { return _principal_component__WEBPACK_IMPORTED_MODULE_0__["PrincipalComponent"]; });




/***/ }),

/***/ "./src/app/principal/model.ts":
/*!************************************!*\
  !*** ./src/app/principal/model.ts ***!
  \************************************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
var Model = /** @class */ (function () {
    function Model(value) {
        this.value = value;
        this.src = value;
    }
    return Model;
}());



/***/ }),

/***/ "./src/app/principal/principal.component.css":
/*!***************************************************!*\
  !*** ./src/app/principal/principal.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/principal/principal.component.html":
/*!****************************************************!*\
  !*** ./src/app/principal/principal.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Algumas Imagens:</h1>\n\n<app-upload-image (someEvent)=\"conseADD($event)\"></app-upload-image>\n\n\n<!-- <ngb-carousel *ngIf=\"images.length > 0\">\n  <ng-template *ngFor=\"let image of images; index as i;\" ngbSlide>\n    <app-watermark  srcImg=\"{{image.src}}\" index=\"{{i}}\"></app-watermark>\n\n    <div class=\"row\">\n      <div id=\"buttonDownload\" class=\"btn btn-primary\" >Download</div>\n    </div>\n  </ng-template>\n</ngb-carousel> -->\n\n<div class=\"album py-5 bg-light\" *ngIf=\"images.length > 0\">\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <div class=\"col-md-4\" *ngFor=\"let image of images; index as i;\">\n        <div class=\"card mb-4 shadow-sm\">\n          <app-watermark  srcImg=\"{{image.src}}\" index=\"{{i}}\"></app-watermark>\n          <!-- <svg class=\"bd-placeholder-img card-img-top\" width=\"100%\" height=\"225\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\" aria-label=\"Placeholder: Thumbnail\"><title>Placeholder</title><rect width=\"100%\" height=\"100%\" fill=\"#55595c\"></rect><text x=\"50%\" y=\"50%\" fill=\"#eceeef\" dy=\".3em\">Thumbnail</text></svg> -->\n          <div class=\"card-body\">\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n            <div class=\"d-flex justify-content-between align-items-center\">\n              <div class=\"col-sm\"></div>\n              <div class=\"btn-group col-sm\">\n                <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\n                <button type=\"button\" (click)=\"downloadImage(image.src)\" class=\"btn btn-sm btn-outline-secondary buttonDownload\">Download</button>\n              </div>\n              <div class=\"col-sm\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- <div *ngFor=\"let image of images\">\n  <app-watermark  srcImg=\"{{image}}\" ></app-watermark>\n</div> -->\n\n"

/***/ }),

/***/ "./src/app/principal/principal.component.ts":
/*!**************************************************!*\
  !*** ./src/app/principal/principal.component.ts ***!
  \**************************************************/
/*! exports provided: PrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function() { return PrincipalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model */ "./src/app/principal/model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { UploadImageComponent } from './upload-image/upload-image.component';
// import { WatermarkComponent } from './watermark/watermark.component';

var PrincipalComponent = /** @class */ (function () {
    function PrincipalComponent(localStorageService) {
        this.localStorageService = localStorageService;
        this.images = [];
    }
    PrincipalComponent.prototype.conseADD = function (img) {
        this.images.push(new _model__WEBPACK_IMPORTED_MODULE_3__["Model"](img.match(/^data:image/) != null ? img : 'data:image/png;base64,' + img));
    };
    PrincipalComponent.prototype.downloadImage = function (img) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: '<strong>HTML <u>example</u></strong>',
            type: 'info',
            html: "\n      <div id=\"lipsum\">\n      <p>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies enim vel sodales eleifend. Cras rutrum arcu vitae quam elementum malesuada. Quisque eu ex non risus fermentum aliquet. Mauris ut sagittis massa. Ut congue neque in ornare sodales. Phasellus sollicitudin feugiat porttitor. Nunc purus odio, blandit a ultrices eu, maximus quis odio. Vivamus semper id ipsum at maximus. Proin accumsan fringilla ipsum, at aliquet lectus lobortis eu. Nullam egestas tincidunt rutrum. Proin non varius orci, molestie suscipit libero. Cras et interdum dui. Maecenas at sem aliquam, tristique urna ut, tempor nunc.\n      </p>\n      <p>\n      Quisque euismod justo nec diam consequat condimentum. Phasellus pharetra quam et sem mattis cursus. Pellentesque massa quam, sodales ut facilisis et, suscipit ut nisi. Phasellus eget nisl nisl. Integer ac porttitor ante. Vestibulum volutpat urna sed dui rhoncus vestibulum a non arcu. Vestibulum convallis elementum dapibus. Curabitur in nulla dictum, commodo neque a, fringilla quam. Vivamus ultrices ut elit quis vulputate. Ut cursus dui vel volutpat condimentum. Nam et lectus volutpat, sollicitudin nunc sed, maximus lacus. Maecenas dictum lacus nisi, ac bibendum magna consequat nec. Phasellus mollis augue sit amet ante semper ultricies eu et magna. Integer viverra sagittis nibh, eget commodo tellus tincidunt ut. Curabitur fermentum nunc et justo suscipit maximus feugiat at sapien. Fusce porta nisi quis maximus tincidunt.\n      </p>\n      <p>\n      Cras eu purus id orci blandit viverra id interdum mi. Sed quis nisi sem. Cras sed dolor vel nulla ultricies gravida. Nunc vestibulum rhoncus risus, eu tempor ante elementum eget. Vivamus egestas, ex eget posuere molestie, orci sapien faucibus justo, in sodales tortor dui quis eros. Vivamus quis mi sit amet velit mollis pellentesque. Vestibulum tristique faucibus magna, ut venenatis ligula auctor sed. Quisque fringilla mauris ipsum, in laoreet tortor posuere quis. Morbi molestie placerat enim nec elementum. Donec eget mollis augue, quis fermentum dui. Pellentesque consequat, ipsum porttitor egestas scelerisque, mauris felis porttitor nisl, sit amet porta neque massa non lorem. Nulla eleifend, nibh ac suscipit dapibus, dui diam porttitor diam, quis fringilla ante libero congue felis. Morbi sed est quam. Duis in libero sed velit consectetur interdum at vel erat. Sed cursus placerat accumsan. Aliquam tristique, massa viverra sagittis tincidunt, lacus mauris ultrices neque, eget semper dui nibh ac nisl.\n      </p>\n      <p>\n      Ut a tortor vitae ex mattis volutpat consectetur a dui. Fusce ultrices lectus quam, eget egestas libero vestibulum at. Morbi molestie erat eu risus malesuada tincidunt. Aliquam at diam varius, imperdiet velit eu, placerat tortor. Vestibulum lacinia laoreet lectus, ac placerat odio ullamcorper sit amet. Etiam quam dolor, placerat nec urna in, tempor consequat eros. Vivamus nec aliquet orci. Mauris quis gravida libero. Suspendisse et risus aliquet orci porta iaculis. Quisque vitae pellentesque risus, eget ullamcorper sapien. Nunc at sem eget erat volutpat pharetra sed at sapien. Sed nec porttitor risus. Morbi eget augue congue, aliquet metus non, bibendum quam. Morbi malesuada sollicitudin nisi at ultricies.\n      </p>\n      <p>\n      Donec vitae aliquet tortor. Mauris ornare arcu sapien, quis pretium ipsum sollicitudin et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed blandit ipsum libero, sit amet pellentesque libero dictum eget. Aliquam eu aliquet tellus. Phasellus a vulputate tortor. Proin cursus at lectus eu hendrerit. Donec molestie molestie tortor, at accumsan elit luctus in. In vel fringilla nisi. Curabitur at sem at ante ultricies sollicitudin. Suspendisse et dui sapien. Aenean vestibulum tellus vitae leo dictum scelerisque. Cras condimentum sem sit amet nisi porttitor, sit amet luctus tellus luctus.\n      </p>\n      <p>\n      Aliquam erat volutpat. Nullam ultrices volutpat nunc, vitae dictum diam fringilla vel. In a libero in ligula luctus dictum ultrices id tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque lacus ex, hendrerit et commodo ac, euismod et enim. Nullam quis enim lectus. Proin lacus tortor, efficitur at mauris id, ultricies feugiat lacus. Cras et tellus nec mi laoreet tristique. Phasellus dignissim sagittis enim at vestibulum. Curabitur arcu augue, fringilla eget orci ac, commodo lobortis arcu. Aliquam quis porta purus. Nunc leo ligula, eleifend ut quam eu, scelerisque consectetur nisl. Maecenas tincidunt ullamcorper volutpat. In hac habitasse platea dictumst.\n      </p>\n      <p>\n      Donec et feugiat risus, vel faucibus arcu. Aenean sit amet massa at metus consectetur egestas. Pellentesque vel est nisl. Sed in urna eu eros sollicitudin porttitor. Donec rutrum tellus non sapien sollicitudin imperdiet. Cras ut dui luctus, interdum augue id, posuere ipsum. Nam ligula lorem, laoreet a dapibus sed, molestie ut elit. Mauris velit arcu, varius vitae justo eget, molestie suscipit justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus ullamcorper porta euismod. Suspendisse metus arcu, facilisis eu fermentum id, aliquet sit amet tortor.\n      </p>\n      <p>\n      Praesent sit amet enim porta, accumsan sem ut, fringilla orci. Sed eget cursus risus, vitae gravida ligula. Vivamus purus urna, viverra in mauris vel, faucibus molestie dolor. Etiam ut metus rutrum, lobortis arcu sit amet, fermentum quam. Duis quis mattis tortor. Aliquam erat volutpat. Mauris commodo tortor vitae justo ultricies ullamcorper. Proin et elit neque.\n      </p>\n      <p>\n      Ut sem nulla, rutrum ut enim in, eleifend egestas augue. Maecenas non dui lobortis, pharetra justo a, commodo diam. Sed fermentum, eros non dictum dapibus, massa quam pellentesque enim, vitae tempor tortor purus id sem. Proin sit amet fermentum dui, eget congue massa. Integer semper pharetra lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at augue congue, dictum mauris tempor, tempor purus. Curabitur rutrum egestas tempus. Nunc eu euismod augue, at accumsan mi. Vivamus efficitur urna urna, in lacinia diam condimentum nec.\n      </p>\n      <p>\n      Maecenas vehicula cursus arcu, sed malesuada risus. Praesent a justo at nisi tincidunt efficitur ac ac lacus. Aliquam et lectus sollicitudin diam viverra sagittis. Suspendisse id vestibulum enim. Etiam et faucibus sem. Donec vulputate euismod lacus, vitae pretium eros pharetra vel. Sed feugiat sagittis eros, et congue metus. Maecenas id placerat elit. In at blandit massa. Donec eleifend est sed consectetur dictum. Donec ex felis, mattis et dolor eget, condimentum pellentesque eros. Cras dolor dolor, aliquam mattis nibh ut, fringilla sollicitudin metus.\n      </p>\n      <p>\n      Integer vestibulum facilisis sapien, sit amet eleifend risus ultrices a. Phasellus cursus malesuada facilisis. Nulla non justo vel lectus suscipit commodo. Donec rutrum ante non nunc ultrices ultrices. Mauris malesuada ullamcorper viverra. Nunc faucibus tellus sit amet magna sagittis, ullamcorper tristique nisi dignissim. Vestibulum fermentum venenatis tempus. Suspendisse tristique quam quam, eget aliquam nunc hendrerit eget. Vivamus et posuere justo, eget vehicula libero. Maecenas mi sem, volutpat vitae nulla sit amet, porta convallis eros. Praesent nec mi egestas, vulputate dui sed, suscipit felis. Donec non enim nec dolor fermentum dictum a ut felis. Proin consequat lorem nulla. Cras nibh erat, maximus eu turpis in, sagittis imperdiet justo. Integer venenatis elit ac sapien rutrum, non posuere massa pulvinar. Integer turpis ante, placerat a ante sit amet, auctor aliquet libero.\n      </p>\n      <p>\n      Pellentesque dignissim ultrices ligula sit amet mollis. Sed mauris diam, sollicitudin eget pharetra eu, luctus a metus. Pellentesque scelerisque ligula sit amet ultrices lacinia. Vivamus vulputate eros eros, eget porta arcu egestas convallis. Sed vel nibh sed augue sodales lobortis. Etiam dictum erat ullamcorper justo faucibus condimentum. Phasellus interdum nibh nec mollis sollicitudin.\n      </p>\n      <p>\n      Curabitur venenatis, lacus non porttitor venenatis, leo massa gravida nibh, sit amet bibendum lacus sapien et tellus. Pellentesque a facilisis massa. Quisque accumsan purus sit amet augue maximus, et blandit lorem molestie. Nullam tristique arcu purus. Phasellus imperdiet pulvinar ipsum at faucibus. Quisque auctor, quam iaculis dignissim auctor, lectus leo dignissim diam, quis efficitur nunc ligula nec sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer vel imperdiet tellus, eget vehicula nisl. Aliquam erat volutpat.\n      </p>\n      <p>\n      Duis iaculis bibendum ligula. Curabitur interdum leo magna, nec consectetur velit sollicitudin ullamcorper. Vivamus molestie eros in lobortis tempor. Nullam maximus orci ligula, porta dignissim nibh faucibus quis. Maecenas euismod gravida ex. Nunc a odio sit amet libero ullamcorper imperdiet. Mauris vel risus est. Nullam ullamcorper ante convallis eros placerat, eget egestas mauris mattis.\n      </p>\n      <p>\n      Proin porttitor nisl vitae venenatis facilisis. Praesent ac suscipit lacus, non ultrices enim. Nullam blandit luctus placerat. Integer euismod est nisi, vel malesuada diam maximus ac. Morbi a massa consequat, dapibus felis et, sagittis leo. Aenean molestie ullamcorper tellus sit amet suscipit. Phasellus viverra porttitor pulvinar. In id arcu et nunc congue consequat. Sed at gravida urna, sed maximus ligula. Morbi placerat efficitur vulputate.\n      </p>\n      <p>\n      Nam vehicula ante sit amet diam ultrices, eget vestibulum felis molestie. Nullam eu finibus elit, quis porta dui. Ut gravida tortor ut magna laoreet fermentum. Pellentesque sed fringilla justo, sit amet sollicitudin ipsum. Aliquam laoreet ex vel dui iaculis pretium. Morbi vulputate rutrum metus, eget interdum erat rhoncus congue. Nam sit amet finibus dui. Vivamus accumsan semper tortor, finibus placerat velit.\n      </p>\n      <p>\n      Cras condimentum erat quis accumsan blandit. Quisque a eleifend magna. Nunc pretium ac lectus eu tempus. Suspendisse in auctor arcu. Praesent lacinia auctor tincidunt. Ut iaculis nibh neque, vulputate vehicula massa vestibulum pulvinar. Quisque placerat, lectus ullamcorper semper volutpat, odio justo auctor ex, fringilla feugiat libero turpis eget nisi. Nullam a ipsum sed quam bibendum malesuada. Nunc id risus eget mauris porttitor vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus.\n      </p></div>\n      ",
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
            cancelButtonAriaLabel: 'Thumbs down',
        }).then(function (result) {
            if (result.value) {
                var link = document.createElement('a');
                link.href = img;
                link.download = 'imagem.' + img.match(/(png|jpg|jpeg)/)[0];
                link.click();
            }
        });
    };
    PrincipalComponent.prototype.ngOnInit = function () {
        this.localStorageService.removeAll();
        //this.images.push('img');
    };
    PrincipalComponent.prototype.ngOnDestroy = function () {
        //this.imagesObservable.subscribe().unsubscribe;
    };
    PrincipalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./principal.component.html */ "./src/app/principal/principal.component.html"),
            styles: [__webpack_require__(/*! ./principal.component.css */ "./src/app/principal/principal.component.css")],
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]])
    ], PrincipalComponent);
    return PrincipalComponent;
}());



/***/ }),

/***/ "./src/app/principal/upload-image/upload-image.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/principal/upload-image/upload-image.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/principal/upload-image/upload-image.component.html":
/*!********************************************************************!*\
  !*** ./src/app/principal/upload-image/upload-image.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label class=\"image-upload-container btn btn-bwm\">\n  <span>Select Image</span>\n  <input #imageInput\n         type=\"file\"\n         accept=\"image/*\"\n         (change)=\"processFile(imageInput)\">\n</label>\n"

/***/ }),

/***/ "./src/app/principal/upload-image/upload-image.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/principal/upload-image/upload-image.component.ts ***!
  \******************************************************************/
/*! exports provided: UploadImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadImageComponent", function() { return UploadImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageSnippet = /** @class */ (function () {
    function ImageSnippet(src, file) {
        this.src = src;
        this.file = file;
    }
    return ImageSnippet;
}());
var UploadImageComponent = /** @class */ (function () {
    function UploadImageComponent(imageService) {
        this.imageService = imageService;
        this.someEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UploadImageComponent.prototype.processFile = function (imageInput) {
        var _this = this;
        var file = imageInput.files[0];
        var reader = new FileReader();
        reader.addEventListener('load', function (event) {
            _this.selectedFile = new ImageSnippet(event.target.result, file);
            _this.imageService.uploadImage(_this.selectedFile.file, _this.selectedFile.src).subscribe(function (res) {
                _this.someEvent.next(res);
            }, function (err) {
            });
        });
        reader.readAsDataURL(file);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UploadImageComponent.prototype, "someEvent", void 0);
    UploadImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-image',
            template: __webpack_require__(/*! ./upload-image.component.html */ "./src/app/principal/upload-image/upload-image.component.html"),
            styles: [__webpack_require__(/*! ./upload-image.component.css */ "./src/app/principal/upload-image/upload-image.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["ImageService"]])
    ], UploadImageComponent);
    return UploadImageComponent;
}());



/***/ }),

/***/ "./src/app/principal/watermark/watermark.component.css":
/*!*************************************************************!*\
  !*** ./src/app/principal/watermark/watermark.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#buttonDownload{\n\n}\n"

/***/ }),

/***/ "./src/app/principal/watermark/watermark.component.html":
/*!**************************************************************!*\
  !*** ./src/app/principal/watermark/watermark.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"img-watermark-{{index}}\" alt=\"\"></div>\n<!-- <div class=\"carousel-caption\">\n  <h3>First slide label</h3>\n  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n</div> -->\n\n\n"

/***/ }),

/***/ "./src/app/principal/watermark/watermark.component.ts":
/*!************************************************************!*\
  !*** ./src/app/principal/watermark/watermark.component.ts ***!
  \************************************************************/
/*! exports provided: WatermarkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatermarkComponent", function() { return WatermarkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var watermarkjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! watermarkjs */ "./node_modules/watermarkjs/dist/watermark.js");
/* harmony import */ var watermarkjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(watermarkjs__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WatermarkComponent = /** @class */ (function () {
    function WatermarkComponent() {
        this._name = '';
    }
    Object.defineProperty(WatermarkComponent.prototype, "srcImg", {
        get: function () { return this._name; },
        set: function (name) {
            this._name = (name && name.trim()) || '<no name set>';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WatermarkComponent.prototype, "index", {
        get: function () { return this._index; },
        set: function (value) {
            this._index = value;
        },
        enumerable: true,
        configurable: true
    });
    WatermarkComponent.prototype.ngOnInit = function () {
        this._image = this.srcImg;
    };
    WatermarkComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        try {
            watermarkjs__WEBPACK_IMPORTED_MODULE_1__([this._image]).image(watermarkjs__WEBPACK_IMPORTED_MODULE_1__["text"].center('Marca D\'agua', '48px sans-serif', '#fff', 0.5))
                .then(function (img) {
                img.classList.add('img-fluid');
                document.getElementById('img-watermark-' + _this._index).appendChild(img);
            });
        }
        catch (error) {
            console.log(this._image || error);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], WatermarkComponent.prototype, "srcImg", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], WatermarkComponent.prototype, "index", null);
    WatermarkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-watermark',
            template: __webpack_require__(/*! ./watermark.component.html */ "./src/app/principal/watermark/watermark.component.html"),
            styles: [__webpack_require__(/*! ./watermark.component.css */ "./src/app/principal/watermark/watermark.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WatermarkComponent);
    return WatermarkComponent;
}());



/***/ }),

/***/ "./src/app/register/index.ts":
/*!***********************************!*\
  !*** ./src/app/register/index.ts ***!
  \***********************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component */ "./src/app/register/register.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"]; });




/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Register</h2>\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"firstName\">First Name</label>\n        <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"lastName\">Last Name</label>\n        <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, userService, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html") }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    apiUrl: 'http://localhost:4000'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:4000'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment.prod */ "./src/environments/environment.prod.ts");




if (_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/danilosic/Projects/angular-6-registration-login-example-cli/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map