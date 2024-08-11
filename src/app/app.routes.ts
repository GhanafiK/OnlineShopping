import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import path from 'path';
import { WomenComponent } from './women/women.component';
import { JeweleryComponent } from './jewelery/jewelery.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent,title:'home'},
  {path:'men',component:MenComponent,title:'men'},
  {path:'women',component:WomenComponent,title:'women'},
  {path:'jewelery',component:JeweleryComponent,title:'jewelery'},
  {path:'electronics',component:ElectronicsComponent,title:'electronics'},
  {path:'**',component:NotfoundComponent,title:'page not found 🙃'}
];
