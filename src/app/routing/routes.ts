import { Route } from '@angular/router';

import { CvComponent } from './components/cv/cv.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'cv',
    component: CvComponent,
    data: { title: 'Curriculum Vitae' }
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
    data: { title: 'Privacy Policy' }
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { title: 'Error 404' }
  }
];
