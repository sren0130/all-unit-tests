import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCompComponent } from './test-comp.component';

// added for testing
import { ActivatedRouteStub } from '../test-stubs/activated-route-stub';
import { ActivatedRoute } from "@angular/router";

describe('TestCompComponent', () => {
  let component: TestCompComponent;
  let fixture: ComponentFixture<TestCompComponent>;

  // this was added for our ActivatedRoute test
  let activatedRouteStub: ActivatedRouteStub;

  beforeEach(async () => {
    activatedRouteStub = new ActivatedRouteStub({this: 'that'});

    await TestBed.configureTestingModule({
      declarations: [TestCompComponent],
      // This was added for our ActivatedRoute test
      // Notice how it uses the 'value' from activatedRoute. If you console.log this.
      // you'll see that it's an observable.
      providers: [{provide: ActivatedRoute, useValue: activatedRouteStub}]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // Showing what we have in activatedRoute now
    // along with subscribing to our paramMap and printing it. if you
    // do this in the test-comp.component's ngOnInit,  you'll see the
    // same info. In this case a paramMap with a params node { this: 'that' }
    console.log("==================================================================");
    console.log(activatedRouteStub);
    console.log("==================================================================");
    activatedRouteStub.paramMap.subscribe(paramMap => console.log(paramMap));
    expect(component).toBeTruthy();
  });
});

// Another example for SpyOn
// ==========================
//
// let activatedRoute;
//
// const activatedRouteStub = {
//   paramMap: {
//     subscribe() {
//       return of();
//     }
//   }
// };
//
// TestBed.configureTestingModule({
//   declarations: [HomeFilterDrawerComponent],
//   providers: [
//     { provide: ActivatedRoute, useValue: activatedRouteStub }
//   ],
//   imports: [
//     FormsModule,
//     StoreModule.forRoot(appReducers),
//     HttpClientTestingModule,
//     RouterTestingModule
//   ]
// }).compileComponents();
//
// beforeEach(() => {
//   fixture = TestBed.createComponent(NewsComponent);
//   component = fixture.componentInstance;
//
//   // Get a reference to the injected value
//   activatedRoute = TestBed.get(ActivatedRoute);
// });
//
// it("should check if subscribes are called in init", () => {
//   // Spy on the injected value
//   const subRouteSpy = spyOn(activatedRoute.paramMap, "subscribe");
//   component.ngOnInit();
//   expect(subRouteSpy).toHaveBeenCalled();
// });
