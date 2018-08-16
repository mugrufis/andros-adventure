import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-booking-wrapper',
	templateUrl: './booking-wrapper.component.html',
	styleUrls: ['./booking-wrapper.component.css']
})
export class BookingWrapperComponent implements OnInit {

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

	constructor() { }

	ngOnInit() {
		// setTimeout(() => {
		// 	const todayButton = document.getElementsByClassName('fc-today-button btn btn-primary')[0];
		
		// 	if (todayButton.classList.contains('disabled')) {
		// 		document.getElementsByClassName('fc-prev-button btn btn-primary')[0].classList.add('disabled');
		// 	}
		// }, 500);

	}

}
