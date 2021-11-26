import { Injectable } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';
@Injectable({
  providedIn: 'root'
})
export class SessionManagementService {

  constructor(
    private bnIdle: BnNgIdleService
  ) { }

  startSession(time: number) {
    this.bnIdle.startWatching(time).subscribe((res) => {
      if(res){
        console.log('session expired');
      }
    })
  }
  resetSession() {
    this.bnIdle.resetTimer();
  }
  stopSession() {
    this.bnIdle.stopTimer();
  }
}
