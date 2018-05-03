import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyUIDGenerationServiceComponent } from './property-UID-generation-service.component';

describe('VerifyDocumentComponent', () => {
  let component: PropertyUIDGenerationServiceComponent;
  let fixture: ComponentFixture<PropertyUIDGenerationServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyUIDGenerationServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyUIDGenerationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
