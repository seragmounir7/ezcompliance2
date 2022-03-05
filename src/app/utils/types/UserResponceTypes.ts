export interface UserResponce {
	status: string;
	code: number;
	data: UserValue[];
}

export interface UserValue {
	index: number;
	fullName: string;
	location: Location;
	FirstLogin: FirstLogin;
	emergencyContact: EmergencyContact;
	ppe: Ppe;
	plant: Plant;
	loginType: string;
	isMobileVerified: string;
	isEmailVerified: string;
	licence: Licence[];
	status: string;
	_id: string;
	designation: string;
	title: string;
	email: string;
	position: string;
	roleId: string;
	suburb: string;
	stateId: string;
	department: string;
	phone: string;
	firstName: string;
	lastName: string;
	uploadImage: string;
	clientAdminId: string;
	password: string;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
	reportingTo: string;
	otp: string;
}

export interface FirstLogin {
	firstLogin: boolean;
	step1: boolean;
	step2: boolean;
	step3: boolean;
	step4: boolean;
}

export interface EmergencyContact {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	mobile: string;
	relationship: string;
}

export interface Licence {
	licenceName: string;
	licenceNumber: string;
	trainingOrganisation: string;
	expiryDate: string;
	uploadLicence: UploadLicence[];
}

export interface UploadLicence {
	file: string[];
	LicenceName: string;
	LicenceNumber: string;
	TrainingQrginisation: string;
	ExpiryDate: Date;
}

export interface Location {
	address: string;
	landmark: string;
	state: string;
	country: string;
}

export interface Plant {
	plantArr: any[];
}

export interface Ppe {
	PPEArr: any[];
	signature: string;
}
