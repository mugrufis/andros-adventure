import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from '../../services/login.service';

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
		this.http.post('backend/login', this.userFg.value).subscribe( 
			(response) => { 
				this.loginService.isAdmin = true;
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
