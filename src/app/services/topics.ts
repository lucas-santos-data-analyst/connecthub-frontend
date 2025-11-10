import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { INewTopicResponse } from '../interfaces/topics/new-topic-response';
import { environment } from '../../environments/environment.development';
import { ITopicResponse } from '../interfaces/topics/topic-response';

@Injectable({
  providedIn: 'root',
})
export class TopicsService {
  private readonly _httpClient = inject(HttpClient);

  saveTopic(topic: INewTopicResponse) {
    return this._httpClient.post<INewTopicResponse>(environment.apiUrl + '/topics', topic);
  }

  getTopics() {
    return this._httpClient.get<ITopicResponse>(environment.apiUrl + '/products');
  }
}
