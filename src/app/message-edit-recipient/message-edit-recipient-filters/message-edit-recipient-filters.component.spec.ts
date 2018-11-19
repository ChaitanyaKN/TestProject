import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageEditRecipientFiltersComponent } from './message-edit-recipient-filters.component';

describe('MessageEditRecipientFiltersComponent', () => {
  let component: MessageEditRecipientFiltersComponent;
  let fixture: ComponentFixture<MessageEditRecipientFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageEditRecipientFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageEditRecipientFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
