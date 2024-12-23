import { Component, ViewEncapsulation } from '@angular/core';
import { GroupListComponent } from "./features/card/components/group-list/group-list.component";

@Component({
  selector: 'app-root',
  imports: [ GroupListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent  {

  title = 'hi-tech-test';



}
