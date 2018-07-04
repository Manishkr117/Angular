import { Injectable } from '@angular/core';
import {Product} from '../models/product';
import {environment} from '../../environments/environment'
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
//import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  baseUri:string;
  constructor(private http: HttpClient) { 
   
    this.baseUri=environment.baseUri;
  }
  
  getAll():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUri);
    //.map(response=>response.json());
  }
  // getAll():Array<Product>{
  //   return JSON.parse(`[
  //     {
  //       "id": 101
  //       ,"ShortName": "Right into My Heart"
  //       ,"Name": "She Swiped Right into My Heart"
  //       ,"Category":"Books"
  //       ,"Description":"Love, relationship and friendships are not defined for our generation. The boundaries between them are often blurred and the result is often full of confusion and tears. 'She swiped right into my heart’ by Sudeep Nagarkar"
  //       ,"Price":87
  //       ,"Rating": 4.7
  //       ,"Image":"Book1.jpg"
  //     },
  //     {
  //       "id": 102
  //       ,"ShortName": "Thyroid Book"
  //       ,"Name": "The PCOD - Thyroid Book"
  //       ,"Category":"Books"
  //       ,"Description":"PCOD or Poly Cystic Ovarian Disease has become a common phenomenon in today's times. Writer and nutritional expert Rujita Diwekar, in her book 'The PCOD – Thyroid Book’ claims that PCOD has become a common occurrence "
  //       ,"Price":80
  //       ,"Rating": 4.0
  //       ,"Image":"Book2.jpg"
  //     },
  //     {
  //       "id":103
  //       ,"ShortName": "Zero to One"
  //       ,"Name": "Zero to One: Note on Start Ups, or How to Build the Future"
  //       ,"Category":"Books"
  //       ,"Description":"The book Zero To One is about nurturing the next big idea to build a valuable global company. If you are only following in the steps known entrepreneurs, then the authors believe that you are headed nowhere."
  //       ,"Price":249
  //       ,"Rating": 4.5
  //       ,"Image":"Book3.jpg"
  //     },
  //     {
  //       "id":104
  //       ,"ShortName": "Rich Dad Poor Dad"
  //       ,"Name": "Rich Dad Poor Dad"
  //       ,"Category":"Books"
  //       ,"Description":"Written by Robert Kiyosaki and Sharon Lechter in 1997, Rich Dad Poor Dad is based mostly on Kiyosaki's young days spent in Hawaii. Enriched by Kiyosaki’s personal experience and the teachings he received from his rich dad and poor dad, the book highlights different attitudes towards money, work and life"
  //       ,"Price":109.52
  //       ,"Rating": 4.9
  //       ,"Image":"Book4.jpg"
  //     }
  //   ]`);
  //}
}
