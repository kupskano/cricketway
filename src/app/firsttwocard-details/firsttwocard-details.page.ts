import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-firsttwocard-details',
  templateUrl: './firsttwocard-details.page.html',
  styleUrls: ['./firsttwocard-details.page.scss'],
})
export class FirsttwocardDetailsPage implements OnInit {
  id: any;
  title: any;
  subtitle: any;
  content: any;
  type1: any;
  type1desc: any;
  type2: any;
  type2desc: any;
  type3: any;
  type3desc: any;

  constructor(
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {


    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.title = this.actRoute.snapshot.paramMap.get('title');
    this.subtitle = this.actRoute.snapshot.paramMap.get('subtitle');
    this.content = this.actRoute.snapshot.paramMap.get('content');
    this.type1 = this.actRoute.snapshot.paramMap.get('type1');
    this
  }

}
