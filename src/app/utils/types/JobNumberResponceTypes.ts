export interface JobNumberResponceTypes {
	status: string;
	code: number;
	data: OriginalJobNumber[] | ModifiedJobNumber[];
}

export interface OriginalJobNumber {
	status: string;
	_id: string;
	jobNumber: number;
	stateId: StateID;
	customerId: CustomerID;
	siteId: SiteID;
	clientAdminId: string;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
}

export interface ModifiedJobNumber extends SiteID, CustomerID {
	status: string;
	_id: string;
	jobNumber: number;
	stateId: StateID;
	clientAdminId: string;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
}

export interface CustomerID {
	status: string;
	_id: string;
	customerName: string;
	customerContact: string;
	streetAddress: string;
	stateId: StateID;
	postCode: string;
	ABN: string;
	contacts: Contact[];
	createdAt: Date;
	updatedAt: Date;
	__v: number;
}

export interface Contact {
	_id: string;
	email: string;
	phone: string;
	position: string;
}

export interface SiteID {
	status: string;
	_id: string;
	siteName: string;
	streetAddress: string;
	suburb: string;
	postcode: string;
	stateId: StateID;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
}

export interface StateID {
	set: boolean;
	status: string;
	_id: string;
	title: string;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
	jurisdictionId: string;
	regulatorId: string;
	safetyLegislationId: string;
}
