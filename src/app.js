import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import * as toastr from 'toastr';
import 'fetch';

@inject(HttpClient)
export class App {
	constructor(http) {
		this.selfReference = this;
		this.http = http;
		this.http.configure(config => {
			config
				.useStandardConfiguration()
				.withBaseUrl('http://localhost:65064/')
		});
		
		this.searchResults = [];
		this.possibleViewModelNames = ['searchResult', 'searchResult2'];
		this.searchTerm = "";
		this.searchResultViewModelName = 'searchResult';
	}

	searchClicked() {
		this.searchResults.length = 0;
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
