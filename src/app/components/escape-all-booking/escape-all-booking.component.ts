import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
declare var GetBookingCalendra: any;

@Component({
	selector: 'app-escape-all-booking',
	templateUrl: './escape-all-booking.component.html',
	styleUrls: ['./escape-all-booking.component.css']
})
export class EscapeAllBookingComponent implements OnInit, AfterViewInit {
	
	constructor(private translate: TranslateService, private elementRef: ElementRef) { }

	ngOnInit() {
		this.translate.onLangChange.subscribe(() => {
			this.addScriptTagToDom(this.setScriptTag(this.getCurrentLanguage(), this.renderBookingSystem(this.getCurrentLanguage())));
		});
	}

	ngAfterViewInit() {
		}

	private addScriptTagToDom(scriptTag) {
		this.elementRef.nativeElement.appendChild(scriptTag);
	}

	private setScriptTag (language: string, callBack) {
		const scriptTag = document.createElement("script");
		scriptTag.type = "text/javascript";
		scriptTag.src = "https://www.escapeall.gr/Scripts/API/multilingual/" + language + ".js ";
		scriptTag.onload = callBack;
		return scriptTag;
	}

	private getCurrentLanguage() {
		switch (this.translate.currentLang) {
			case 'gr':
			return 'el';
			case 'en':
			return 'en';
			default:
			console.error('Add missing locale');
			break;
		}
	}

	private renderBookingSystem(language) {
		GetBookingCalendra('#BookingId ', { 
			ServiceId: ['d1714c07-028d-436c-b80e-4343a1a7b6bd'],
			lang: language,
			Template: 5,
			success: this.styleBookingSystem,
                error: function (x, y, z) {
                    console.log(x + '\n' + y + '\n' + z);
                }
                 });
	}

	private styleBookingSystem() {

		let $calendra = document.getElementsByClassName('calendra')[0];
		let $reservationForm = document.getElementsByClassName('reservation-form')[0];
		let $reservationDetails = document.getElementsByClassName('reservation-details-panel')[0];
		let $dateCells = document.getElementsByClassName('dateCell');


		if (!$calendra) {
			return false;
		}
		$calendra.classList.remove('col-md-5');
		$calendra.classList.add('col', 'align-self-center');//'col-md-10', 'offset-1'

		$reservationForm.classList.remove('col-md-7');
		$reservationForm.classList.add('col-md-12');
		// $reservationForm.children[0].classList.add('col', 'align-self-center');

		let $timeSelect = document.getElementsByClassName('time-selection-panel')[0];
		let $timeSelectList = document.getElementsByClassName('time-selection');

		if ($timeSelectList[0].children.length === 0) {
			const li = document.createElement("li");
			li.appendChild(document.createTextNode("Διαλέξτε μέρα από το ημερολόγιο"));
			$timeSelectList[0].appendChild(li);
		}

		for (let i = 0; i < $dateCells.length; i++) {
			if ($dateCells[i].classList.contains('available')) {
				$dateCells[i].addEventListener('click', () => {
					$timeSelect.scrollIntoView({behavior: 'smooth',block: "end", inline: "nearest"});
				});
			}
		}	

		return true;
	}

}
