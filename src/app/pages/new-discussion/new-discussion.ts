import { Component } from '@angular/core';
import { PrimaryInput } from '../../components/features/primary-input/primary-input';
import { Select } from '../../components/features/select/select';
import { Textarea } from '../../components/features/textarea/textarea';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PrimaryButton } from '../../components/features/primary-button/primary-button';
import { ISelectOption } from '../../interfaces/select-option';

@Component({
  selector: 'app-new-discussion',
  imports: [
    PrimaryInput,
    Select,
    Textarea,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    PrimaryButton,
  ],
  templateUrl: './new-discussion.html',
  styleUrl: './new-discussion.scss',
})
export class NewDiscussion {
  topicos: ISelectOption[] = [
    { value: 'matematica', label: 'Matemática' },
    { value: 'portugues', label: 'Português' },
    { value: 'historia', label: 'História' },
    { value: 'geografia', label: 'Geografia' },
    { value: 'ciencias', label: 'Ciências' },
  ];

  topicForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    course: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    throw new Error('Method not implemented.');
  }

  onCancel() {
    throw new Error('Method not implemented.');
  }
}
