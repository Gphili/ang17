import { Component, EventEmitter, Input, model, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  // @Input() search = 'Initial';
   search =  model<string>('Initial');
  //  @Output() searchChange = new EventEmitter<string>()

  @Output('submit') searchButtonClicked = new EventEmitter()
  //  searchButtonClicked = Output();
  
  searchClick() {
    this.searchButtonClicked.emit();
  }

  // updateSearch(value: string) {
  //   // this.searchChange.emit(value);
  //   this.search.set(value);
  // }
}
