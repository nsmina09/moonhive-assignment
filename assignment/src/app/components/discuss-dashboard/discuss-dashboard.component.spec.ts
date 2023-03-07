import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussDashboardComponent } from './discuss-dashboard.component';

describe('DiscussDashboardComponent', () => {
  let component: DiscussDashboardComponent;
  let fixture: ComponentFixture<DiscussDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscussDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscussDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
