import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TailwindComponent } from './tailwind/tailwind.component';

const routes: Routes = [
  { path: 'tailwind', component: TailwindComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
