import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class App {

	searchResults = [];
	possibleViewModelNames = ['searchResult', 'searchResult2'];
	searchTerm = "";

	constructor(http) {
		this.http = http;
		this.http.configure(config => {
			config
				.useStandardConfiguration()
				.withBaseUrl('http://localhost:65064/')
		});	
	}

	searchClicked() {
		this.searchResults = [];
		this.http.fetch(`?searchTerm=${this.searchTerm}`)
			.then(response => response.json())
			.then(searchResults => {
				this.searchResults = searchResults;
			});		
	}

	get searchResultViewModelName() {
		return this._searchResultViewModelName;
	}

	set searchResultViewModelName(value) {
		this._searchResultViewModelName = value;
	}
}
