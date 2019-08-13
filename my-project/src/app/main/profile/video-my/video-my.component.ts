import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/enviroment/video';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '../profile.service';
import { Comentary } from 'src/app/enviroment/comentary';

@Component({
  selector: 'app-video-my',
  templateUrl: './video-my.component.html',
  styleUrls: ['./video-my.component.css']
})
export class VideoMyComponent implements OnInit {

  Videos: Video[];
  constructor(private http: HttpClient, private service: ProfileService) {

    console.log(this.service.GetId());
    this.http.get('/api/videosuser/' + this.service.GetId()).subscribe(
      (resp) => {
        this.Videos = <Video[]>resp;
        console.log(this.Videos);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

 

}
