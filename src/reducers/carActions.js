export const UPDATE_PRICE = "UPDATE_PRICE";
export const UPDATE_FEATURES = "UPDATE_FEATURES"

export const setUpdatedPrice = (state) => {
    return {type: UPDATE_PRICE, payload: state }
}
