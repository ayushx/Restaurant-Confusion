//this is used to show detail of sellectd dish using on click function and @input function in dishdetail.ts
//import { Component, OnInit, Input } from '@angular/core';

import { Component, OnInit } from '@angular/core';

import { Dishandcomment } from '../shared/dishandcomment';
// import {MENUDATA} from '../shared/dishdata'; 

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DishinfoService } from '../services/dishinfo.service';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  // this is used to show detail of sellectd dish using on click function and @input function in dishdetail.ts
  // @Input()
  // dish: Dishandcomment;

  dish: Dishandcomment;

  constructor(private dishservices:DishinfoService,
        private route: ActivatedRoute,
        private location:Location) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.dish = this.dishservices.getDish(id);
  }
  
  goBack(): void {
    this.location.back();
  }


}
 