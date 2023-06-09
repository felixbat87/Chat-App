import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent  implements OnInit,OnDestroy {
  texto:string='';
  mensajesSubscription: Subscription = new Subscription;
  elemento: HTMLElement | any;
  mensajes:any[]=[];
 constructor(
  public chatService:ChatService
  ){

}

ngOnInit(){
  
  this.elemento=document.getElementById('chat-mensajes');

  this.mensajesSubscription=this.chatService.getMessages().subscribe(msg=>{
   this.mensajes.push(msg);
    this.elemento.scrollTop=this.elemento.scrollHeight;
   setTimeout(()=>{

   },50)

  })

}

ngOnDestroy(){
  
  this.mensajesSubscription.unsubscribe();

} 

 enviar(){


   if(this.texto.trim().length===0){
    return;
   }

  this.chatService.sendMessage(this.texto);
  this.texto='';
  }


}
