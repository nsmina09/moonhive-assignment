import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesTileComponent } from './courses-tile.component';

describe('CoursesTileComponent', () => {
  let component: CoursesTileComponent;
  let fixture: ComponentFixture<CoursesTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
