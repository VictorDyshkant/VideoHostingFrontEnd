import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Video } from 'src/app/enviroment/video';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-video-liked',
  templateUrl: './video-liked.component.html',
  styleUrls: ['./video-liked.component.css']
})
export class VideoLikedComponent implements OnInit {

  Videos:Video[];
  constructor(private http: HttpClient, private service: ProfileService) {

    this.http.get('/api/videosliked/' + this.service.GetId()).subscribe(
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
