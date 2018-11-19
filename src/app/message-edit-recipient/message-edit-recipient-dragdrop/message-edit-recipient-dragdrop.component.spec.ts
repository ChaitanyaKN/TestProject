import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageEditRecipientDragdropComponent } from './message-edit-recipient-dragdrop.component';

describe('MessageEditRecipientDragdropComponent', () => {
  let component: MessageEditRecipientDragdropComponent;
  let fixture: ComponentFixture<MessageEditRecipientDragdropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageEditRecipientDragdropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageEditRecipientDragdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
