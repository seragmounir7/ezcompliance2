import { AddContrActComponent } from './contr-and-act-req/add-contr-act/add-contr-act.component';
import { ContrAndActReqComponent } from './contr-and-act-req/contr-and-act-req.component';
import { AddHazardComponent } from './identify-hazards/add-hazard/add-hazard.component';
import { IdentifyHazardsComponent } from './identify-hazards/identify-hazards.component';
import { ProjectManagerComponent } from './project-manager/project-manager.component';
import { EditCOPComponent } from './code-of-pract/edit-cop/edit-cop.component';
import { AddCOPComponent } from './code-of-pract/add-cop/add-cop.component';
import { CodeOfPractComponent } from './code-of-pract/code-of-pract.component';
import { EditLicenceCatComponent } from './licence-and-qual/licence-cat/edit-licence-cat/edit-licence-cat.component';
import { LicenceCatComponent } from './licence-and-qual/licence-cat/licence-cat.component';
import { EditLicenceComponent } from './licence-and-qual/edit-licence/edit-licence.component';
import { AddLicenceComponent } from './licence-and-qual/add-licence/add-licence.component';
import { AddPPEComponent } from './ppe-select/add-ppe/add-ppe.component';
import { AddHighRiskConstructionComponent } from './high-risk-con/add-high-risk-construction/add-high-risk-construction.component';
import { AddJobTaskComponent } from './job-task/add-job-task/add-job-task.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { PpeSelectComponent } from './ppe-select/ppe-select.component';
import { LicenceAndQualComponent } from './licence-and-qual/licence-and-qual.component';
import { HighRiskConComponent } from './high-risk-con/high-risk-con.component';
import { JobTaskComponent } from './job-task/job-task.component';
import { AddSiteInfoComponent } from './add-site-info/add-site-info.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteInfoComponent } from './site-info.component';
import { AddLicenceCatComponent } from './licence-and-qual/licence-cat/add-licence-cat/add-licence-cat.component';
import { AddSiteComponent } from './add-site-info/add-site/add-site.component';
import { EditSiteComponent } from './add-site-info/edit-site/edit-site.component';
import { ChemicalComponent } from './chemical/chemical.component';
import { RiskLevelComponent } from './risk-level/risk-level.component';
import { ResidualRiskLevelComponent } from './residual-risk-level/residual-risk-level.component';
import { StaffComponent } from './staff/staff.component';
import { AddChemicalComponent } from './chemical/add-chemical/add-chemical.component';
import { AddRiskLevelComponent } from './risk-level/add-risk-level/add-risk-level.component';
import { AddResidualRiskLevelComponent } from './residual-risk-level/add-residual-risk-level/add-residual-risk-level.component';
import { AddStaffComponent } from './staff/add-staff/add-staff.component';
import { EditStaffComponent } from './staff/edit-staff/edit-staff.component';
import { AddingCustComponent } from './add-customer/adding-cust/adding-cust.component';
import { SiteInspectionCategoryComponent } from './site-inspection-category/site-inspection-category.component'
import { AddSiteInspectionCategoryComponent } from './site-inspection-category/add-site-inspection-category/add-site-inspection-category.component';
import { SiteInspectionTopicComponent } from './site-inspection-category/site-inspection-topic/site-inspection-topic.component';
import { AddSiteInspectionTopicComponent } from './site-inspection-category/site-inspection-topic/add-site-inspection-topic/add-site-inspection-topic.component';
import { NatureOfIncidentComponent } from './nature-of-incident/nature-of-incident.component';
import { AddAndEditNatureIncidentComponent } from './nature-of-incident/add-and-edit-nature-incident/add-and-edit-nature-incident.component';
import { ChangesMadeComponent } from './changes-made/changes-made.component';
import { AddChangesMadeComponent } from './changes-made/add-changes-made/add-changes-made.component';
import { RootCauseOfIncidentComponent } from './root-cause-of-incident/root-cause-of-incident.component';
import { TypeOfIncidentComponent } from './type-of-incident/type-of-incident.component';
import { AddRootCauseOfIncidentComponent } from './root-cause-of-incident/add-root-cause-of-incident/add-root-cause-of-incident.component';
import { AddTypeOfIncidentComponent } from './type-of-incident/add-type-of-incident/add-type-of-incident.component';
import { ManagerComponent } from './manager/manager.component';
import { WHSManagerComponent } from './whs-manager/whs-manager.component';
import { AddWhsManagerComponent } from './whs-manager/add-whs-manager/add-whs-manager.component';
import { AddManagerComponent } from './manager/add-manager/add-manager.component';
import { EditManagerComponent } from './manager/edit-manager/edit-manager.component';
import { EditWhsManagerComponent } from './whs-manager/edit-whs-manager/edit-whs-manager.component';
import{DynamicFormCategoriesComponent}from './dynamic-form-categories/dynamic-form-categories.component'
import { AddFormCategoriesComponent } from './dynamic-form-categories/add-form-categories/add-form-categories.component';

const routes: Routes = [
  {
    path: 'addSite', component: AddSiteInfoComponent, children: [
      { path: 'addSite1', component: AddSiteComponent },
      { path: 'editSite', component: EditSiteComponent }
    ]
  },
  { path: 'addCustomer', component: AddCustomerComponent },
  { path: 'addingCustomer', component: AddingCustComponent },
  { path: 'jobTask', component: JobTaskComponent },
  { path: 'addJobTask', component: AddJobTaskComponent },
  { path: 'addHighRisk', component: AddHighRiskConstructionComponent },
  { path: 'addPPE', component: AddPPEComponent },

  { path: 'highRisk', component: HighRiskConComponent },
  { path: 'licenceAndQual', component: LicenceAndQualComponent },
  { path: 'addLicence', component: AddLicenceComponent },
  { path: 'editLicence', component: EditLicenceComponent },
  { path: 'licenceCat', component: LicenceCatComponent },
  { path: 'addLicenceCat', component: AddLicenceCatComponent },
  { path: 'editLicenceCat', component: EditLicenceCatComponent },
  { path: 'ppeSel', component: PpeSelectComponent },
  { path: 'codeOfpract', component: CodeOfPractComponent },
  { path: 'addCOP', component: AddCOPComponent },
  { path: 'editCOP', component: EditCOPComponent },
  // { path: 'uploadData', component: UploadBulkDataComponent },
  { path: 'projMang', component: ProjectManagerComponent },
  { path: 'hazards', component: IdentifyHazardsComponent },
  { path: 'addHazards', component: AddHazardComponent },
  { path: 'contrlActReq', component: ContrAndActReqComponent },
  { path: 'addContrlActReq', component: AddContrActComponent },
  { path: 'chemical', component: ChemicalComponent },
  { path: 'addChemical', component: AddChemicalComponent },
  { path: 'riskLevel', component: RiskLevelComponent },
  { path: 'addRisk', component: AddRiskLevelComponent },
  { path: 'residual', component: ResidualRiskLevelComponent },
  { path: 'addResidual', component: AddResidualRiskLevelComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'addStaff', component: AddStaffComponent },
  { path: 'editStaff', component: EditStaffComponent },
  { path: 'siteinspectioncategory', component: SiteInspectionCategoryComponent },
  { path: 'addsiteinspection', component: AddSiteInspectionCategoryComponent },
  { path: 'siteinspectiontopic/:id', component: SiteInspectionTopicComponent },
  { path: 'addsiteinspectiontopic/:id', component: AddSiteInspectionTopicComponent },
  { path: 'natureOfIncident', component: NatureOfIncidentComponent },
  { path: 'addAndEditNatureIncident', component: AddAndEditNatureIncidentComponent },
  { path: 'changesMade', component: ChangesMadeComponent },
  { path: 'addChangesMade', component: AddChangesMadeComponent },
  { path: 'rootCauseOfIncident', component: RootCauseOfIncidentComponent },
  { path: 'addRootCauseOfIncident', component: AddRootCauseOfIncidentComponent },
  { path: 'typeOfIncident', component: TypeOfIncidentComponent },
  { path: 'addTypeOfIncident', component: AddTypeOfIncidentComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'addManager', component: AddManagerComponent },
  { path: 'editManager', component: EditManagerComponent },
  { path: 'WHS-Manager', component: WHSManagerComponent },
  { path: 'addWHSManager', component: AddWhsManagerComponent },
  { path: 'editWHSManager', component: EditWhsManagerComponent },
  { path: 'dynamicFormCategories', component: DynamicFormCategoriesComponent },
  { path: 'addFormCategories', component: AddFormCategoriesComponent }

  // { path: 'uploadDataInBulk', component: UploadBulkDataComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteInfoRoutingModule { }
