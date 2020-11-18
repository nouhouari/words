import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-itemform',
  templateUrl: './itemform.component.html',
  styleUrls: ['./itemform.component.scss']
})
export class ItemformComponent implements OnInit {

  @Output()
  private cancel: EventEmitter<any> = new EventEmitter();

  @Output()
  private add: EventEmitter<any> = new EventEmitter();

  wordForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.wordForm = this.formBuilder.group({
      text: new FormControl('', [Validators.required]),
      comment: new FormControl('')
    })
  }

  onCancel(){
    this.cancel.emit();
  }

  onAdd(){
    this.add.emit(this.wordForm.value);
  }
}
