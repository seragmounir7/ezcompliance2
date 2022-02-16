import { Component, OnInit } from '@angular/core';
import { SetTitleService } from 'src/app/utils/services/set-title.service';

@Component({
	selector: 'app-state-rel',
	templateUrl: './state-rel.component.html',
	styleUrls: ['./state-rel.component.scss']
})
export class StateRelComponent implements OnInit {
	constructor(private setTitle: SetTitleService) {}

	ngOnInit(): void {
		this.setTitle.setTitle('WHS-States List');
	}
}
