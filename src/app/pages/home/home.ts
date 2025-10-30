import { Component } from '@angular/core';
import { Select } from '../../components/select/select';
import { SelectOptionI } from '../../interfaces/SelectOptionI';

@Component({
  selector: 'app-home',
  imports: [Select],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  estadoSelecionado: string = '';

  estados: SelectOptionI[] = [
    { value: 'sp', label: 'São Paulo' },
    { value: 'rj', label: 'Rio de Janeiro' },
    { value: 'mg', label: 'Minas Gerais' },
  ];
}
