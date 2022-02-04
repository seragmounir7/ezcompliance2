export interface NavItem {
	displayedName: string;
	icon: string;
	menuOpen?: boolean;
	route?: string;
	hasAccess?: boolean;
	childItem?: NavItem[];
}
