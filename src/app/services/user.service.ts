import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  customers = [
    {id: 1, role: 'Gleason'},
    {id: 2, role: 'TCS'},
    {id: 3, role: 'CTS'},
    {id: 4, role: 'Wipro'},
  ];
  roles: any = [
    {
      name: 'Global Gleason Admin',
      value: 'gga',
      selected: false
    },
    {
      name: 'User',
      value: 'user',
      selected: false
    },
    {
      name: 'Customer Admin',
      value: 'ca',
      selected: false
    },
    {
      name: 'Gleason Regional Sales Manager (RSM)',
      value: 'rsm',
      selected: false
    },
    {
      name: 'Gleason Internal Sales',
      value: 'gis',
      selected: false
    },
    {
      name: 'Gleason Engineer / Service Engineer',
      value: 'ge',
      selected: false
    }
  ];

  customerData = new BehaviorSubject<Array<Customer>>([]);
  castUser = this.customerData.asObservable();
  customerList: Array<Customer>;
  constructor() { 
    this.customerList = [];
    let customer: Customer = new Customer;
    customer.customer = "Gleason";
    customer.email = "chandoshkumar@gmail.com";
    customer.firstName = "Chandosh Kumar";
    customer.lastName = "Chensooriyan";
    customer.isTrialUser = true;
    customer.userName ="Chandosh";
    customer.roles = [false, true, false, false, true, false]; 
    this.customerList.push(customer);
    this.customerData.next(this.customerList);
  }

  createCustomer(customer: Customer) {
    this.customerList.push(customer);
    this.customerData.next(this.customerList);
  }

  updateCustomer(customer: Customer, updateIndex: number) {
    this.customerList[updateIndex] = customer;
    this.customerData.next(this.customerList);
  }

  deleteCustomer(index: number) {
    this.customerList.splice(index, 1);
    this.customerData.next(this.customerList);
  }
} 
