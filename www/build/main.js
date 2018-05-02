webpackJsonp([2],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WorkoutsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the WorkoutsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WorkoutsPage = /** @class */ (function () {
    /*
    * Same premise as the book cart we created for class, save to local storage
    * create a custom workout for the user
    * or track a current workout
    * allows for leaving the page and returning to the saved workout
    */
    function WorkoutsPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
        var storageData = window.localStorage.getItem("exercises");
        if (storageData != null) {
            this.exercises = JSON.parse(storageData);
        }
        else {
            this.exercises = [
                { title: 'Back Squat', qty: 5, set: 1, weight: 315 },
                { title: 'Competition Bench', qty: 5, set: 1, weight: 250 },
                { title: 'RDL', qty: 8, set: 1, weight: 225 }
            ];
        }
    }
    WorkoutsPage.prototype.ngOnInit = function () {
    };
    WorkoutsPage.prototype.removeExercise = function (index) {
        this.exercises.splice(index, 1);
    };
    WorkoutsPage.prototype.addExercise = function () {
        var newexercise = { title: 'New Exercise', qty: 1, set: 1, weight: 100 };
        this.exercises.push(newexercise);
    };
    WorkoutsPage.prototype.saveWorkout = function () {
        window.localStorage.setItem("exercises", JSON.stringify(this.exercises));
    };
    WorkoutsPage.prototype.updateTotal = function () {
        this.total = 0;
        for (var i = 0; i < this.exercises.length; i++) {
            this.total += this.exercises[i].qty * this.exercises[i].weight;
        }
        return this.total;
    };
    WorkoutsPage.prototype.openModal = function (characterNum) {
        var modal = this.modalCtrl.create(ModalContentPage, characterNum);
        modal.present();
    };
    WorkoutsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-workouts',template:/*ion-inline-start:"C:\Users\Magnirokk\Desktop\WorkoutApp\src\pages\workouts\workouts.html"*/'<ion-header>\n    <ion-navbar color="custom-color">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Workouts</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!-- Modal links for weekly workouts -->\n<ion-content class="bg-style" padding>\n    <ion-list>\n        <ion-list-header class="header">\n          <h1>Workouts of the Week</h1>\n        </ion-list-header>\n        <a ion-item (click)="openModal({charNum: 0})">\n          Powerlifting Basics\n          <br>\n          <img src="https://t4.ftcdn.net/jpg/01/34/19/03/240_F_134190301_eLee8aX5Z7DmihBPJCsa3yNCKR3B4j9Y.jpg">\n        </a>\n        <a ion-item (click)="openModal({charNum: 1})">\n          Muscular Endurance\n          <br>\n          <img src="https://t4.ftcdn.net/jpg/01/08/26/51/240_F_108265119_f8ex46LwUwqnqbuPAlAeepXOUlF7Z5t5.jpg">\n        </a>\n        <a ion-item (click)="openModal({charNum: 2})">\n            Circuit Crush\n            <br>\n          <img src="https://t4.ftcdn.net/jpg/00/98/97/89/240_F_98978930_Qq4AZDC7l7FjNCVvkmIRIWESYnYb6poM.jpg">\n          \n        </a>\n      </ion-list>\n\n      <div class="container-fluid">\n          <div class="row">\n            \n            <div class="col-md-10">\n              <!--Custom Workout Table Below-->\n        \n        \n              <table>\n              <caption><h4>TRACK CUSTOM WORKOUT</h4></caption>\n              <thead>\n                <tr>\n                    <th>Exercise</th>\n                    <th>Reps</th>\n                    <th>Sets</th>\n                    <th>Weight</th>\n                    <th>Exercise Tonnage</th>\n                    <th>Total Tonnage {{updateTotal()}} lbs </th>\n                </tr>\n              </thead>\n              <tbody >\n                <tr *ngFor="let exercise of exercises; let i = index">\n                    <td>\n                        <input [(ngModel)]="exercise.title" size="20" class=\'rounded\'>\n                    </td>\n                    <td>\n                        <input [(ngModel)]="exercise.qty" size="2"  class=\'rounded\' >\n                    </td>\n                    <td>\n                        <input [(ngModel)]="exercise.set" size="6" class=\'rounded\' >\n                    </td>\n                    <td>\n                        <input [(ngModel)]="exercise.weight" size="6" class=\'rounded\' >\n                    </td>\n                    <td>{{exercise.weight * exercise.set * exercise.qty }} lbs </td>\n                    <td>\n                        <button  ion-button icon-end (click)="removeExercise(i)">\n                            Remove\n                            <ion-icon name="unlock"></ion-icon>\n                        </button>\n                    </td>\n                </tr>\n                <tr><th colspan="3"><button (click)="addExercise()" ion-button color="secondary">\n                            New\n                        </button></th>\n                        <th colspan="3"><button (click)="saveWorkout()" ion-button color="secondary">\n                            Save\n                        </button></th>\n                        \n                        </tr>\n                \n              </tbody>\n            </table>\n        \n        \n            </div>\n          </div>\n        </div>\n  </ion-content>\n'/*ion-inline-end:"C:\Users\Magnirokk\Desktop\WorkoutApp\src\pages\workouts\workouts.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]) === "function" && _a || Object])
    ], WorkoutsPage);
    return WorkoutsPage;
    var _a;
}());

/* template for modal popup weekly workouts */
var ModalContentPage = /** @class */ (function () {
    // current working set of weekly workouts for use in modal template 
    function ModalContentPage(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        var exercise = [
            {
                name: 'Powerlifting Basics',
                quote: 'Lower reps, Heavier weight, longer rest times',
                image: 'assets/img/avatar-gollum.jpg',
                items: [
                    { title: 'Back Squat', note: '5x5@8RPE' },
                    { title: 'Competition Bench', note: '5x5@7RPE' },
                    { title: 'High Bar Squat', note: '4x8@8RPE' }
                ]
            },
            {
                name: 'Muscular Endurance',
                quote: 'Higher reps, lower weight, shorter rest times',
                image: 'assets/img/avatar-frodo.jpg',
                items: [
                    { title: 'Lunges', note: '4x10' },
                    { title: 'Touch n Go Bench', note: '3x12' },
                    { title: 'Lateral Raises', note: '4x12' },
                    { title: 'Overhead Press', note: '3x7' }
                ]
            },
            {
                name: 'Circuit Crush',
                quote: '3 rounds, 12 reps per exercise, as quickly as possible with good form',
                image: 'assets/img/avatar-samwise.jpg',
                items: [
                    { title: 'Push-ups', note: '' },
                    { title: 'Box Jumps', note: '' },
                    { title: 'Side Lunge', note: '' },
                    { title: 'Cable Row', note: '' }
                ]
            }
        ];
        this.exercise = exercise[this.params.get('charNum')];
    }
    ModalContentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalContentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Workout Description\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)=\"dismiss()\">\n        <span ion-text color=\"primary\" showWhen=\"ios\">Cancel</span>\n        <ion-icon name=\"md-close\" showWhen=\"android, windows\"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n      <ion-item>\n        <ion-avatar item-start>\n        </ion-avatar>\n        <h2>{{exercise.name}}</h2>\n        <p>{{exercise.quote}}</p>\n      </ion-item>\n\n      <ion-item *ngFor=\"let item of exercise['items']\">\n      {{item.title}}\n        <ion-note item-end>\n          {{item.note}} \n        </ion-note>\n        \n      </ion-item>\n      <ion-item>\n      <ion-label floating>Notes:</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-footer>\n  <ion-toolbar>\n<ion-item>\n      <ion-label>Finished</ion-label>\n      <ion-toggle color=\"secondary\"></ion-toggle>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>\n</ion-content>\n"
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]) === "function" && _c || Object])
    ], ModalContentPage);
    return ModalContentPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=workouts.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ContactFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactFormPage = /** @class */ (function () {
    function ContactFormPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactFormPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactFormPage');
    };
    ContactFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact-form',template:/*ion-inline-start:"C:\Users\Magnirokk\Desktop\WorkoutApp\src\pages\contact-form\contact-form.html"*/'<!--\n  Generated template for the ContactFormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="custom-color">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Home</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content class="bg-style" padding>\n\n  <form (ngSubmit)="contactForm()">\n  <ion-card>\n    <ion-list>\n\n        <ion-item>\n          <ion-input type="text" placeholder="Coach Name"></ion-input>\n        </ion-item>\n      \n        <ion-item>\n          <ion-input type="email" placeholder="Email"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-input type="text" placeholder="Question"></ion-input>\n          </ion-item>\n\n      </ion-list>\n\n      <button ion-button type="submit" block> Submit </button>\n\n    </ion-card>\n\n  </form>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Magnirokk\Desktop\WorkoutApp\src\pages\contact-form\contact-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ContactFormPage);
    return ContactFormPage;
}());

//# sourceMappingURL=contact-form.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalTrainersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_contact_form_contact_form__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PersonalTrainersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PersonalTrainersPage = /** @class */ (function () {
    function PersonalTrainersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PersonalTrainersPage.prototype.contact = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_contact_form_contact_form__["a" /* ContactFormPage */]);
    };
    PersonalTrainersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonalTrainersPage');
    };
    PersonalTrainersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-personal-trainers',template:/*ion-inline-start:"C:\Users\Magnirokk\Desktop\WorkoutApp\src\pages\personal-trainers\personal-trainers.html"*/'<ion-header>\n  <ion-navbar color="custom-color">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Personal Trainers</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-style" padding>\n  <h3>Coaches</h3>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n  <ion-card>\n\n    <img src="https://www.steadymd.com/wp-content/uploads/2017/04/jordan-competing.jpg">\n    <ion-fab right top>\n      <button ion-fab>\n        <ion-icon name="pin"></ion-icon>\n      </button>\n    </ion-fab>\n  \n    <ion-item>\n      <h2>Jordan Feiganbaum</h2>\n    </ion-item>\n  \n    <ion-item>\n      <span item-left>Specializes in Strength</span>\n      <button ion-button (click)="contact()" icon-left clear item-end>\n        <ion-icon name="navigate"></ion-icon>\n        Contact\n      </button>\n    </ion-item>\n  \n  </ion-card>\n  </ion-col>\n  <ion-col>\n\n  <ion-card>\n\n    <img src="http://www.underdogstrength.com/wp-content/uploads/2017/06/Alan-Thrall-Interview-Strongman-Powerlifting-Weightlifting2.jpg">\n    <ion-fab right top>\n      <button ion-fab>\n        <ion-icon name="pin"></ion-icon>\n      </button>\n    </ion-fab>\n  \n    <ion-item>\n      <h2>Alan Thrall</h2>\n    </ion-item>\n  \n    <ion-item>\n      <span item-left>Specializes in Strongman</span>\n      <button ion-button (click)="contact()" icon-left clear item-end>\n          <ion-icon name="navigate"></ion-icon>\n          Contact\n        </button>\n    </ion-item>\n  \n  </ion-card>\n</ion-col>\n<ion-col>\n  <ion-card class="ptCard">\n\n    <img src="https://pbs.twimg.com/profile_images/646464387230756864/SfjyfyUt_400x400.jpg">\n    <ion-fab right top>\n      <button ion-fab>\n        <ion-icon name="pin"></ion-icon>\n      </button>\n    </ion-fab>\n  \n    <ion-item>\n\n      <h2>Austin Baraki</h2>\n    </ion-item>\n  \n    <ion-item>\n      <span item-left>Specializes in Strength</span>\n      <button ion-button (click)="contact()" icon-left clear item-end>\n          <ion-icon name="navigate"></ion-icon>\n          Contact\n        </button>\n    </ion-item>\n  \n  </ion-card>\n</ion-col>\n  \n</ion-row>\n\n</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Magnirokk\Desktop\WorkoutApp\src\pages\personal-trainers\personal-trainers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PersonalTrainersPage);
    return PersonalTrainersPage;
}());

//# sourceMappingURL=personal-trainers.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/contact-form/contact-form.module": [
		477,
		1
	],
	"../pages/personal-trainers/personal-trainers.module": [
		478,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    /* Creation of charts below
    Wanted to get user input to directly change the charts
    Currently the data is hardcoded
    */
    HomePage.prototype.ionViewDidLoad = function () {
        this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
                datasets: [{
                        label: 'Bodyfat Percentage',
                        data: [21, 20, 20.5, 20.5, 19.75, 19.5],
                        backgroundColor: [
                            'rgb(212, 167, 106)',
                            'rgb(212, 167, 106)',
                            'rgb(212, 167, 106)',
                            'rgb(212, 167, 106)',
                            'rgb(212, 167, 106)',
                            'rgb(212, 167, 106)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
        this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ["Squat", "Bench", "Deadlift"],
                datasets: [{
                        label: 'Total in pounds ',
                        data: [430, 275, 503],
                        backgroundColor: [
                            'rgb(170, 121, 57)',
                            'rgb(41, 79, 109)',
                            'rgb(52, 52, 119)'
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ]
                    }]
            }
        });
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                datasets: [
                    {
                        label: "Weekly caloric intake",
                        fill: true,
                        lineTension: 0.1,
                        backgroundColor: "rgb(212, 167, 106)",
                        borderColor: "rgb(170, 121, 57)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [2185, 2254, 2150, 1975, 2543, 2132, 1954],
                        spanGaps: false,
                    }
                ]
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('barCanvas'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('doughnutCanvas'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "doughnutCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('lineCanvas'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "lineCanvas", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Magnirokk\Desktop\WorkoutApp\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar color="custom-color">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home Page - User Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n        \n\n\n<ion-content class="bg-style" width="50%"padding>\n\n    <ion-card>\n        <img src="https://www.elitefts.com/wp/wp-content/uploads/2015/05/elitefts-deadlift.jpg"/>\n        <ion-card-content>\n          <ion-card-title>\n            ROOTS\n            </ion-card-title>\n          <p>\n            Build your base. Find your roots.\n          </p>\n        </ion-card-content>\n        <!-- thoughts of adding the ability to hook to your spotify, share your current goals, login/logout -->\n        <ion-row no-padding>\n            <ion-col>\n              <button ion-button clear small color="danger" icon-start>\n                <ion-icon name=\'star\'></ion-icon>\n                Username: Msarb\n              </button>\n            </ion-col>\n            <ion-col text-center>\n              <button ion-button clear small color="danger" icon-start>\n                <ion-icon name=\'musical-notes\'></ion-icon>\n                Spotify\n              </button>\n            </ion-col>\n            <ion-col text-right>\n              <button ion-button clear small color="danger" icon-start>\n                <ion-icon name=\'share-alt\'></ion-icon>\n                Share\n              </button>\n            </ion-col>\n          </ion-row>\n      </ion-card>\n\n\n  <ion-card width="50%">\n      <ion-card-header>\n        Your Bodyfat Percentage\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #barCanvas></canvas>\n      </ion-card-content>\n    </ion-card>\n \n    <ion-card>\n      <ion-card-header>\n        Your total of 3 major lifts\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #doughnutCanvas></canvas>\n      </ion-card-content>\n    </ion-card>\n \n    <ion-card>\n      <ion-card-header>\n        Calorie Intake\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #lineCanvas></canvas>\n      </ion-card-content>\n    </ion-card>\n \n\n\n  <p>\n    Back to your roots.\n  </p>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Magnirokk\Desktop\WorkoutApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object])
    ], HomePage);
    return HomePage;
    var _a;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        // array for youtube video list
        this.videos = [
            {
                title: 'Back Squat',
                video: 'https://www.youtube.com/embed/e5FbyMzSTAY'
            },
            {
                title: 'Deadlift',
                video: 'https://www.youtube.com/embed/RpBHbCFcUe4'
            },
            {
                title: 'Bench',
                video: 'https://www.youtube.com/embed/N4Zy9X4l09M'
            },
        ];
    }
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Magnirokk\Desktop\WorkoutApp\src\pages\list\list.html"*/'<ion-header>\n    <ion-navbar color="custom-color">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Exercise Overview</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="bg-style" padding>\n    <ion-card *ngFor="let video of videos"> <!-- loop through array and display -->\n      <ion-card-header>\n          {{video.title}}\n      </ion-card-header>\n      <ion-card-content>\n          <iframe width="100%" height="600" [src]="video.video | youtube" frameborder="0"></iframe>\n      </ion-card-content>\n    </ion-card>\n  </ion-content>\n'/*ion-inline-end:"C:\Users\Magnirokk\Desktop\WorkoutApp\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _b || Object])
    ], ListPage);
    return ListPage;
    var _a, _b;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GymFinderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(340);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the GymFinderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GymFinderPage = /** @class */ (function () {
    function GymFinderPage(navCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.isM = 500;
        this.isType = "";
    }
    GymFinderPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    GymFinderPage.prototype.loadMap = function () {
        var _this = this;
        /* get current location and display on map with latLng */
        this.geolocation.getCurrentPosition().then(function (position) {
            _this.latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            _this.mapOptions = {
                center: _this.latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, _this.mapOptions);
        }, function (err) {
            alert('err ' + err);
        });
    };
    /* Find Nearby Place */
    GymFinderPage.prototype.nearbyPlace = function () {
        var _this = this;
        this.loadMap();
        this.markers = [];
        var service = new google.maps.places.PlacesService(this.map);
        service.nearbySearch({
            location: this.latLng,
            radius: this.isM,
            types: [this.isType]
        }, function (results, status) {
            _this.callback(results, status);
        });
    };
    GymFinderPage.prototype.callback = function (results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                this.createMarker(results[i]);
            }
        }
    };
    /* create marker for place being searched */
    GymFinderPage.prototype.createMarker = function (place) {
        var _this = this;
        var placeLoc = place;
        console.log('placeLoc', placeLoc);
        this.markers = new google.maps.Marker({
            map: this.map,
            position: place.geometry.location
        });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(this.markers, 'click', function () {
            _this.ngZone.run(function () {
                infowindow.setContent(place.name);
                infowindow.open(_this.map, _this.markers);
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], GymFinderPage.prototype, "mapElement", void 0);
    GymFinderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-gym-finder',template:/*ion-inline-start:"C:\Users\Magnirokk\Desktop\WorkoutApp\src\pages\gym-finder\gym-finder.html"*/'<ion-header>\n    <ion-navbar color="custom-color">\n  	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Location</ion-title>\n    \n  </ion-navbar>\n</ion-header>\n<!-- Option for gym and fitness center search -->\n<ion-content class="bg-style" padding>\n<ion-item>\n  <ion-label>Select Place</ion-label>\n    <ion-select [(ngModel)]="isType" (ionChange)="nearbyPlace()">\n    <ion-option value="">Select</ion-option>\n      <ion-option value="fitness">Fitness Center</ion-option>\n      <ion-option value="gym">Gym</ion-option>\n\n    </ion-select>\n  </ion-item>\n  <!-- Select the distance from your geolocation point-->\n  <ion-item>\n  <ion-label>Select Distance</ion-label>\n    <ion-select [(ngModel)]="isM" (ionChange)="nearbyPlace()">\n    <ion-option value="500">Select</ion-option>\n      <ion-option value="2000">2m</ion-option>\n      <ion-option value="4000">4m</ion-option>\n      <ion-option value="6000">6m</ion-option>\n      <ion-option value="8000">8m</ion-option>\n    </ion-select>\n  </ion-item>\n \n    <div #map id="map"></div>\n	\n</ion-content>\n'/*ion-inline-end:"C:\Users\Magnirokk\Desktop\WorkoutApp\src\pages\gym-finder\gym-finder.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _c || Object])
    ], GymFinderPage);
    return GymFinderPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=gym-finder.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(368);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_gym_finder_gym_finder__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_workouts_workouts__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_personal_trainers_personal_trainers__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_network__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_highcharts__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular2_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_Highcharts__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_Highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_Highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_contact_form_contact_form__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_youtube_youtube__ = __webpack_require__(476);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_gym_finder_gym_finder__["a" /* GymFinderPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_workouts_workouts__["b" /* WorkoutsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_personal_trainers_personal_trainers__["a" /* PersonalTrainersPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_workouts_workouts__["a" /* ModalContentPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_contact_form_contact_form__["a" /* ContactFormPage */],
                __WEBPACK_IMPORTED_MODULE_17__pipes_youtube_youtube__["a" /* YoutubePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14_angular2_highcharts__["ChartModule"].forRoot(__WEBPACK_IMPORTED_MODULE_15_Highcharts__),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/contact-form/contact-form.module#ContactFormPageModule', name: 'ContactFormPage', segment: 'contact-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal-trainers/personal-trainers.module#PersonalTrainersPageModule', name: 'PersonalTrainersPage', segment: 'personal-trainers', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_gym_finder_gym_finder__["a" /* GymFinderPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_workouts_workouts__["b" /* WorkoutsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_personal_trainers_personal_trainers__["a" /* PersonalTrainersPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_workouts_workouts__["a" /* ModalContentPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_contact_form_contact_form__["a" /* ContactFormPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_gym_finder_gym_finder__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_workouts_workouts__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_personal_trainers_personal_trainers__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Video Examples', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Weekly Workouts', component: __WEBPACK_IMPORTED_MODULE_7__pages_workouts_workouts__["b" /* WorkoutsPage */] },
            { title: 'Personal Trainers', component: __WEBPACK_IMPORTED_MODULE_8__pages_personal_trainers_personal_trainers__["a" /* PersonalTrainersPage */] },
            { title: 'Gym Finder', component: __WEBPACK_IMPORTED_MODULE_6__pages_gym_finder_gym_finder__["a" /* GymFinderPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Magnirokk\Desktop\WorkoutApp\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Magnirokk\Desktop\WorkoutApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 213,
	"./af.js": 213,
	"./ar": 214,
	"./ar-dz": 215,
	"./ar-dz.js": 215,
	"./ar-kw": 216,
	"./ar-kw.js": 216,
	"./ar-ly": 217,
	"./ar-ly.js": 217,
	"./ar-ma": 218,
	"./ar-ma.js": 218,
	"./ar-sa": 219,
	"./ar-sa.js": 219,
	"./ar-tn": 220,
	"./ar-tn.js": 220,
	"./ar.js": 214,
	"./az": 221,
	"./az.js": 221,
	"./be": 222,
	"./be.js": 222,
	"./bg": 223,
	"./bg.js": 223,
	"./bm": 224,
	"./bm.js": 224,
	"./bn": 225,
	"./bn.js": 225,
	"./bo": 226,
	"./bo.js": 226,
	"./br": 227,
	"./br.js": 227,
	"./bs": 228,
	"./bs.js": 228,
	"./ca": 229,
	"./ca.js": 229,
	"./cs": 230,
	"./cs.js": 230,
	"./cv": 231,
	"./cv.js": 231,
	"./cy": 232,
	"./cy.js": 232,
	"./da": 233,
	"./da.js": 233,
	"./de": 234,
	"./de-at": 235,
	"./de-at.js": 235,
	"./de-ch": 236,
	"./de-ch.js": 236,
	"./de.js": 234,
	"./dv": 237,
	"./dv.js": 237,
	"./el": 238,
	"./el.js": 238,
	"./en-au": 239,
	"./en-au.js": 239,
	"./en-ca": 240,
	"./en-ca.js": 240,
	"./en-gb": 241,
	"./en-gb.js": 241,
	"./en-ie": 242,
	"./en-ie.js": 242,
	"./en-il": 243,
	"./en-il.js": 243,
	"./en-nz": 244,
	"./en-nz.js": 244,
	"./eo": 245,
	"./eo.js": 245,
	"./es": 246,
	"./es-do": 247,
	"./es-do.js": 247,
	"./es-us": 248,
	"./es-us.js": 248,
	"./es.js": 246,
	"./et": 249,
	"./et.js": 249,
	"./eu": 250,
	"./eu.js": 250,
	"./fa": 251,
	"./fa.js": 251,
	"./fi": 252,
	"./fi.js": 252,
	"./fo": 253,
	"./fo.js": 253,
	"./fr": 254,
	"./fr-ca": 255,
	"./fr-ca.js": 255,
	"./fr-ch": 256,
	"./fr-ch.js": 256,
	"./fr.js": 254,
	"./fy": 257,
	"./fy.js": 257,
	"./gd": 258,
	"./gd.js": 258,
	"./gl": 259,
	"./gl.js": 259,
	"./gom-latn": 260,
	"./gom-latn.js": 260,
	"./gu": 261,
	"./gu.js": 261,
	"./he": 262,
	"./he.js": 262,
	"./hi": 263,
	"./hi.js": 263,
	"./hr": 264,
	"./hr.js": 264,
	"./hu": 265,
	"./hu.js": 265,
	"./hy-am": 266,
	"./hy-am.js": 266,
	"./id": 267,
	"./id.js": 267,
	"./is": 268,
	"./is.js": 268,
	"./it": 269,
	"./it.js": 269,
	"./ja": 270,
	"./ja.js": 270,
	"./jv": 271,
	"./jv.js": 271,
	"./ka": 272,
	"./ka.js": 272,
	"./kk": 273,
	"./kk.js": 273,
	"./km": 274,
	"./km.js": 274,
	"./kn": 275,
	"./kn.js": 275,
	"./ko": 276,
	"./ko.js": 276,
	"./ky": 277,
	"./ky.js": 277,
	"./lb": 278,
	"./lb.js": 278,
	"./lo": 279,
	"./lo.js": 279,
	"./lt": 280,
	"./lt.js": 280,
	"./lv": 281,
	"./lv.js": 281,
	"./me": 282,
	"./me.js": 282,
	"./mi": 283,
	"./mi.js": 283,
	"./mk": 284,
	"./mk.js": 284,
	"./ml": 285,
	"./ml.js": 285,
	"./mn": 286,
	"./mn.js": 286,
	"./mr": 287,
	"./mr.js": 287,
	"./ms": 288,
	"./ms-my": 289,
	"./ms-my.js": 289,
	"./ms.js": 288,
	"./mt": 290,
	"./mt.js": 290,
	"./my": 291,
	"./my.js": 291,
	"./nb": 292,
	"./nb.js": 292,
	"./ne": 293,
	"./ne.js": 293,
	"./nl": 294,
	"./nl-be": 295,
	"./nl-be.js": 295,
	"./nl.js": 294,
	"./nn": 296,
	"./nn.js": 296,
	"./pa-in": 297,
	"./pa-in.js": 297,
	"./pl": 298,
	"./pl.js": 298,
	"./pt": 299,
	"./pt-br": 300,
	"./pt-br.js": 300,
	"./pt.js": 299,
	"./ro": 301,
	"./ro.js": 301,
	"./ru": 302,
	"./ru.js": 302,
	"./sd": 303,
	"./sd.js": 303,
	"./se": 304,
	"./se.js": 304,
	"./si": 305,
	"./si.js": 305,
	"./sk": 306,
	"./sk.js": 306,
	"./sl": 307,
	"./sl.js": 307,
	"./sq": 308,
	"./sq.js": 308,
	"./sr": 309,
	"./sr-cyrl": 310,
	"./sr-cyrl.js": 310,
	"./sr.js": 309,
	"./ss": 311,
	"./ss.js": 311,
	"./sv": 312,
	"./sv.js": 312,
	"./sw": 313,
	"./sw.js": 313,
	"./ta": 314,
	"./ta.js": 314,
	"./te": 315,
	"./te.js": 315,
	"./tet": 316,
	"./tet.js": 316,
	"./tg": 317,
	"./tg.js": 317,
	"./th": 318,
	"./th.js": 318,
	"./tl-ph": 319,
	"./tl-ph.js": 319,
	"./tlh": 320,
	"./tlh.js": 320,
	"./tr": 321,
	"./tr.js": 321,
	"./tzl": 322,
	"./tzl.js": 322,
	"./tzm": 323,
	"./tzm-latn": 324,
	"./tzm-latn.js": 324,
	"./tzm.js": 323,
	"./ug-cn": 325,
	"./ug-cn.js": 325,
	"./uk": 326,
	"./uk.js": 326,
	"./ur": 327,
	"./ur.js": 327,
	"./uz": 328,
	"./uz-latn": 329,
	"./uz-latn.js": 329,
	"./uz.js": 328,
	"./vi": 330,
	"./vi.js": 330,
	"./x-pseudo": 331,
	"./x-pseudo.js": 331,
	"./yo": 332,
	"./yo.js": 332,
	"./zh-cn": 333,
	"./zh-cn.js": 333,
	"./zh-hk": 334,
	"./zh-hk.js": 334,
	"./zh-tw": 335,
	"./zh-tw.js": 335
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 447;

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the YoutubePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var YoutubePipe = /** @class */ (function () {
    function YoutubePipe(dom) {
        this.dom = dom;
    }
    // sanitize the youtube link for embedding purposes
    YoutubePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return this.dom.bypassSecurityTrustResourceUrl(value);
    };
    YoutubePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'youtube',
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
    ], YoutubePipe);
    return YoutubePipe;
    var _a;
}());

//# sourceMappingURL=youtube.js.map

/***/ })

},[346]);
//# sourceMappingURL=main.js.map