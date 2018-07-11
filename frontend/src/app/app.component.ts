import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './security/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private authenticationService: AuthenticationService,
    private router: Router) {
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }
}
