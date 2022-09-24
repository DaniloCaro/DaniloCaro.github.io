import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaGridComponent } from './social-media-grid.component';

describe('SocialMediaGridComponent', () => {
  let component: SocialMediaGridComponent;
  let fixture: ComponentFixture<SocialMediaGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediaGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
