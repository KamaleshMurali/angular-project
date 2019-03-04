import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    @ViewChild('form') loginDetails: NgForm;
    username: string;
    password: string;

    constructor(private router: Router,
                private toaster: ToastrManager,
                private authService: AuthService) { }

    ngOnInit() {}

    onSubmit() {
        this.username = this.loginDetails.value.username;
        console.log(this.loginDetails);
        this.password = this.loginDetails.value.password;
        console.log(this.password);
        if (this.username.trim().length !== 0 && this.password.trim().length !== 0) {
            this.authService.login = true;
            if (this.authService.login) {
                this.toaster.successToastr('login successfully!');
                this.router.navigate(['/home']);
            }
        } else {
            this.toaster.warningToastr('Invalid username and password');
        }
    }

    showPassword() {}

}
