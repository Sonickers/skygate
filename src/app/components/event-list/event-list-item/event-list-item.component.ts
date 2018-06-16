import { Component, Input } from "@angular/core";
import { EventModel } from "../../../models/event.model";
import * as moment from "moment";

@Component({
  selector: "app-event-list-item",
  templateUrl: "./event-list-item.component.html",
  styleUrls: ["./event-list-item.component.scss"]
})
export class EventListItemComponent {
  @Input() event: EventModel;

  calcTimeToEvent(): string {
    const eventMoment = moment(this.event.date);
    const now = moment();
    const days = Math.ceil(eventMoment.diff(now, "days", true));

    if (days > 0) {
      return days === 1 ? `Today` : `In ${days} days`;
    } else {
      return "Event over";
    }
  }
}
