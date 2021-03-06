/**
 * (description)
 *
 * @author yourname
 */

export default class InputnumberController {
	constructor() {
		this.minusDisable = this.disabled ? true : false;
		this.plusDisable = this.disabled ? true : false;
		this.minValue = this.min || 0;
		this.checkStatus();
	}

	inputPlus() {
		if (this.value >= this.max || this.disabled) {
			return;
		}
		if (!this.step) {
			this.value++;
		} else {
			this.value += this.step;
		}
		this.checkStatus();
		if (this.onChange) {
			this.onChange(this.value);
		}
	}

	inputMinus() {
		if (this.value <= this.minValue || this.disabled) {
			return;
		}
		if (!this.step) {
			this.value--;
		} else {
			this.value -= this.step;
		}
		this.checkStatus();
		if (this.onChange) {
			this.onChange(this.value);
		}
	}

	inputChange() {
		this.checkStatus();
		if (this.onChange) {
			this.onChange(this.value);
		}
	}

	inputBlur() {
		let isBlur = true;
		this.checkStatus(isBlur);
	}

	checkStatus(isBlur) {
		if (this.value <= this.minValue) {
			this.minusDisable = true;
			if (isBlur) {
				this.value = this.minValue;
			}
		} else if (this.value >= this.max) {
			this.plusDisable = true;
			if (isBlur) {
				this.value = this.max;
			}
		} else {
			this.minusDisable = false;
			this.plusDisable = false;
		}
	}
}