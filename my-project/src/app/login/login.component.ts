import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  errorMessage:string = null;

  constructor(private nav:Router,private http:HttpClient) {
    http.post("/api/Logout",{}).subscribe(resp=>{},error=>{console.log(error)});
   }
  ngOnInit() {
    
  }

  SignIn(login:string,password:string)
  {
    this.errorMessage = null;
    this.http.post("/api/Authenticate",{'Login':login})
    .subscribe(
      (resp) => {
        console.log(resp);
      
        let data = "username="+resp+"&password="+password+"&grant_type=password";
        let header = new HttpHeaders({"Content-Type":"application/x-www-urlencoded"});
        localStorage.setItem('Id',resp.toString());

        this.http.post('/token',data,{headers:header})
        .subscribe(
          (resp)=>{
            console.log(resp);

            localStorage.setItem('userToken',resp['access_token']);      
            this.nav.navigate(['/main']);
          },
          (error :HttpErrorResponse)=>{
            this.errorMessage = error.error['error'];
            console.log(error);
          }
        );
      },
      (error:HttpErrorResponse) =>{
        this.errorMessage = error.error['Message'];
        console.log(error);
      }
    );
  }
  
  Error()
  {
    this.errorMessage = "You did not entered all data!!!";
  }
}
