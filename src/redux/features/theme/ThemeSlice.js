const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    conversationItem: {
        status: false,
        positionY: 150,
        id: 0,
        position: 'bottom'
    }
}


const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleConversationMenu: (state, action) => {

            if (action.payload.positionY) {
                state.conversationItem.positionY = action.payload.positionY;

            }

            if (action.payload.id === 0) {
                state.conversationItem.id = 0;
                state.conversationItem.status = false;


            } else {
                if (action.payload.id === state.conversationItem.id) {
                    state.conversationItem.status = false;
                    state.conversationItem.id = 0;
                } else {
                    state.conversationItem.status = true;
                    state.conversationItem.id = action.payload.id;


                }
            }
            if (action.payload.position) {
                state.conversationItem.position = action.payload.position;

            }

        }
    }
})

export default themeSlice.reducer
export const { toggleConversationMenu } = themeSlice.actions