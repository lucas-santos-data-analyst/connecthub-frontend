import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDiscussion } from './post-discussion';

describe('PostDiscussion', () => {
  let component: PostDiscussion;
  let fixture: ComponentFixture<PostDiscussion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostDiscussion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDiscussion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
