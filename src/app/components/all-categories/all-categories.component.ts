import { Component, OnInit } from '@angular/core';
import { EventModel } from '../../models/event.model';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.scss']
})
export class AllCategoriesComponent implements OnInit {
  currentCategory: string;
  events: EventModel[];
  total: number;

  constructor(private eventsService: EventsService) {}

  ngOnInit() {
    this.currentCategory = null;
    this.getAllEvents();
  }

  getAllEvents() {
    this.eventsService.getEvents().subscribe(events => {
      this.total = events.length;
      this.events = events.slice(0, 8);
    });
  }

  getEventsByCategory(category: string) {
    this.eventsService
      .getEventsForCategory(category)
      .subscribe(events => (this.events = events));
  }

  onCategorySelect(category: string) {
    this.currentCategory = category;

    if (category !== null) {
      this.getEventsByCategory(category);
    } else {
      this.getAllEvents();
    }
  }

  showAllEvents() {
    this.eventsService.getEvents().subscribe(events => (this.events = events));
  }
}
