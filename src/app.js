import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch'; // needed for IE fetch
import * as toastr from 'toastr';

@inject(HttpClient)
export class App {
	constructor(http) {
		this.selfReference = this;
		this.http = http;
		this.http.configure(config => {
			config.useStandardConfiguration()
				  .withBaseUrl('http://localhost:65064/')
		});
		
		this.searchResults = [];
		this.possibleViewModelNames = ['searchResult', 'searchResult2'];
		this.searchTerm = "";
		this.searchResultViewModelName = this.possibleViewModelNames[1];
	}

	searchClicked() {
		this.searchResults = [];
		this.http.fetch(`?searchTerm=${this.searchTerm}`)
			.then(response => response.json())
			.then(searchResults => {
				this.searchResults = searchResults;
				toastr.success(`Returned ${searchResults.length} records`);
			});
	}
	
	select(toSelect) {
		if (this._selected) {
			this._selected.isSelected = false;
		}
		toSelect.isSelected = true;
		this._selected = toSelect;
	}
}
