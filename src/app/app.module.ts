import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { AboutComponent } from './components/about/about.component';
import { RulesComponent } from './components/rules/rules.component';
import { RuleComponent } from './components/rule/rule.component';
import { ContactComponent } from './components/contact/contact.component';
import { BookingComponent } from './components/booking/booking.component';
import { BookingAdminComponent } from './components/booking-admin/booking-admin.component';
import { BookingWrapperComponent } from './components/booking-wrapper/booking-wrapper.component';
import { ScrollLogoComponent } from './components/scroll-logo/scroll-logo.component';
import { DarkOfficeComponent } from './components/dark-office/dark-office.component';
import { ModalComponent } from './components/modal/modal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BootstrapInputComponent } from './components/bootstrap-input/bootstrap-input.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';

// import localeGr from '@angular/common/locales/gr';

// registerLocaleData(localeGr);

export function HttpLoaderFactory(httpClient: HttpClient) {
	return new TranslateHttpLoader(httpClient, 'assets/i18n/', '.json');
}


@NgModule({
	declarations: [
	AppComponent,
	NavbarComponent,
	AboutComponent,
	RulesComponent,
	RuleComponent,
	ContactComponent,
	BookingComponent,
	BookingAdminComponent,
	BookingWrapperComponent,
	ScrollLogoComponent,
	DarkOfficeComponent,
	ModalComponent,
	BootstrapInputComponent,
	LoginComponent
	],
	imports: [
	BrowserModule,
	HttpClientModule,
	FormsModule,
	ReactiveFormsModule,
	TranslateModule.forRoot({
		loader: {
			provide: TranslateLoader,
			useFactory: HttpLoaderFactory,
			deps: [HttpClient]
		}
	})
	],
	providers: [
	LoginService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
