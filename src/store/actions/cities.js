export const addCity = name => ({
    type: "ADD_CITY",
    payload: { name }
});

export const deleteCity = id => {
    return {
        type: "DELETE_CITY",
        payload: { id }
    }
};