import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class LoginService {
	private isAdminSource = new Subject();
	private activkeySource = new Subject();

	public isAdmin = this.isAdminSource.asObservable();
	public activkey = this.activkeySource.asObservable();

	setParams(isAdmin: boolean, activkey: string) {
		this.isAdminSource.next(isAdmin);
		this.activkeySource.next(activkey);
	}

	constructor() { }
}
