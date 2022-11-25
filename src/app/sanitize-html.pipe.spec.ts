import { TestBed } from '@angular/core/testing';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';

describe('Pipe: SafeResourceUrl', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule],
    });
  });

  it('should create an instance', () => {
    const domSanitizer = TestBed.get(DomSanitizer);
    const pipe = new SanitizeHtmlPipe(domSanitizer);
    expect(pipe).toBeTruthy();
  });
});