import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup , FormArray } from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-risk-assessment-swms',
  templateUrl: './risk-assessment-swms.component.html',
  styleUrls: ['./risk-assessment-swms.component.scss']
})
export class RiskAssessmentSWMSComponent implements OnInit {
  riskAssessmentFb!: FormGroup;
  SWMSTab!:FormArray;
  RiskAssessment=true;
  SWMSShow=false;
//checkboxes array
jobTask=[
  { label:"Activities Involving chemicals", value:""},
  { label:"Assess Hazards", value:""},
  { label:"Cable installation into cables tray", value:""},
  { label:"Cable Support installation", value:""},
  { label:"Camera Installation", value:""},
  { label:"conduit Installation in ceiling or walls", value:""},
  { label:"Conduit installation in trench", value:""},
  { label:"conduit installation prior to concreate Pour", value:""},
  { label:"Control Panel Installation", value:""},
  { label:"Heat Shrinking cable joints", value:""},
  { label:"Hot Works", value:""},
  { label:"Installation of cables", value:""},
  { label:"Leaving Site", value:""},
  { label:"Maual Handling", value:""},
  { label:"Site establishment", value:""},
  { label:"Terminination of fibre optic cables", value:""},
  { label:"Use of Elevated Work Platform", value:""},
  { label:"Use of EWP", value:""},
  { label:"Use of Ladders", value:""},
  { label:"Use of Plant & Equipment", value:""},
  { label:"Use of plant Equipment", value:""},
  { label:"Working false ceilings", value:""},
  { label:"Working in communication pits less than 1.5m deep", value:""},
  { label:"Working near around Pedistrians", value:""},
  { label:"Working near Asbestos", value:""},
  { label:"Working near Lead containing materials", value:""},
  { label:"Working outdoors", value:""},
  { label:"Working with hand and power tools", value:""}
 
]

highRiskConstruction=[
  { label:"Working in or near trenches or shafts deeper than 1.5metres", value:""},
  { label:"Work in or near a confined space", value:""},
  { label:"Work in an area that may have a contaminated or flammable atmosphere", value:""},
  { label:"Working around or near mobile plant", value:""},
  { label:"Work with near or near asbestos", value:""},
  { label:"Working with hazardous substances", value:""},
  { label:"Working with or near tilt-up/precast concrete", value:""},
  { label:"Risk of falls higher than 2 metres", value:""},
  { label:"Working near on or adjacent to a road or rail corridor", value:""},
  { label:"Working on or near telecommunication tower", value:""},
  { label:"Working on or near telecommunication tower", value:""},
  { label:"Work near explosives", value:""},
  { label:"Work in or near water or other liquid that involves a risk of drowning", value:""},
  { label:"Demolition of load-bearing structure", value:""},
  { label:"Diving work", value:""}
]

PPEselection=[
  { label:"Disposable dust mask", value:""},
  { label:"Dust Mas", value:""},
  { label:"Face shield", value:""},
  { label:"Full face respirator", value:""},
  { label:"Gttors", value:""},
  { label:"Half face respirator", value:""},
  { label:"Hard Hat", value:""},
  { label:"Hearing protection", value:""},
  { label:"High-Vis Clothing", value:""},
  { label:"Lock Out Tags", value:""},
  { label:"Long sleeve/Long pants", value:""},
  { label:"Out of Service Tags", value:""},
  { label:"Protective gloves", value:""},
  { label:"Rescue kit", value:""},
  { label:"Safety boots", value:""},
  { label:"Safety glasses", value:""},
  { label:"Sun Screen", value:""},
  { label:"torch", value:""},
  { label:"Wide Brim Hat", value:""},
]

licenseAndQualification=[
  { label:"Open Cable Licence", value:""},
  { label:"White Card", value:""},
  { label:"EWP Licence", value:""},
  { label:"Working At Heights", value:""},
  { label:"Security Licence", value:""},
  { label:"Asbestos Awarness", value:""},
  { label:"Working In Confined Space", value:""}
  
]

highRiskConstruction2=[
  { label:"Working in or near trenches or shafts deeper than 1.5metres", value:""},
  { label:"Work in or near a confined space", value:""},
  { label:"Work in an area that may have a contaminated or flammable atmosphere", value:""},
  { label:"Working around or near mobile plant", value:""},
  { label:"Work with near or near asbestos", value:""},
  { label:"Working with hazardous substances", value:""},
  { label:"Working with or near tilt-up/precast concrete", value:""},
  { label:"Risk of falls higher than 2 metres", value:""},
  { label:"Working near on or adjacent to a road or rail corridor", value:""},
  { label:"Working on or near telecommunication tower", value:""},
  { label:"Working on or near telecommunication tower", value:""},
  { label:"Work near explosives", value:""},
  { label:"Work in or near water or other liquid that involves a risk of drowning", value:""},
  { label:"Demolition of load-bearing structure", value:""},
  { label:"Diving work", value:""}
]

PPEselection2=[
  { label:"Disposable dust mask", value:""},
  { label:"Dust Mas", value:""},
  { label:"Face shield", value:""},
  { label:"Full face respirator", value:""},
  { label:"Gttors", value:""},
  { label:"Half face respirator", value:""},
  { label:"Hard Hat", value:""},
  { label:"Hearing protection", value:""},
  { label:"High-Vis Clothing", value:""},
  { label:"Lock Out Tags", value:""},
  { label:"Long sleeve/Long pants", value:""},
  { label:"Out of Service Tags", value:""},
  { label:"Protective gloves", value:""},
  { label:"Rescue kit", value:""},
  { label:"Safety boots", value:""},
  { label:"Safety glasses", value:""},
  { label:"Sun Screen", value:""},
  { label:"torch", value:""},
  { label:"Wide Brim Hat", value:""},
]

  @ViewChild('Signature1') signaturePad1: SignaturePad;
  @ViewChild('Signature2') signaturePad2: SignaturePad;
  constructor(private fb: FormBuilder) { 
    
    this.riskAssessmentFb=this.fb.group({
      SWMSTab: this.fb.array([]),
      chemicalsActivitie:[''],
      assessHazards:[''],
      CableInstallation:[''],
      CableSupport:[''],
      CameraInstallation:[''],
      conduitCeilingWalls:[''],
      ConduitTrench:[''],
      conduitPour:[''],
      ControlPanelInstallation:[''],
      HeatShrinkingJoints:[''],
        HotWorks:[''],
        InstallationCables:[''],
        LeavingSite:[''],
        MaualHandling:[''],
        SiteEstablishment:[''],
        fibreOpticCables:[''],
        ElevatedWorkPlatform:[''],
        EWP:[''],
        UseLadders:[''],
        PlantAndEquipment:[''],
        plantequipment :[''],
        falseCeilings:[''],
        WorkingCommunication :[''],
        WorkingNearPedistrian :[''],
        WorkingNearAsbestos :[''],
        LeadContainingMaterials:[''],
        WorkingOutdoor:[''],
        WorkingHandPowertools:[''],
        trenchesShaftsDeeper:[''],
        nearConfinedSpace:[''],
        areaFlammableAtmosphere :[''],
        mobilePlant:[''],
        nearAsbestos:[''],
        hazardousSubstances :[''],
        tiltUpPrecastConcrete :[''],
        RiskFallsHigher:[''],
        adjacentRoadRail:[''],
        telecommunicationTower:[''],
        pressuredGasLinesPipes:[''],
        WorkNearExplosives:[''],
        areasArtificialTemperature:[''],
        liquidRiskDrowning:[''],
        demolitionStructure:[''],
        divingWork:[''],
        disposableDustMask:[''],
        dustMask:[''],
        faceShield:[''],
        EvacuationPlans :[''],
        faceRespirator:[''],
        Gttors:[''],
        halfFaceRespirator:[''],
        hardHat:[''],
        hearingProtection:[''],
        highVisClothing:[''],
        lockTags:[''],
        longSleevePants:[''],
        outServiceTags:[''],
        protectiveGloves:[''],
        rescueKit:[''],
        safetyBoots :[''],
        SafetyGlasses:[''],
        sunScreen:[''],
        torch:[''],
        wideBrimHat:[''],
        cableLicence:[''],
        whiteCard:[''],
        EWPLicence :[''],
        workingHeights:[''],
        asbestosAwarness:[''],
        confinedSpace :[''],
        Torch:[''],
        securityLicence:[''],
        Employee1:[''],
        dateTime:[''],
    })
  }
  

 
  ngOnInit(): void {
  }
  

 
  
  showsite(){
    this.RiskAssessment=true
    this.SWMSShow=false
  }
  showAction(){
this.SWMSShow=true
    this.RiskAssessment=false
  }
  public signaturePadOptions1: Object = {
    // passed through to szimek/signature_pad constructor
    minWidth: 1,
    canvasWidth: 450,
    canvasHeight: 100,
  };
  public signaturePadOptions2: Object = {
    // passed through to szimek/signature_pad constructor
    minWidth: 1,
    canvasWidth: 430,
    canvasHeight: 100,
  };

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad1.set('minWidth', 1); // set szimek/signature_pad options at runtime
    this.signaturePad2.set('minWidth', 1); // set szimek/signature_pad options at runtime
    this.signaturePad1.clear(); // invoke functions from szimek/signature_pad API
    this.signaturePad2.clear(); // invoke functions from szimek/signature_pad API
    console.log('clear1 &2');

  }

  drawComplete1() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad1.toDataURL());
  }
  clear1() {
    console.log('clear1');

    this.signaturePad1.clear();
  }
  drawStart1() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }
  drawComplete2() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad2.toDataURL());
  }
  clear2() {
    console.log('clear2');

    this.signaturePad2.clear();
  }
  drawStart2() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }
  

}
