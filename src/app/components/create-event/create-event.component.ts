import { Component, OnInit } from '@angular/core';
import { EventModel } from '../../models/event.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventsService } from '../../services/events.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  form: FormGroup;
  editing = false;
  editId: number;

  constructor(
    private formBuilder: FormBuilder,
    private eventsService: EventsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.makeForm();
  }

  makeForm() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editing = true;
        this.eventsService.getEvent(+params.id).subscribe(event => {
          const eventDate = moment(event.date);
          const dateObj = {
            year: eventDate.get('year'),
            month: eventDate.get('month') + 1,
            day: eventDate.get('date')
          };

          this.editId = event.id;
          this.form = this.formBuilder.group({
            title: [event.title, Validators.required],
            location: [event.location, Validators.required],
            organizer: [event.organizer, Validators.required],
            poster: event.poster,
            date: [dateObj, Validators.required],
            category: [event.category, Validators.required],
            description: event.description
          });
        });
      } else {
        this.form = this.formBuilder.group({
          title: ['', Validators.required],
          location: ['', Validators.required],
          organizer: ['', Validators.required],
          poster: '',
          date: ['', Validators.required],
          category: ['Music', Validators.required],
          description: ''
        });
      }
    });
  }

  onSubmitEvent(e) {
    e.preventDefault();

    const formValues = this.form.value;
    formValues.date = this.formatDate(formValues.date);
    const event: EventModel = formValues;

    if (this.editing) {
      event.id = this.editId;
      this.eventsService.editEvent(event).subscribe(res => {
        if (res) {
          this.router.navigate(['/event', this.editId]);
        }
      });
    } else {
      this.eventsService.addEvent(event).subscribe(res => {
        if (res) {
          this.router.navigate(['/']);
        }
      });
    }
  }

  cancelCreateEdit() {
    if (this.editing) {
      this.router.navigate(['/event', this.editId]);
    } else {
      this.router.navigate(['/']);
    }
  }

  formatDate(dateObject: { year: number; month: number; day: number }) {
    const year = dateObject.year;
    const month = `${dateObject.month}`.padStart(2, '0');
    const day = `${dateObject.day}`.padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  decideClosure(event, datepicker) {
    const path = event.path.map(p => p.localName);
    if (!path.includes('ngb-datepicker')) {
      datepicker.close();
    }
  }
}
