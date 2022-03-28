import { TableDetails } from 'src/app/super-admin/table-details.enum';
import { Designation } from 'src/app/utils/types/Designation.enum';
import { NavItem } from './nav-items';

export class NavItems {
	protected returnNav: NavItem[];

	get getNav(): NavItem[] {
		return this.returnNav;
	}
	constructor() {
		let role = sessionStorage.getItem('role') as string;
		if (!role) return;
		switch (role) {
			case Designation.superAdmin:
				this.returnNav = this.navItemsAll;
				break;
			case Designation.clientAdmin:
				this.returnNav = this.clientAdminNav;
				break;
			case Designation.user:
				this.returnNav = this.userNav;
				break;
			default:
				break;
		}
		// this.returnNav = role?this.clientAdminNav: this.navItemsAll
	}
	protected navItemsAll: NavItem[] = [
		{
			displayedName: 'Dashboard',
			icon: 'dash',
			route: './',
			hasAccess: true
		},
		{
			displayedName: 'SuperAdmin',
			icon: 'roleMgmt',
			hasAccess: true,
			childItem: [
				{
					displayedName: 'Client Admin List',
					icon: '',
					route: `./superadmin/${TableDetails.clientList}`,
					hasAccess: true
				}
			]
		},
		{
			displayedName: 'WHS Forms',
			icon: 'whsForms',
			childItem: [
				{
					displayedName: 'Generate a New Form',
					icon: 'dynamic',
					route: './dynamic/dynamicFormsList',
					hasAccess: true
				},
				// {
				// 	displayedName: 'Logical Forms',
				// 	icon: 'logical',
				// 	route: './forms',
				// 	hasAccess: true
				// },
				{
					displayedName: 'Form List',
					icon: 'fillConfig',
					route: './forms/fillConfigForm/0',
					hasAccess: true
				},
				{
					displayedName: 'Submitted Forms',
					icon: 'savedForms',
					route: './savedForms',
					hasAccess: true
				}
			],
			hasAccess: true
		},
		{
			displayedName: 'Company Information',
			icon: 'roleMgmt',
			childItem: [
				{
					displayedName: 'Company Details ',
					icon: 'company',
					route: './registration/companyDetail',
					hasAccess: true
				},
				// {
				// 	displayedName: 'Roles',
				// 	icon: 'roles',
				// 	route: './roleMangement',
				// 	hasAccess: true
				// },
				// {
				// 	displayedName: 'Employee Details',
				// 	icon: 'employee',
				// 	route: './registration/employeeRegistration',
				// 	hasAccess: true
				// },
				// {
				// 	displayedName: 'Subcontractor Details',
				// 	icon: 'subcontractor',
				// 	route: './registration/subcontract',
				// 	hasAccess: true
				// },
				{
					displayedName: 'Acknowledgement and Acceptance',
					icon: 'terms',
					route: './setting/termsAndcondition',
					hasAccess: true
				}
			],
			hasAccess: true
		},
		{
			displayedName: 'Form Settings',
			icon: 'mainSetting',
			childItem: [
				{
					displayedName: 'State Relation',
					icon: 'stateRelation',
					route: './setting/stateRelationSetting',
					// childItem: [
					// 	{
					// 		displayedName: 'States',
					// 		icon: 'state',
					// 		route: './stateRel/states',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Jurisdiction',
					// 		icon: 'jurisdiction',
					// 		route: './stateRel/juridiction',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Safety Legislation',
					// 		icon: 'safety_legislation',
					// 		route: './stateRel/safetyLegislation',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Regulator',
					// 		icon: 'regulator',
					// 		route: './stateRel/regulator',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Set State Relation',
					// 		icon: 'state',
					// 		route: './stateRel/setState',
					// 		hasAccess: true
					// 	}
					// ],
					hasAccess: true
				},

				{
					displayedName: 'Risk Assessment ',
					icon: 'riskAssessment',
					route: './setting/riskAssessmentSetting',
					// childItem: [
					// 	{
					// 		displayedName: 'Add Instruction',
					// 		icon: 'addInstruction',
					// 		route: './siteInfo/instructions/riskAssess',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Risk-Level',
					// 		icon: 'riskLevel',
					// 		route: './siteInfo/riskLevel',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Residual Risk Level',
					// 		icon: 'riskLevel',
					// 		route: './siteInfo/residual',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'High Risk Construct',
					// 		icon: 'highRisk',
					// 		route: './siteInfo/highRisk',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Code Of Practice',
					// 		icon: 'cop',
					// 		route: './siteInfo/codeOfpract',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Hazards',
					// 		icon: 'hazard',
					// 		route: './siteInfo/hazards',
					// 		hasAccess: true
					// 	},

					// 	{
					// 		displayedName: 'Hazardous Substances',
					// 		icon: 'chemical',
					// 		route: './siteInfo/chemical',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Job Task',
					// 		icon: 'job_task',
					// 		route: './siteInfo/jobTask',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Licence & Qualification',
					// 		icon: 'license',
					// 		route: './siteInfo/licenceAndQual',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Control And Action',
					// 		icon: 'controlAndAction',
					// 		route: './siteInfo/contrlActReq',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Set Relation',
					// 		icon: 'setRelation',
					// 		route: './confiLogi/setLogic',
					// 		hasAccess: true
					// 	}
					// ],
					hasAccess: true
				},

				{
					displayedName: 'Notifiable Accident',
					icon: 'notifiableAccident',
					route: './setting/notifiableAccidentSetting',
					// childItem: [
					// 	{
					// 		displayedName: 'Accident Instruction',
					// 		icon: 'addInstruction',
					// 		route: './siteInfo/instructions/accident',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Nature Of Incident',
					// 		icon: 'natureOfIncident',
					// 		route: './siteInfo/natureOfIncident',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Type Of Incident',
					// 		icon: 'natureOfIncident',
					// 		route: './siteInfo/typeOfIncident',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Changes Made',
					// 		icon: 'changesMade',
					// 		route: './siteInfo/changesMade',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Root Cause Of Incident',
					// 		icon: 'rootCause',
					// 		route: './siteInfo/rootCauseOfIncident',
					// 		hasAccess: true
					// 	}
					// ],
					hasAccess: true
				},
				{
					displayedName: 'Set Hazard Treatment',
					icon: 'hazardTreatment',
					route: './confiLogi/setHazard',
					hasAccess: true
				},
				{
					displayedName: 'Site Inspection Category',
					icon: 'category',
					route: './setting/siteinspectioncategory',
					hasAccess: true
				},
				{
					displayedName: 'Dynamic Form Categories',
					icon: 'category',
					route: './setting/dynamicFormCategories',
					hasAccess: true
				},
				{
					displayedName: 'General Form Settings',
					icon: 'genFormSet',
					route: './setting/generalFormSetting',
					// childItem: [
					// 	{
					// 		displayedName: 'Set Job Number',
					// 		icon: 'jobNumber',
					// 		route: './confiLogi/setJobNumber',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Site',
					// 		icon: 'site',
					// 		route: './siteInfo/addSite',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Customer',
					// 		icon: 'customer',
					// 		route: './siteInfo/addCustomer',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Project Manager',
					// 		icon: 'customer',
					// 		route: './siteInfo/projMang',
					// 		hasAccess: true
					// 	},

					// 	{
					// 		displayedName: 'Trade Category',
					// 		icon: 'tradeCategory',
					// 		route: './siteInfo/licenceCat',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'PPE Selection',
					// 		icon: 'PPESelection',
					// 		route: './siteInfo/ppeSel',
					// 		hasAccess: true
					// 	},

					// 	{
					// 		displayedName: 'Staff',
					// 		icon: 'staff',
					// 		route: './siteInfo/staff',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Manager',
					// 		icon: 'manager',
					// 		route: './siteInfo/manager',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Whs-Manager',
					// 		icon: 'manager',
					// 		route: './siteInfo/WHS-Manager',
					// 		hasAccess: true
					// 	}
					// ],
					hasAccess: true
				}
			],
			hasAccess: true
		},
		{
			displayedName: 'CMS',
			icon: 'cms',
			childItem: [
				{
					displayedName: 'Header',
					icon: 'header',
					route: './landingPageInfo/header',
					hasAccess: true
				},
				{
					displayedName: 'Application Service Info',
					icon: 'appInfo',
					route: './landingPageInfo/applicationSerInfo',
					hasAccess: true
				},
				{
					displayedName: 'Safety Module',
					icon: 'safety',
					route: './landingPageInfo/safetyModule',
					hasAccess: true
				},
				{
					displayedName: 'Happy Client',
					icon: 'HappyClient',
					route: './landingPageInfo/happyClient',
					hasAccess: true
				},
				{
					displayedName: 'Flexible',
					icon: 'flexible',
					route: './landingPageInfo/flexible',
					hasAccess: true
				},
				{
					displayedName: 'CustomerTestimonial',
					icon: 'subcontractor',
					route: './landingPageInfo/customer',
					hasAccess: true
				},
				{
					displayedName: 'About-Us',
					icon: 'info',
					route: './landingPageInfo/aboutUs',
					hasAccess: true
				},
				{
					displayedName: 'Contact-Us',
					icon: 'contactUs',
					route: './landingPageInfo/contactUs',
					hasAccess: true
				},
				{
					displayedName: 'Our-Work(Section-1)',
					icon: 'work',
					route: './landingPageInfo/ourWork',
					hasAccess: true
				},
				{
					displayedName: 'Our-Work(Section-2)',
					icon: 'work',
					route: './landingPageInfo/screenShot',
					hasAccess: true
				},
				{
					displayedName: 'Our-Work-(Section-3)',
					icon: 'work',
					route: './landingPageInfo/different',
					hasAccess: true
				},
				{
					displayedName: 'FAQ',
					icon: 'qna',
					route: './landingPageInfo/faq',
					hasAccess: true
				},
				{
					displayedName: 'Q&A Section',
					icon: 'qna',
					route: './landingPageInfo/QA',
					hasAccess: true
				},
				{
					displayedName: 'Terms and Conditions',
					icon: 'terms',
					route: './landingPageInfo/term',
					hasAccess: true
				},
				{
					displayedName: 'Social Media',
					icon: 'social',
					route: './landingPageInfo/socialMedia',
					hasAccess: true
				},
				{
					displayedName: 'Subscription Rates',
					icon: 'Subscription',
					childItem: [
						{
							displayedName: 'Add Subscription',
							icon: 'Add_Subsc',
							route: './subscrpt',
							hasAccess: true
						},
						{
							displayedName: 'Coupon',
							icon: 'Subscription',
							route: './subscrpt/coupon',
							hasAccess: true
						}
					],
					hasAccess: true
				}
			],
			hasAccess: true
		}
	];

	protected clientAdminNav: NavItem[] = [
		{
			displayedName: 'Dashboard',
			icon: 'dash',
			route: './',
			hasAccess: true
		},
		{
			displayedName: 'WHS Forms',
			icon: 'whsForms',
			childItem: [
				{
					displayedName: 'Generate a New Form',
					icon: 'dynamic',
					route: './dynamic/dynamicFormsList',
					hasAccess: true
				},
				// {
				// 	displayedName: 'Logical Forms',
				// 	icon: 'logical',
				// 	route: './forms',
				// 	hasAccess: true
				// },
				{
					displayedName: 'Form List',
					icon: 'fillConfig',
					route: './forms/fillConfigForm/0',
					hasAccess: true
				},
				{
					displayedName: 'Submitted Forms',
					icon: 'savedForms',
					route: './savedForms',
					hasAccess: true
				}
			],
			hasAccess: true
		},
		{
			displayedName: 'Company Information',
			icon: 'roleMgmt',
			childItem: [
				{
					displayedName: 'Company Details ',
					icon: 'company',
					route: './registration/companyDetail',
					hasAccess: true
				},
				{
					displayedName: 'Roles',
					icon: 'roles',
					route: './roleMangement',
					hasAccess: true
				},
				{
					displayedName: 'Department',
					icon: 'roles',
					route: './department',
					hasAccess: true
				},
				{
					displayedName: 'Employee Details',
					icon: 'employee',
					route: './registration/employeeRegistration',
					hasAccess: true
				},
				{
					displayedName: 'Subcontractor Details',
					icon: 'subcontractor',
					route: './registration/subcontract',
					hasAccess: true
				}
			],
			hasAccess: true
		},
		{
			displayedName: 'Form Settings',
			icon: 'mainSetting',
			childItem: [
				{
					displayedName: 'State Relation',
					icon: 'stateRelation',
					route: './setting/stateRelationSetting',
					// childItem: [
					// 	{
					// 		displayedName: 'States',
					// 		icon: 'state',
					// 		route: './stateRel/states',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Jurisdiction',
					// 		icon: 'jurisdiction',
					// 		route: './stateRel/juridiction',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Safety Legislation',
					// 		icon: 'safety_legislation',
					// 		route: './stateRel/safetyLegislation',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Regulator',
					// 		icon: 'regulator',
					// 		route: './stateRel/regulator',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Set State Relation',
					// 		icon: 'state',
					// 		route: './stateRel/setState',
					// 		hasAccess: true
					// 	}
					// ],
					hasAccess: true
				},

				{
					displayedName: 'Risk Assessment ',
					icon: 'riskAssessment',
					route: './setting/riskAssessmentSetting',
					// childItem: [
					// 	{
					// 		displayedName: 'Add Instruction',
					// 		icon: 'addInstruction',
					// 		route: './siteInfo/instructions/riskAssess',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Risk-Level',
					// 		icon: 'riskLevel',
					// 		route: './siteInfo/riskLevel',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Residual Risk Level',
					// 		icon: 'riskLevel',
					// 		route: './siteInfo/residual',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'High Risk Construct',
					// 		icon: 'highRisk',
					// 		route: './siteInfo/highRisk',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Code Of Practice',
					// 		icon: 'cop',
					// 		route: './siteInfo/codeOfpract',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Hazards',
					// 		icon: 'hazard',
					// 		route: './siteInfo/hazards',
					// 		hasAccess: true
					// 	},

					// 	{
					// 		displayedName: 'Hazardous Substances',
					// 		icon: 'chemical',
					// 		route: './siteInfo/chemical',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Job Task',
					// 		icon: 'job_task',
					// 		route: './siteInfo/jobTask',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Licence & Qualification',
					// 		icon: 'license',
					// 		route: './siteInfo/licenceAndQual',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Control And Action',
					// 		icon: 'controlAndAction',
					// 		route: './siteInfo/contrlActReq',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Set Relation',
					// 		icon: 'setRelation',
					// 		route: './confiLogi/setLogic',
					// 		hasAccess: true
					// 	}
					// ],
					hasAccess: true
				},

				{
					displayedName: 'Notifiable Accident',
					icon: 'notifiableAccident',
					route: './setting/notifiableAccidentSetting',
					// childItem: [
					// 	{
					// 		displayedName: 'Accident Instruction',
					// 		icon: 'addInstruction',
					// 		route: './siteInfo/instructions/accident',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Nature Of Incident',
					// 		icon: 'natureOfIncident',
					// 		route: './siteInfo/natureOfIncident',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Type Of Incident',
					// 		icon: 'natureOfIncident',
					// 		route: './siteInfo/typeOfIncident',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Changes Made',
					// 		icon: 'changesMade',
					// 		route: './siteInfo/changesMade',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Root Cause Of Incident',
					// 		icon: 'rootCause',
					// 		route: './siteInfo/rootCauseOfIncident',
					// 		hasAccess: true
					// 	}
					// ],
					hasAccess: true
				},
				{
					displayedName: 'Set Hazard Treatment',
					icon: 'hazardTreatment',
					route: './confiLogi/setHazard',
					hasAccess: true
				},
				{
					displayedName: 'Site Inspection Category',
					icon: 'category',
					route: './setting/siteinspectioncategory',
					hasAccess: true
				},
				{
					displayedName: 'Dynamic Form Categories',
					icon: 'category',
					route: './setting/dynamicFormCategories',
					hasAccess: true
				},
				{
					displayedName: 'General Form Settings',
					icon: 'genFormSet',
					route: './setting/generalFormSetting',
					// childItem: [
					// 	{
					// 		displayedName: 'Set Job Number',
					// 		icon: 'jobNumber',
					// 		route: './confiLogi/setJobNumber',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Site',
					// 		icon: 'site',
					// 		route: './siteInfo/addSite',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Customer',
					// 		icon: 'customer',
					// 		route: './siteInfo/addCustomer',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Project Manager',
					// 		icon: 'customer',
					// 		route: './siteInfo/projMang',
					// 		hasAccess: true
					// 	},

					// 	{
					// 		displayedName: 'Trade Category',
					// 		icon: 'tradeCategory',
					// 		route: './siteInfo/licenceCat',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'PPE Selection',
					// 		icon: 'PPESelection',
					// 		route: './siteInfo/ppeSel',
					// 		hasAccess: true
					// 	},

					// 	{
					// 		displayedName: 'Staff',
					// 		icon: 'staff',
					// 		route: './siteInfo/staff',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Manager',
					// 		icon: 'manager',
					// 		route: './siteInfo/manager',
					// 		hasAccess: true
					// 	},
					// 	{
					// 		displayedName: 'Whs-Manager',
					// 		icon: 'manager',
					// 		route: './siteInfo/WHS-Manager',
					// 		hasAccess: true
					// 	}
					// ],
					hasAccess: true
				}
			],
			hasAccess: true
		}
	];
	protected userNav: NavItem[] = [
		{
			displayedName: 'Dashboard',
			icon: 'dash',
			route: './',
			hasAccess: true
		},
		{
			displayedName: 'Company Information',
			icon: 'roleMgmt',
			childItem: [
				{
					displayedName: 'Employee Details',
					icon: 'employee',
					route: './registration/employeeRegistration',
					hasAccess: true
				},
				{
					displayedName: 'Subcontractor Details',
					icon: 'subcontractor',
					route: './registration/subcontract',
					hasAccess: true
				}
			],
			hasAccess: true
		},
		{
			displayedName: 'WHS Forms',
			icon: 'whsForms',
			childItem: [
				{
					displayedName: 'Generate a New Form',
					icon: 'dynamic',
					route: './dynamic/dynamicFormsList',
					hasAccess: true
				},
				// {
				// 	displayedName: 'Logical Forms',
				// 	icon: 'logical',
				// 	route: './forms',
				// 	hasAccess: true
				// },
				{
					displayedName: 'Form List',
					icon: 'fillConfig',
					route: './forms/fillConfigForm/0',
					hasAccess: true
				},
				{
					displayedName: 'Submitted Forms',
					icon: 'savedForms',
					route: './savedForms',
					hasAccess: true
				}
			],
			hasAccess: true
		}
	];
}
