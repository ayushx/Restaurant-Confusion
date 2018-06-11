import { Component, OnInit } from '@angular/core';

import {Leadership} from '../shared/leadership';
import {LEADERSHIP} from '../shared/leaderships';
import { LeadershipService } from '../services/leadership.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  leader : Leadership[];

  constructor(
  private leadershipService:LeadershipService
  ) { }

  ngOnInit() {
    this.leader=this.leadershipService.getLeadership();
  }

}
