import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ResponceBody } from '../types/ResponceBody';
import { UserValue } from '../types/UserResponceTypes';

@Injectable({
	providedIn: 'root'
})
export class DashboardApiService {
	constructor(private http: HttpClient) {}

	getFormCount(date: string): Observable<CountData> {
		return this.http
			.get<ResponceBody<CountData>>(
				`${environment.apiUrl}dashboard/getCount`,
				date ? { params: { date } } : {}
			)
			.pipe(map((res) => res.data));
	}

	getExp(): Observable<CountData> {
		return this.http
			.get<ResponceBody<CountData>>(
				`${environment.apiUrl}dashboard/get/expiry/dates`
			)
			.pipe(map((res) => res.data));
	}

	getFormCounts(): Observable<CountData> {
		return this.http
			.get<ResponceBody<CountData>>(
				`${environment.apiUrl}dashboard/get/SavedDynamicForm/list`
			)
			.pipe(map((res) => res.data));
	}

	updateJobs(id, name): Observable<CountData> {
		return this.http
			.get<ResponceBody<CountData>>(
				`${environment.apiUrl}dashboard/get/jobs/update/${id}/${name}`
			)
			.pipe(map((res) => res.data));
	}

	getJobs(): Observable<CountData> {
		return this.http
			.get<ResponceBody<CountData>>(
				`${environment.apiUrl}dashboard/get/jobs/list`
			)
			.pipe(map((res) => res.data));
	}

	getCorrectiveAction(date: string): Observable<CorrectiveActionData[]> {
		return this.http
			.get<ResponceBody<CorrectiveActionData[]>>(
				`${environment.apiUrl}dashboard/get/corrective/action`,
				date ? { params: { date } } : {}
			)
			.pipe(
				map((res) =>
					res.data
						.filter((ele) => ele.personRes)
						.map((item) => {
							item.personRes['fullName'] = [
								item.personRes.firstName,
								item.personRes.lastName
							].join(' ');
							return item;
						})
				)
			);
	}

	updateCorrectiveAction(data: CorrectiveUpdateData) {
		return this.http.put(
			`${environment.apiUrl}dashboard/update/correctiveAction`,
			data
		);
	}
}

// Generated by https://quicktype.io

export interface CorrectiveActionData {
	completed: boolean;
	formName: string;
	_id?: string;
	action: string;
	personRes: UserValue;
	date: Date;
	complete?: Date;
}

export interface CorrectiveUpdateData {
	_id: string;
	formName: string;
}

export interface CountData {
	cards: Cards;
	barChart: BarChart;
}

export interface BarChart {
	abrasionCount: number;
	bruiseCount: number;
	cutsCount: number;
	illnessCount: number;
	amputationCount: number;
	burnCount: number;
	herniaCount: number;
	brokenBoneCount: number;
	otherCount: number;
	crushingInjuryCount: number;
	headInjuryCount: number;
}

export interface Cards {
	nearMissCount: number;
	firstAidCount: number;
	medicalTreatmentCount: number;
	lostTimeInjuryCount: number;
	deathDataCount: number;
	hazardResult: number;
	incidentFormResult: number;
	riskAssessmentResult: number;
	toolBoxResult: number;
	siteInspectionResult: number;
	savedDynamicFormResult: number;
}
