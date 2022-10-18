import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() public profileImg: boolean = true;
  public navbar: boolean = false;
  public profileInfo: any;
  public nickname: string = '';
  constructor(private authService: AuthService, private route: Router) {}

  ngOnInit(): void {
    this.authService.navbarEvent.subscribe(
      (mostrar) => (this.navbar = mostrar)
    );
  }

  irParaHome() {
    this.route.navigate(['index']);
  }

  irParaPerfil() {
    this.route.navigate(['perfil']);
  }
}
