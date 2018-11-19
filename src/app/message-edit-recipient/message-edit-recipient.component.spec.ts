import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageEditRecipientComponent } from './message-edit-recipient.component';

describe('MessageEditRecipientComponent', () => {
  let component: MessageEditRecipientComponent;
  let fixture: ComponentFixture<MessageEditRecipientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageEditRecipientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageEditRecipientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
