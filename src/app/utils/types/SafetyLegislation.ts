export interface SafetyLeslationResponce {
	status: string;
	code: number;
	data: SafetyLeslationData[];
}

export interface SafetyLeslationData {
	index: number;
	status: string;
	_id: string;
	act: string;
	regulation: string;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
}
