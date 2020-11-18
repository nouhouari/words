import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Dialog } from '../dialog/dialog';
import { Word } from '../model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input()
  word: Word;

  editMode: boolean;

  wordForm: FormGroup;

  @Output()
  private delete: EventEmitter<Word> = new EventEmitter();
  @Output()
  private save: EventEmitter<Word> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.wordForm = this.formBuilder.group({
      text: new FormControl(this.word.text, [Validators.required]),
      comment: new FormControl(this.word.comment),
    });
  }

  onDelete() {
    console.log('On delete component');
    const dialogRef: MatDialogRef<Dialog, any> = this.dialog.open(Dialog);
    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        this.delete.emit(this.word);
      }
    });
  }

  onSave() {
    this.word.text = this.wordForm.value.text;
    this.word.comment = this.wordForm.value.comment;
    this.save.emit(this.word);
  }
}
