import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';
import { Companies } from '../model/companies';
import { Company } from '../model/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyserviceService {
  
  
  companyUrl = baseUrl+"/company/"
  constructor(private http: HttpClient) { }
  getModelBasedOnId(mobileNumber: number) {
    return this.http.get<Company>(this.companyUrl+mobileNumber);
  }
  getAllCompanies() {
    return this.http.get<Companies>(this.companyUrl);
  }
  saveUser(company: Company) {
    return this.http.post<Company>(this.companyUrl,company);
  }
}
