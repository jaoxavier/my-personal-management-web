import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main/main.component';
import { DetailsComponent } from './details/details.component';
import { BookComponent } from './details/book/book.component';
import { DefaultComponent } from './details/default/default.component';
import { MoneyComponent } from './details/money/money.component';
import { FoodComponent } from './details/food/food.component';

const routes: Routes = [
  {path: '', component: MainComponent, children: [
    {path: 'default', component: DefaultComponent, outlet: 'detailsOutlet'},
    {path: 'Book', component: BookComponent, outlet: 'detailsOutlet'},
    {path: 'Money', component: MoneyComponent, outlet: 'detailsOutlet'},
    {path: 'Food', component: FoodComponent, outlet: 'detailsOutlet'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
