import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-rule',
	templateUrl: './rule.component.html',
	styleUrls: ['./rule.component.css']
})
export class RuleComponent implements OnInit {
	@Input() public iconUrl;
	@Input() public title;
	@Input() public body;
	constructor() { }

	ngOnInit() {
	}

}
