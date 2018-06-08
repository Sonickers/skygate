import { Component, OnInit, Input } from '@angular/core';

import { EventModel } from '../../models/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  @Input() events: EventModel[];

  constructor(
  ) { }

  ngOnInit() {
  }

}
