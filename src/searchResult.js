import {computedFrom} from 'aurelia-framework';
import {bindable} from 'aurelia-framework';

export class SearchResult {
	constructor() {
		this.waterRight = {};
		this._isSelected = false;
		this._styleString = "";
	}

	activate(data) {
		this.waterRight = data.searchResult;
		this.$parent = data.parent;
	}
	

	mouseDown() {
		this.$parent.select(this);
	}
	
	get isSelected() {
		return this._isSelected;
	}
	
	set isSelected(value) {
		this._isSelected = value;
		if (value) {
			this._styleString = "display: inline-block; background-color: yellow";
		}
		else {
			this._styleString = "display: inline-block; background-color: white";
		}
	}
	
	@computedFrom('isSelected')
	get styleString() {
		return this._styleString;
	}
}