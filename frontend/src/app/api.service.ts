import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
    
    constructor(private http: HttpClient) { }

    postForm(info: string){
        this.http.post("https://localhost:44380/api/form", info)
            .subscribe(response => {
                console.log(response);
            })
    }

}