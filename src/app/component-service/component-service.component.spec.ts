import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentServiceComponent } from './component-service.component';

describe('ComponentServiceComponent', () => {
  let component: ComponentServiceComponent;
  let fixture: ComponentFixture<ComponentServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
