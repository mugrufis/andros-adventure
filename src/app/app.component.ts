import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isAdmin;
  public activkey;;

  onDisconnect() {
  	this.loginService.setParams(false, '');
  }

  ngOnInit() {
    this.loginService.isAdmin.subscribe( (value) => {this.isAdmin = value });
    this.loginService.activkey.subscribe( (value) => {this.activkey = value });
  }

  constructor (private translate: TranslateService, private loginService: LoginService) {
  	translate.addLangs(['gr', 'en']);
  	translate.setDefaultLang('gr');
  	translate.use('gr');
  }

  //Watch service value to update is admin
}
