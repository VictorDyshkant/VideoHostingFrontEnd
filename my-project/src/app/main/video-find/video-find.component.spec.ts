import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoFindComponent } from './video-find.component';

describe('VideoFindComponent', () => {
  let component: VideoFindComponent;
  let fixture: ComponentFixture<VideoFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
