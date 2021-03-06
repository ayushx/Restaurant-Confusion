import { Injectable } from '@angular/core';

import { Promotion } from "../shared/promotion";
import { PROMOTIONS } from "../shared/promotions"; 

@Injectable()
export class PromotionService {

  constructor() { }

  getPromotions() : Promotion[] {
    return PROMOTIONS;
  }
   
  getPromotion(id:number):Promotion{
    return PROMOTIONS.filter((Prom)=>(Prom.id===id))[0];
  }

  getFeaturedPromotion():Promotion{
    return PROMOTIONS.filter((Prom)=>(Prom.featured))[0];
  }

}
