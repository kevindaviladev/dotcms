import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParserToHtmlComponent } from './parser-to-html.component';

describe('ParserToHtmlComponent', () => {
  let component: ParserToHtmlComponent;
  let fixture: ComponentFixture<ParserToHtmlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ParserToHtmlComponent]
    });
    fixture = TestBed.createComponent(ParserToHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
