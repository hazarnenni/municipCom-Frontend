import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { ContactComponent } from './contact/contact.component';
import { EventsdetailsComponent } from './eventsdetails/eventsdetails.component';
import { FoldersComponent } from './folders/folders.component';
import { HeaderComponent } from './header/header.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { NewsdetailsComponent } from './newsdetails/newsdetails.component';
import { OnlinefilesComponent } from './onlinefiles/onlinefiles.component';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { ServicesdetailsComponent } from './servicesdetails/servicesdetails.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'header', component :HeaderComponent},
  {path: 'home', component :HomeComponent},
  {path: 'about', component :AboutComponent},
  {path: 'history', component :HistoryComponent},
  {path: 'contact', component :ContactComponent},
  {path: 'albums', component :AlbumsComponent},
  {path: 'services', component :ServicesComponent},
  {path: 'servicesdetail/:id', component :ServicesdetailsComponent},
  {path: 'eventsdetails/:id', component :EventsdetailsComponent},
  {path: 'newsdetails/:id', component :NewsdetailsComponent},
  {path: 'projectdetails/:id', component :ProjectdetailsComponent},
  {path: 'login', component :LoginComponent},
  {path: 'inscription', component :InscriptionComponent},
  {path: 'project', component :ProjectsComponent},
  {path: 'folders', component :FoldersComponent},
  {path: 'onlinefiles', component :OnlinefilesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
