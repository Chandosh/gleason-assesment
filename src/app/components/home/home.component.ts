import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 
  menuToggle: boolean;
  viewComponent: string;
  constructor(private loginService: LoginService) { 
    this.menuToggle = true;
    this.viewComponent = 'User Management';
  }

  ngOnInit(): void {
    
  }
  logout() {
    this.loginService.logout();
  }

  menuSelection(menuItem){
    this.viewComponent = menuItem;
  }
}
