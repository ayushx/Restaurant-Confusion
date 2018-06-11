import { Component, OnInit } from '@angular/core';

  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';

  import { FormsModule } from '@angular/forms';
  import { HttpModule } from '@angular/http';

  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { MaterialModule } from '@angular/material'; 
  import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
