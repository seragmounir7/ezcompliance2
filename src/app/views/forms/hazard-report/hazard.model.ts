export interface FormValue {
	fullName: FullName | string;
	email: string;
	phone: string;
	department: CompileDepartment;
	position: CompileDepartment;
	date: Date;
	signaturePad1: string;
	describeHazard: string;
	dateHazardReport: Date;
	locationHazard: string;
	dateHazardIdentify: Date;
	jobNumberId: string;
	name: FullName | string;
	compilePosition: CompileDepartment;
	compileDepartment: CompileDepartment;
	myControl: FullName | string;
	myControlManager: string;
	employeeParttime: string;
	managerSupervisor: string;
	managerSupervisorEmail: string;
	whsManagerEmail: string;
	action: string;
	elliminateAction: Action;
	substituteCorrect: string;
	substituteAction: Action;
	substituteWhen: Date;
	isolatedCorrect: string;
	isolatedAction: Action;
	isolatedWhen: Date;
	solutionCorrect: string;
	solutionAction: Action;
	solutionWhen: Date;
	procedureRemove: Date;
	procedureRemoveCorrect: string;
	procedureRemoveAction: Action;
	procedureRemoveWhen: string;
	PPECorrect: string;
	PPEAction: Action;
	PPEWhen: Date;
	fileUpload: string;
	complete: string;
	consequence: string;
	riskRating: string;
	actionRequired: string;
	likelihood: string;
	reduceRisk: string;
	procedures: string;
	process: string;
	isolatedHazard: string;
	eliminateHazardAction: string;
}

export interface Action {
	action: string;
	personRes: PersonRes;
	date: string;
	completed: boolean;
}

export interface PersonRes {
	fullname: string;
}

export interface CompileDepartment {
	status: string;
	_id: string;
	departmentName?: string;
	clientAdminId: string;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
	role?: string;
}

export interface FullName {
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
	mobileNumber: string;
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
	otp: string;
	fullName: string;
}

export interface FirstLogin {
	firstLogin: boolean;
	step1: boolean;
	step2: boolean;
	step3: boolean;
	step4: boolean;
	step5: boolean;
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
	file: string;
	LicenceName: string;
	LicenceNumber: string;
	TrainingQrginisation: string;
	ExpiryDate: string;
}

export interface Location {
	address: string;
	landmark: string;
	state: string;
	postcode: number;
	country: string;
}

export interface Plant {
	plantArr: any[];
}

import { Observable } from 'rxjs';

export interface Ppe {
	PPEArr: PPEArr[];
	signature: string;
}

export interface PPEArr {
	ppeSupplied: string;
	brand: string;
	issueDate: string;
	replacementDate: string;
}

export interface Actionedby {
	elliminateAction: Observable<any>;
	substituteAction: Observable<any>;
	isolatedAction: Observable<any>;
	solutionAction: Observable<any>;
	procedureRemoveAction: Observable<any>;
	PPEAction: Observable<any>;
}
