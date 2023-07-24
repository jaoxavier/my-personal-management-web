import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmFinishComponent } from 'src/app/dialogs/book/confirm-finish/confirm-finish.component';
import { CreateBookComponent } from 'src/app/dialogs/book/create-book/create-book.component';
import { Book } from 'src/app/models/book/Book';
import { BookById } from 'src/app/models/book/BookById';
import { BookService } from 'src/app/request/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit{

  book!: Book[];
  selectedBook!: Book;

  constructor(
    public dialog: MatDialog,
    private bookService: BookService
  ){}

  ngOnInit(){
    this.bookService.getBookByClient().subscribe((data: any) => {
      this.book = data;
      console.log(this.book);
    });
  }
  
  openCreateBookDialog(){
    this.dialog.open(CreateBookComponent)
    .afterClosed()
    .subscribe((data: Book) => {
      this.book.push(data);
    });
  }

  getSelectedBook(bookId: number){
    this.bookService.getBookById(
      {
        id: bookId,
        client: localStorage.getItem('id')!
      } satisfies BookById
    ).subscribe((data: any) => {
      this.selectedBook = data;
      console.log(this.selectedBook);
    })
  }

  finish(){
    this.dialog.open(ConfirmFinishComponent, {
      data: this.selectedBook
    }).afterClosed()
    .subscribe((book: any) => {
      this.selectedBook = book;
    })
  }
}
