import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Group } from '../models/group.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  private readonly apiUrl =
    'https://hi-api-develop.helloinsight.org/tech-test-groups-list/';
  private readonly eventTrackingUrl =
    'https://hi-api-develop.helloinsight.org/tech-test-track-event/';

  private http = inject(HttpClient);

  getGroups(): Observable<Group[]> {
    return this.http
      .get<{ data: { groups: Group[] } }>(this.apiUrl)
      .pipe(map((response) => response.data.groups));
  }

  trackEvent(
    token: string,
    eventName: string,
    eventDescription: string
  ): Observable<{ message: string }> {
    const payload = {
      token,
      event_name: eventName,
      event_description: eventDescription,
    };

    return this.http
      .post<{ data: { message: string } }>(this.eventTrackingUrl, payload)
      .pipe(map((response) => response.data));
  }
}
