import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSubscriptionsComponent } from './video-subscriptions.component';

describe('VideoSubscriptionsComponent', () => {
  let component: VideoSubscriptionsComponent;
  let fixture: ComponentFixture<VideoSubscriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoSubscriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
