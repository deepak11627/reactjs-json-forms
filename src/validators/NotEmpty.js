class NotEmpty {
    constructor(msg) {
        if (msg === "") {
            this.errMessage = "Value can't be empty."
        }
    }

    isValid(value) {
        if (value === "") {
            return false;
        }
        return true;
    }
    getMessage() {
        return this.errMessage;
    }
}

export default NotEmpty;