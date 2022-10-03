import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public navbar: boolean = false;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.navbarEvent.subscribe(
      (mostrar) => (this.navbar = mostrar)
    );
  }
}
