export interface AccessObj {
	View: AccessControlInput;
	Add: AccessControlInput;
	Edit: AccessControlInput;
	Delete: AccessControlInput;
}
export interface AccessControlInput {
	formName: string;
	accessType: string;
}

export interface AccessResponce {
	status: string;
	code: number;
	data: Datum[];
}

export interface Datum {
	status?: string;
	_id?: string;
	roleId: RoleID | string;
	role?: string;
	accessArr: AccessArr[];
	access?: AccessArr[];
	createdAt?: Date;
	updatedAt?: Date;
	i?: number;
}

export interface AccessArr {
	[x: string]: any;
	NavigationAccess?: boolean;
	Add?: boolean;
	View?: boolean;
	Edit?: boolean;
	Delete?: boolean;
	_id?: string;
	formName?: string;
	form?: string;
}

export interface RoleID {
	status: string;
	_id: string;
	role: string;
	createdAt: Date;
	updatedAt: Date;
}

type RoleIDType = RoleID & string;
