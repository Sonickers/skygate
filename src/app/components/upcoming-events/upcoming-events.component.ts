import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { EventModel } from '../../models/event.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.scss']
})
export class UpcomingEventsComponent implements OnInit {
  events: Observable<EventModel[]>;

  constructor(private eventsService: EventsService) {}

  ngOnInit() {
    this.events = this.eventsService.getUpcomingEvents();
  }
}
