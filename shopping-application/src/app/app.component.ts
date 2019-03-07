import {Component, OnInit, OnChanges} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'shopping-application';
    login: boolean;

    constructor(private authService: AuthService) {}

    ngOnInit() {
        // console.log(this.route.url);
        // this.router.parent.params.subscribe((params: Params) => {
        //     // this.param = params['login'];
        //     console.log(params);
        // });
        this.login = this.authService.login;
        // this.login = true;
        console.log(this.authService.login);
    }

}

