import { Component, OnInit } from '@angular/core';
import { EventModel } from '../../models/event.model';
import { EventsService } from '../../services/events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  events: EventModel[];

  constructor(
    private eventsService: EventsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.eventsService.searchEvents(params.phrase, params.location).subscribe(events => {
        this.events = events;
      });
    });
  }

}
