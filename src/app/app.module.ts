import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { EventsComponent } from './events/events.component';
import { FoldersComponent } from './folders/folders.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { NewsdetailsComponent } from './newsdetails/newsdetails.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';
import { ServicesComponent } from './services/services.component';
import { VoteComponent } from './vote/vote.component';
import { HistoryComponent } from './history/history.component';
import { BannerComponent } from './banner/banner.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesdetailsComponent } from './servicesdetails/servicesdetails.component';
import { EventsdetailsComponent } from './eventsdetails/eventsdetails.component';
import { OnlinefilesComponent } from './onlinefiles/onlinefiles.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AlbumsComponent,
    EventsComponent,
    FoldersComponent,
    HeaderComponent,
    HomeComponent,
    InscriptionComponent,
    LoginComponent,
    NewsComponent,
    NewsdetailsComponent,
    ProjectsComponent,
    ProjectdetailsComponent,
    ServicesComponent,
    VoteComponent,
    HistoryComponent,
    BannerComponent,
    ContactComponent,
    ServicesdetailsComponent,
    EventsdetailsComponent,
    OnlinefilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
