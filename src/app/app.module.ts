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
	ContactComponent
	],
	imports: [
	BrowserModule,
	HttpClientModule,
	TranslateModule.forRoot({
		loader: {
			provide: TranslateLoader,
			useFactory: HttpLoaderFactory,
			deps: [HttpClient]
		}
	})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
