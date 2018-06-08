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

  constructor(
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    this.currentCategory = null;
    this.getAllEvents();
  }

  getAllEvents() {
    this.eventsService.getEvents().subscribe(events => this.events = events);
  }

  getEventsByCategory(category: string) {
    this.eventsService.getEventsForCategory(category)
      .subscribe(events => this.events = events);
  }

  onCategorySelect(category: string) {
    this.currentCategory = category;

    if (category !== null) {
      this.getEventsByCategory(category);
    } else {
      this.getAllEvents();
    }
  }

}
