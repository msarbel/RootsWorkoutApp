import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Chart } from 'chart.js';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;

  barChart: any;
  doughnutChart: any;
  lineChart: any;

  constructor(public navCtrl: NavController) {

  }

  /* Creation of charts below
  Wanted to get user input to directly change the charts
  Currently the data is hardcoded
  */

  ionViewDidLoad() {

      this.barChart = new Chart(this.barCanvas.nativeElement, {

          type: 'bar',
          data: {
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
              datasets: [{
                  label: 'Bodyfat Percentage',
                  data: [21, 20, 20.5, 20.5, 19.75, 19.5],
                  backgroundColor: [
                      'rgb(212, 167, 106)',
                      'rgb(212, 167, 106)',
                      'rgb(212, 167, 106)',
                      'rgb(212, 167, 106)',
                      'rgb(212, 167, 106)',
                      'rgb(212, 167, 106)'
                  ],
                  borderColor: [
                      'rgba(255,99,132,1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true
                      }
                  }]
              }
          }

      });

      this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

          type: 'doughnut',
          data: {
              labels: ["Squat", "Bench", "Deadlift"],
              datasets: [{
                  label: 'Total in pounds ',
                  data: [430, 275, 503],
                  backgroundColor: [
                      'rgb(170, 121, 57)',
                      'rgb(41, 79, 109)',
                      'rgb(52, 52, 119)'

                  ],
                  hoverBackgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"

                  ]
              }]
          }

      });

      this.lineChart = new Chart(this.lineCanvas.nativeElement, {

          type: 'line',
          data: {
              labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              datasets: [
                  {
                      label: "Weekly caloric intake",
                      fill: true,
                      lineTension: 0.1,
                      backgroundColor: "rgb(212, 167, 106)",
                      borderColor: "rgb(170, 121, 57)",
                      borderCapStyle: 'butt',
                      borderDash: [],
                      borderDashOffset: 0.0,
                      borderJoinStyle: 'miter',
                      pointBorderColor: "rgba(75,192,192,1)",
                      pointBackgroundColor: "#fff",
                      pointBorderWidth: 1,
                      pointHoverRadius: 5,
                      pointHoverBackgroundColor: "rgba(75,192,192,1)",
                      pointHoverBorderColor: "rgba(220,220,220,1)",
                      pointHoverBorderWidth: 2,
                      pointRadius: 1,
                      pointHitRadius: 10,
                      data: [2185, 2254, 2150, 1975, 2543, 2132, 1954],
                      spanGaps: false,
                  }
              ]
          }

      });

  }



}
