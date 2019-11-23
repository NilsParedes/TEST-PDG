import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
    !localStorage.getItem('token') ? this.router.navigate(['/login']) : null;
  }

  ngOnInit() {
    init_plugins();
  }

  logout() {
    return this.authService.logout()
      .subscribe(
        res => {
          localStorage.clear();
          this.router.navigate(['/login']);
        }, err => {
          localStorage.clear();
          this.router.navigate(['/login']);
        }
      );
  }

}
