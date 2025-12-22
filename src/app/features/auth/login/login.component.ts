
// import { Injectable } from '@angular/core';
// //import { LoginComponent } from './features/auth/login/login.component';

// @Injectable({ providedIn: 'root' })
// export class AuthService {
//   logout(): void {
//     // Safely clear client-side auth state
//     try {
//       localStorage.removeItem('access_token');
//       localStorage.removeItem('refresh_token');
//       sessionStorage.clear();
//     } catch (e) {
//       // Avoid breaking in non-browser contexts
//       console.warn('Failed to clear storage during logout:', e);
//     }
//   }

//   isLoggedIn(): boolean {
//     try {
//       return !!localStorage.getItem('access_token');
//     } catch {
//       return false;
//     }
//   }
// }
