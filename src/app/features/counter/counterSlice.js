import { createSlice } from "@reduxjs/toolkit"

//create slice
export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    //action
    increment: (state) => {
      //mutate directly - immer library
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer
