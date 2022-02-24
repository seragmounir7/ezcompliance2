import { Pipe, PipeTransform } from '@angular/core';
import { RoleID } from '../utils/types/AccessResponceTypes';

@Pipe({
	name: 'changeType'
})
export class ChangeTypePipe implements PipeTransform {
	transform(value: unknown): RoleID {
		return value as RoleID;
	}
}
