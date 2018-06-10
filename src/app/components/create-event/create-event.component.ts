import { Component, OnInit } from '@angular/core';
import { EventModel } from '../../models/event.model';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  event: EventModel;
  dateObject: any;

  constructor() { }

  ngOnInit() {
    this.event = new EventModel();
  }

  onSubmitEvent() {
    console.log(this.event);
  }

  onDateSelected(dateObject) {
    const { year, month, day } = dateObject;
    this.event.date = `${year}-${month}-${day}`;
  }

  decideClosure(e, dp) {
    const path = e.path.map(p => p.localName);
    if (!path.includes('ngb-datepicker')) {
      dp.close();
    }
  }
}
