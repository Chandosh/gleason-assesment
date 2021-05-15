import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import * as _ from "lodash";
import { Customer } from 'src/app/model/customer';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  customers;
  isUpdateMode: boolean;
  isViewOnlyMode: boolean = false;
  updateIndex: number;
  createForm: FormGroup;
  updateCustomer: Customer;
  selectedRoleNames: [string];
  roles: Array<any>;
  

  constructor(private crateDialogRef: MatDialogRef<CreateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  private formBuilder: FormBuilder,
  public dialog: MatDialog, private userService: UserService) {
    this.isUpdateMode = data.updateMode;
    this.updateIndex = data.updateIndex;
    this.isViewOnlyMode = data.viewMode
    this.updateCustomer = data.customer;

    this.customers = this.userService.customers;
    this.roles = this.userService.roles;
   }

  ngOnInit(): void {
    this.buildCreateForm();
  }

  buildCreateForm() {
    this.createForm = this.formBuilder.group({
      customer: [ (this.isUpdateMode || this.isViewOnlyMode) ? this.updateCustomer.customer : '' ],
      email: [ (this.isUpdateMode || this.isViewOnlyMode) ? this.updateCustomer.email : '', [ Validators.required, Validators.email ] ],
      firstName: [ (this.isUpdateMode || this.isViewOnlyMode) ? this.updateCustomer.firstName : '', Validators.required ],
      lastName: [ (this.isUpdateMode || this.isViewOnlyMode) ? this.updateCustomer.lastName : '', Validators.required ],
      isTrialUser: [ (this.isUpdateMode || this.isViewOnlyMode) ? this.updateCustomer.isTrialUser : false],
      userName: [ (this.isUpdateMode || this.isViewOnlyMode) ? this.updateCustomer.userName : '', Validators.required],
      roles: this.buildRoles()
    });
    // this.getSelectedRoles();
  }

  get roleControl() {
    return this.createForm.get('roles') as FormArray;
  }

  buildRoles() {
    let arr;
    if(this.isUpdateMode || this.isViewOnlyMode) {
      arr = this.updateCustomer.roles.map(s=>{
        return this.formBuilder.control(s);
      });
    } else {
    arr = this.roles.map(s=>{
      return this.formBuilder.control(s.selected);
    });
  }
    return this.formBuilder.array(arr);

  }


  createUpdateCustomer() {
    let customer: Customer = new Customer();
    customer.customer = this.createForm.value.customer;
    customer.email = this.createForm.value.email;
    customer.firstName = this.createForm.value.firstName;
    customer.lastName = this.createForm.value.lastName;
    customer.isTrialUser = this.createForm.value.isTrialUser;
    customer.userName = this.createForm.value.userName;
    customer.roles = this.createForm.value.roles;

    if(this.isUpdateMode) {
      this.userService.updateCustomer(customer, this.updateIndex);
    } else {
      this.userService.createCustomer(customer);
    }
    this.crateDialogRef.close({data: true});
  }
    
}
