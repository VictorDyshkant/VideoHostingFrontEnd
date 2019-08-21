import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/enviroment/video';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-video-disliked',
  templateUrl: './video-disliked.component.html',
  styleUrls: ['./video-disliked.component.css']
})
export class VideoDislikedComponent implements OnInit {

  Videos:Video[];
  constructor(private http: HttpClient, private service: ProfileService) {

    this.http.get('/api/videosdisliked/' + this.service.GetId()).subscribe(
      (resp) => {
        this.Videos = <Video[]>resp;
      },
      (error) => {
        console.log(error);
      }
    );
  }
   
  ngOnInit() {
  }

}
