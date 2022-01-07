import {reducers} from "./reducers"
import {numberAdd2} from "./actions/number"
import {user} from "./actions/user"

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

export {
    reducers,
    initialState,
    numberAdd2,
    user
}
