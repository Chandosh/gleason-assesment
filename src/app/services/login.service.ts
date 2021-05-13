import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userList = [
    { username: 'Admin', password: 'Admin' },
    { username: 'chan', password: 'chan' },
    { username: 'Arvind', password: 'Arvind' },
  ]
  constructor(private router: Router) { }

  storeUserCredential(userData) {
    localStorage.setItem('user', JSON.stringify(userData));
  }

  isLoggendIn() {
    if(localStorage.getItem('user')) {
      return true;
    } else {
      return false;
    }
  }
  
  getUserName() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user.username;
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('');
  }
}
