import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    username: string;

    constructor(private router: Router) {
        this.username = 'KamaleshMurali';
     }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['/login']);
  }

  homePage() {
      this.router.navigate(['/home']);
  }

}
