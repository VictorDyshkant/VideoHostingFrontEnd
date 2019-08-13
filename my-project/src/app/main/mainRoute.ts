import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { CommonModule } from '@angular/common';


const router: Routes = [
    {
        path: '', component: MainComponent,
        // canActivateChild: [Guard],
        children: [
            {
                path: 'profile',
                loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
            },
            {
                path: 'profile/:id',
                loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
            },
            {
                path: 'videofind',
                loadChildren: () => import('./video-find/video-find.module').then(m => m.VideoFindModule)
            },
            {
                path: 'videofind/:str',
                loadChildren: () => import('./video-find/video-find.module').then(m => m.VideoFindModule)
            },
            {
                path: 'videosubscriptions',
                loadChildren: () => import('./video-subscriptions/video-subscriptions.module').then(m => m.VideoSubscriptionsModule)
            },
            {
                path: 'watch/:id',
                loadChildren: () => import('./watch/watch.module').then(m => m.WatchModule)
            },
            {
                path: '', redirectTo: 'videofind', pathMatch: 'prefix'
            }
        ]
    }
];

@NgModule({
    declarations:
        [
            MainComponent
        ],
    imports: [
        RouterModule.forChild(router),
        CommonModule,
    ]
})

export class MainRoute { }