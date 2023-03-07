import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IqDashboardComponent } from './iq-dashboard.component';

describe('IqDashboardComponent', () => {
  let component: IqDashboardComponent;
  let fixture: ComponentFixture<IqDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IqDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IqDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
