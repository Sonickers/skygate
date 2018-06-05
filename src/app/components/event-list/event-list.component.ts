import { Component, OnInit } from '@angular/core';

import { EventModel } from '../../models/event.model';
import { EventsService } from '../../services/events.service';
import { categories } from '../../models/categories';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events: EventModel[];
  category: String;
  categories: String[];

  constructor(
    private eventsService: EventsService,
  ) { }

  ngOnInit() {
    this.category = null;
    this.categories = categories;
    this.getAllEvents();
  }

  getAllEvents() {
    this.eventsService.getEvents().then(events => {
      this.events = events;
    });
  }

  onSelectCategory() {
    if (this.category !== null) {
      this.eventsService.getEventsForCategory(this.category).then(events => {
        this.events = events;
      });
    } else {
      this.getAllEvents();
    }
  }

}
