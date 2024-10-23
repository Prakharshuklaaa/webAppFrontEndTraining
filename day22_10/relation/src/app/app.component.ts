import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  parentNotes:string[] =[];
  note: string = "";

  onSave() {
  if(this.note.trim()){
    this.parentNotes.push(this.note);
    this.note="";
  }
}
onDeleteNote(index: number){
  this.parentNotes.splice(index,1);
}

}
