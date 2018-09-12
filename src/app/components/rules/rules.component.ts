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
		title: 'RULES.TITLE_1',
		body: 'RULES.1',
		iconUrl: 'assets/rule-icons/stopwatch.png'
	}, {
		title: 'RULES.TITLE_2',
		body: 'RULES.2',
		iconUrl: 'assets/rule-icons/group.png'
	}, {
		title: 'RULES.TITLE_3',
		body: 'RULES.3',
		iconUrl: 'assets/rule-icons/no-stopping.png'
	}, {
		title: 'RULES.TITLE_4',
		body: 'RULES.4',
		iconUrl: 'assets/rule-icons/checked.png'
	}, {
		title: 'RULES.TITLE_5',
		body: 'RULES.5',
		iconUrl: 'assets/rule-icons/promotion.png'
	}, {
		title: 'RULES.TITLE_6',
		body: 'RULES.6',
		iconUrl: 'assets/rule-icons/boat.png'
	}, {
		title: 'RULES.TITLE_7',
		body: 'RULES.7',
		iconUrl: 'assets/rule-icons/target.png'
	}, {
		title: 'RULES.TITLE_8',
		body: 'RULES.8',
		iconUrl: 'assets/rule-icons/archery.png'
	}
	];

	constructor() { }

	ngOnInit() {
	}

}
