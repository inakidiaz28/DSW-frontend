import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayAdderComponent } from './array-adder.component';

describe('ArrayAdderComponent', () => {
  let component: ArrayAdderComponent;
  let fixture: ComponentFixture<ArrayAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayAdderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
