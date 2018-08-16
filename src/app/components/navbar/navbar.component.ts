import { Component, OnInit, Output } from '@angular/core';
import { ILink } from '../../utilities/i-link';
import {TranslateService} from '@ngx-translate/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
	public chosenLanguage;
	public languages = [
	{language: 'English', code: 'gr'},
	{language: 'Ελληνικά', code: 'en'}
	];

	public navbarLinks: ILink[] = [
	{title: 'NAVBAR.HOME', link: 'home'},
	{title: 'NAVBAR.ABOUT', link: 'about'},
	{title: 'NAVBAR.RULES', link: 'rules'},
	{title: 'NAVBAR.BOOKING', link: 'booking'},
	{title: 'NAVBAR.CONTACT', link: 'contact'},
	];

	constructor(private translate: TranslateService) { }

	ngOnInit() {
		if (this.translate.currentLang === 'gr') {
			this.chosenLanguage = 'Ελληνικά';
		}
		
	}

	private getCurrentUrl() {
    // TODO along with routing fix this / bad performance
    return window.location.pathname;
}

onNavbarClick(id) {
	document.querySelector('#' + id).scrollIntoView({behavior: 'smooth',block: "start", inline: "nearest"});
}


changeLanguage() {
	if (this.translate.currentLang === 'gr') {
		this.translate.use('en');
		this.chosenLanguage = 'English';
	} else {
		this.translate.use('gr');
		this.chosenLanguage = 'Ελληνικά';
	}
}

}
