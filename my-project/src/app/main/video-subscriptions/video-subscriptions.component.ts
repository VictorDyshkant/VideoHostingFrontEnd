import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/enviroment/video';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/enviroment/user';

@Component({
  selector: 'app-video-subscriptions',
  templateUrl: './video-subscriptions.component.html',
  styleUrls: ['./video-subscriptions.component.css']
})
export class VideoSubscriptionsComponent implements OnInit {

  Videos: Video[];
  Users:User[];
  id:string;
  constructor(private http: HttpClient) {

    this.id = localStorage.getItem('Id');
    this.http.get('/api/videos').subscribe(
      (resp) => {
        this.Videos = <Video[]>resp;
        console.log(this.Videos);  
      },
      (error) => {
        console.log(error);
      }
    );
    this.http.get('/api/subscriptions').subscribe(
      resp=>{this.Users = <User[]>resp},
      error=>{console.log(error)});
  }
  ngOnInit() {
  }

}
