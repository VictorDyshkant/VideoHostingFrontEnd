import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/enviroment/user';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  admin:boolean = false;
  id: string;
  User: User = new User();

  

  constructor(activateRoute: ActivatedRoute, private http: HttpClient,private nav:Router, private service:ProfileService) {
    this.id = localStorage.getItem('Id');
    
    activateRoute.params.subscribe(params => {
      let Id: string = params['id'];
      this.service.SetId(Id);
      http.get('/api/profileUser/' + Id)
        .subscribe(
          (resp) => { 
            this.User = <User>resp;
          },
          (error: HttpErrorResponse) => { console.log(error) }
        );
    });
  }
  ngOnInit() {
  }

  Change()
  {
    this.nav.navigate(['/updateuser',this.id]);
  }
  Admin()
  {
    this.http.put('/api/addAdmin/'+this.User.Id,{}).subscribe(
      (resp)=>{
        this.admin = !this.admin;
      },
      (error)=>{
        console.log(error);
      }
    );
  }
 
  Subscribe()
  {
   this.http.put('/api/Subscribe/'+this.User.Id,{}).subscribe(
     (resp)=>{
       this.User.DoSubscribed = !this.User.DoSubscribed;
       if(this.User.DoSubscribed)
       {
         this.User.Subscribers++;

       }
       else{
         this.User.Subscribers--;

       }
     },
     (error)=>{console.log(error)}
   );

  }
  

}
