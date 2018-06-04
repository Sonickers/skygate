import { Injectable } from '@angular/core';
import { EventModel } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  events: EventModel[] = [
    {
      title: 'Ozzy Osbourne Tour',
      location: 'Kraków Tauron Arena',
      date: '2018-06-26 19:00',
      free: false,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor lacus quis placerat mattis. Vivamus odio ligula, ullamcorper ut mollis vel, feugiat eu leo.',
      price: 125,
      image: 'https://imgc.allpostersimages.com/img/print/posters/ozzy-osbourne-pray_a-G-15093013-0.jpg',
      tags: [
        'Metal',
        'Legend',
        'Music',
        'Concert',
      ]
    },
    {
      title: 'Harry Potter and the Crused Child',
      location: 'London Theatre',
      date: '2018-06-30 17:30',
      free: false,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor lacus quis placerat mattis. Vivamus odio ligula, ullamcorper ut mollis vel, feugiat eu leo.',
      price: 50,
      image: 'https://vignette.wikia.nocookie.net/harrypotter/images/1/14/Harry_Potter_and_the_Cursed_Child_Script_Book_Cover.jpg/revision/latest?cb=20160726165903',
      tags: [
        'Fantasy',
        'Magic',
        'Theatre',
        'Harry Potter',
      ]
    },
    {
      title: 'Nocny Kochanek',
      location: `Pol'and'Rock Festival`,
      date: '2018-08-02 23:00',
      free: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor lacus quis placerat mattis. Vivamus odio ligula, ullamcorper ut mollis vel, feugiat eu leo.',
      price: null,
      image: 'https://www.goingapp.pl/storage/app/uploads/public/596/4ae/b64/thumb_118263_600x350_0_0_crop.jpg',
      tags: [
        'Metal',
        'Parody',
        'Music',
        'Concert',
      ]
    },
  ];

  constructor() { }

  getEvents(): EventModel[] {
    return this.events;
  }
}
