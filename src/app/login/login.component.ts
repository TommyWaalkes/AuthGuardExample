import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName:string = "";
  password:string = ""; 
  displayError:boolean = false;
  errorMessage:string = "Login Failed, please try again"; 
  constructor(private userService:UserService, private router:Router){

  }

  checkLogin(){
    let success:boolean = this.userService.checkLogin(this.userName, this.password);
    console.log(success);
    if(success){
      this.displayError = false;
      this.router.navigate(["game"]); 
    }
    else{
      this.displayError = true; 
    }
  }
}
