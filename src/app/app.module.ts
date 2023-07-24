import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';

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
import { CreateBookComponent } from './dialogs/book/create-book/create-book.component';
import { ConfirmFinishComponent } from './dialogs/book/confirm-finish/confirm-finish.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HubComponent,
    BookComponent,
    DetailsComponent,
    DefaultComponent,
    MoneyComponent,
    FoodComponent,
    CreateBookComponent,
    ConfirmFinishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
