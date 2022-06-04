import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { baseUrl } from 'src/environments/environment';
import { Models } from '../model/models.component';
import { ModelPojo } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  
  
  constructor(private http: HttpClient) { }
  getAllModels() {
    return this.http.get<Models>(baseUrl);
  }
  getModelBasedOnId(mobileNumber: number){
    return this.http.get<ModelPojo>(baseUrl+mobileNumber);
  }

  saveUser(user:ModelPojo) {
    return this.http.post<ModelPojo>(baseUrl,user);
  }
  updateUser(user:ModelPojo,mobileNumber:number){
    return this.http.put<ModelPojo>(baseUrl+mobileNumber,user).pipe(catchError(this.handleError));
  }
  deleteModel(mobileNumber: number) {
    return this.http.delete(baseUrl+mobileNumber).pipe(catchError(this.handleError));
  }

  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', httpError.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${httpError.status}, ` +
        `body was: ${httpError.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
