import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {


  progress:number = 0;
  
  constructor() 
  {
  }

  ngOnInit() {

  }

  File(event){
    this.progress = 0;
    console.log(event);
    let file:File = event.target.files[0];
    console.log(file);

    let interval = setInterval(()=>{
      this.progress += 0.1;
      console.log(this.progress);
      if(this.progress >= 100)
      {
        clearInterval(interval);
      }
    },file.size/10000000);
 
  }
}
