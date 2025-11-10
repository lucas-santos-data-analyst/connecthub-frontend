import { Routes } from '@angular/router';
import { Layout } from './components/core/layout/layout';
import { Home } from './pages/home/home';
import { Discussions } from './pages/discussions/discussions';
import { NewDiscussion } from './pages/new-discussion/new-discussion';

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
        component: Discussions,
      },
      {
        path: 'discussoes/nova',
        component: NewDiscussion,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
