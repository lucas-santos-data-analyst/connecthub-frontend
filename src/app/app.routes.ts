import { Routes } from '@angular/router';
import { Layout } from './components/core/layout/layout';
import { Home } from './pages/home/home';
import { PostDiscussion } from './pages/post-discussion/post-discussion';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: Home,
      },
      {
        path: 'discussoes',
        component: PostDiscussion,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
