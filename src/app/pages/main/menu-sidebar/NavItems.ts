import { NavItem } from './nav-items';

export class NavItems {
	navItems: NavItem[] = [
		{
			displayedName: 'Dashboard',
			icon: 'dash',
			route: '/admin',
			hasAccess: true
		},
		{
			displayedName: 'WHS Forms',
			icon: 'whsForms',
			childItem: [
				{
					displayedName: 'Generate a New Form',
					icon: 'dynamic',
					route: '/admin//dynamic/dynamicFormsList',
					hasAccess: true
				},
				{
					displayedName: 'Logical Forms',
					icon: 'logical',
					route: '/admin/forms',
					hasAccess: true
				},
				{
					displayedName: 'Form List',
					icon: 'fillConfig',
					route: '/admin/forms/fillConfigForm/0',
					hasAccess: true
				},
				{
					displayedName: 'Submitted Forms',
					icon: 'savedForms',
					route: '/admin/savedForms',
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
					route:
						'/admin/registration/addCompanyInfo/61eeeef751744133c768653c',
					hasAccess: true
				},
				{
					displayedName: 'Roles',
					icon: 'roles',
					route: '/admin/roleMangement',
					hasAccess: true
				},
				{
					displayedName: 'Employee Details',
					icon: 'employee',
					route: '/admin/registration/employeeRegistration',
					hasAccess: true
				},
				{
					displayedName: 'Subcontractor Details',
					icon: 'subcontractor',
					route: '/admin/registration/subcontract',
					hasAccess: true
				},
				{
					displayedName: 'Client Terms And Conditon ',
					icon: 'terms',
					route: '/admin/siteInfo/termsAndcondition',
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
					childItem: [
						{
							displayedName: 'States',
							icon: 'state',
							route: '/admin/stateRel/states',
							hasAccess: true
						},
						{
							displayedName: 'Jurisdiction',
							icon: 'jurisdiction',
							route: '/admin/stateRel/juridiction',
							hasAccess: true
						},
						{
							displayedName: 'Safety Legislation',
							icon: 'safety_legislation',
							route: '/admin/stateRel/safetyLegislation',
							hasAccess: true
						},
						{
							displayedName: 'Regulator',
							icon: 'regulator',
							route: '/admin/stateRel/regulator',
							hasAccess: true
						},
						{
							displayedName: 'Set State Relation',
							icon: 'state',
							route: '/admin/stateRel/setState',
							hasAccess: true
						}
					],
					hasAccess: true
				},

				{
					displayedName: 'Risk Assessment ',
					icon: 'riskAssessment',
					childItem: [
						{
							displayedName: 'Add Instruction',
							icon: 'addInstruction',
							route: '/admin/siteInfo/instructions/riskAssess',
							hasAccess: true
						},
						{
							displayedName: 'Risk-Level',
							icon: 'riskLevel',
							route: '/admin/siteInfo/riskLevel',
							hasAccess: true
						},
						{
							displayedName: 'Residual Risk Level',
							icon: 'riskLevel',
							route: '/admin/siteInfo/residual',
							hasAccess: true
						},
						{
							displayedName: 'High Risk Construct',
							icon: 'Risk_construct',
							route: '/admin/siteInfo/highRisk',
							hasAccess: true
						},
						{
							displayedName: 'Code Of Practice',
							icon: 'cop',
							route: '/admin/siteInfo/codeOfpract',
							hasAccess: true
						},
						{
							displayedName: 'Chemical',
							icon: 'chemical',
							route: '/admin/siteInfo/chemical',
							hasAccess: true
						},
						{
							displayedName: 'Job Task',
							icon: 'job_task',
							route: '/admin/siteInfo/jobTask',
							hasAccess: true
						},
						{
							displayedName: 'Licence & Qualification',
							icon: 'license',
							route: '/admin/siteInfo/licenceAndQual',
							hasAccess: true
						},
						{
							displayedName: 'Control And Action',
							icon: 'controlAndAction',
							route: '/admin/siteInfo/contrlActReq',
							hasAccess: true
						},
						{
							displayedName: 'Set Relation',
							icon: 'setRelation',
							route: '/admin/confiLogi/setLogic',
							hasAccess: true
						}
					],
					hasAccess: true
				},

				{
					displayedName: 'Notifiable Accident',
					icon: 'notifiableAccident',
					childItem: [
						{
							displayedName: 'Accident Instruction',
							icon: 'addInstruction',
							route: '/admin/siteInfo/instructions/accident',
							hasAccess: true
						},
						{
							displayedName: 'Nature Of Incident',
							icon: 'natureOfIncident',
							route: '/admin/siteInfo/natureOfIncident',
							hasAccess: true
						},
						{
							displayedName: 'Type Of Incident',
							icon: 'natureOfIncident',
							route: '/admin/siteInfo/typeOfIncident',
							hasAccess: true
						},
						{
							displayedName: 'Changes Made',
							icon: 'changesMade',
							route: '/admin/siteInfo/changesMade',
							hasAccess: true
						},
						{
							displayedName: 'Root Cause Of Incident',
							icon: 'rootCause',
							route: '/admin/siteInfo/rootCauseOfIncident',
							hasAccess: true
						}
					],
					hasAccess: true
				},
				{
					displayedName: 'Set Hazard Treatment',
					icon: 'hazardTreatment',
					route: '/admin/confiLogi/setHazard',
					hasAccess: true
				},
				{
					displayedName: 'Site Inspection Category',
					icon: 'category',
					route: '/admin/siteInfo/siteinspectioncategory',
					hasAccess: true
				},
				{
					displayedName: 'Dynamic Form Categories',
					icon: 'category',
					route: '/admin/siteInfo/dynamicFormCategories',
					hasAccess: true
				},
				{
					displayedName: 'General Form Settings',
					icon: 'genFormSet',
					childItem: [
						{
							displayedName: 'Set Job Number',
							icon: 'jobNumber',
							route: '/admin/confiLogi/setJobNumber',
							hasAccess: true
						},
						{
							displayedName: 'Site',
							icon: 'site',
							route: '/admin/siteInfo/addSite',
							hasAccess: true
						},
						{
							displayedName: 'Customer',
							icon: 'customer',
							route: '/admin/siteInfo/addCustomer',
							hasAccess: true
						},
						{
							displayedName: 'Project Manager',
							icon: 'customer',
							route: '/admin/siteInfo/projMang',
							hasAccess: true
						},

						{
							displayedName: 'Trade Category',
							icon: 'tradeCategory',
							route: '/admin/siteInfo/licenceCat',
							hasAccess: true
						},
						{
							displayedName: 'PPE Selection',
							icon: 'PPESelection',
							route: '/admin/siteInfo/ppeSel',
							hasAccess: true
						},

						{
							displayedName: 'Hazards',
							icon: 'hazard',
							route: '/admin/siteInfo/hazards',
							hasAccess: true
						},

						{
							displayedName: 'Staff',
							icon: 'staff',
							route: '/admin/siteInfo/staff',
							hasAccess: true
						},
						{
							displayedName: 'Manager',
							icon: 'manager',
							route: '/admin/siteInfo/manager',
							hasAccess: true
						},
						{
							displayedName: 'Whs-Manager',
							icon: 'manager',
							route: '/admin/siteInfo/WHS-Manager',
							hasAccess: true
						}
					],
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
					route: '/admin/landingPageInfo/header',
					hasAccess: true
				},
				{
					displayedName: 'Application Service Info',
					icon: 'appInfo',
					route: '/admin/landingPageInfo/applicationSerInfo',
					hasAccess: true
				},
				{
					displayedName: 'Safety Module',
					icon: 'safety',
					route: '/admin/landingPageInfo/safetyModule',
					hasAccess: true
				},
				{
					displayedName: 'Happy Client',
					icon: 'HappyClient',
					route: '/admin/landingPageInfo/happyClient',
					hasAccess: true
				},
				{
					displayedName: 'Flexible',
					icon: 'flexible',
					route: '/admin/landingPageInfo/flexible',
					hasAccess: true
				},
				{
					displayedName: 'CustomerTestimonial',
					icon: 'subcontractor',
					route: '/admin/landingPageInfo/customer',
					hasAccess: true
				},
				{
					displayedName: 'About-Us',
					icon: 'info',
					route: '/admin/landingPageInfo/aboutUs',
					hasAccess: true
				},
				{
					displayedName: 'Contact-Us',
					icon: 'contactUs',
					route: '/admin/landingPageInfo/contactUs',
					hasAccess: true
				},
				{
					displayedName: 'Our-Work(Section-1)',
					icon: 'work',
					route: '/admin/landingPageInfo/ourWork',
					hasAccess: true
				},
				{
					displayedName: 'Our-Work(Section-2)',
					icon: 'work',
					route: '/admin/landingPageInfo/screenShot',
					hasAccess: true
				},
				{
					displayedName: 'Our-Work-(Section-3)',
					icon: 'work',
					route: '/admin/landingPageInfo/different',
					hasAccess: true
				},
				{
					displayedName: 'FAQ',
					icon: 'qna',
					route: '/admin/landingPageInfo/faq',
					hasAccess: true
				},
				{
					displayedName: 'Q&A Section',
					icon: 'qna',
					route: '/admin/landingPageInfo/QA',
					hasAccess: true
				},
				{
					displayedName: 'Terms and Conditions',
					icon: 'terms',
					route: '/admin/landingPageInfo/term',
					hasAccess: true
				},
				{
					displayedName: 'Social Media',
					icon: 'social',
					route: '/admin/landingPageInfo/socialMedia',
					hasAccess: true
				},
				{
					displayedName: 'Subscription Rates',
					icon: 'Subscription',
					childItem: [
						{
							displayedName: 'Add Subscription',
							icon: 'Add_Subsc',
							route: '/admin/subscrpt',
							hasAccess: true
						},
						{
							displayedName: 'Coupon',
							icon: 'Subscription',
							route: '/admin/subscrpt/coupon',
							hasAccess: true
						}
					],
					hasAccess: true
				}
			],
			hasAccess: true
		}
		// {
		//     displayedName: "State Relation",
		//     icon: "page",
		//     childItem: [
		//         {
		//             displayedName: "States",
		//             icon: "page",
		//             route: "/admin/stateRel/states",
		//             hasAccess: true
		//         },
		//         {
		//             displayedName: "Jurisdiction",
		//             icon: "page",
		//             route: "/admin/stateRel/juridiction",
		//             hasAccess: true
		//         },
		//         {
		//             displayedName: "Safety Legislation",
		//             icon: "page",
		//             route: "/admin/stateRel/safetyLegislation",
		//             hasAccess: true
		//         },
		//         {
		//             displayedName: "Regulator",
		//             icon: "page",
		//             route: "/admin/stateRel/regulator",
		//             hasAccess: true
		//         },
		//         {
		//             displayedName: "Set State Relation",
		//             icon: "page",
		//             route: "/admin/stateRel/setState",
		//             hasAccess: true
		//         }
		//     ],
		//     hasAccess: true
		// }
	];
}
