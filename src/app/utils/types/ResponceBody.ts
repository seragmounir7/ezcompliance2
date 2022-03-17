export interface ResponceBody<T> {
	status: string;
	code: number;
	data: T;
}
