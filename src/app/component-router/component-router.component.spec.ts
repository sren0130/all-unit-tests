import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentRouterComponent } from './component-router.component';
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

describe('ComponentRouterComponent', () => {
  let component: ComponentRouterComponent;
  let fixture: ComponentFixture<ComponentRouterComponent>;

  // Added router for router testing
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentRouterComponent ],
      // added RouterTestingModule for router testing
      imports: [
        RouterTestingModule.withRoutes([]),
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentRouterComponent);
    // add inject for router
    router = TestBed.inject(Router);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*
      homeNavigation() {
        // some logical code here:
        this.router.navigate(['/home']);
      }
   */
  xit('homeNavigation()', () => {
    // need to spy on it, navigate method
    const spy = spyOn(router, 'navigate');

    // component.homeNavigation();    // this is the method call
           // args[0] is from this.router.navigate(['/home']);
    expect(spy.calls.first().args[0]).toContain('/home');
  })
});
