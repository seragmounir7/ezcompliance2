import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import 'chart.piecelabel.js';
import { NgxSpinnerService } from 'ngx-spinner';
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  // Doughnut

  
  corrAct=[
  {Item:'Incorrect Singage',Action:'Install correct singage',personResposibility:'Tim Smith',date:'11-01-22'},
  {Item:'PPE not issued',Action:'issue PPE',personResposibility:'John Hunt',date:'11-01-22'},
  {Item:'Staff to be inducted',Action:'Induct new staff members',personResposibility:'John Hunt',date:'11-01-22'}
]

expRem=[
  {name:'Tim Smith',type:'driver Licence',expdate:'10-01-2022'},
  {name:'Bob Green',type:'Security Licence',expdate:'19-01-2022'},
  {name:'John Hunt',type:'EWP Licence',expdate:'22-01-2022'},
  {name:'Thomas Do',type:'Electrical Licence',expdate:'01-02-2022'},
  {name:'Mark jones',type:'EWP Licence',expdate:'06-02-2022'},
  {name:'Mick Smart',type:'COVID Vacs Passport',expdate:'07-03-2022'},
  {name:'Phil Collins',type:'Driver Licence',expdate:'10-03-2022'},
  {name:'Steve Carol',type:'Police Check',expdate:'11-03-2022'},
]

auditAndForm=[
  {audit:'Take 5',quantity:'20'},
  {audit:'site Induction',quantity:'15'},
  {audit:'Safety Meetings',quantity:'4'},
  {audit:'Site Inspections',quantity:'6'},
  {audit:'Plant Inspections',quantity:'5'},
  {audit:'Corrective Actions',quantity:'5'},
  {audit:'Return to work plan',quantity:'1'},
  {audit:'Vehicle Inspections',quantity:'12'},
  {audit:'Permit to Work',quantity:'4'}

]

  public doughnutChartLabels: Label[] = ['Near Miss', 'Incident', 'Hazard'];
  public doughnutChartLabels1: Label[] = [];
  public doughnutChartData: MultiDataSet = [[350, 450, 100]];
  public doughnutChartData1: MultiDataSet = [[20, 27, 53]];
  public doughnutChartData2: MultiDataSet = [[15, 35, 50]];
  public doughnutChartData3: MultiDataSet = [[10, 0, 90]];
  public doughnutChartData4: MultiDataSet = [[0, 0, 100]];

  public doughnutChartColor = [
    {
      backgroundColor: [
        // 'rgba(110, 114, 20, 1)',
        // 'rgba(118, 183, 172, 1)',
        'rgba(211,211,211, 0.8)', //near miss
        'rgba(0, 0, 128, 0.8)',//incident
        'rgba(199,20,55,1)', //hazard
      ],
    },
  ];
  // public horiztChartColor = [
  //   {
  //     backgroundColor: [
  //       // 'rgba(110, 114, 20, 1)',
  //       'rgba(118, 183, 172, 1)',

  //     ],
  //   },
  // ];
  public horiztChartColor: Color[] = [
    {
      backgroundColor: [
        // 'rgba(200, 0, 0, 0.4)',
        // 'rgba(200, 0, 0, 0.6)',
        // 'rgba(200, 0, 0, 0.8)',
        'rgba(199,20,55,0.4)',
        'rgba(199,20,55,0.6)',
        'rgba(199,20,55,0.8)',
        'rgba(199,20,55,1)',
      ],
    },
  ];
  public barChartColor: Color[] = [
    { backgroundColor: 'rgba(211,211,211, 0.8)' },
    { backgroundColor: 'rgba(0, 0, 128, 0.8)' },
    { backgroundColor: 'rgba(199,20,55,1)' },

        // new DashBoard 
    // { backgroundColor: 'rgb(63, 127, 191)' },

  ];

  // public barChartColor=[
  //   {
  //    backgroundColor: [
  //   // 'rgba(110, 114, 20, 1)',
  //   'rgba(118, 183, 172, 1)',

  //    'rgba(118, 183, 172, 1)',
  //    'rgba(0, 148, 97, 1)',
  //    ]
  //    }
  //    ];
  public doughnutChartType: ChartType = 'doughnut';

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [
    'Location1',
    'Location3',
    'Location5',
    'Location7',

        // new DashBoard 
    // 'Abrasion',
    // 'Amputation',
    // 'Broken Bone',
    // 'Bruise',
    // 'Burn',
    // 'Crushing Injury',
    // 'Cuts',
    // 'Head Injury',
    // 'Hernia',
    // 'Illness',
    // 'Other',
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [55, 59, 80, 81, 56, 55, 40], label: 'Near miss' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Incident' },
    { data: [18, 28, 20, 49, 36, 37, 50], label: 'Hazard' },

    // new DashBoard 
    // { data: [10,0,1,10,2,1,7,1,1,1,3], label: 'Type of Injuries' },

  ];

  ////horizontal chart
  public barChartTypeH: ChartType = 'horizontalBar';
  public barChartLegendH = true;

  public barChartDataH: ChartDataSets[] = [
    { data: [70, 15, 10, 5], label: 'Safety Consequences', stack: 'a' },
    // { data: [1, 2, 3], label: 'Accepted', stack: 'a' },
    // { data: [1, 2, 3], label: 'Open', stack: 'a' },
    // { data: [1, 2, 3], label: 'In Progress', stack: 'a' },
  ];
  public barChartLabelsH: string[] = [
    'Insignificant',
    'No Imapact',
    'Minor',
    'Moderate',
  ];
  formShow: any;

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  ///AGM angular google map

  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  markers: marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      draggable: true,
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false,
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true,
    },
  ];
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);

    // console.log('Checking Arr=> ',this.arr);

  }

  public chartOptions: any = {
    labels: {
      render: 'percentage',
    },
  };
  slideChanged(event){
 this.formShow=event.checked
 
  }
}
