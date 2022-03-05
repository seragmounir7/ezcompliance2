export interface SiteResponceTypes {
	status: string;
	code: number;
	data: SiteData[];
}

export interface SiteData {
	status: Status;
	_id: string;
	siteName: string;
	streetNumber?: null | string;
	streetAddress: string;
	suburb: string;
	stateId: StateID | null;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
	postcode?: null | string;
}

export interface StateID {
	set: boolean;
	status: Status;
	_id: string;
	title: string;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
	jurisdictionId: string;
	regulatorId: string;
	safetyLegislationId: string;
}

export enum Status {
	Active = 'active'
}
