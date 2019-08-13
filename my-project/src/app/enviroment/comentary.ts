import {User} from './user';


export class Comentary {
    
    Id: number;
    Content: string;
    DayofCreation: Date;
    
    UserId: string;
    VideoId: number;

    User: User;
}

