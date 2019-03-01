import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'shopping-application';

    constructor(private route: Router,
                private router: ActivatedRoute) {}

    ngOnInit() {
        // console.log(this.route.url);
        // this.router.parent.params.subscribe((params: Params) => {
        //     // this.param = params['login'];
        //     console.log(params);
        // });
    }
}

