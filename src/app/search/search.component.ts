import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  search_value: string = 'iPhone';
  changeSearchValue(eventData: Event) {
    // console.log((<HTMLInputElement>eventData.target).value);
    this.search_value = (<HTMLInputElement>eventData.target).value;
  }
}
