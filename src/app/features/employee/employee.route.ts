import { Routes } from '@angular/router';

export const MANAGER_ROUTES: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
            },
            {
                path: 'task-management',
                loadComponent: () => import('./task-management/task-management.component').then(m => m.TaskManagementComponent)
            },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    }
];