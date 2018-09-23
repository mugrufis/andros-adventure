import { Component, OnInit, Output, Renderer, ElementRef } from '@angular/core';
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
	{language: 'Ελληνικά', code: 'gr'},
	{language: 'English', code: 'en'}
	];

	public navbarLinks: ILink[] = [
	{title: 'NAVBAR.HOME', link: 'home'},
	{title: 'NAVBAR.ABOUT', link: 'about'},
	{title: 'NAVBAR.DARK_OFFICE', link: 'darkOffice'},
	{title: 'NAVBAR.RULES', link: 'rules'},
	{title: 'NAVBAR.BOOKING', link: 'booking'},
	{title: 'NAVBAR.CONTACT', link: 'contact'},
	];

	constructor(private translate: TranslateService, private renderer: Renderer, private el: ElementRef) { }

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
	this.renderer.setElementClass(this.el.nativeElement.querySelector('#navbarSupportedContent'), 'show', false);
	document.querySelector('#' + id).scrollIntoView({behavior: 'smooth',block: "start", inline: "nearest"});
}


changeLanguage(lang) {
	this.translate.use(lang.code);
	this.chosenLanguage = lang.language;
}

}
