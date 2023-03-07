import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementTileComponent } from './achievement-tile.component';

describe('AchievementTileComponent', () => {
  let component: AchievementTileComponent;
  let fixture: ComponentFixture<AchievementTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchievementTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchievementTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
