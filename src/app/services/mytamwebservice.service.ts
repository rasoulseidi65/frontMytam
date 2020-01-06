import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MytamwebserviceService {
  headers={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  getLoginAdmin(formData:any){
    return this.http.post<any>("http://localhost:3001/api/v1/admin/login",formData);
  }
  // webService News
  fetchloadNews(){
    return this.http.get("http://localhost:3001/api/v1/admin/news");
  }
  getNewsID(_id:any){
    return this.http.get("http://localhost:3001/api/v1/admin/news/"+_id);
  }
  deleteNewsID(_id:any){
    return this.http.delete<any>("http://localhost:3001/api/v1/admin/news/"+_id);
  }
  postNews(data:any){
    return this.http.post<any>("http://localhost:3001/api/v1/admin/news",data);
  }
  updateNews(data:any){
    return this.http.put<any>("http://localhost:3001/api/v1/admin/news",data);
  }
  postUplodeFile(image:any){
    return this.http.post<any>("http://localhost:3001/api/v1/admin/image",image);
  }
  // webService Article
  postArticle(data:any){
    return this.http.post<any>("http://localhost:3001/api/v1/admin/article",data);
  }
  getArticle(){
    return this.http.get("http://localhost:3001/api/v1/admin/article");
  }
  getArticleID(_id:any){
    return this.http.get("http://localhost:3001/api/v1/admin/article/"+_id);
  }

  deleteArticleID(_id:any){
    return this.http.delete<any>("http://localhost:3001/api/v1/admin/article/"+_id);
  }
  // webService product
  fetchloadProduct(){
    return this.http.get("http://localhost:3001/api/v1/admin/Product");
  }
  getProductID(_id:any){
    return this.http.get("http://localhost:3001/api/v1/admin/Product/"+_id);
  }
  deleteProductID(_id:any){
    return this.http.delete<any>("http://localhost:3001/api/v1/admin/Product/"+_id);
  }
  postProduct(data:any){
    return this.http.post<any>("http://localhost:3001/api/v1/admin/Product",data);
  }
  updateProduct(data:any){
    return this.http.put<any>("http://localhost:3001/api/v1/admin/Product",data);
  }
  Post_MultiprocessUpload(image:any){

    return this.http.post<any>('http://localhost:3001/api/v1/admin/image',image, {
      reportProgress: true,
      observe: 'events'
    }).pipe(map((event) => {

        switch (event.type) {
          case HttpEventType.UploadProgress:
            const progress = Math.round( event.loaded / event.total * 100);
            return { status: 'progress', message: progress, total: event.total };

          case HttpEventType.Response:
            const succeed = event.body;
            return (succeed);
          default:
            return `${event.type}`;
        }
      })
    );
  }
}
