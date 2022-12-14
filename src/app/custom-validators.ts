import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { PhoneNumberUtil } from 'google-libphonenumber';

export class CustomValidators {
	static phoneNumberUtil: PhoneNumberUtil = PhoneNumberUtil.getInstance();
	static patternValidator(
		regex: RegExp,
		error: ValidationErrors
	): ValidatorFn {
		return (control: AbstractControl): { [key: string]: any } => {
			if (!control.value) {
				// if control is empty return no error
				return null;
			}

			// test the value of the control against the regexp supplied
			const valid = regex.test(control.value);

			// if true, return no error (no error), else return error passed in the second parameter
			return valid ? null : error;
		};
	}
	static passwordMatchValidator(control: AbstractControl) {
		const password: string = control.get('newPassword').value; // get password from our password form control
		const confirmPassword: string = control.get('confirm_password').value; // get password from our confirmPassword form control
		// compare is the password math
		if (password !== confirmPassword) {
			// if they don't match, set an error in our confirmPassword form control
			control
				.get('confirm_password')
				.setErrors({ NoPassswordMatch: true });
		}
	}

	static PhoneNumberValidator(regionCode: string = 'AUS'): ValidatorFn {
		return (control: AbstractControl): { [key: string]: any } => {
			let validNumber: boolean = false;
			try {
				const phoneNumber = this.phoneNumberUtil.parseAndKeepRawInput(
					control.value,
					regionCode
				);
				validNumber = this.phoneNumberUtil.isValidNumber(phoneNumber);
			} catch (e) {}

			return validNumber ? null : { wrongNumber: true };
		};
	}
}
