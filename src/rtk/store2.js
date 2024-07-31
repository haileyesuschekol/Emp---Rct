import { configureStore, createSlice } from "@reduxjs/toolkit"

const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong: (state, action) => {
      state.push(action.payload)
    },
    removeSong: (state, action) => {
      state.pop(action.payload)
    },
  },
})

const fileStore = configureStore({
  reducer: {
    songs: songSlice.reducer,
  },
})

// fileStore.dispatch(songSlice.actions.addSong("newsong"))

// const finalState = fileStore.getState()
// console.log(finalState.songs)

export { fileStore }
export const { addSong } = songSlice.actions
