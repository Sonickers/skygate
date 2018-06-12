import { Component, OnInit } from '@angular/core';
import { EventModel } from '../../models/event.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventsService } from '../../services/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private eventsService: EventsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.makeForm();
  }

  makeForm() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      location: ['', Validators.required],
      organizer: ['', Validators.required],
      poster: '',
      date: ['', Validators.required],
      category: ['Music', Validators.required],
      description: '',
    });
  }

  onSubmitEvent() {
    const formValues = this.form.value;
    formValues.date = `${formValues.date.year}-${formValues.date.month}-${formValues.date.day}`;
    const event: EventModel = formValues;

    this.eventsService.addEvent(event).subscribe(
      res => {
        if (res) {
          this.router.navigate(['/']);
        }
      }
    );
  }

  decideClosure(event, datepicker) {
    const path = event.path.map(p => p.localName);
    if (!path.includes('ngb-datepicker')) {
      datepicker.close();
    }
  }
}
