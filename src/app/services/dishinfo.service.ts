import { Injectable } from '@angular/core';
import { Dishandcomment } from "../shared/dishandcomment";
import { MENUDATA } from "../shared/dishdata"; 
import { Dish } from '../shared/dish';
import { MenuComponent } from '../menu/menu.component';

@Injectable()
export class DishinfoService {

  constructor() {   }

  getDishes() : Dishandcomment[] {
    return MENUDATA;
  }
   
  getDish(id:number):Dishandcomment{
    return MENUDATA.filter((Dish)=>(Dish.id===id))[0];
  }

  getFeaturedDish():Dishandcomment{
    return MENUDATA.filter((Dish)=>(Dish.featured))[0];
  }

} 
