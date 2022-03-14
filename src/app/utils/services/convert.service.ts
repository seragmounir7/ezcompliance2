import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ConvertService {
	constructor() {}

	inputDateToIso(date: string): string {
		return new Date(Date.parse(date)).toISOString().slice(0, 10);
	}
}
