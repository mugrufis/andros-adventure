import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {GR_DAYS, GR_MONTHS} from '../../utilities/gr-dates';
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';
import { PERSONS_AND_PRICES } from '../../utilities/persons-prices';

@Component({
	selector: 'app-booking-wrapper',
	templateUrl: './booking-wrapper.component.html',
	styleUrls: ['./booking-wrapper.component.css']
})
export class BookingWrapperComponent implements OnInit {
	@Input() isAdmin;

	@ViewChild('modal') modal;
	@ViewChild('modalBodyTemplate') modalBodyTemplate;
	@ViewChild('adminModalBodyTemplate') adminModalBodyTemplate;


	public newReservationFg: FormGroup;
	public startDisplayValue: string;
	public endDisplayValue: string;
	public personsAndPrices;
	public personsAndPricesTitle;

	public events = [];
	public header = {
		left:   '',
		center: ' prev,today,next',
		right:  ''
	};

	onViewRender(event) {
		const viewFirstDate = (event.view.start.toDate() as Date).getDate();
		const todayDate = new Date().getDate();
		if (viewFirstDate === todayDate && this.isAdmin === false) {
			document.getElementsByClassName('fc-prev-button btn btn-primary')[0].classList.add('disabled');
		}else {
			document.getElementsByClassName('fc-prev-button btn btn-primary')[0].classList.remove('disabled');
		}
	}

	constructor(private http: HttpClient, private formBuilder: FormBuilder, private translate: TranslateService) { }

	ngOnInit() {
		this.personsAndPrices = PERSONS_AND_PRICES;
		this.newReservationFg = this.formBuilder.group({
			name: ['', Validators.required],
			start: {value: '', disabled: true} ,
			end: {value: '', disabled: true},
			color: 'red',
			title: 'Booked',
			email: ['', Validators.required],
			phone: ['', Validators.required],
			persons: ['', Validators.required]
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
			phone: ['', Validators.required],
			persons: ['', Validators.required]
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
		this.personsAndPricesTitle = 'PERSONS_AND_PRICES.SELECT';
		this.modal.displayModal();
	}

	onDropdownItemClick(item) {
		this.personsAndPricesTitle = item.body;
		this.newReservationFg.get('persons').patchValue(item.value);
	}

	onModalSave() {
		this.http.post('backend/save', this.newReservationFg.value).subscribe( 
			(response) => { this.onModalCancel(); },
			(error) => {
				console.log(error);
				//Notify user
			}
			);
	}

	onModalCancel() {
		this.modal.closeModal();
	}

// ONLY ALLOWED FOR ADMIN
	onEventClick(event) {
		if (!this.isAdmin) {
			return;
		}
		this.modal.modalBodyTemplate = this.adminModalBodyTemplate;
		this.newReservationFg.reset(event.calEvent);

	}
}
