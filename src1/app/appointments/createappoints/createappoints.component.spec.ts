import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateappointsComponent } from './createappoints.component';

describe('CreateappointsComponent', () => {
  let component: CreateappointsComponent;
  let fixture: ComponentFixture<CreateappointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateappointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateappointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
