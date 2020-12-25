import { Component, OnInit, Input } from '@angular/core';

import { Launch } from '../Launch'

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['../timeline/timeline.component.css','./timeline-item.component.css']
})
export class TimelineItemComponent implements OnInit {

  @Input() launch:Launch;

  constructor() { }

  ngOnInit(): void {
  }

}
