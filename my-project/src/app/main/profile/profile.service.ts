import { Injectable } from '@angular/core';

@Injectable() 
export class ProfileService {
  Id:string;
  constructor()
  {

  }

  SetId(id:string)
  {
      this.Id = id;
  }
  GetId():string
  {
      return this.Id;
  }
}