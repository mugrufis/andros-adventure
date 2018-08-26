import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	goToFacebook() {
		window.open('https://www.facebook.com/search/top/?q=andros%20adventures', '_blank');
	}

	goToInstagram() {
		window.open('https://support.wwf.org.uk', '_blank');
	}

	goToTripAdvisor() {
		window.open('https://support.wwf.org.uk', '_blank');
	}

}
