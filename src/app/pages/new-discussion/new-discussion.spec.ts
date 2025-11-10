import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDiscussion } from './new-discussion';

describe('NewDiscussion', () => {
  let component: NewDiscussion;
  let fixture: ComponentFixture<NewDiscussion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewDiscussion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDiscussion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
