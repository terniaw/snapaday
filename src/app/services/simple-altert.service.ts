import { Injectable } from '@angular/core';
import { AlertController} from "@ionic/angular"
@Injectable({
  providedIn: 'root'
})
export class SimpleAltertService {

  constructor( private alertCtrl: AlertController) { }

  createAlert(title: string, message: string): Promise<any> {
     return this.alertCtrl.create({      
       header: title,      
       message: message,      
       buttons: [        
         {

          text: "Ok"        
        }      
      ]    
    });  
  } 
}
