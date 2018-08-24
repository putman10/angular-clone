import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowBannerComponent } from './slideshow-banner.component';

describe('SlideshowBannerComponent', () => {
  let component: SlideshowBannerComponent;
  let fixture: ComponentFixture<SlideshowBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideshowBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideshowBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
