const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    conversationItem: {
        status: false,
        positionY: 150,
        id: 0,
        position: 'bottom'
    },
    messageMenu: {
        status: false,
        id: 0,
        showButton: { status: false, id: 0 },
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

        },
        toggleMessageMenu: (state, action) => {

            if (action.payload.id === 0) {
                state.messageMenu.id = 0;
                state.messageMenu.status = false;
                state.messageMenu.showButton.status = false;
                state.messageMenu.showButton.id = 0;

            } else {

                state.messageMenu.status = true;
                state.messageMenu.id = action.payload.id;



            }


        },
        setShow: (state, action) => {
            if (action.payload.status) {
                state.messageMenu.showButton.status = action.payload.status;
                state.messageMenu.showButton.id = action.payload.id;
            } else {
                state.messageMenu.showButton.status = false;
                state.messageMenu.showButton.id = 0;
            }
        }

    }
})

export default themeSlice.reducer
export const { toggleConversationMenu, toggleMessageMenu, setShow } = themeSlice.actions