export class AccessName {
	'access' = '_NavigationAccess_';
	'add' = '_Add_';
	'view' = '_View_';
	'edit' = '_Edit_';
	'delete' = '_Delete_';
	'_id' = '_id';
	'formName' = 'formName';
}
export class AccessLabel {
	'access' = 'Navigation Access';
	'add' = 'Add';
	'view' = 'View';
	'edit' = 'Edit';
	'delete' = 'Delete';
	'_id' = '_id';
	'formName' = 'formName';
}

export interface AccessType {
	access: string;
	add: string;
	view: string;
	edit: string;
	delete: string;
	_id: string;
	formName: string;
}
