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
		window.open('https://www.instagram.com/andros.adventures/', '_blank');
	}

	goToTripAdvisor() {
		window.open('https://www.tripadvisor.com/Attraction_Review-g2705941-d14967990-Reviews-Andros_Adventures-Ormos_Korthiou_Andros_Cyclades_South_Aegean.html', '_blank');
	}

}
