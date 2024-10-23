import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() childNotes:string[] = [];
  @Output() childNoteDeleted = new EventEmitter<number>();

  deleteNote(index: number){
    this.childNoteDeleted.emit(index);
  }
  
}
