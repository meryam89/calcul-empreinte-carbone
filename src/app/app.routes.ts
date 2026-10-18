
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Summary } from './summary/summary';
import { Profile } from './profile/profile';
import { AuthGuard } from './auth-guard';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'summary', component: Summary, canActivate: [AuthGuard] },
  { path: 'profile/:name', component: Profile, canActivate: [AuthGuard] },
];
