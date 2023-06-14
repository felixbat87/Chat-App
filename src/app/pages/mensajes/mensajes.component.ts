import { Component, OnInit } from '@angular/core';
import { WebsocketsService } from 'src/app/services/websockets.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  constructor(public wsService:WebsocketsService){

  }

  ngOnInit(){
      
  }

  salir(){
    this.wsService.logoutWS();
  }

}
