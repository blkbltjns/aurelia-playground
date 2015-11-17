import {computedFrom} from 'aurelia-framework';

export class SearchResult {
	constructor() {
		this.waterRight = {};
		this._isSelected = false;
		this._styleString = "";
	}

	activate(searchResult) {
		this.searchResult = searchResult;
	}
	
	bind(bindingContext) {
    	this.parent = bindingContext;
	}
	
	mouseDown() {
		this.parent.select(this);
	}
	
	get isSelected() {
		return this._isSelected;
	}
	
	set isSelected(value) {
		this._isSelected = value;
		if (value) {
			this._styleString = "background-color: yellow";
		}
		else {
			this._styleString = "background-color: white";
		}
	}
	
	@computedFrom('isSelected')
	get styleString() {
		return this._styleString;
	}
}