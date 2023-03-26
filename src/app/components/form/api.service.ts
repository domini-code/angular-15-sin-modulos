import { environment } from './../../../environments/environment';
import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ChatCompletion, Message } from './interfaces/api.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private httpClient = inject(HttpClient);
  private API = environment.apiURL;

  generateResponse(prompt:string): Observable<Message>{
    const requestBody = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    };


    return this.httpClient
      .post<ChatCompletion>(this.API, requestBody)
      .pipe(map((response: ChatCompletion) => response.choices[0].message));

  }
}
