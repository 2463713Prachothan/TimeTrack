import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = () => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const user = authService.currentUser();

    if (user && user.role === 'Admin') {
        return true;
    }

    // Redirect to login if not logged in, or their own dashboard if wrong role
    if (!user) {
        router.navigate(['/login']);
    } else {
        router.navigate(['/employee/dashboard']);
    }
    return false;
};