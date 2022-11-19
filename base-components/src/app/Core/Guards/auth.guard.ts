import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../Services/auth.service';
import { NotificationService } from '../Services/notification.service';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
        private notificationService: NotificationService,
        private authService: AuthenticationService) { }

    canActivate() {
        const user = this.authService.getCurrentUser();

        if (user && user.expiration) {

           /* if (moment() < moment(user.expiration)) {
                return true;
            } else {
                this.notificationService.openSnackBar('Your session has expired');
                this.router.navigate(['auth/login']);
                return false;
            }*/
            return true;
        }

        this.router.navigate(['auth/login']);
        return false;
    }
}
