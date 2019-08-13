import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDislikedComponent } from './video-disliked.component';

describe('VideoDislikedComponent', () => {
  let component: VideoDislikedComponent;
  let fixture: ComponentFixture<VideoDislikedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoDislikedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDislikedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
