import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Book } from 'src/app/models/book/Book';
import { BookService } from 'src/app/request/book.service';

@Component({
  selector: 'app-confirm-finish',
  templateUrl: './confirm-finish.component.html',
  styleUrls: ['./confirm-finish.component.scss']
})
export class ConfirmFinishComponent {
  book: Book;

  constructor(
    @Inject (MAT_DIALOG_DATA) public data: Book,
    private dialog: MatDialogRef<ConfirmFinishComponent>,
    private bookService: BookService
  ){
    this.book = data;
  }

  submit(){
    if(this.book.difficulty == null){
      alert("Difficulty is required")
      return;
    }
    if(this.book.opinion == null){
      alert("Opinion is required")
      return;
    }
    this.book.read = this.book.pages;
    this.book.finished = true;
    this.book.end_reading = new Date();

    this.bookService.patchBook(this.book)
    .subscribe((data: any) => {
      this.dialog.close(data);
    });
  }

  close(){
    this.dialog.close();
  }

  difficultyChoose(difficulty: "EASY" | "MEDIUM" | "HARD"){
    this.book.difficulty = difficulty;
  }

  ratingChoose(rating: "TERRIBLE" | "BAD" | "MEH" | "COOL" | "AWESOME"){
    this.book.opinion = rating;
  }
}
