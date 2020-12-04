import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: User[] = [
    { email: 'admin@admin', password: 'admin1234' },
    { email: 'user@user', password: 'user1234' },
    { email: 'user2@user2', password: 'user5432' },
  ];
  constructor(private router: Router) {}

  login(user: { email: string; password: string }) {
    let authenticateUser: any = this.users.find((u) => u.email === user.email);
    console.log(authenticateUser);
    if (authenticateUser && authenticateUser.password === user.password) {
      localStorage.setItem('user', authenticateUser.email);
      this.router.navigate(['/home']);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
