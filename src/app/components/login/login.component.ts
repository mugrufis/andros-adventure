import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from '../../services/login.service';
import { REST_PATH_ADMIN } from '../../utilities/rest-path';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	@ViewChild('modal') modal;
	@ViewChild('modalBodyTemplate') modalBodyTemplate;

	public userFg: FormGroup;

	constructor(private http: HttpClient, private formBuilder: FormBuilder, private translate: TranslateService, private loginService: LoginService) { }

	ngOnInit() {
		this.userFg = this.formBuilder.group({
			username: ['', Validators.required],
			password: ['', Validators.required]
		});

	}

	onConnect() {
		this.modal.displayModal();
	}


	onModalConnect() {
		this.http.post(REST_PATH_ADMIN, this.userFg.value).subscribe(
			(response) => {
				this.userFg.reset();
				this.loginService.setParams(response['success'], response['activkey'])
				this.onModalCancel(); },
				(error) => {
					console.log(error);
				//Notify user
			}
			);
	}

	onModalCancel() {
		this.modal.closeModal();
	}
}
