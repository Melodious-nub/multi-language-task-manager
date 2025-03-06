import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { TaskManagementComponent } from './components/task-management/task-management.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'task', component: TaskManagementComponent },

    // wildcard
    { path: '**', component: NotFoundComponent }
];
