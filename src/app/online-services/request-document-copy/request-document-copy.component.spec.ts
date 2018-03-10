import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDocumentCopyComponent } from './request-document-copy.component';

describe('RequestDocumentCopyComponent', () => {
  let component: RequestDocumentCopyComponent;
  let fixture: ComponentFixture<RequestDocumentCopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestDocumentCopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestDocumentCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
