import {User} from './user';

export class Video {
    Id: number;
    UserId: string;
    User: User;

    Name: string;

    DayofCreation: Date;
    Views: number;

    VideoPath: string;
    PhotoPath: string;

    Likes: number;
    Dislikes: number;

    Description: string;
    Liked: boolean;
    Disliked: boolean;
}

