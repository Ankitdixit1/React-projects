import { createSlice } from '@reduxjs/toolkit'
// import { homeSlice } from '../../../Movie-app/src/store/homeslice'



export const homeslice = createSlice({
  name: 'home',
  initialState:{
    url:{}
  },
  reducers: {
      apiconfiguration:(state,action)=>{
        state.url = action.payload
      }
  },
})

// Action creators are generated for each case reducer function
export const { apiconfiguration } = homeslice.actions;

export default homeslice.reducer