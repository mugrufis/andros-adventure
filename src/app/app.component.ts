import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isAdmin;

  onDisconnect() {
  	this.loginService.isAdmin = false;
  	this.isAdmin = false;
  }

  constructor (private translate: TranslateService, private loginService: LoginService) {
  	translate.addLangs(['gr', 'en']);
  	translate.setDefaultLang('gr');
  	translate.use('gr');
  }

  //Watch service value to update is admin
}
