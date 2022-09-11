
const initState = {
    isLoading: false,
    isError: false,
    error: '',
    data: []
}

export const reducer = (state=initState, action) => {
    const {type, payload} = action;
    switch (type) {
        default:
            return state;
    }
}