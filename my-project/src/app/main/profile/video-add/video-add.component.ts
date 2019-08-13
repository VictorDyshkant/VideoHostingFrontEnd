import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Video } from 'src/app/enviroment/video';

@Component({
  selector: 'app-video-add',
  templateUrl: './video-add.component.html',
  styleUrls: ['./video-add.component.css'],
})
export class VideoAddComponent implements OnInit {

  photo: File;
  video: File;

  errorMessage: string;
  progress:number = 0;
  photoMessage:string = 'Choose photo';
  videoMessage:string = 'Choose video';
  start:boolean = false;
  constructor(private http:HttpClient,private nav:Router) { }

  ngOnInit() {
  }

  LoadPhoto(event) {
    this.errorMessage = null;
    this.photo = event.target.files[0];
    console.log(this.photo);
    if (this.photo.type.match('png') || this.photo.type.match('jpeg')) {
      this.photoMessage = this.photo.name;
    }
    else {
      this.photo = null;
      this.errorMessage = 'Photo should be in png or jpeg format!!!';
    }
  }
  LoadVideo(event) {
    this.errorMessage = null;
    this.video = event.target.files[0];
    console.log(this.video);
    if (this.video.type.match('mp4')) 
    {
      this.videoMessage = this.video.name;
    }
    else {
      this.video = null;
      this.errorMessage = 'Video should be in mp4 format!!!';
    }
  }
  Load(name: string, description: string) {
    this.start = true;
    let interval = setInterval(()=>{
      this.progress += 0.1;
      console.log(this.progress);
      if(this.progress >= 100)
      {
        clearInterval(interval);
      }},this.video.size/10000000);
      let data = new FormData();
      data.append('image',this.photo);
      data.append('video',this.video);


      this.http.post('/api/videofiles',data)
      .subscribe(
        (resp)=>{
          let str = <string[]>resp;
          let video:Video = new Video();
          video.Name = name;
          video.Description = description;
          video.PhotoPath = str[0];
          video.VideoPath = str[1];
          this.http.post('/api/video',video)
          .subscribe(
            (resp)=>{
              console.log(resp);
              this.nav.navigate(['/profile/'+localStorage.getItem('id')+'/myvideo']);
            },
            (error:HttpErrorResponse)=>{
              console.log(error);
              this.errorMessage = error.error.errorMessage;
              this.start = false;
              this.progress = 0;
            });
        },
        (error:HttpErrorResponse)=>{
          console.log(error);
          this.errorMessage = error.error.errorMessage;
          this.start = false;
          this.progress = 0;
        }
      );
  }

}
