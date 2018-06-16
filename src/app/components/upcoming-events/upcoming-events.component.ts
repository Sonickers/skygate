import { Component, OnInit } from "@angular/core";
import { EventsService } from "../../services/events.service";
import { EventModel } from "../../models/event.model";

@Component({
  selector: "app-upcoming-events",
  templateUrl: "./upcoming-events.component.html",
  styleUrls: ["./upcoming-events.component.scss"]
})
export class UpcomingEventsComponent implements OnInit {
  events: EventModel[];

  constructor(private eventsService: EventsService) {}

  ngOnInit() {
    this.eventsService.getUpcomingEvents().subscribe(events => {
      this.events = events.splice(0, 4);
    });
  }
}
