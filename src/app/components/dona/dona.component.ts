import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: ``
})
export class DonaComponent {

  @Input() title: string = 'Sin titulo';

  // Doughnut
  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  @Input('dataChar') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ 
        data: [350, 450, 100],
        backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ],
        hoverBackgroundColor: ['#6857E6','#009FEE','#F02059'],
        hoverBorderColor:['#000000','#000000','#00000003']
      },
//      { data: [50, 150, 120] },
//      { data: [250, 130, 70] },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';
}
