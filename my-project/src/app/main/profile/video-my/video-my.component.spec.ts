import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoMyComponent } from './video-my.component';

describe('VideoMyComponent', () => {
  let component: VideoMyComponent;
  let fixture: ComponentFixture<VideoMyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoMyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
