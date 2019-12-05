class NotEmpty {
    isValid(value) {
        if (value === "") {
            return false;
        }
        return true;
    }
}

export default NotEmpty;