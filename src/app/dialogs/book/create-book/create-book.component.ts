import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BookCreate } from 'src/app/models/book/BookCreate';
import { BookService } from 'src/app/request/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit{
  
  bookForm!: FormGroup;

  constructor(
    private bookService: BookService,
    public dialog: MatDialogRef<CreateBookComponent>
  ){}
  
  ngOnInit(): void {
    this.bookForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      pages: new FormControl('', [Validators.required])
    });
  }
  
  submit(){
    this.bookService.postNewBook(
      {
        name: this.name.value,
        pages: this.pages.value
      } satisfies BookCreate
    ).subscribe((data) => {
      this.dialog.close(data);
      return data;
    })
  }

  get name(){
    return this.bookForm.get('name')!; 
  }

  get pages(){
    return this.bookForm.get('pages')!; 
  }
}
