import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'checkImgExt'
})
export class CheckImgExtPipe implements PipeTransform {
	transform(value: string): boolean {
		const regex = new RegExp(
			'([a-zA-Z0-9s_\\.-:])+(.tif| .tiff| .jpg| .jpeg| .gif| .png| .svg)$'
		);
		return regex.test(value);
	}
}
