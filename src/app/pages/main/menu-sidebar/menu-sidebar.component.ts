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

@Component({
	selector: 'app-menu-sidebar',
	templateUrl: './menu-sidebar.component.html',
	styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit, AfterViewInit {
	@ViewChild('mainSidebar', { static: false })
	mainSidebar: ElementRef<HTMLElement>;
	@Output() mainSidebarHeight: EventEmitter<any> = new EventEmitter<any>();
	@Input() logoUrl;
	@Input() isMenuSideBarOpen: boolean;
	activeNavValue: string;
	navItems: NavItem[];

	constructor(
		public appService: AppService,
		private setTitle: SetTitleService,
		private router: Router
	) {
		this.navItems = new NavItems().navItems;
	}

	ngOnInit() {
		console.log('logo=>', this.logoUrl);

		console.log(this.router.url);
		let rLink = this.router.url;
		this.navItems.forEach((x) => this.treeArr.push(false));
		if (rLink === '/admin/roleMangement') {
			this.menuOpen1(1);
		} else if (rLink === '/admin/dynamic/dynamicFormsList') {
			this.menuOpen1(2);
		} else if (rLink === '/admin/forms') {
			this.menuOpen1(3);
		} else if (
			rLink === '/admin/confiLogi/setLogic' ||
			rLink === '/admin/confiLogi/setJobNumber'
		) {
			this.menuOpen1(4);
		} else if (
			rLink === '/admin/siteInfo/addSite' ||
			rLink === '/admin/siteInfo/addCustomer' ||
			rLink === '/admin/siteInfo/jobTask' ||
			rLink === '/admin/siteInfo/highRisk' ||
			rLink === '/admin/siteInfo/licenceAndQual' ||
			rLink === '/admin/siteInfo/licenceCat' ||
			rLink === '/admin/siteInfo/ppeSel' ||
			rLink === '/admin/siteInfo/hazards' ||
			rLink === '/admin/siteInfo/contrlActReq' ||
			rLink === '/admin/siteInfo/chemical' ||
			rLink === '/admin/siteInfo/riskLevel' ||
			rLink === '/admin/siteInfo/riskLevel' ||
			rLink === '/admin/siteInfo/staff'
		) {
			this.menuOpen1(5);
		} else if (rLink === '/admin/savedForms') {
			this.menuOpen1(6);
		} else if (rLink === '/admin/forms/fillConfigForm') {
			this.menuOpen1(7);
		}

		this.setTitle.setTitle('WHS-Menu Sidebar');
		this.openMenuOnLoad();
		console.log(this.navItems);
	}

	openMenuOnLoad() {
		let rLink = this.router.url;
		this.navItems.map((x: NavItem) => {
			// x.hasAccess = true
			if (x.childItem) {
				x.menuOpen = false;
				x.childItem.map((y: NavItem) => {
					console.log(y.childItem ? true : false);
					y.childItem ? (y.menuOpen = false) : '';
					return y;
				});
			}

			x.childItem
				? (x.menuOpen = false) &&
				  x.childItem.map((y: NavItem) => {
						console.log(y.childItem ? true : false);
						y.childItem ? (y.menuOpen = false) : '';
						return y;
				  })
				: '';
			return x;
		});
		let Cobj, CCobj;
		let obj = this.navItems.find((o) => {
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

		console.log(obj);
		obj ? this.menuOpen(obj) : false;
	}

	ngAfterViewInit() {
		this.mainSidebarHeight.emit(
			this.mainSidebar.nativeElement.offsetHeight
		);
		let mouseenter = () =>
			(this.isMenuSideBarOpen = !this.isMenuSideBarOpen);
		let mouseleave = () =>
			(this.isMenuSideBarOpen = !this.isMenuSideBarOpen);
		let observer = new MutationObserver(
			(mutations: MutationRecord[], observer: MutationObserver) => {
				mutations.forEach((item: any) => {
					if (item.target.classList.contains('sidebar-mini')) {
						this.mainSidebar.nativeElement.addEventListener(
							'mouseenter',
							mouseenter
						);
						this.mainSidebar.nativeElement.addEventListener(
							'mouseleave',
							mouseleave
						);
					} else {
						this.mainSidebar.nativeElement.removeEventListener(
							'mouseenter',
							mouseenter
						);
						this.mainSidebar.nativeElement.removeEventListener(
							'mouseleave',
							mouseleave
						);
					}
				});
			}
		);
		observer.observe(document.querySelector('app-root'), {
			attributes: true,
			attributeFilter: ['class']
		});
		console.log(
			this.mainSidebar.nativeElement.classList.contains('sidebar-mini')
		);
		if (this.mainSidebar.nativeElement.classList.contains('sidebar-mini')) {
			this.mainSidebar.nativeElement.addEventListener(
				'mouseenter',
				() => (this.isMenuSideBarOpen = !this.isMenuSideBarOpen)
			);
			this.mainSidebar.nativeElement.addEventListener(
				'mouseleave',
				() => (this.isMenuSideBarOpen = !this.isMenuSideBarOpen)
			);
		}
	}
	dynamic = false;
	landingPageVal = false;
	subscription = false;
	siteInfoVal = false;
	static = false;
	confiLogic = false;
	stateRel = false;
	treeArr = [];
	menuOpen1(i) {
		let temp = this.treeArr[i];
		this.resetAll();
		this.treeArr[i] = !temp;
		console.log(i, temp, this.treeArr);
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
					console.log(
						x.displayedName,
						'==',
						item.displayedName,
						x.displayedName == item.displayedName,
						x.menuOpen
					);
					x.menuOpen = false;
					console.log(x.menuOpen);
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
		console.log(item);
		this.navItems.map((x: NavItem) => {
			// x.hasAccess = true
			// console.log(item.displayedName ,'==', x.displayedName,item.displayedName == x.displayedName)
			if (
				x.childItem &&
				x.menuOpen == false &&
				item.displayedName == x.displayedName
			) {
				x.menuOpen = true;
			}
			x.childItem
				? x.childItem.map((y) => {
						// console.log(item.displayedName, '==', y.displayedName, item.displayedName == y.displayedName, y.childItem && y.menuOpen == false && item.displayedName == y.displayedName)

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
