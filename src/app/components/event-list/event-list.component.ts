import { Component, OnInit } from '@angular/core';
import { EventModel } from '../../models/event.model';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events: EventModel[];

  constructor(
    private eventsService: EventsService,
  ) { }

  ngOnInit() {
    this.events = this.eventsService.events;  
  }

}
