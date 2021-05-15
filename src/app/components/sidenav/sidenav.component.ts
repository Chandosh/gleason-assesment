import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  menuItems = [
    {name: 'Dashboard', icon: 'dashboard'},
    {name: 'User Management', icon: 'people'},
    {name: 'Applications', icon: 'grid_on'},
    {name: 'Data Centers', icon: 'pin_drop'},
    {name: 'Customers', icon: 'person'},
    {name: 'Vendors', icon: 'star'},
    {name: 'Application Catalog', icon: 'horizontal_split'},
    {name: 'Modules', icon: 'crop_square'},
    {name: 'Packages', icon: 'watch'}
  ];
  user: string;
  panelOpenState = true;
  @Output() menuChange = new EventEmitter();

  constructor(private loginService: LoginService) {
    this.user = this.loginService.getUserName();
  }

  ngOnInit(): void {
  }

  selectItem(item) {
    this.menuChange.emit(item);
  }

}
