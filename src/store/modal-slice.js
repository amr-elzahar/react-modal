import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isShown: false,
  },
  reducers: {
    showModal(state) {
      state.isShown = true;
    },
    closeModal(state) {
      state.isShown = false;
    },
  },
});

export const { closeModal, showModal } = modalSlice.actions;
export default modalSlice;
