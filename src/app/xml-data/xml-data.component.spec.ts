import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XmlDataComponent } from './xml-data.component';

describe('XmlDataComponent', () => {
  let component: XmlDataComponent;
  let fixture: ComponentFixture<XmlDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XmlDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmlDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
