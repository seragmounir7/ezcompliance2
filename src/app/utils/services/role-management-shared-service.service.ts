import { value } from './../../views/dynamic-form/global.model';
import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RoleManagementSharedServiceService {
  private roleGet = new Subject<any>();
  private printSubject= new BehaviorSubject<Boolean>(false);
  public printObs$= this.printSubject.asObservable()
  constructor() { }

  sendRoleEvent(value:any) {
    this.roleGet.next(value);
    console.log("servies call");
    
  }
  getRoleEvent(): Observable<any>{ 
    return this.roleGet.asObservable();
  }

  printNext(value){
    this.printSubject.next(value)
  }
}
