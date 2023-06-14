import { Injectable } from '@angular/core';
import { WebsocketsService } from '../services/websockets.service';
import {
  CanActivate,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UsuarioGuard implements CanActivate {
  constructor(public wsService: WebsocketsService,
              public router:Router ) {}

  canActivate() {


    if (this.wsService.getUsuario()) {
      return true;
    } else {
      this.router.navigateByUrl('/')
      return false;
    }
  }
}
