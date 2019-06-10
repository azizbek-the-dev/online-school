import { Component } from '@angular/core';
import { ClientInfo } from './clients';
import { ApiService } from './api.service';

@Component({
  selector: 'signing',
  templateUrl: './signing.component.html',
  styleUrls: ['./signing.component.css']
})

export class SigningComponent {
    name: string;
    password: string;
    login: string;
    info: Array<ClientInfo> = [];

    constructor(private apiSvc: ApiService) {}

    refresh(){
      this.name = this.login = this.password = null;
    }
    
    post(){
      if(this.name != null || this.login != null || this.password != null) {
        let newClient = new ClientInfo(this.name, this.login, this.password);
        this.info.push(newClient);
        this.apiSvc.postForm(newClient);
      } else {
        alert(`Barcha bo'limlarni to'ldiring!`);
      }
    }
} 