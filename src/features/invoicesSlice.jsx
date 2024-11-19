import { createSlice } from "@reduxjs/toolkit";

const initialState = { invoices: [] };

const invoicesSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    addInvoice: (state, action) => {
      state.invoices.push(action.payload);
    },
    updateInvoice: (state, action) => {
      const index = state.invoices.findIndex(
        (inv) => inv.id === action.payload.id
      );
      if (index !== -1) state.invoices[index] = action.payload;
    },
  },
});

export const { addInvoice, updateInvoice } = invoicesSlice.actions;
export default invoicesSlice.reducer;
