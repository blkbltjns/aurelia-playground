import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class App {
	constructor(http) {
		this.http = http;
		
		this.searchResults = [];
		this.possibleViewModelNames = ['searchResult', 'searchResult2'];
		this.searchTerm = "";
		this.searchResultViewModelName = 'searchResult';
	}

	searchClicked() {
		this.searchResults.length = 0;
		this.searchResults = ["result 1", "result 2", "result 3"];
	}
	
	select(toSelect) {
		if (this._selected) {
			this._selected.isSelected = false;
		}
		toSelect.isSelected = true;
	}
}
