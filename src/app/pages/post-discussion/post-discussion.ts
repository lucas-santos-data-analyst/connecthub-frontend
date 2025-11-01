import { Component } from '@angular/core';
import { PrimaryInput } from '../../components/features/primary-input/primary-input';
import { Select } from '../../components/features/select/select';
import { SelectOptionI } from '../../interfaces/SelectOptionI';
import { Textarea } from '../../components/features/textarea/textarea';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryButton } from '../../components/features/primary-button/primary-button';

@Component({
  selector: 'app-post-discussion',
  imports: [
    PrimaryInput,
    Select,
    Textarea,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    PrimaryButton,
  ],
  templateUrl: './post-discussion.html',
  styleUrl: './post-discussion.scss',
})
export class PostDiscussion {
  discussionForm: FormGroup;

  topicos: SelectOptionI[] = [
    { value: 'matematica', label: 'Matemática' },
    { value: 'portugues', label: 'Português' },
    { value: 'historia', label: 'História' },
    { value: 'geografia', label: 'Geografia' },
    { value: 'ciencias', label: 'Ciências' },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.discussionForm = this.fb.group({
      nomeTopico: ['', Validators.required],
      topicoSelecionado: ['', Validators.required],
      conteudo: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.discussionForm.valid) {
      console.log('Dados da discussão:', this.discussionForm.value);
      //TODO: CHAMAR A API
      // this.discussionService.create(this.discussionForm.value).subscribe(...)

      // Redireciona após sucesso
      this.router.navigate(['/discussoes']);
    }
  }

  onCancel() {
    throw new Error('Method not implemented.');
  }
}
