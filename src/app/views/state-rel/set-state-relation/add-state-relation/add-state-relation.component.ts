import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import {
	JurisDictionResponce,
	JurisDictionData
} from 'src/app/utils/types/Jurisdiction';
import { RegulatorData } from 'src/app/utils/types/Regulator';
import {
	SafetyLeslationData,
	SafetyLeslationResponce
} from 'src/app/utils/types/SafetyLegislation';
import Swal from 'sweetalert2';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-add-state-relation',
	templateUrl: './add-state-relation.component.html',
	styleUrls: ['./add-state-relation.component.scss']
})
export class AddStateRelationComponent implements OnInit {
	SetState!: FormGroup;
	states = null;
	stateId = null;
	JurisdictionData: JurisDictionData[];
	safety: SafetyLeslationData[];
	codeData: [];
	regulatorData: RegulatorData[];
	isLinear = false;

	constructor(
		private route: ActivatedRoute,
		private fb: FormBuilder,
		private logicalFormInfo: LogicalFormInfoService,
		public router: Router
	) {}

	ngOnInit(): void {
		this.SetState = this.fb.group({
			jurisdictionId: ['', Validators.required],
			safetyLegislationId: ['', Validators.required],
			regulatorId: ['', Validators.required]
		});
		this.route.queryParams.subscribe((id) => {
			this.stateId = id.id;
			this.logicalFormInfo
				.getstatesById(this.stateId)
				.subscribe((res: any) => {
					this.states = res.data;

					if (this.states.set == true) {
						this.SetState.patchValue({
							jurisdictionId: this.states.jurisdictionId,
							safetyLegislationId: this.states
								.safetyLegislationId,
							regulatorId: this.states.regulatorId
						});
					}
				});
		});

		this.getAllJurisdiction();
		this.getAllSafe();
		this.getAllRegulator();
	}

	getAllRegulator() {
		this.logicalFormInfo.getAllRegulator().subscribe((res) => {
			this.regulatorData = res.data;
		});
	}

	getAllSafe() {
		this.logicalFormInfo
			.getAllSafety()
			.subscribe((res: SafetyLeslationResponce) => {
				this.safety = res.data;
			});
	}
	getAllJurisdiction() {
		this.logicalFormInfo
			.getAllJurisdiction()
			.subscribe((res: JurisDictionResponce) => {
				this.JurisdictionData = res.data;
			});
	}

	setRelation() {
		const data = {
			set: true,
			title: this.states.title,
			jurisdictionId: this.SetState.get('jurisdictionId').value,
			safetyLegislationId: this.SetState.get('safetyLegislationId').value,
			regulatorId: this.SetState.get('regulatorId').value
		};

		this.logicalFormInfo
			.updateStates(data, this.stateId)
			.subscribe((res: any) => {
				Swal.fire({
					title: 'Updated successfully',
					showConfirmButton: false,
					timer: 1200
				});
				this.router.navigate(['/admin/stateRel/setState']);
			});
	}
}
