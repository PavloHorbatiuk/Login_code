enum ACTIONS_TYPE {
    SET_USER = 'SET/USER',
    REMOVE_USER = 'REMOVE/USER'
}

export type InitialStateType = {
    email: string | null;
    token: string | null;
    id: string | null;
    name: string;
};
const initialState = {
    email: null,
    token: null,
    id: null,
    name: 'user',
};

export const UserReducer = (
    state: InitialStateType = initialState,
    action: ActionsType
): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_USER:
            return {
                ...state, id: action.payload,
                email: action.payload,
                token: action.payload,
            };
        case ACTIONS_TYPE.REMOVE_USER:
            return {
                ...state,
                id: null,
                email: null,
                token: null,
            }

        default:
            return state;
    }
};

export const setUserAC = (email: string | null, token: string | null, id: string | null) =>
    ({type: ACTIONS_TYPE.SET_USER, payload: email, token, id} as const);
export const removeUserAC = () => ({type: ACTIONS_TYPE.REMOVE_USER,} as const)

export type setUserACType = ReturnType<typeof setUserAC>;
export type removeUserACType = ReturnType<typeof removeUserAC>;

export type ActionsType = setUserACType
    | removeUserACType;
