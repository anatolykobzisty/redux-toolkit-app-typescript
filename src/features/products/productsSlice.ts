import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../../app/api";

export interface ProductsState {
  products: { [id: string]: Product };
}

const initialState: ProductsState = {
  products: {
    "123": {
      id: "fake-id",
      name: "fake-name",
      price: 200,
      description: "fake-description",
      imageURL: "fake-imageURL",
      imageAlt: "fake-imageAlt",
      imageCredit: "fake-imageCredit",
    },
  },
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
