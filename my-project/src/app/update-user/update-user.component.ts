import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../enviroment/user';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../enviroment/userLogin';
import { UserPassword } from '../enviroment/userPassword';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user:User = new User();
  userLogin:UserLogin = new UserLogin();
  userPassword:UserPassword = new UserPassword();


  photoError:string;
  dataError:string;
  loginError:string;
  passwordError:string;
  imageSrc:string ='assets/Images/usermale.png';
  photoMessage:string = 'LoadPhoto';

  constructor(private sub:ActivatedRoute,private nav:Router,private http:HttpClient) 
  { 
    let id:string;
    sub.params.subscribe(resp=>
      {
        id = resp['id'];
        http.get('/api/profileUser/'+id).subscribe(
          (resp)=>{
            this.user = <User>resp; 
          },
          (error) =>{console.log(error)}
        );
        http.get('/api/loginUser').subscribe(
          (resp)=>{
            this.userLogin = <UserLogin>resp; 
          },
          (error) =>{console.log(error)}
        )
      });
  }

  ngOnInit() {
  }

  UpdateData()
  {
    console.log(this.user);
    this.http.put('/api/UpdateUser',this.user)
    .subscribe(
      (resp)=>{
        alert('Your data were updated');
      },
      (error)=>{
        console.log('error');
      }
    );
  }
  UpdateLogin()
  {
    console.log(this.user);
    this.http.put('/api/UpdateUserLogin',this.userLogin)
    .subscribe(
      (resp)=>{
        alert('Your logins were updated');
      },
      (error)=>{
        console.log('error');
      }
    );
  }
  UpdatePassword()
  {
    this.http.put('/api/ResertPassword',this.userPassword)
    .subscribe(
      resp=>{
        alert('Your password was updated');2
      },
      error=>{console.log(error)}
    );
    console.log(this.userPassword);
  }

  LoadPhoto(event)
  {
    this.photoError = null;
    let file:File = event.target.files[0];
    if(file.type.match('png') || file.type.match('jpeg'))
    {
      console.log(file);
     
      let reader = new FileReader();
      reader.onload = (event:any)=>
      {
        this.imageSrc = event.target.result;
      }
      reader.readAsDataURL(file);

      this.photoMessage = file.name;
      let data = new FormData();
      data.append('photo',file);
      this.http.post('/api/AddPhoto',data).subscribe(
        (resp)=>{
          let reader = new FileReader();
          reader.onload = (event:any)=>
          {
            this.user.PhotoPath = event.target.result;
          }
          reader.readAsDataURL(file);
        },
        (error)=>{
          console.log(error);
        }
      );
    }
    else{
      this.photoError = 'Photo should be in png or jpeg format!!!'
    }
  }
}
