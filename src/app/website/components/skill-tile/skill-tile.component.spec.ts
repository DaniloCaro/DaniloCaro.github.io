import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillTileComponent } from './skill-tile.component';

describe('SkillTileComponent', () => {
  let component: SkillTileComponent;
  let fixture: ComponentFixture<SkillTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
