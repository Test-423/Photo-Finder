import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { FavPageComponent } from './pages/fav-page/fav-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

import { HeaderComponent } from './shared/components/header/header.component';
import { SideNavComponent } from './shared/components/side-nav/side-nav.component';


@NgModule({
    declarations: [
        AppComponent,
        FavPageComponent,
        MainPageComponent,
        HeaderComponent,
        UserPageComponent,
        SideNavComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
