import { UserValue } from './UserResponceTypes';

export interface HazardGetByID {
	updated: string;
	version: number;
	enable: boolean;
	status: string;
	_id: string;
	formId: string;
	createdBy: string;
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
	compilePosition: CompileDepartment;
	compileDepartment: CompileDepartment;
	myControl: ManagerSupervisor;
	myControlManager: string;
	employeeParttime: string;
	managerSupervisor: ManagerSupervisor;
	managerSupervisorEmail: string;
	whsManagerEmail: string;
	action: string;
	complete: string;
	consequence: null;
	riskRating: string;
	actionRequired: string;
	likelihood: null;
	reduceRisk: string;
	procedures: string;
	process: string;
	isolatedHazard: string;
	eliminateHazardAction: string;
	fullName: string;
	fileUpload: string;
	name: string;
	elliminateAction: Action;
	substituteAction: Action;
	isolatedAction: Action;
	solutionAction: Action;
	procedureRemoveAction: Action;
	PPEAction: Action;
	userId: string;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
}

export interface Action {
	completed: boolean;
	formName: string;
	_id: string;
	date: null;
	action: string;
	personRes: string | Record<string, unknown> | UserValue;
}

export interface CompileDepartment {
	status: string;
	_id: string;
	role: string;
	clientAdminId: string;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
}

export interface ManagerSupervisor {
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
	plantArr: PlantArr[];
	plantSignature: string;
}

export interface PlantArr {
	plantType: string;
	modelNumber: string;
	serialNumber: string;
	serviceRenewDate: string;
}

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
