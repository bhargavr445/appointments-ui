import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JunkServicesComponent } from './junk-services.component';

describe('JunkServicesComponent', () => {
  let component: JunkServicesComponent;
  let fixture: ComponentFixture<JunkServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JunkServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JunkServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
