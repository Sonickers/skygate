import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { EventModel } from '../../models/event.model';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  event: EventModel;

  constructor(
    private route: ActivatedRoute,
    private eventsService: EventsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.eventsService.getEvent(+params.id).subscribe(
          event => {
            console.log(event);
            this.event = event;
          }
        );
      }
    );
  }

  getCategoryClass() {
    return this.event
      ? `event-${this.event.category.toLowerCase()}`
      : '';
  }

  removeEvent() {
    const choice = confirm('Are you sure?');

    if (choice) {
      this.eventsService.removeEvent(this.event.id).subscribe((res: boolean) => {
        if (res) {
          this.router.navigate(['/']);
        }
      });
    }
  }

}
