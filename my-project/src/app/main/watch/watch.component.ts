import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/enviroment/video';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Comentary } from 'src/app/enviroment/comentary';
import { User } from 'src/app/enviroment/user';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {

  video: Video;
  comentaries: Comentary[];
  id: string;
  user: User;

  comment: string;
  constructor(private route: ActivatedRoute, private http: HttpClient, private nav: Router) {
    let videoId: string;
    this.id = localStorage.getItem('Id');
    route.params.subscribe(resp => { videoId = resp['id'] });

    this.http.get('/api/profileUser/' + this.id).subscribe(
      (resp) => {
        this.user = <User>resp;
        console.log(resp);
      },
      (error) => { console.log(error) });

    this.http.get('/api/video/' + videoId).subscribe(
      (resp) => {
        this.video = <Video>resp;
        console.log(resp);
      },
      (error) => {
        console.log(error);
      }
    );
    this.http.get('/api/comentary/' + videoId).subscribe(
      (resp) => {
        this.comentaries = <Comentary[]>resp;
        console.log(this.comentaries);
      },
      (error) => { console.log(error) }
    )
  }

  ngOnInit() {
  }

  Find(str: string) {
    this.nav.navigate(['/videofind', str]);
  }
  Comment() {

    let com: Comentary = new Comentary();
    com.UserId = this.id;
    com.VideoId = this.video.Id;
    com.Content = this.comment;
    this.http.post("/api/comentary", com).subscribe(
      (resp) => {
        this.http.get('/api/comentary/' + this.video.Id).subscribe(
          (resp) => {
            this.comentaries = <Comentary[]>resp;
            console.log(this.comentaries);
          },
          (error) => { console.log(error) }
        )
      },
      (error) => { console.log(error) }
    );
    this.comment = null;

  }

  DeleteVideo() {
    if (confirm('Do you want to delete this video?')) {
      this.nav.navigate(['/main/videofind']);
        this.http.delete("/api/video/" + this.video.Id).subscribe(resp => {}, error => {});
    }
  }

  DeleteComentary(com: Comentary) {
    if (confirm('Do you want to delete this comentary?')) {
      this.http.delete("/api/comentaries/" + com.Id).subscribe(resp => { }, error => { console.log(error) });

      this.comentaries.splice(this.comentaries.indexOf(com), 1);
    }
  }
  PutLike() {
    this.http.put("/api/like/" + this.video.Id, {}).subscribe(resp => { }, error => { });

    if (this.video.Liked) {
      this.video.Likes--;
      this.video.Liked = false;
    }
    else {
      
      if (this.video.Disliked) {
        this.video.Dislikes--;
      }
      this.video.Likes++;
      this.video.Liked = true;
      this.video.Disliked = false;
    }
  }
  PutDislike() {
    this.http.put("/api/dislike/" + this.video.Id, {}).subscribe(resp => { }, error => { });

    if (this.video.Disliked) {
      this.video.Dislikes--;
      this.video.Disliked = false;
    }
    else {
      if (this.video.Liked) {
        this.video.Likes--;
      }
      this.video.Dislikes++;
      this.video.Disliked = true;
      this.video.Liked = false;
    }
  }
}
