import { Component, OnInit } from '@angular/core';

import { Dishandcomment } from '../shared/dishandcomment';
import { DishinfoService } from '../services/dishinfo.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
// import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish : Dishandcomment;
  promotion : Promotion;

  constructor(
    private dishinfoService:DishinfoService,
    private promotionService:PromotionService
      ) { }

  ngOnInit() {
    this.dish =this.dishinfoService.getFeaturedDish();
    this.promotion = this.promotionService.getFeaturedPromotion();
  }

}
