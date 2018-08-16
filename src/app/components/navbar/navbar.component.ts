import { Component, OnInit } from '@angular/core';
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
	{title: 'NAVBAR.HOME', link: ''},
	{title: 'NAVBAR.ABOUT', link: ''},
	{title: 'NAVBAR.RULES', link: ''},
	{title: 'NAVBAR.BOOKING', link: ''},
	{title: 'NAVBAR.CONTACT', link: ''},
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
