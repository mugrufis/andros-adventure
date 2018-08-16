"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var BookingComponent = (function () {
    function BookingComponent(el, differs) {
        this.el = el;
        this.selectHelper = true;
        this.selectable = true;
        this.aspectRatio = 1.35;
        this.defaultView = 'month';
        this.allDaySlot = true;
        this.allDayText = 'all-day';
        this.slotDuration = '00:30:00';
        this.scrollTime = '06:00:00';
        this.minTime = '00:00:00';
        this.maxTime = '24:00:00';
        this.slotLabelFormat = "HH:mm";
        this.slotEventOverlap = true;
        this.dragRevertDuration = 500;
        this.dragOpacity = .75;
        this.dragScroll = true;
        this.timezone = false;
        this.timeFormat = 'H:mm';
        this.onDayClick = new core_1.EventEmitter();
        this.onDrop = new core_1.EventEmitter();
        this.onEventClick = new core_1.EventEmitter();
        this.onEventMouseover = new core_1.EventEmitter();
        this.onEventMouseout = new core_1.EventEmitter();
        this.onEventDragStart = new core_1.EventEmitter();
        this.onEventDragStop = new core_1.EventEmitter();
        this.onEventDrop = new core_1.EventEmitter();
        this.onEventResizeStart = new core_1.EventEmitter();
        this.onEventResizeStop = new core_1.EventEmitter();
        this.onEventResize = new core_1.EventEmitter();
        this.onViewRender = new core_1.EventEmitter();
        this.onViewDestroy = new core_1.EventEmitter();
        this.onNavLinkDayClick = new core_1.EventEmitter();
        this.onNavLinkWeekClick = new core_1.EventEmitter();
        this.onSelect = new core_1.EventEmitter();
        this.onUnselect = new core_1.EventEmitter();
        this.isNewItem = false;
        this.bidForm = {};
        this.editedAppointmentIndex = -1;
        this._locale = '';
        this.valueChanges = [];
        this.elButtonText = {
            today: 'Σήμερα',
            month: 'Μήνας',
            agendaWeek: 'Βδομάδα',
            agendaDay: 'Μέρα'
        };
        this.enButtonText = {
            today: 'Today',
            month: 'Month',
            agendaWeek: 'Week',
            agendaDay: 'Day'
        };
        this.differ = differs.find([]).create(null);
        this.initialized = false;
    }
    Object.defineProperty(BookingComponent.prototype, "locale", {
        get: function () {
            return this._locale;
        },
        set: function (newValue) {
            this._locale = newValue;
            if (newValue === 'el') {
                this.config.
                ;
            }
            'el';
            options['buttonText'] = this.elButtonText;
            break;
            'en';
            options['buttonText'] = this.enButtonText;
            break;
            if (Object.keys(options).length) {
                this.schedule.fullCalendar('option', options);
            }
        },
        enumerable: true,
        configurable: true
    });
    BookingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.config = {
            theme: true,
            themeSystem: 'bootstrap4',
            header: this.header,
            isRTL: this.rtl,
            weekends: this.weekends,
            hiddenDays: this.hiddenDays,
            fixedWeekCount: this.fixedWeekCount,
            weekNumbers: this.weekNumbers,
            businessHours: this.businessHours,
            height: this.height,
            contentHeight: this.contentHeight,
            aspectRatio: this.aspectRatio,
            eventLimit: this.eventLimit,
            defaultDate: this.defaultDate,
            locale: this.locale,
            timezone: this.timezone,
            timeFormat: this.timeFormat,
            editable: this.editable,
            droppable: this.droppable,
            eventStartEditable: this.eventStartEditable,
            eventDurationEditable: this.eventDurationEditable,
            defaultView: this.defaultView,
            allDaySlot: this.allDaySlot,
            allDayText: this.allDayText,
            slotDuration: this.slotDuration,
            slotLabelInterval: this.slotLabelInterval,
            slotLabelFormat: this.slotLabelFormat,
            snapDuration: this.snapDuration,
            scrollTime: this.scrollTime,
            minTime: this.minTime,
            maxTime: this.maxTime,
            slotEventOverlap: this.slotEventOverlap,
            nowIndicator: this.nowIndicator,
            dragRevertDuration: this.dragRevertDuration,
            dragOpacity: this.dragOpacity,
            dragScroll: this.dragScroll,
            eventOverlap: this.eventOverlap,
            eventConstraint: this.eventConstraint,
            eventRender: this.eventRender,
            dayRender: this.dayRender,
            navLinks: this.navLinks,
            buttonText: this.elButtonText,
            selectable: this.selectable,
            selectHelper: this.selectHelper,
            firstDay: this.firstDay,
            views: this.views,
            dayClick: function (date, jsEvent, view) {
                console.log('dayClick', date);
                _this.onDayClick.emit({
                    'date': date,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            select: function (start, end, jsEvent, view) {
                console.log('select');
                _this.onSelect.emit({
                    'start': start,
                    'end': end,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            unselect: function (jsEvent, view) {
                console.log('unselect');
                _this.onUnselect.emit({
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            drop: function (date, jsEvent, ui, resourceId) {
                console.log('drop');
                _this.onDrop.emit({
                    'date': date,
                    'jsEvent': jsEvent,
                    'ui': ui,
                    'resourceId': resourceId
                });
            },
            eventClick: function (calEvent, jsEvent, view) {
                _this.onEventClick.emit({
                    'calEvent': calEvent,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventMouseover: function (calEvent, jsEvent, view) {
                _this.onEventMouseover.emit({
                    'calEvent': calEvent,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventMouseout: function (calEvent, jsEvent, view) {
                _this.onEventMouseout.emit({
                    'calEvent': calEvent,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventDragStart: function (event, jsEvent, ui, view) {
                _this.onEventDragStart.emit({
                    'event': event,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventDragStop: function (event, jsEvent, ui, view) {
                _this.onEventDragStop.emit({
                    'event': event,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventDrop: function (event, delta, revertFunc, jsEvent, ui, view) {
                _this.onEventDrop.emit({
                    'event': event,
                    'delta': delta,
                    'revertFunc': revertFunc,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventResizeStart: function (event, jsEvent, ui, view) {
                _this.onEventResizeStart.emit({
                    'event': event,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventResizeStop: function (event, jsEvent, ui, view) {
                _this.onEventResizeStop.emit({
                    'event': event,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventResize: function (event, delta, revertFunc, jsEvent, ui, view) {
                _this.onEventResize.emit({
                    'event': event,
                    'delta': delta,
                    'revertFunc': revertFunc,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            viewRender: function (view, element) {
                _this.onViewRender.emit({
                    'view': view,
                    'element': element
                });
            },
            viewDestroy: function (view, element) {
                _this.onViewDestroy.emit({
                    'view': view,
                    'element': element
                });
            },
            navLinkDayClick: function (weekStart, jsEvent) {
                _this.onNavLinkDayClick.emit({
                    'weekStart': weekStart,
                    'event': jsEvent
                });
            },
            navLinkWeekClick: function (weekStart, jsEvent) {
                _this.onNavLinkWeekClick.emit({
                    'weekStart': weekStart,
                    'event': jsEvent
                });
            }
        };
        if (this.options) {
            for (var prop in this.options) {
                this.config[prop] = this.options[prop];
            }
        }
    };
    BookingComponent.prototype.ngAfterViewChecked = function () {
        if (!this.initialized && this.el.nativeElement.offsetParent) {
            this.initialize();
        }
    };
    BookingComponent.prototype.ngOnChanges = function (changes) {
        if (this.schedule) {
            var options = {};
            for (var change in changes) {
                if (change !== 'events') {
                    options[change] = changes[change].currentValue;
                    if (change === 'locale') {
                        switch (changes[change].currentValue) {
                            case 'el':
                                options['buttonText'] = this.elButtonText;
                                break;
                            case 'en':
                                options['buttonText'] = this.enButtonText;
                                break;
                            default:
                                options['buttonText'] = this.elButtonText;
                                console.log('Default current language not supported. Defaults to English');
                                break;
                        }
                    }
                }
            }
            if (Object.keys(options).length) {
                this.schedule.fullCalendar('option', options);
            }
        }
    };
    BookingComponent.prototype.initialize = function () {
        this.schedule = jQuery(this.el.nativeElement.children[0]);
        this.schedule.fullCalendar(this.config);
        if (this.events) {
            this.schedule.fullCalendar('addEventSource', this.events);
        }
        this.initialized = true;
    };
    BookingComponent.prototype.ngDoCheck = function () {
        var changes = this.differ.diff(this.events);
        if (this.schedule && changes) {
            this.schedule.fullCalendar('removeEventSources');
            if (this.events) {
                this.schedule.fullCalendar('addEventSource', this.events);
            }
        }
    };
    BookingComponent.prototype.ngOnDestroy = function () {
        jQuery(this.el.nativeElement.children[0]).fullCalendar('destroy');
        this.initialized = false;
        this.schedule = null;
    };
    BookingComponent.prototype.gotoDate = function (date) {
        this.schedule.fullCalendar('gotoDate', date);
    };
    BookingComponent.prototype.prev = function () {
        this.schedule.fullCalendar('prev');
    };
    BookingComponent.prototype.next = function () {
        this.schedule.fullCalendar('next');
    };
    BookingComponent.prototype.prevYear = function () {
        this.schedule.fullCalendar('prevYear');
    };
    BookingComponent.prototype.nextYear = function () {
        this.schedule.fullCalendar('nextYear');
    };
    BookingComponent.prototype.today = function () {
        this.schedule.fullCalendar('today');
    };
    BookingComponent.prototype.incrementDate = function (duration) {
        this.schedule.fullCalendar('incrementDate', duration);
    };
    BookingComponent.prototype.changeView = function (viewName) {
        this.schedule.fullCalendar('changeView', viewName);
    };
    BookingComponent.prototype.getDate = function () {
        return this.schedule.fullCalendar('getDate');
    };
    BookingComponent.prototype.updateEvent = function (event) {
        this.schedule.fullCalendar('updateEvent', event);
    };
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "views");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "selectHelper");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "selectable");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "events");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "header");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "style");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "styleClass");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "rtl");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "weekends");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "hiddenDays");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "fixedWeekCount");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "weekNumbers");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "businessHours");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "height");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "contentHeight");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "aspectRatio");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "eventLimit");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "defaultDate");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "editable");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "droppable");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "eventStartEditable");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "eventDurationEditable");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "defaultView");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "allDaySlot");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "allDayText");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "slotDuration");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "slotLabelInterval");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "snapDuration");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "scrollTime");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "minTime");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "maxTime");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "slotLabelFormat");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "slotEventOverlap");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "nowIndicator");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "dragRevertDuration");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "dragOpacity");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "dragScroll");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "eventOverlap");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "eventConstraint");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "firstDay");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "locale");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "timezone");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "timeFormat");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "eventRender");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "dayRender");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "navLinks");
    __decorate([
        core_1.Input()
    ], BookingComponent.prototype, "options");
    __decorate([
        core_1.Output()
    ], BookingComponent.prototype, "onDayClick");
    __decorate([
        core_1.Output()
    ], BookingComponent.prototype, "onDrop");
    __decorate([
        core_1.Output()
    ], BookingComponent.prototype, "onEventClick");
    __decorate([
        core_1.Output()
    ], BookingComponent.prototype, "onEventMouseover");
    __decorate([
        core_1.Output()
    ], BookingComponent.prototype, "onEventMouseout");
    __decorate([
        core_1.Output()
    ], BookingComponent.prototype, "onEventDragStart");
    __decorate([
        core_1.Output()
    ], BookingComponent.prototype, "onEventDragStop");
    __decorate([
        core_1.Output()
    ], BookingComponent.prototype, "onEventDrop");
    __decorate([
        core_1.Output()
    ], BookingComponent.prototype, "onEventResizeStart");
    __decorate([
        core_1.Output()
    ], BookingComponent.prototype, "onEventResizeStop");
    __decorate([
        core_1.Output()
    ], BookingComponent.prototype, "onEventResize");
    __decorate([
        core_1.Output()
    ], BookingComponent.prototype, "onViewRender");
    __decorate([
        core_1.Output()
    ], BookingComponent.prototype, "onViewDestroy");
    __decorate([
        core_1.Output()
    ], BookingComponent.prototype, "onNavLinkDayClick");
    __decorate([
        core_1.Output()
    ], BookingComponent.prototype, "onNavLinkWeekClick");
    __decorate([
        core_1.Output()
    ], BookingComponent.prototype, "onSelect");
    __decorate([
        core_1.Output()
    ], BookingComponent.prototype, "onUnselect");
    __decorate([
        core_1.ViewChild('modal')
    ], BookingComponent.prototype, "modal");
    __decorate([
        core_1.ViewChild('modalBodyTemplate')
    ], BookingComponent.prototype, "modalBodyTemplate");
    BookingComponent = __decorate([
        core_1.Component({
            selector: 'app-booking',
            templateUrl: './booking.component.html',
            styleUrls: ['./booking.component.css']
        })
    ], BookingComponent);
    return BookingComponent;
}());
exports.BookingComponent = BookingComponent;
