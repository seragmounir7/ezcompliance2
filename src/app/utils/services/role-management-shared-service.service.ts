import { value } from './../../views/dynamic-form/global.model';
import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class RoleManagementSharedServiceService {
	private roleGet = new Subject<any>();
	private printSubject = new BehaviorSubject<boolean>(false);
	private printData = new BehaviorSubject<any>({});
	public printDataObs$ = this.printData.asObservable();

	public printObs$ = this.printSubject.asObservable();
	constructor() {}

	sendRoleEvent(value: any) {
		this.roleGet.next(value);
	}
	get getRoleEvent(): Observable<any> {
		return this.roleGet.asObservable();
	}
	sendPrintData(value) {
		this.printData.next(value);
	}
	printDataNext(value) {
		this.printData.next(value);
	}
	printNext(value) {
		this.printSubject.next(value);
	}
}
