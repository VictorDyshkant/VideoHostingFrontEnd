import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLikedComponent } from './video-liked.component';

describe('VideoLikedComponent', () => {
  let component: VideoLikedComponent;
  let fixture: ComponentFixture<VideoLikedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoLikedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoLikedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
