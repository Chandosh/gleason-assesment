import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../services/login.service";


@Injectable()
export class CanActivateGuard implements CanActivate {

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const token = this.loginService.isLoggendIn();

    if (!token) {
      this.router.navigate([""]);
      return false;
    } else {
        return true;
    }

  }
}
