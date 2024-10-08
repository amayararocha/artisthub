import { provideRouter, Routes } from '@angular/router';
import { ArtistDetailsComponent } from './components/artist-details/artist-details.component';
import { PopularAlbumsComponent } from './components/popular-albums/popular-albums.component';
import { TopSongsComponent } from './components/top-songs/top-songs.component';
import { HomeComponent } from './components/home/home.component';
import { AddContentComponent } from './components/add-content/add-content.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'artist-details', component: ArtistDetailsComponent },
  { path: 'popular-albums', component: PopularAlbumsComponent },
  { path: 'top-songs', component: TopSongsComponent },
  { path: 'add-content', component: AddContentComponent},
];