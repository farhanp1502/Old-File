import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservablesComponent } from './observables/observables.component';
import { ListComponent } from './observables/list/list.component';
import { FormEventComponent } from './observables/form-event/form-event.component';
import { IntervalComponent } from './observables/interval/interval.component';
import { OfFromComponent } from './observables/of-from/of-from.component';
import { ToArrayComponent } from './observables/to-array/to-array.component';
import { CustomObservableComponent } from './observables/custom-observable/custom-observable.component';

const routes: Routes = [
  {path:'observable',component:ObservablesComponent,children:[
    {path:'',component:ListComponent},
    {path:'formevent',component:FormEventComponent},
    {path:'interval',component:IntervalComponent},
    {path:'offrom',component:OfFromComponent},
    {path:'toarray',component:ToArrayComponent},
    {path:'customobs',component:CustomObservableComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
