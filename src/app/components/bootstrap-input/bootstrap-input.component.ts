import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-bootstrap-input',
	templateUrl: './bootstrap-input.component.html',
	styleUrls: ['./bootstrap-input.component.css']
})
export class BootstrapInputComponent implements OnInit {
	@Input() field: string;
	@Input() label: string;
	@Input() form: FormGroup;
	
	constructor() { }

	ngOnInit() {
	}

}
