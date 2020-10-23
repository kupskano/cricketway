import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('barChart') barChart;


  bars: any;
  colorArray: any;

  constructor(
    private router: Router,
    private loadingController: LoadingController
  ) {}

  ionViewDidEnter() {
    this.createBarChart();
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement,{
      type: 'doughnut',
      data: {
        // labels: ["Green", "Blue", "Gray", "Purple", "Yellow", "Red", "Black"],
        datasets: [{
          backgroundColor: [
            "#2ecc71",
            "#3498db",
            "#95a5a6",
            "#9b59b6",
            "#f1c40f",
            "#e74c3c",
            "#34495e"
          ],
          data: [12, 19, 3, 17, 28, 24, 7]
        }]
      }
    });
     }



     firsttwocards = [
       {
         "id": 1,
         "title": "Basics",
         "subtitle": "Definition",
         "content": "Cricket is played between two teams of 11 players on each side. Matches are officiated over by two umpires. Their decisions in the game are final."
       },
       {
        "id": 2,
        "title": "Match",
        "subtitle": "Definition",
        "content": "Test match: This is the longest match type; it could potentially last up to five days. ",
        "type1": "Test Match",
        "type1desc": "This is the longest match type; it could potentially last up to five days. Both teams will go through their batting lineup twice for a total of four innings. For reference, one innings (yes, that term is singular and plural) can last for roughly a day. A test match will feature 90 overs; an over refers to six bowls or pitches that a bowler (the guy throwing the ball) delivers.",
        "type2": "One-day match",
        "type2desc": "As the name suggests, this type of match will only last a day. Each team bats once with 50 overs each.",
        "type3": "Twenty20",
        "type3desc": "This is the quickest match type. Each team only faces 20 overs, so matches can end within three hours."
      }
     ]

     twocards(firsttwocard) {
       console.log(firsttwocard)
       this.loadingController.create({
         duration: 2000,
         message: 'Please wait...'
       }).then((load) => {
         load.present();
         load.onDidDismiss().then(() => {
           this.router.navigate(['/firsttwocard-details', {
              'id': firsttwocard.id,
              'title': firsttwocard.title,
              'subtitle': firsttwocard.subtitle,
              'content': firsttwocard.content,
              'type1': firsttwocard.type1,
              'type1desc': firsttwocard.type1desc,
              'type2': firsttwocard.type2,
              'type2desc': firsttwocard.type2desc,
              'type3': firsttwocard.type3,
              'type3desc': firsttwocard.type3desc
           }
          ])
         });
       })
       
     }

}
