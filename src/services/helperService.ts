export const setFormErrors = (error: any, setError: any) => {
    if (error.response?.data) {
        let setFocus = true;
        Object.entries(error.response?.data.error).forEach(([key, value]: any) => {
            setError(key, {type: 'required', message: value.toString() || ''}, {shouldFocus: setFocus});
            setFocus = false;
        });
    }
}