import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main/main.component';
import { HubComponent } from './main/hub/hub.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookComponent } from './details/book/book.component';
import { DetailsComponent } from './details/details.component';
import { DefaultComponent } from './details/default/default.component';
import { MoneyComponent } from './details/money/money.component';
import { FoodComponent } from './details/food/food.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HubComponent,
    BookComponent,
    DetailsComponent,
    DefaultComponent,
    MoneyComponent,
    FoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
