import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {GR_DAYS, GR_MONTHS} from '../../utilities/gr-dates';
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-booking-wrapper',
	templateUrl: './booking-wrapper.component.html',
	styleUrls: ['./booking-wrapper.component.css']
})
export class BookingWrapperComponent implements OnInit {
	@ViewChild('modal') modal;
	@ViewChild('modalBodyTemplate') modalBodyTemplate;

	public newReservationFg: FormGroup;
	public startDisplayValue: string;
	public endDisplayValue: string;

	public events = [];
	public header = {
		left:   '',
		center: ' prev,today,next',
		right:  ''
	};

	onViewRender(event) {
		const viewFirstDate = (event.view.start.toDate() as Date).getDate();
		const todayDate = new Date().getDate();
		if (viewFirstDate === todayDate) {
			document.getElementsByClassName('fc-prev-button btn btn-primary')[0].classList.add('disabled');
		}else {
			document.getElementsByClassName('fc-prev-button btn btn-primary')[0].classList.remove('disabled');
		}
	}

	constructor(private http: HttpClient, private formBuilder: FormBuilder, private translate: TranslateService) { }

	ngOnInit() {
		this.newReservationFg = this.formBuilder.group({
			name: ['', Validators.required],
			start: {value: '', disabled: true} ,
			end: {value: '', disabled: true},
			color: 'red',
			email: ['', Validators.required],
			phone: ['', Validators.required]
		});

		this.http.get('serverUrl').subscribe(
			(events) => {this.events = events as any[];},
			(error) => {console.log(error);}
			);

	}

	setNewReservationFg(date?) {
		return this.formBuilder.group({
			name: ['', Validators.required],
			start: {value: date, disabled: true} ,
			end: {value: moment(date).add(2, 'h'), disabled: true},
			color: 'red',
			email: ['', Validators.required],
			phone: ['', Validators.required]
		});
	}

	calculateStartDisplayValue(date) {
		if (this.translate.currentLang === 'gr') {
			return GR_DAYS[date.day()] + ' ' + date.date() + ' ' + GR_MONTHS[date.month()] + ' ' + moment(date).format('HH:mm');
		}
		return moment(date).format('dddd D MMMM HH:mm')
	}

	calculateEndDisplayValue(date) {
		if (this.translate.currentLang === 'gr') {	
			return GR_DAYS[date.day()] + ' ' + date.date() + ' ' + GR_MONTHS[date.month()] + ' ' + moment(date).add(1, 'h').add(30, 'm').format('HH:mm');
		}
		return moment(date).add(1, 'h').add(30, 'm').format('dddd D MMMM HH:mm')
	}

	onDayClick (event) {
		this.newReservationFg = this.setNewReservationFg(event.date);
		this.startDisplayValue = this.calculateStartDisplayValue(event.date);
		this.endDisplayValue = this.calculateEndDisplayValue(event.date);

		this.modal.displayModal();
		// select with price
		// 1- 30
		// 2 - 40
		// 3 - 45
		// 4 - 48
		// 5 - 50
		// 6 - 60
		// 7 - 70
		// 8 - 80
		

	}

}
