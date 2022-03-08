import { NavItem } from './nav-items';
import { NavItems } from './NavItems';
import { Router } from '@angular/router';
import {
	Component,
	OnInit,
	AfterViewInit,
	ViewChild,
	Output,
	EventEmitter,
	Input,
	ElementRef
} from '@angular/core';
import { AppService } from 'src/app/utils/services/app.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { RoleManagementService } from 'src/app/utils/services/role-management.service';
import { AuthService } from 'src/app/utils/services/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Designation } from 'src/app/utils/types/Designation.enum';
import { AccessArr } from 'src/app/utils/types/AccessResponceTypes';
import { map, tap } from 'rxjs/operators';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-menu-sidebar',
	templateUrl: './menu-sidebar.component.html',
	styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit, AfterViewInit {
	@ViewChild('mainSidebar', { static: false })
	mainSidebar: ElementRef<HTMLElement>;
	@Input() logoUrl: string;
	@Input() isMenuSideBarOpen: boolean;
	activeNavValue: string;
	regex = new RegExp('([a-zA-Z0-9s_\\.-:])+(.jpg|.png|.gif)$');
	navItems: NavItem[];
	isClient$: Observable<boolean>;
	isAdmin$: Observable<boolean>;
	afterNgOnInIt: boolean = false;
	showSideNav: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	isUser$: Observable<boolean>;
	userName$: Observable<string>;
	constructor(
		public appService: AppService,
		private setTitle: SetTitleService,
		private router: Router,
		private role: RoleManagementService,
		private authService: AuthService
	) {
		this.navItems = new NavItems().getNav;
	}

	ngOnInit() {
		this.showSideNav.next(false);
		this.isAdmin$ = this.authService.isAdmin$;
		this.isClient$ = this.authService.isClient$;
		this.isUser$ = this.authService.isUser$;
		this.userName$ = this.authService.loginData$.pipe(
			map((res) =>
				res.designation ===
				(Designation.clientAdmin ||
					res.designation === Designation.user)
					? res.username
					: ''
			)
		);
		this.authService.loginData$.subscribe((res) => {
			if (
				res.designation === Designation.clientAdmin ||
				res.designation === Designation.user
			) {
				this.logoUrl = res.companyLogo;
			}
			if (
				res.designation === Designation.superAdmin ||
				res.designation === Designation.clientAdmin
			) {
				this.showSideNav.next(true);
			}
			if (res.designation === Designation.user) {
				this.role.getAccessByUserId().subscribe(
					(accessArr: AccessArr[]) => {
						this.role.accessArrNext(accessArr);
						accessArr.forEach((accessObj) => {
							this.navItems = this.navItems.map((item) => {
								if (
									item.displayedName
										.toLowerCase()
										.replace(' ', '') ===
									accessObj.formName.toLowerCase()
								) {
									item.hasAccess = accessObj.NavigationAccess;
								}
								if (item.childItem) {
									item.childItem = item.childItem.map(
										(childItem) => {
											if (
												childItem.displayedName
													.toLowerCase()
													.split(' ')
													.join('') ===
												accessObj.formName.toLowerCase()
											) {
												// if(accessObj.Access){
												//   item.hasAccess = true
												// }
												childItem.hasAccess =
													accessObj.NavigationAccess;
											}
											return childItem;
										}
									);
									if (
										item.childItem.every(
											(value) => value.hasAccess === false
										)
									) {
										item.hasAccess = false;
									}
								}
								return item;
							});
						});
						// this.navItems.map(item => {
						//   if(item)
						//   item.hasAccess =
						// })
					},
					(err) => console.error('some error occured', err),
					() => this.showSideNav.next(true)
				);
			}
		});

		const rLink = this.router.url;
		this.navItems.forEach((x) => this.treeArr.push(false));
		this.setTitle.setTitle('WHS-Menu Sidebar');
		this.openMenuOnLoad();
	}

	openMenuOnLoad() {
		const rLink = this.router.url;
		this.navItems.map((x: NavItem) => {
			// x.hasAccess = true
			if (x.childItem) {
				x.menuOpen = false;
				x.childItem.map((y: NavItem) => {
					y.childItem ? (y.menuOpen = false) : '';
					return y;
				});
			}

			x.childItem
				? (x.menuOpen = false) &&
				  x.childItem.map((y: NavItem) => {
						y.childItem ? (y.menuOpen = false) : '';
						return y;
				  })
				: '';
			return x;
		});
		let Cobj;
		let CCobj;
		const obj = this.navItems.find((o) => {
			if (o.childItem) {
				Cobj = o.childItem.find((item) => {
					if (item.childItem) {
						CCobj = item.childItem.find((citem) => {
							return citem.route === rLink;
						});
					}
					return item.route === rLink;
				});
			}
			return o.route === rLink ? o.route === rLink : Cobj ? Cobj : CCobj;
		});

		obj ? this.menuOpen(obj) : false;
		this.afterNgOnInIt = true;
	}

	ngAfterViewInit() {}
	dynamic = false;
	landingPageVal = false;
	subscription = false;
	siteInfoVal = false;
	static = false;
	confiLogic = false;
	stateRel = false;
	treeArr = [];
	menuOpen1(i) {
		const temp = this.treeArr[i];
		this.resetAll();
		this.treeArr[i] = !temp;
	}
	resetAll() {
		for (let i = 0; i < this.treeArr.length; i++) {
			this.treeArr[i] = false;
		}
	}

	menuOpen(item: NavItem) {
		if (item.menuOpen) {
			this.activeNavValue = item.displayedName;
			this.navItems.map((x: NavItem) => {
				if (x.displayedName == item.displayedName) {
					x.menuOpen = false;
				}
				return x;
			});

			this.activeNavValue = item.displayedName;
			this.navItems.map((x: NavItem) => {
				x.childItem
					? x.childItem.map((y) => {
							if (y.displayedName == item.displayedName) {
								y.menuOpen = false;
							}
							return y;
					  })
					: '';
				return x;
			});
			return;
		}

		this.navItems.map((x: NavItem) => {
			if (
				x.childItem &&
				x.menuOpen == false &&
				item.displayedName == x.displayedName
			) {
				x.menuOpen = true;
			}
			x.childItem
				? x.childItem.map((y) => {
						if (
							y.childItem &&
							y.menuOpen == false &&
							item.displayedName == y.displayedName
						) {
							y.menuOpen = true;
						}
						return y;
				  })
				: '';
			// x.childItem?(x.menuOpen = item.displayedName == x.displayedName) && x.childItem.map((y:NavItem) => {
			//   y.childItem? x.menuOpen=true && (y.menuOpen= item.displayedName == y.displayedName):''
			//   return y
			// }):''
			return x;
		});
	}
}
