import { Component, OnInit } from '@angular/core';
import { IRule } from '../../utilities/i-rule';

@Component({
	selector: 'app-rules',
	templateUrl: './rules.component.html',
	styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {
	public rules: IRule[] = [
	{
		title: 'RULES.TITLE',
		body: 'RULES.BODY',
		iconUrl: 'assets/placeholder-icon.png'
	}, {
		title: 'RULES.TITLE',
		body: 'RULES.BODY',
		iconUrl: 'assets/placeholder-icon.png'
	}, {
		title: 'RULES.TITLE',
		body: 'RULES.BODY',
		iconUrl: 'assets/placeholder-icon.png'
	}, {
		title: 'RULES.TITLE',
		body: 'RULES.BODY',
		iconUrl: 'assets/placeholder-icon.png'
	}
	];

	constructor() { }

	ngOnInit() {
	}

}
