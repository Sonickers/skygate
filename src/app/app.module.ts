import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventListItemComponent } from './components/event-list/event-list-item/event-list-item.component';
import { EventsService } from './services/events.service';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { AllCategoriesComponent } from './components/all-categories/all-categories.component';
import { UpcomingEventsComponent } from './components/upcoming-events/upcoming-events.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearcherComponent,
    EventListComponent,
    EventListItemComponent,
    SignInComponent,
    HomeComponent,
    NotFoundComponent,
    EventDetailComponent,
    AllCategoriesComponent,
    UpcomingEventsComponent,
    CreateEventComponent,
    FooterComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
