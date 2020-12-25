import { Component, OnInit, Input } from '@angular/core';

import { Launch } from '../Launch';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @Input() launches:Launch[];

  constructor() { }

  ngOnInit(): void {

  }

}
