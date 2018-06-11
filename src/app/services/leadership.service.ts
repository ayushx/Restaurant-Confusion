import { Injectable } from '@angular/core';

import {Leadership} from '../shared/leadership';
import {LEADERSHIP} from '../shared/leaderships';

@Injectable()
export class LeadershipService {

  constructor() { }

  getLeadership():Leadership[]{
    return LEADERSHIP;
  }
  
}
