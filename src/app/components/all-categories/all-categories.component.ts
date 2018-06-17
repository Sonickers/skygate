import { Component, OnInit } from '@angular/core';
import { EventModel } from '../../models/event.model';
import { EventsService } from '../../services/events.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.scss']
})
export class AllCategoriesComponent implements OnInit {
  currentCategory: string;
  isDropdownOpen: boolean;
  events: Observable<EventModel[]>;

  constructor(private eventsService: EventsService) {}

  ngOnInit() {
    this.currentCategory = null;
    this.getAllEvents();
    this.isDropdownOpen = false;
  }

  getAllEvents() {
    this.events = this.eventsService.getEvents();
  }

  getEventsByCategory(category: string) {
    this.events = this.eventsService
      .getEventsForCategory(category);
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
