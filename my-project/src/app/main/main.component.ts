import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  id:string;
  constructor(private http:HttpClient, private nav:Router) 
  {
    this.id = localStorage.getItem('Id');
    localStorage.removeItem('id');
    //this.http.get('Qwerty').subscribe();
  }

  ngOnInit() {
  }

  Logout()
  {
    this.http.post('/api/Logout',{})
    .subscribe(
      (resp)=>{
        localStorage.removeItem('id');
        localStorage.removeItem('userToken');
        this.nav.navigate(['/login']);
      },
      (error)=>{
        console.log(error);
      },
    );
  }

}
