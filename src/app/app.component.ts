import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Word, WordType } from './model';
import { WordService } from './word.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  hadiths: Word[] = [];
  citations: Word[] = [];
  tafsirs: Word[] = [];

  constructor(private wordService: WordService){}

  ngOnInit(){
  }
}
