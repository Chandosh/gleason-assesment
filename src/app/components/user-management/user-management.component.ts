import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/model/customer';
import { UserService } from 'src/app/services/user.service';
import { CreateUserComponent } from '../create-user/create-user.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  roles: [];
  displayedColumns: string[] = ['user', 'email', 'customer', 'roles', 'isTrialUser', 'actions'];
  dataSource: MatTableDataSource<Customer>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  customers = [];

    // MatPaginator Inputs
    length = 0;
    pageSize = 5;
    pageSizeOptions: number[] = [5, 10, 25, 100];
  
    // MatPaginator Output
    pageEvent: PageEvent;

  customerList: Array<Customer>;

  constructor(public dialog: MatDialog, private userService: UserService ) { 
    this.userService.castUser.subscribe((user) => {
      this.customerList = user;
      this.updateValues();
    });

    this.customers = this.userService.customers;
    this.dataSource = new MatTableDataSource(this.customerList);
    this.length = this.customerList.length;
    this.roles = this.userService.roles;
  }

  ngOnInit(): void {
  
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  updateValues() {
    this.dataSource = new MatTableDataSource(this.customerList);
    this.dataSource.sort = this.sort;
    this.length = this.customerList.length;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openCreateUpdateDialog(customer: Customer = null, updateMode: boolean = false,
     updateIndex: number = 0, viewMode: boolean = false) {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.width = "75vw";
    dialogConfig.disableClose = true;
    dialogConfig.panelClass = "without-padding"
    dialogConfig.data =  { updateMode: updateMode,
                           updateIndex: updateIndex,
                          customer: customer,
                          viewMode: viewMode
                        };
    let dialogRef;
    dialogRef = this.dialog.open(CreateUserComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (result.data) {
          // WIll get data here
      }
    });
  }

  deleteCustomer(customerIndex: number) {
    this.userService.deleteCustomer(customerIndex);
  }

  viewCustomer(index) {

  }

}
