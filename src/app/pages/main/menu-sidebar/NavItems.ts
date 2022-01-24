import { NavItem } from "./nav-items";

export class NavItems {
    navItems: NavItem[] = [
        {
            displayedName: "Dashboard",
            icon: "Dashboard",
            route: "/admin",
            hasAccess: true
        },
        {
            displayedName: "WHS Forms",
            icon: "whsForms",
            childItem: [
                {
                    displayedName: "Dynamic Form",
                    icon: "dynamic",
                    childItem: [
                        {
                            displayedName: "Forms",
                            icon: "page",
                            route: "/admin//dynamic/dynamicFormsList",
                            hasAccess: true
                        }
                    ],
                    hasAccess: true
                },
                {
                    displayedName: "Logical Forms",
                    icon: "logical",
                    childItem: [
                        {
                            displayedName: "Forms",
                            icon: "page",
                            route: "/admin/forms",
                            hasAccess: true
                        }
                    ],
                    hasAccess: true
                },
                {
                    displayedName: "Fill Configured Forms",
                    icon: "fillConfig",
                    childItem: [
                        {
                            displayedName: "Forms",
                            icon: "page",
                            route: "/admin/forms/fillConfigForm/0",
                            hasAccess: true
                        }
                    ],
                    hasAccess: true
                },
                {
                    displayedName: "Saved Forms",
                    icon: "savedForms",
                    childItem: [
                        {
                            displayedName: "Forms",
                            icon: "page",
                            route: "/admin/savedForms",
                            hasAccess: true
                        }
                    ],
                    hasAccess: true
                },
            ],
            hasAccess: true
        },
        {
            displayedName: "Role Manangement",
            icon: "roleMgmt",
            childItem: [
                {
                    displayedName: "Roles",
                    icon: "roles",
                    route: "/admin/roleMangement",
                    hasAccess: true
                },
                {
                    displayedName: "Employee Details",
                    icon: "employee",
                    route: "/admin/registration/employeeRegistration",
                    hasAccess: true
                },
                {
                    displayedName: "Subcontractor Details",
                    icon: "subcontractor",
                    route: "/admin/registration/subcontract",
                    hasAccess: true
                },
                {
                    displayedName: "Client Terms And Conditon ",
                    icon: "terms",
                    route: "/admin/siteInfo/termsAndcondition",
                    hasAccess: true
                },
                {
                    displayedName: "Company Details ",
                    icon: "company",
                    route: "/admin/registration/compdetails",
                    hasAccess: true
                }
            ],
            hasAccess: true
        },

        {
            displayedName: "Form Configure",
            icon: "page",
            childItem: [
                {
                    displayedName: "Set Relation",
                    icon: "page",
                    route: "/admin/confiLogi/setLogic",
                    hasAccess: true
                },
                {
                    displayedName: "Set Job Number",
                    icon: "page",
                    route: "/admin/confiLogi/setJobNumber",
                    hasAccess: true
                },
                {
                    displayedName: "Set Hazard Treatment",
                    icon: "page",
                    route: "/admin/confiLogi/setHazard",
                    hasAccess: true
                }
            ],
            hasAccess: true
        },
        {
            displayedName: "Form Settings",
            icon: "mainSetting",
            childItem: [
                {
                    displayedName: "State Relation",
                    icon: "stateRelation",
                    childItem: [
                        {
                            displayedName: "States",
                            icon: "state",
                            route: "/admin/stateRel/states",
                            hasAccess: true
                        },
                        {
                            displayedName: "Jurisdiction",
                            icon: "jurisdiction",
                            route: "/admin/stateRel/juridiction",
                            hasAccess: true
                        },
                        {
                            displayedName: "Safety Legislation",
                            icon: "safety_legislation",
                            route: "/admin/stateRel/safetyLegislation",
                            hasAccess: true
                        },
                        {
                            displayedName: "Regulator",
                            icon: "regulator",
                            route: "/admin/stateRel/regulator",
                            hasAccess: true
                        },
                        {
                            displayedName: "Set State Relation",
                            icon: "state",
                            route: "/admin/stateRel/setState",
                            hasAccess: true
                        }
                    ],
                    hasAccess: true
                },

                {
                    displayedName: "Risk Assessment ",
                    icon: "riskAssessment",
                    childItem: [
                        {
                            displayedName: "Add Instruction",
                            icon: "addInstruction",
                            route: "/admin/siteInfo/instructions/riskAssess",
                            hasAccess: true
                        },
                        {
                            displayedName: "Risk-Level",
                            icon: "riskLevel",
                            route: "/admin/siteInfo/riskLevel",
                            hasAccess: true
                        },
                        {
                            displayedName: "Residual Risk Level",
                            icon: "riskLevel",
                            route: "/admin/siteInfo/residual",
                            hasAccess: true
                        },
                        {
                            displayedName: "High Risk Construct",
                            icon: "Risk_construct",
                            route: "/admin/siteInfo/highRisk",
                            hasAccess: true
                        },
                        {
                            displayedName: "Code Of Practice",
                            icon: "page",
                            route: "/admin/siteInfo/codeOfpract",
                            hasAccess: true
                        },
                        {
                            displayedName: "Chemical",
                            icon: "chemical",
                            route: "/admin/siteInfo/chemical",
                            hasAccess: true
                        },
                        {
                            displayedName: "Job Task",
                            icon: "job_task",
                            route: "/admin/siteInfo/jobTask",
                            hasAccess: true
                        },
                        {
                            displayedName: "Licence & Qualification",
                            icon: "license",
                            route: "/admin/siteInfo/licenceAndQual",
                            hasAccess: true
                        },
                        {
                            displayedName: "Control And Action",
                            icon: "controlAndAction",
                            route: "/admin/siteInfo/contrlActReq",
                            hasAccess: true
                        },
                    ],
                    hasAccess: true
                },

                {
                    displayedName: "Notifiable Accident",
                    icon: "notifiableAccident",
                    childItem: [
                        {
                            displayedName: "Accident Instruction",
                            icon: "addInstruction",
                            route: "/admin/siteInfo/instructions/accident",
                            hasAccess: true
                        },
                        {
                            displayedName: "Nature Of Incident",
                            icon: "natureOfIncident",
                            route: "/admin/siteInfo/natureOfIncident",
                            hasAccess: true
                        },
                        {
                            displayedName: "Type Of Incident",
                            icon: "natureOfIncident",
                            route: "/admin/siteInfo/typeOfIncident",
                            hasAccess: true
                        },
                        {
                            displayedName: "Changes Made",
                            icon: "changesMade",
                            route: "/admin/siteInfo/changesMade",
                            hasAccess: true
                        },
                        {
                            displayedName: "Root Cause Of Incident",
                            icon: "rootCause",
                            route: "/admin/siteInfo/rootCauseOfIncident",
                            hasAccess: true
                        },
                    ],
                    hasAccess: true
                },
                {
                    displayedName: "Site Inspection Category",
                    icon: "SICat",
                    route: "/admin/siteInfo/siteinspectioncategory",
                    hasAccess: true
                },
                {
                    displayedName: "Dynamic Form Categories",
                    icon: "SICat",
                    route: "/admin/siteInfo/dynamicFormCategories",
                    hasAccess: true
                },
                {
                    displayedName: "General Form Settings",
                    icon: "genFormSet",
                    childItem: [
                        {
                            displayedName: "Site",
                            icon: "site",
                            route: "/admin/siteInfo/addSite",
                            hasAccess: true
                        },
                        {
                            displayedName: "Customer",
                            icon: "customer",
                            route: "/admin/siteInfo/addCustomer",
                            hasAccess: true
                        },
                        {
                            displayedName: "Project Manager",
                            icon: "customer",
                            route: "/admin/siteInfo/projMang",
                            hasAccess: true
                        },



                        {
                            displayedName: "Trade Category",
                            icon: "tradeCategory",
                            route: "/admin/siteInfo/licenceCat",
                            hasAccess: true
                        },
                        {
                            displayedName: "PPE Selection",
                            icon: "PPESelection",
                            route: "/admin/siteInfo/ppeSel",
                            hasAccess: true
                        },

                        {
                            displayedName: "Hazards",
                            icon: "hazard",
                            route: "/admin/siteInfo/hazards",
                            hasAccess: true
                        },



                        {
                            displayedName: "Staff",
                            icon: "staff",
                            route: "/admin/siteInfo/staff",
                            hasAccess: true
                        },
                        {
                            displayedName: "Manager",
                            icon: "manager",
                            route: "/admin/siteInfo/manager",
                            hasAccess: true
                        },
                        {
                            displayedName: "Whs-Manager",
                            icon: "manager",
                            route: "/admin/siteInfo/WHS-Manager",
                            hasAccess: true
                        },
                    ],
                    hasAccess: true
                }
            ],
            hasAccess: true
        },
        {
            displayedName: "CMS",
            icon: "page",
            childItem: [
                {
                    displayedName: "Header",
                    icon: "page",
                    route: "/admin/landingPageInfo/header",
                    hasAccess: true
                },
                {
                    displayedName: "Application Service Info",
                    icon: "page",
                    route: "/admin/landingPageInfo/applicationSerInfo",
                    hasAccess: true
                },
                {
                    displayedName: "Safety Module",
                    icon: "page",
                    route: "/admin/landingPageInfo/safetyModule",
                    hasAccess: true
                },
                {
                    displayedName: "Happy Client",
                    icon: "page",
                    route: "/admin/landingPageInfo/happyClient",
                    hasAccess: true
                },
                {
                    displayedName: "Flexible",
                    icon: "page",
                    route: "/admin/landingPageInfo/flexible",
                    hasAccess: true
                },
                {
                    displayedName: "CustomerTestimonial",
                    icon: "page",
                    route: "/admin/landingPageInfo/customer",
                    hasAccess: true
                },
                {
                    displayedName: "About-Us",
                    icon: "page",
                    route: "/admin/landingPageInfo/aboutUs",
                    hasAccess: true
                },
                {
                    displayedName: "Contact-Us",
                    icon: "page",
                    route: "/admin/landingPageInfo/contactUs",
                    hasAccess: true
                },
                {
                    displayedName: "Our-Work(Section-1)",
                    icon: "page",
                    route: "/admin/landingPageInfo/ourWork",
                    hasAccess: true
                },
                {
                    displayedName: "Our-Work(Section-2)",
                    icon: "page",
                    route: "/admin/landingPageInfo/screenShot",
                    hasAccess: true
                },
                {
                    displayedName: "Our-Work-(Section-3)",
                    icon: "page",
                    route: "/admin/landingPageInfo/different",
                    hasAccess: true
                },
                {
                    displayedName: "FAQ",
                    icon: "page",
                    route: "/admin/landingPageInfo/faq",
                    hasAccess: true
                },
                {
                    displayedName: "Q&A Section",
                    icon: "page",
                    route: "/admin/landingPageInfo/QA",
                    hasAccess: true
                },
                {
                    displayedName: "Terms and Conditions",
                    icon: "page",
                    route: "/admin/landingPageInfo/term",
                    hasAccess: true
                },
                {
                    displayedName: "Social Media",
                    icon: "page",
                    route: "/admin/landingPageInfo/socialMedia",
                    hasAccess: true
                },
                {
                    displayedName: "Subscription Rates",
                    icon: "Subscription",
                    childItem: [
                        {
                            displayedName: "Add Subscription",
                            icon: "Add_Subsc",
                            route: "/admin/subscrpt",
                            hasAccess: true
                        },
                        {
                            displayedName: "Coupon",
                            icon: "Subscription",
                            route: "/admin/subscrpt/coupon",
                            hasAccess: true
                        }
                    ],
                    hasAccess: true
                }
            ],
            hasAccess: true
        },
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
