import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontepcComponent } from './montepc.component';

describe('MontepcComponent', () => {
  let component: MontepcComponent;
  let fixture: ComponentFixture<MontepcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MontepcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MontepcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
