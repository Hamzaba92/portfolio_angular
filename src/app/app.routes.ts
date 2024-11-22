import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'about', component: MainContentComponent, data: { scrollTo: 'about' } },
  { path: 'skills', component: MainContentComponent, data: { scrollTo: 'skills' } },
  { path: 'portfolio', component: MainContentComponent, data: { scrollTo: 'portfolio' } },
  { path: 'contact', component: MainContentComponent, data: { scrollTo: 'contact' } },
  { path: 'imprint', component: ImprintComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}