import { ContenuComponent } from './contenu/contenu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {HomeComponent} from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { LivreComponent } from './livre/livre.component';



const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'detail:livId', component: DetailsComponent  },
  {path: 'contenu', component: ContenuComponent  },
  {path: 'livre', component: LivreComponent  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
