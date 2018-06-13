import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { CreateEventComponent } from './components/create-event/create-event.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'event/new', component: CreateEventComponent },
  { path: 'event/:id', component: EventDetailComponent },
  { path: 'event/:id/edit', component: CreateEventComponent },
  { path: 'login', component: SignInComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }