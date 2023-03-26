import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from './interfaces/api.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  chatCompletion$!: Observable<Message>;

  private readonly apiSvc = inject(ApiService);

  constructor() {
    this.chatCompletion$ = this.apiSvc.generateResponse('Que es angular?');
  }
}
