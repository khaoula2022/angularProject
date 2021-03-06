import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { LivreComponent } from './livre/livre.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContenuComponent } from './contenu/contenu.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    HomeComponent,
    DetailsComponent,
    LivreComponent,
    ContenuComponent,
    CarouselComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    CarouselModule,

  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
