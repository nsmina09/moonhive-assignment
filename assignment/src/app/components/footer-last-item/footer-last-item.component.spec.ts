import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLastItemComponent } from './footer-last-item.component';

describe('FooterLastItemComponent', () => {
  let component: FooterLastItemComponent;
  let fixture: ComponentFixture<FooterLastItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterLastItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterLastItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
