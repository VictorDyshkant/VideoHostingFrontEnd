import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  next:boolean = false;
  message:string;

  login:string;
  email:string;
  password:string;

  constructor(private http:HttpClient,private nav:Router) { }
  ngOnInit() {
  }

  FirstRegistration(login:string,email:string,password:string,confirmPassword:string)
  {
    this.message = null;
    this.http.post("/api/exist",
    {
      'Email':email,
      'PhoneNumber':login
  }).subscribe(
    (resp) => {
      if(resp == true)
      {
        this.message = "This user exist yet";
      }
      else{
        this.login = login;
        this.email = email;
        this.password = password;
         this.next = true;
      }
    },
    (error:HttpErrorResponse) =>
    {
      console.log(error);
    }
  );

  }
  
  SecondRegistration(name:string,surname:string,male:boolean, date:Date,country:string)
  {
    this.message = null;
    this.http.post("/api/Registrate",{
      'Email':this.email,
      'PhoneNumber':this.login,
      'Password':this.password,
      'PasswordConfirm':this.password,
      'Name': name,
      'Surname': surname,
      'Country': country, 
      'Sex': male,
      'Birthday': date      
    }).subscribe(
      (resp)=>{
        console.log(resp);
        alert("You was registrated");
        this.nav.navigate(['/login']);
      },
      (error:HttpErrorResponse)=>{
        console.log(error);
      }
    );
  }

  Error()
  {
    this.message = 'You did not entered all data or they are not corrected';
  }
  

}
