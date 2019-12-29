import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const api_url = 'http://localhost:4500/employees/profileImage';

@Injectable({
  providedIn: 'root'
})
export class FileUploaderService
{

    http:HttpClient;
    

    public constructor(httpService : HttpClient)
    {
     this.http=httpService;
    }

  public uploadFile(fileToUpload: File): Observable<any> {
      const formData = new FormData();
      formData.append('profileImage', fileToUpload);
      return this.http
        .post<any>(api_url, formData);
        
        
  }
  
}