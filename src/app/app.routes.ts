import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './categories/games/games.component';
import { MusicsComponent } from './categories/musics/musics.component';
import { VideosComponent } from './categories/videos/videos.component';
import { ArtworksComponent } from './categories/artworks/artworks.component';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'games',
        component: GamesComponent
    },
    {
        path: 'musics',
        component: MusicsComponent
    },
    {
        path: 'videos',
        component: VideosComponent
    },
    {
        path: 'artworks',
        component: ArtworksComponent
    }
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);