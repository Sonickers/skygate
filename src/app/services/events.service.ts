import { Injectable } from '@angular/core';
import { EventModel } from '../models/event.model';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private events: EventModel[] = [
    {
      id: 1,
      title: 'Ozzy Osbourne Tour',
      location: 'Kraków Tauron Arena',
      date: '2018-06-26 19:00',
      free: false,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor lacus quis placerat mattis. Vivamus odio ligula, ullamcorper ut mollis vel, feugiat eu leo.',
      price: 125,
      image: 'https://imgc.allpostersimages.com/img/print/posters/ozzy-osbourne-pray_a-G-15093013-0.jpg',
      category: 'Music'
    },
    {
      id: 2,
      title: 'Harry Potter and the Crused Child',
      location: 'London Theatre',
      date: '2018-06-30 17:30',
      free: false,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor lacus quis placerat mattis. Vivamus odio ligula, ullamcorper ut mollis vel, feugiat eu leo.',
      price: 50,
      image: 'https://vignette.wikia.nocookie.net/harrypotter/images/1/14/Harry_Potter_and_the_Cursed_Child_Script_Book_Cover.jpg/revision/latest?cb=20160726165903',
      category: 'Arts'
    },
    {
      id: 3,
      title: 'Nocny Kochanek',
      location: `Pol'and'Rock Festival`,
      date: '2018-08-02 23:00',
      free: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor lacus quis placerat mattis. Vivamus odio ligula, ullamcorper ut mollis vel, feugiat eu leo.',
      price: null,
      image: 'https://www.goingapp.pl/storage/app/uploads/public/596/4ae/b64/thumb_118263_600x350_0_0_crop.jpg',
      category: 'Music'
    },
    {
      id: 4,
      title: 'Florence + The Machine',
      location: `Pol'and'Rock Festival`,
      date: '2018-07-02 22:00',
      free: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor lacus quis placerat mattis. Vivamus odio ligula, ullamcorper ut mollis vel, feugiat eu leo.',
      price: null,
      image: 'http://4.bp.blogspot.com/-jVK3squGoRM/ToF_1JZl4nI/AAAAAAAAAeU/Juo8Z6f0sTg/s1600/fatm-poster-web1.jpg',
      category: 'Music'
    },
    {
      id: 5,
      title: 'Monster Jam',
      location: `Stadion Śląski, Chorzów`,
      date: '2018-08-22 16:00',
      free: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor lacus quis placerat mattis. Vivamus odio ligula, ullamcorper ut mollis vel, feugiat eu leo.',
      price: null,
      image: 'https://www.chesapeakearena.com/assets/img/MonsterJam-event-detail-page-852x626-0343e52490.png',
      category: 'Sport'
    },
  ];

  constructor() { }

  getEvents(): Observable<EventModel[]> {
    return of(this.events);
  }

  getEventsForCategory(category): Observable<EventModel[]> {
    return of(this.events.filter(event => {
      return event.category.toLowerCase() === category.toLowerCase();
    }));
  }

  getEvent(id: number): Observable<EventModel> {
    return of(--id < this.events.length ? this.events[id] : null);
  }
}
