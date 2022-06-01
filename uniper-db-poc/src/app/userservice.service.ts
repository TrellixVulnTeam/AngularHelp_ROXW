import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { baseUrl } from 'src/environments/environment';
import { Models } from './Models.component';
import { ModelPojo } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  


  constructor(private http: HttpClient) { }
  getConfig() {
    return this.http.get<Models>(baseUrl);
  }

  saveUser(user:ModelPojo) {
    return this.http.post<ModelPojo>(baseUrl,user);
  }
}
