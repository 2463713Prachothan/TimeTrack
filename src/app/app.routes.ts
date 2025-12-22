import { Routes } from '@angular/router';
import { adminGuard } from './core/guards/admin.guard';
import { employeeGuard } from './core/guards/employee.guard';
import { managerGuard } from './core/guards/manager.guard';
import { guestGuard } from './core/guards/guest.guard';
import { LoginComponent } from './features/auth/login/login.component';
import { AdminDashboardComponent } from './features/admin/dashboard/dashboard.component';
import { ManagerDashboardComponent } from './features/manager/dashboard/dashboard.component';
import { EmployeeDashboardComponent } from './features/employee/dashboard/dashboard.component';
import { LandingComponent } from './features/auth/landing/landing.component';

export const routes: Routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },

    // Login page (only for guests)
    { path: 'login', component: LoginComponent, canActivate: [guestGuard] },
    { path: 'landing', component: LandingComponent, canActivate: [guestGuard] },

    // Role-specific protected routes
    {
        path: 'admin/dashboard',
        component: AdminDashboardComponent,
        canActivate: [adminGuard]
    },
    {
        path: 'manager/dashboard',
        component: ManagerDashboardComponent,
        canActivate: [managerGuard]
    },
    {
        path: 'employee/dashboard',
        component: EmployeeDashboardComponent,
        canActivate: [employeeGuard]
    },

    { path: '**', redirectTo: 'login' }
];