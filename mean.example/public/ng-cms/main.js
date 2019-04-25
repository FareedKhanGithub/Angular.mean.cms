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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _articles_articles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./articles/articles.component */ "./src/app/articles/articles.component.ts");
/* harmony import */ var _article_view_article_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article-view/article-view.component */ "./src/app/article-view/article-view.component.ts");
/* harmony import */ var _article_create_article_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article-create/article-create.component */ "./src/app/article-create/article-create.component.ts");
/* harmony import */ var _article_edit_article_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./article-edit/article-edit.component */ "./src/app/article-edit/article-edit.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _user_view_user_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-view/user-view.component */ "./src/app/user-view/user-view.component.ts");
/* harmony import */ var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-create/user-create.component */ "./src/app/user-create/user-create.component.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/user-edit/user-edit.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");



//import the UserComponent









var routes = [
    // 4. The default route
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    // 5. Map /users to the UsersComponent
    { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"] },
    { path: 'users/view/:id', component: _user_view_user_view_component__WEBPACK_IMPORTED_MODULE_8__["UserViewComponent"] },
    { path: 'users/create', component: _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_9__["UserCreateComponent"] },
    { path: 'users/edit/:id', component: _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_10__["UserEditComponent"] },
    { path: 'auth', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_11__["AuthComponent"] },
    { path: 'articles', component: _articles_articles_component__WEBPACK_IMPORTED_MODULE_3__["ArticlesComponent"] },
    { path: 'articles/view/:id', component: _article_view_article_view_component__WEBPACK_IMPORTED_MODULE_4__["ArticleViewComponent"] },
    { path: 'articles/create', component: _article_create_article_create_component__WEBPACK_IMPORTED_MODULE_5__["ArticleCreateComponent"] },
    { path: 'articles/edit/:id', component: _article_edit_article_edit_component__WEBPACK_IMPORTED_MODULE_6__["ArticleEditComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ng-cms';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users.service */ "./src/app/users.service.ts");
/* harmony import */ var _articles_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./articles.service */ "./src/app/articles.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _user_view_user_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-view/user-view.component */ "./src/app/user-view/user-view.component.ts");
/* harmony import */ var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-create/user-create.component */ "./src/app/user-create/user-create.component.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/user-edit/user-edit.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _articles_articles_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./articles/articles.component */ "./src/app/articles/articles.component.ts");
/* harmony import */ var _article_view_article_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./article-view/article-view.component */ "./src/app/article-view/article-view.component.ts");
/* harmony import */ var _article_create_article_create_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./article-create/article-create.component */ "./src/app/article-create/article-create.component.ts");
/* harmony import */ var _article_edit_article_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./article-edit/article-edit.component */ "./src/app/article-edit/article-edit.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"],
                _user_view_user_view_component__WEBPACK_IMPORTED_MODULE_10__["UserViewComponent"],
                _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_11__["UserCreateComponent"],
                _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_12__["UserEditComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_13__["AuthComponent"],
                _articles_articles_component__WEBPACK_IMPORTED_MODULE_14__["ArticlesComponent"],
                _article_view_article_view_component__WEBPACK_IMPORTED_MODULE_15__["ArticleViewComponent"],
                _article_create_article_create_component__WEBPACK_IMPORTED_MODULE_16__["ArticleCreateComponent"],
                _article_edit_article_edit_component__WEBPACK_IMPORTED_MODULE_17__["ArticleEditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"], _articles_service__WEBPACK_IMPORTED_MODULE_7__["ArticlesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/article-create/article-create.component.html":
/*!**************************************************************!*\
  !*** ./src/app/article-create/article-create.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Create a New Article</h1>\n\n<form (ngSubmit)=\"onSubmit()\" #createArticle=\"ngForm\">\n  \n  <div *ngIf=\"errorMessage\">{{errorMessage}}</div>\n  \n  <div>\n    <label for=\"title\">Title</label>\n    <input [(ngModel)]=\"article.title\" type=\"text\" name=\"title\" id=\"title\">\n    <div *ngIf=\"errors.title\">{{errors.title.message}}</div>\n  </div>\n\n  <div>\n    <label for=\"body\">Body</label>\n    <input [(ngModel)]=\"article.body\" type=\"text\" name=\"body\" id=\"body\">\n    <div *ngIf=\"errors.body\">{{errors.body.message}}</div>\n  </div>\n \n  <button type=\"submit\">Submit</button>\n\n</form>\n"

/***/ }),

/***/ "./src/app/article-create/article-create.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/article-create/article-create.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUtY3JlYXRlL2FydGljbGUtY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/article-create/article-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/article-create/article-create.component.ts ***!
  \************************************************************/
/*! exports provided: ArticleCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleCreateComponent", function() { return ArticleCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _articles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../articles.service */ "./src/app/articles.service.ts");
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../article */ "./src/app/article.ts");


//import { FormsModule } from '@angular/forms';



var ArticleCreateComponent = /** @class */ (function () {
    function ArticleCreateComponent(articlesService, router) {
        this.articlesService = articlesService;
        this.router = router;
        this.article = new _article__WEBPACK_IMPORTED_MODULE_4__["Article"]();
        this.errors = [];
    }
    ArticleCreateComponent.prototype.ngOnInit = function () {
    };
    ArticleCreateComponent.prototype.response = function (response) {
        if (response.success === false) {
            this.errors = response.error.errors;
            this.errorMessage = response.error.message;
        }
        if (response.success === true) {
            this.router.navigate(['/articles/view/', response.article.slug]);
        }
    };
    ArticleCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.articlesService.createArticle(this.article).subscribe(function (response) {
            _this.response(response);
        });
    };
    ArticleCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article-create',
            template: __webpack_require__(/*! ./article-create.component.html */ "./src/app/article-create/article-create.component.html"),
            styles: [__webpack_require__(/*! ./article-create.component.scss */ "./src/app/article-create/article-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_articles_service__WEBPACK_IMPORTED_MODULE_3__["ArticlesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ArticleCreateComponent);
    return ArticleCreateComponent;
}());



/***/ }),

/***/ "./src/app/article-edit/article-edit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/article-edit/article-edit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 *ngIf=\"article\">Edit {{article.title}}</h1>\n<h3>Hello world</h3>\n<form *ngIf=\"article\" (ngSubmit)=\"onSubmit()\" #editArticle=\"ngForm\">\n  \n  <div *ngIf=\"errorMessage\">{{errorMessage}}</div>\n\n  <input [(ngModel)]=\"article._id\" type=\"hidden\" name=\"_id\" id=\"_id\">\n  <div>\n    <label for=\"title\">Title</label>\n    <input [(ngModel)]=\"article.title\" type=\"text\" name=\"title\" id=\"title\">\n    <div *ngIf=\"errors.title\">{{errors.title.message}}</div>\n  </div>\n\n  <div>\n    <label for=\"body\">Body</label>\n    <input [(ngModel)]=\"article.body\" type=\"text\" name=\"body\" id=\"body\">\n    <div *ngIf=\"errors.body\">{{errors.body.message}}</div>\n  </div>\n\n\n  \n  <button type=\"submit\">Submit</button>\n\n</form>"

/***/ }),

/***/ "./src/app/article-edit/article-edit.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/article-edit/article-edit.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUtZWRpdC9hcnRpY2xlLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/article-edit/article-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/article-edit/article-edit.component.ts ***!
  \********************************************************/
/*! exports provided: ArticleEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleEditComponent", function() { return ArticleEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _articles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../articles.service */ "./src/app/articles.service.ts");


//import { NgForm } from '@angular/forms';



var ArticleEditComponent = /** @class */ (function () {
    function ArticleEditComponent(articlesService, route, router) {
        this.articlesService = articlesService;
        this.route = route;
        this.router = router;
        this.errors = [];
    }
    ArticleEditComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.paramMap.get('id');
        this.getArticle(id);
    };
    ArticleEditComponent.prototype.getArticle = function (id) {
        var _this = this;
        this.articlesService.getArticle(id).subscribe(function (response) {
            _this.article = response.article;
        });
    };
    ArticleEditComponent.prototype.response = function (response) {
        if (response.success === false) {
            this.errors = response.error.errors;
            this.errorMessage = response.error.message;
        }
        if (response.success === true) {
            this.router.navigate(['/articles/view/', response.article.slug]);
        }
    };
    ArticleEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.articlesService.editArticle(this.article).subscribe(function (response) {
            _this.response(response);
        });
    };
    ArticleEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article-edit',
            template: __webpack_require__(/*! ./article-edit.component.html */ "./src/app/article-edit/article-edit.component.html"),
            styles: [__webpack_require__(/*! ./article-edit.component.scss */ "./src/app/article-edit/article-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_articles_service__WEBPACK_IMPORTED_MODULE_3__["ArticlesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ArticleEditComponent);
    return ArticleEditComponent;
}());



/***/ }),

/***/ "./src/app/article-view/article-view.component.html":
/*!**********************************************************!*\
  !*** ./src/app/article-view/article-view.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"article\">\n  <h1>{{article.title}}</h1>\n  <div><strong>Title:</strong> {{article.title}}</div>\n  <button [routerLink]=\"['/articles/edit/', article.slug]\">Edit</button>\n  <button (click)=\"deleteArticle(article._id)\">Delete</button>\n</div>"

/***/ }),

/***/ "./src/app/article-view/article-view.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/article-view/article-view.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUtdmlldy9hcnRpY2xlLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/article-view/article-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/article-view/article-view.component.ts ***!
  \********************************************************/
/*! exports provided: ArticleViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleViewComponent", function() { return ArticleViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _articles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../articles.service */ "./src/app/articles.service.ts");





var ArticleViewComponent = /** @class */ (function () {
    function ArticleViewComponent(route, articlesService, router) {
        this.route = route;
        this.articlesService = articlesService;
        this.router = router;
    }
    ArticleViewComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.paramMap.get('id');
        this.getArticle(id);
    };
    ArticleViewComponent.prototype.getArticle = function (id) {
        var _this = this;
        this.articlesService.getArticle(id).subscribe(function (response) {
            _this.article = response.article;
            //console.log(response);
        });
    };
    ArticleViewComponent.prototype.deleteArticle = function (id) {
        var _this = this;
        if (confirm("Are you sure to delete " + this.article.title)) {
            this.articlesService.deleteArticle(id).subscribe(function () { _this.router.navigate(['/articles']); });
        }
    };
    ArticleViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article-view',
            template: __webpack_require__(/*! ./article-view.component.html */ "./src/app/article-view/article-view.component.html"),
            styles: [__webpack_require__(/*! ./article-view.component.scss */ "./src/app/article-view/article-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _articles_service__WEBPACK_IMPORTED_MODULE_3__["ArticlesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ArticleViewComponent);
    return ArticleViewComponent;
}());



/***/ }),

/***/ "./src/app/article.ts":
/*!****************************!*\
  !*** ./src/app/article.ts ***!
  \****************************/
/*! exports provided: Article */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
var Article = /** @class */ (function () {
    function Article() {
    }
    return Article;
}());



/***/ }),

/***/ "./src/app/articles.service.ts":
/*!*************************************!*\
  !*** ./src/app/articles.service.ts ***!
  \*************************************/
/*! exports provided: ArticlesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesService", function() { return ArticlesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");


//1. Import HTTP libs for API calls

// Set outbound HTTP headers to JSON
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ArticlesService = /** @class */ (function () {
    //Call the HttpClinet in the Constructor
    function ArticlesService(http) {
        this.http = http;
        //Set up the URL
        this.url = 'http://localhost:3000/api/articles';
    }
    // Set up a simple observable 
    ArticlesService.prototype.getArticles = function () {
        return this.http.get(this.url);
    };
    ArticlesService.prototype.getArticle = function (id) {
        return this.http.get(this.url + "/" + id);
    };
    ArticlesService.prototype.createArticle = function (article) {
        return this.http.post(this.url, article, httpOptions);
    };
    ArticlesService.prototype.editArticle = function (article) {
        return this.http.put(this.url, article, httpOptions);
    };
    ArticlesService.prototype.deleteArticle = function (id) {
        return this.http.delete(this.url + "/" + id);
    };
    ArticlesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ArticlesService);
    return ArticlesService;
}());



/***/ }),

/***/ "./src/app/articles/articles.component.html":
/*!**************************************************!*\
  !*** ./src/app/articles/articles.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Articles</h1>\n<ul *ngIf=\"articles\">\n  <li *ngFor=\"let article of articles\">\n    <a [routerLink]=\"['/articles/view/', article.slug]\">{{article.title}}</a>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/articles/articles.component.scss":
/*!**************************************************!*\
  !*** ./src/app/articles/articles.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGVzL2FydGljbGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/articles/articles.component.ts":
/*!************************************************!*\
  !*** ./src/app/articles/articles.component.ts ***!
  \************************************************/
/*! exports provided: ArticlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesComponent", function() { return ArticlesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _articles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../articles.service */ "./src/app/articles.service.ts");


//Import the UserService

var ArticlesComponent = /** @class */ (function () {
    function ArticlesComponent(articlesService) {
        this.articlesService = articlesService;
    }
    ArticlesComponent.prototype.ngOnInit = function () {
        this.getArticles();
    };
    //create a local wrapper for
    ArticlesComponent.prototype.getArticles = function () {
        var _this = this;
        this.articlesService.getArticles().subscribe(function (response) {
            _this.articles = response.articles;
            //console.log(this.articles);
        });
    };
    ArticlesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-articles',
            template: __webpack_require__(/*! ./articles.component.html */ "./src/app/articles/articles.component.html"),
            styles: [__webpack_require__(/*! ./articles.component.scss */ "./src/app/articles/articles.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"]])
    ], ArticlesComponent);
    return ArticlesComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Please log in</h1>\n<form (ngSubmit)=\"onSubmit()\" #logIn=\"ngForm\">\n  <div>\n    <label for=\"username\">Username</label>\n    <input [(ngModel)]=\"username\" type=\"text\" name=\"username\" id=\"username\">\n  </div>\n  <br>\n  <div>\n    <label for=\"password\">Password</label>\n    <input [(ngModel)]=\"password\" type=\"password\" name=\"password\" id=\"password\">\n  </div>\n  <br>\n  <button type=\"submit\">Submit</button>\n</form>"

/***/ }),

/***/ "./src/app/auth/auth.component.scss":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AuthComponent = /** @class */ (function () {
    function AuthComponent(usersService, router) {
        this.usersService = usersService;
        this.router = router;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.errors = [];
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent.prototype.response = function (response) {
        if (response.success === false) {
            this.errors = response.error.errors;
            this.errorMessage = response.error.message;
        }
        if (response.success === true) {
            this.router.navigate(['/users', response.user]);
        }
    };
    AuthComponent.prototype.onSubmit = function () {
        var _this = this;
        this.user.username = this.username;
        this.user.password = this.password;
        this.usersService.logIn(this.user).subscribe(function (response) {
            _this.response(response);
            console.log(response);
            console.log(_this.user);
        });
    };
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/auth/auth.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/user-create/user-create.component.html":
/*!********************************************************!*\
  !*** ./src/app/user-create/user-create.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Create a New User</h1>\n\n<form (ngSubmit)=\"onSubmit()\" #createUser=\"ngForm\">\n  \n  <div *ngIf=\"errorMessage\">{{errorMessage}}</div>\n  \n  <div>\n    <label for=\"username\">Username</label>\n    <input [(ngModel)]=\"user.username\" type=\"text\" name=\"username\" id=\"username\">\n    <div *ngIf=\"errors.username\">{{errors.username.message}}</div>\n  </div>\n\n  <div>\n    <label for=\"email\">Email</label>\n    <input [(ngModel)]=\"user.email\" type=\"text\" name=\"email\" id=\"email\">\n    <div *ngIf=\"errors.email\">{{errors.email.message}}</div>\n  </div>\n\n  <div>\n    <label for=\"first_name\">First Name</label>\n    <input [(ngModel)]=\"user.first_name\" type=\"text\" name=\"first_name\" name=\"first_name\" id=\"first_name\">\n  </div>\n\n  <div>\n    <label for=\"last_name\">Last Name</label>\n    <input [(ngModel)]=\"user.last_name\" type=\"text\" name=\"last_name\" id=\"last_name\">\n  </div>\n  \n  <button type=\"submit\">Submit</button>\n\n</form>\n"

/***/ }),

/***/ "./src/app/user-create/user-create.component.scss":
/*!********************************************************!*\
  !*** ./src/app/user-create/user-create.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItY3JlYXRlL3VzZXItY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/user-create/user-create.component.ts":
/*!******************************************************!*\
  !*** ./src/app/user-create/user-create.component.ts ***!
  \******************************************************/
/*! exports provided: UserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function() { return UserCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");


//import { FormsModule } from '@angular/forms';



var UserCreateComponent = /** @class */ (function () {
    function UserCreateComponent(usersService, router) {
        this.usersService = usersService;
        this.router = router;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.errors = [];
    }
    UserCreateComponent.prototype.ngOnInit = function () {
    };
    UserCreateComponent.prototype.response = function (response) {
        if (response.success === false) {
            this.errors = response.error.errors;
            this.errorMessage = response.error.message;
        }
        if (response.success === true) {
            this.router.navigate(['/users/view/', response.user._id]);
        }
    };
    UserCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.usersService.createUser(this.user).subscribe(function (response) {
            _this.response(response);
        });
    };
    UserCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-create',
            template: __webpack_require__(/*! ./user-create.component.html */ "./src/app/user-create/user-create.component.html"),
            styles: [__webpack_require__(/*! ./user-create.component.scss */ "./src/app/user-create/user-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserCreateComponent);
    return UserCreateComponent;
}());



/***/ }),

/***/ "./src/app/user-edit/user-edit.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-edit/user-edit.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 *ngIf=\"user\">Edit {{user.first_name}} {{user.last_name}}</h1>\n\n<form *ngIf=\"user\" (ngSubmit)=\"onSubmit()\" #editUser=\"ngForm\">\n  \n  <div *ngIf=\"errorMessage\">{{errorMessage}}</div>\n\n  <input [(ngModel)]=\"user._id\" type=\"hidden\" name=\"_id\" id=\"_id\">\n\n  <div>\n    <label for=\"username\">Username</label>\n    <input [(ngModel)]=\"user.username\" type=\"text\" name=\"username\" id=\"username\">\n    <div *ngIf=\"errors.username\">{{errors.username.message}}</div>\n  </div>\n\n  <div>\n    <label for=\"email\">Email</label>\n    <input [(ngModel)]=\"user.email\" type=\"text\" name=\"email\" id=\"email\">\n    <div *ngIf=\"errors.email\">{{errors.email.message}}</div>\n  </div>\n\n  <div>\n    <label for=\"first_name\">First Name</label>\n    <input [(ngModel)]=\"user.first_name\" type=\"text\" name=\"first_name\" id=\"first_name\">\n    <div *ngIf=\"errors.first_name\">{{errors.first_name.message}}</div>\n  </div>\n\n  <div>\n    <label for=\"last_name\">Last Name</label>\n    <input [(ngModel)]=\"user.last_name\" type=\"text\" name=\"last_name\" id=\"last_name\">\n    <div *ngIf=\"errors.last_name\">{{errors.last_name.message}}</div>\n  </div>\n  \n  <button type=\"submit\">Submit</button>\n\n</form>"

/***/ }),

/***/ "./src/app/user-edit/user-edit.component.scss":
/*!****************************************************!*\
  !*** ./src/app/user-edit/user-edit.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZWRpdC91c2VyLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user-edit/user-edit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-edit/user-edit.component.ts ***!
  \**************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");


//import { NgForm } from '@angular/forms';



var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(usersService, route, router) {
        this.usersService = usersService;
        this.route = route;
        this.router = router;
        this.errors = [];
    }
    UserEditComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.paramMap.get('id');
        this.getUser(id);
    };
    UserEditComponent.prototype.getUser = function (id) {
        var _this = this;
        this.usersService.getUser(id).subscribe(function (response) {
            _this.user = response.user;
        });
    };
    UserEditComponent.prototype.response = function (response) {
        if (response.success === false) {
            this.errors = response.error.errors;
            this.errorMessage = response.error.message;
        }
        if (response.success === true) {
            this.router.navigate(['/users/view/', response.user._id]);
        }
    };
    UserEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.usersService.editUser(this.user).subscribe(function (response) {
            _this.response(response);
        });
    };
    UserEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-edit',
            template: __webpack_require__(/*! ./user-edit.component.html */ "./src/app/user-edit/user-edit.component.html"),
            styles: [__webpack_require__(/*! ./user-edit.component.scss */ "./src/app/user-edit/user-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/user-view/user-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-view/user-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h1>{{user.first_name}} {{user.last_name}}</h1>\n  <div><strong>Username:</strong> {{user.username}}</div>\n  <div><strong>Email:</strong> {{user.email}}</div>\n  <button [routerLink]=\"['/users/edit/', user._id]\">Edit</button>\n  <button (click)=\"deleteUser(user._id)\">Delete</button>\n</div>"

/***/ }),

/***/ "./src/app/user-view/user-view.component.scss":
/*!****************************************************!*\
  !*** ./src/app/user-view/user-view.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItdmlldy91c2VyLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user-view/user-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-view/user-view.component.ts ***!
  \**************************************************/
/*! exports provided: UserViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserViewComponent", function() { return UserViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");





var UserViewComponent = /** @class */ (function () {
    function UserViewComponent(route, usersService, router) {
        this.route = route;
        this.usersService = usersService;
        this.router = router;
    }
    UserViewComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.paramMap.get('id');
        this.getUser(id);
    };
    UserViewComponent.prototype.getUser = function (id) {
        var _this = this;
        this.usersService.getUser(id).subscribe(function (response) {
            _this.user = response.user;
        });
    };
    UserViewComponent.prototype.deleteUser = function (id) {
        var _this = this;
        if (confirm("Are you sure to delete " + this.user.username)) {
            this.usersService.deleteUser(id).subscribe(function () { _this.router.navigate(['/users']); });
        }
    };
    UserViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-view',
            template: __webpack_require__(/*! ./user-view.component.html */ "./src/app/user-view/user-view.component.html"),
            styles: [__webpack_require__(/*! ./user-view.component.scss */ "./src/app/user-view/user-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserViewComponent);
    return UserViewComponent;
}());



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/users.service.ts":
/*!**********************************!*\
  !*** ./src/app/users.service.ts ***!
  \**********************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");


//1. Import HTTP libs for API calls

// Set outbound HTTP headers to JSON
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var UsersService = /** @class */ (function () {
    //Call the HttpClinet in the Constructor
    function UsersService(http) {
        this.http = http;
        //Set up the URL
        this.url = 'http://localhost:3000/api/users';
        this.urlAuth = 'http://localhost:3000/api/auth/login';
    }
    // Set up a simple observable 
    UsersService.prototype.getUsers = function () {
        return this.http.get(this.url);
    };
    UsersService.prototype.getUser = function (id) {
        return this.http.get(this.url + "/" + id);
    };
    UsersService.prototype.createUser = function (user) {
        return this.http.post(this.url, user, httpOptions);
    };
    UsersService.prototype.editUser = function (user) {
        return this.http.put(this.url, user, httpOptions);
    };
    UsersService.prototype.deleteUser = function (id) {
        return this.http.delete(this.url + "/" + id);
    };
    UsersService.prototype.logIn = function (user) {
        return this.http.post(this.urlAuth, user, httpOptions);
    };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Users</h1>\n<ul *ngIf=\"users\">\n  <li *ngFor=\"let user of users\">\n    <a [routerLink]=\"['/users/view/', user._id]\">{{user.username}}</a>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/users/users.component.scss":
/*!********************************************!*\
  !*** ./src/app/users/users.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");


//Import the UserService

var UsersComponent = /** @class */ (function () {
    function UsersComponent(usersService) {
        this.usersService = usersService;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    //create a local wrapper for
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.usersService.getUsers().subscribe(function (response) {
            _this.users = response.users;
            //console.log(this.users);
        });
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/users/users.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]])
    ], UsersComponent);
    return UsersComponent;
}());



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/ng-cms/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map