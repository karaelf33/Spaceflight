import {RouterModule, Routes} from "@angular/router";
import {ContentTabComponent} from "./content-tab/content-tab.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: ContentTabComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'home'}
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
