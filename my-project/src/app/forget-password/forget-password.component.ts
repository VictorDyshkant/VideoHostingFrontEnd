import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})

export class ForgetPasswordComponent implements OnInit {
  errorMessage:string = null;
  Email:string = null;
  First:boolean = true;

  constructor(private http:HttpClient,private nav:Router) { 
    
  }

  ngOnInit() {
  }

  RecoverEmail(email:string)
  {
    this.errorMessage = null;
    
    this.Email = email; 
    this.http.put("/api/DropByEmail",{"Login":email})
    .subscribe(
      (resp) =>{
        console.log(resp);
        console.log(email);
        this.First = false;
      },
      (error) =>{
        this.errorMessage = error.error['Message'];
        console.log(error);
      }

    );
  }
  RecoverPassword(temp:number,password:string,confirmpassword:string)
  { 
    this.errorMessage = null;
    this.http.put("/api/RecoverByEmail",
    {'Email':this.Email,'TempPassword':temp,'Password':password,'PasswordConfirm':confirmpassword})
    .subscribe(
      (resp)=>{
        alert(resp);
        this.nav.navigate(['/login']);
      },
      (error)=>{
        this.errorMessage = error.error['Message'];
      }
    );


    console.log(temp);
    console.log(password);
    console.log(confirmpassword);
  }

}
