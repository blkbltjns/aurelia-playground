import {computedFrom} from 'aurelia-framework';

export class SearchResult {
	constructor() {
		this.waterRight = {};
		this._isSelected = false;
		this.styleString = "display: inline-block; background-color: white";
	}

	activate(data) {
		this.waterRight = data.searchResult;
		this.parent = data.parent;
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
			this.styleString = "display: inline-block; background-color: yellow";
		}
		else {
			this.styleString = "display: inline-block; background-color: white";
		}
	}
}