import { Component, OnInit } from '@angular/core';
import { EventModel } from '../../models/event.model';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  event: EventModel;

  constructor() { }

  ngOnInit() {
    this.event = new EventModel();
    console.log(this.event);
  }

  onSubmitEvent() {
    console.log(this.event);
  }

}
