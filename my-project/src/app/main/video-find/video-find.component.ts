import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Video } from 'src/app/enviroment/video';
import { User } from 'src/app/enviroment/user';


@Component({
  selector: 'app-video-find',
  templateUrl: './video-find.component.html',
  styleUrls: ['./video-find.component.css']
})
export class VideoFindComponent implements OnInit {

  videos: Video[];
  users: User[];
  str:string;
  constructor(private http: HttpClient, private nav: Router, private activate: ActivatedRoute) {
    activate.params.subscribe(resp => { 
    this.str = resp['id'];
    if (this.str != null) {

      this.http.get('/api/videos/' + this.str).subscribe(
        (resp) => {
          this.videos = <Video[]>resp;
          console.log(resp);
        },
        (error) => {
          console.log('video find ', error);
        }
      );
    }
    else {
      this.http.get('/api/allvideos').subscribe(
        (resp) => {
          this.videos = <Video[]>resp;
          console.log(resp);
        },
        (error) => {
          console.log('video find ', error);
        }
      );
    }});
  }

  ngOnInit() {
  }

  Filter(filter: string) {
    switch (filter) {
      case 'Date':
        this.videos.sort((a,b)=>{  if(a.DayofCreation > b.DayofCreation){return -1}else{return 1;} })
        break;
      case 'Views':
          this.videos.sort((a,b)=>{  if(a.Views > b.Views){return -1}else{return 1;} })
        break;
      case 'Liked':
          this.videos.sort((a,b)=>{  if(a.Likes > b.Likes){return -1}else{return 1;} })
        break;
      case 'Disliked':
          this.videos.sort((a,b)=>{  if(a.Dislikes > b.Dislikes){return -1}else{return 1;} })
        break;
    }
  }

  FindVideo(str: string) {
    this.http.get('/api/videos/' + str).subscribe(
      (resp) => {
        this.videos = <Video[]>resp;
        console.log(resp);
      },
      (error) => {
        console.log('video find ', error);
      }
    );

  }
  FindUser(str: string) {
    this.http.get('/api/findbyname/' + str).subscribe(
      (resp) => {
        this.users = <User[]>resp;
        console.log(resp);
      },
      (error) => {
        console.log('users find ', error);
      }
    );

  }


}
