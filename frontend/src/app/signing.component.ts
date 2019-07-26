import { Component } from '@angular/core';
import { ClientInfo } from './clients';
import { ApiService } from './api.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
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

    //constructor(private apiSvc: ApiService) {}
    
    refresh(){
      this.name = this.login = this.password = null;
    }
    
    post(){

      /*length = this.info.length();

      for(let i; i >= length; i++){
        if(this.info[i].login == this.login){

        }
      }*/
      if(this.name == null || this.login == null || this.password == null) {
        Swal.fire({
        title: 'Barcha bo`limlarni to`ldiring!',
        type: 'error',
        showConfirmButton: false,
        timer: 2000
      });
    } else {
      
      this.PushNewUser();
      //this.apiSvc.postForm(newClient);
        
    } 
    }

  private PushNewUser() {
    this.login = this.login.trim();
    let newClient = new ClientInfo(this.name, this.login, this.password);
    this.info.push(newClient);
    console.log(this.info);
  }
  }