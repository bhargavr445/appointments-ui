import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingServicesComponent } from './moving-services.component';

describe('MovingServicesComponent', () => {
  let component: MovingServicesComponent;
  let fixture: ComponentFixture<MovingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovingServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
