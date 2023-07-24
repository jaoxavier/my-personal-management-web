import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookCreate } from '../models/book/BookCreate';
import { environment as env } from 'src/environments/environment.development';
import { BookById } from '../models/book/BookById';
import { Book } from '../models/book/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient
  ){}

  postNewBook(book: BookCreate){
    return this.http.post(`${env.api}/book/${localStorage.getItem('id')}`, book);
  }

  getBookByClient(){
    return this.http.get(`${env.api}/book/client/${localStorage.getItem('id')}`);
  }

  getBookById(book: BookById){
    return this.http.get(`${env.api}/book/${book.id}/client/${book.client}`);
  }

  patchBook(book: Book){
    return this.http.patch(`${env.api}/book`, book);
  }
}
