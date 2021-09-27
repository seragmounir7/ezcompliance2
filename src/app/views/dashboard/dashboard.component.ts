import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import 'chart.piecelabel.js';

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
        'rgba(128, 128, 128, 0.8)',
        'rgba(0, 0, 128, 0.8)',
        'rgba(150, 0, 0, 1)',
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
    { backgroundColor: [
      'rgba(200, 0, 0, 0.4)',
      'rgba(200, 0, 0, 0.6)',
      'rgba(200, 0, 0, 0.8)',
      'rgba(200, 0, 0, 1)',
     
    ]},
  
  ]
  public barChartColor: Color[] = [
    { backgroundColor:'rgba(128, 128, 128, 0.8)'},
    { backgroundColor: 'rgba(0, 0, 128, 0.8)',},
    { backgroundColor: 'rgba(150, 0, 0, 1)'},
  ]

    
  
  
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
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [55, 59, 80, 81, 56, 55, 40], label: 'Near miss' },
    { data: [28, 48, 40, 19, 86, 27, 90], label:  'Incident'},
    { data: [18, 28, 20, 49, 36, 37, 50], label: 'Hazard' },
  ];

  ////horizontal chart
  public barChartTypeH: ChartType = 'horizontalBar';
  public barChartLegendH = true;

  public barChartDataH: ChartDataSets[] = [
    { data: [70,15 ,10, 5], label: 'Safety Consequences', stack: 'a' },
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
  constructor() {}

  ngOnInit() {}
  public chartOptions: any = {
    labels: {
      render: 'percentage'      
    }
  }
}
