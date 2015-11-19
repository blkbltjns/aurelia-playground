import {SearchResult} from 'searchResult';

export class SearchResult2 extends SearchResult {
	constructor() {
		super();
	}
	
	get someOtherProperty() {
		return "Some other property";
	}
}