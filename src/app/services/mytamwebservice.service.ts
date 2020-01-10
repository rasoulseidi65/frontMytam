import { map, tap } from 'rxjs/operators';
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
    return this.http.post<{access_token:  string}>("http://localhost:3000/api/v1/admin/login",formData).pipe(tap(res => {
      localStorage.setItem('access_token',res['data']['token']);
      console.log(res['data']['token']);
  }))
  }
  // webService user
  getLoginUser(data:any){
    return this.http.post<any>("http://localhost:3000/api/v1/login", data);
  }
  getRegisterUser(data:any){
    return this.http.post<any>("http://localhost:3000/api/v1/register", data);
  }
  postUpdateUser(id:any,data:any){
    return this.http.put<any>("http://localhost:3000/api/v1/user/"+id, data);

  }
  // webService News
  fetchloadNews(){
    return this.http.get("http://localhost:3000/api/v1/admin/news");
  }
  getNewsID(_id:any){
    return this.http.get("http://localhost:3000/api/v1/admin/news/"+_id);
  }
  deleteNewsID(_id:any){
    return this.http.delete<any>("http://localhost:3000/api/v1/admin/news/"+_id);
  }
  postNews(data:any){
    return this.http.post<any>("http://localhost:3000/api/v1/admin/news",data);
  }
  updateNews(idNews:any,data:any){

    return this.http.put<any>("http://localhost:3000/api/v1/admin/news/"+idNews,data);
  }
  postUplodeFile(image:any){
    return this.http.post<any>("http://localhost:3000/api/v1/admin/image",image);
  }
  postUplodeFileVideo(video:any){

    return this.http.post<any>("http://localhost:3000/api/v1/admin/videoUpload",video);
  }
  // webService Article
  postArticle(data:any){
    return this.http.post<any>("http://localhost:3000/api/v1/admin/article",data);
  }
  getArticle(){
    return this.http.get("http://localhost:3000/api/v1/admin/article");
  }
  getArticleID(_id:any){
    return this.http.get("http://localhost:3000/api/v1/admin/article/"+_id);
  }

  deleteArticleID(_id:any){
    return this.http.delete<any>("http://localhost:3000/api/v1/admin/article/"+_id);
  }
  updateArticle(idArticle:any,data:any){

    return this.http.put<any>("http://localhost:3000/api/v1/admin/article/"+idArticle,data);
  }
  // webService product
  fetchloadProduct(){
    return this.http.get("http://localhost:3000/api/v1/admin/Product");
  }
  getProductID(_id:any){
    return this.http.get("http://localhost:3000/api/v1/admin/Product/"+_id);
  }
  deleteProductID(_id:any){
    return this.http.delete<any>("http://localhost:3000/api/v1/admin/Product/"+_id);
  }
  postProduct(data:any){
    return this.http.post<any>("http://localhost:3000/api/v1/admin/Product",data);
  }
  updateProduct(idProduct:any, data:any){
    return this.http.put<any>("http://localhost:3000/api/v1/admin/Product/"+idProduct,data);
  }
  // webservice Video
  fetchloadVideo(){
    return this.http.get("http://localhost:3000/api/v1/admin/Video");
  }
  getVideoID(_id:any){
    return this.http.get("http://localhost:3000/api/v1/admin/Video/"+_id);
  }
  deleteVideoID(_id:any){
    return this.http.delete<any>("http://localhost:3000/api/v1/admin/Video/"+_id);
  }
  postVideo(data:any){
    return this.http.post<any>("http://localhost:3000/api/v1/admin/Video",data);
  }
  updateVideo(idVideo:any, data:any){
    return this.http.put<any>("http://localhost:3000/api/v1/admin/Video/"+idVideo,data);
  }
  // webService Offer

  fetchloadOffer(){
    return this.http.get("http://localhost:3000/api/v1/admin/Offer");
  }
  getOfferID(_id:any){
    return this.http.get("http://localhost:3000/api/v1/admin/Offer/"+_id);
  }
  deleteOfferID(_id:any){
    return this.http.delete<any>("http://localhost:3000/api/v1/admin/Offer/"+_id);
  }
  postOffer(data:any){
    return this.http.post<any>("http://localhost:3000/api/v1/admin/Offer",data);
  }
  updateOffer(idOffer:any, data:any){
    return this.http.put<any>("http://localhost:3000/api/v1/admin/Offer/"+idOffer,data);
  }
    // webService SLIDER

    fetchloadSlider(){
      return this.http.get("http://localhost:3000/api/v1/admin/Slider");
    }
    getSliderID(_id:any){
      return this.http.get("http://localhost:3000/api/v1/admin/Slider/"+_id);
    }
    deleteSliderID(_id:any){
      return this.http.delete<any>("http://localhost:3000/api/v1/admin/Slider/"+_id);
    }
    postSlider(data:any){
      return this.http.post<any>("http://localhost:3000/api/v1/admin/Slider",data);
    }
    updateSlider(idSlider:any, data:any){
      return this.http.put<any>("http://localhost:3000/api/v1/admin/Slider/"+idSlider,data);
    }
    // webService project us

    fetchloadProjectus(){
      return this.http.get("http://localhost:3000/api/v1/admin/projectus");
    }
    getProjectusID(_id:any){
      return this.http.get("http://localhost:3000/api/v1/admin/projectus/"+_id);
    }
    deleteProjectusID(_id:any){
      return this.http.delete<any>("http://localhost:3000/api/v1/admin/projectus/"+_id);
    }
    postProjectus(data:any){
      return this.http.post<any>("http://localhost:3000/api/v1/admin/projectus",data);
    }
    updateProjectus(idproject:any, data:any){
      return this.http.put<any>("http://localhost:3000/api/v1/admin/projectus/"+idproject,data);
    }
    // webservice slideshow
    getProductHomePage(){
      return this.http.get("http://localhost:3000/api/v1/product");
    }
}
