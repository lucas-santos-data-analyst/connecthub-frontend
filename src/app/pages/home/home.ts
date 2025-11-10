import { Component } from '@angular/core';
import { Select } from '../../components/features/select/select';
import { PrimaryInput } from '../../components/features/primary-input/primary-input';
import { ISelectOption } from '../../interfaces/select-option';

@Component({
  selector: 'app-home',
  imports: [Select, PrimaryInput],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  estadoSelecionado: string = '';

  estados: ISelectOption[] = [
    { value: 'sp', label: 'São Paulo' },
    { value: 'rj', label: 'Rio de Janeiro' },
    { value: 'mg', label: 'Minas Gerais' },
  ];
}
