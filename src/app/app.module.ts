import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';

import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { CanActivateGuard } from './common/can-activate-guard';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import { CreateUserComponent } from './components/create-user/create-user.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidenavComponent,
    DashboardComponent,
    UserManagementComponent,
    ApplicationsComponent,
    CreateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    MatTabsModule,
    MatSelectModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [CanActivateGuard],
  bootstrap: [AppComponent],
  entryComponents: [CreateUserComponent]
})
export class AppModule { }
