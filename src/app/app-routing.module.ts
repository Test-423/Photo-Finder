import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FavPageComponent } from './pages/fav-page/fav-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

import { ROUTING } from './shared/mocks/routing.data';


const routes: Routes = [
    { path: ROUTING[0].url, component: MainPageComponent },
    { path: ROUTING[1].url, component: FavPageComponent },
    { path: ROUTING[2].url, component: UserPageComponent },
    { path: '**', redirectTo: ROUTING[0].url }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
