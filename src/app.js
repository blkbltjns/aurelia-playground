import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class App {
	constructor(http) {
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
			});		
	}
}
