import { Component, OnInit } from '@angular/core';

// import {MENUDATA} from '../shared/dishdata'; 
import { Dishandcomment } from '../shared/dishandcomment';

import { DishinfoService } from '../services/dishinfo.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  
  dishes: Dishandcomment[];
  selectedDish :Dishandcomment;

  constructor(private dishinfoService : DishinfoService ) { }

  ngOnInit() {
    this.dishes = this.dishinfoService.getDishes();
  }

     onSelect(dish: Dishandcomment) {
     this.selectedDish = dish;
   }

}
