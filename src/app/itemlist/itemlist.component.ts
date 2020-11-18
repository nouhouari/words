import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Word, WordType } from '../model';
import { WordService } from '../word.service';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.scss']
})
export class ItemlistComponent implements OnInit {

  add: boolean;

  words: Observable<Word[]>;

  @Input()
  type: WordType;

  constructor(private wordService: WordService) { 
  }

  ngOnInit(): void {
    this.words = this.wordService.readWord(this.type);
  }

  addNew(){
    this.add = true;
  }

  onCancelAdd(){
    this.add = false;
  }

  onAdd(w: Word){
    w.type = this.type;
    this.add = false;
    console.log(w);
    this.wordService.saveWord(w);
  }

  onDelete(w: Word){
    console.log('On delete list')
    this.wordService.delete(w);
  }

  onSave(w: Word){
    w.type = this.type;
    this.add = false;
    console.log(w);
    this.wordService.updateWord(w);
  }
}
