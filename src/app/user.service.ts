import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  password:string ="123";
  userName:string = "heya";
  loggedIn:boolean = false;
  constructor() { }

  checkLogin(username:string, password:string):boolean{
    if(this.userName === username && this.password === password){
      this.loggedIn = true; 
      return true;
    }
    else{
      this.loggedIn = false;
      return false; 
    }
  }
}
