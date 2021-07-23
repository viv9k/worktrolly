import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionBucketComponent } from './suggestion-bucket.component';

describe('SuggestionBucketComponent', () => {
  let component: SuggestionBucketComponent;
  let fixture: ComponentFixture<SuggestionBucketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionBucketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionBucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
