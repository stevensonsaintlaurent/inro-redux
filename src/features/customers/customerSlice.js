import { createSlice } from "@reduxjs/toolkit";
import { payload } from "../accounts/accountSlice";

const initialState = {
  fullName: "",
  nationalID: "",
  createAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    prepare(fullName, nationalID) {
      return {
        payload: {
          fullName,
          nationalID,
          createAt: new Date().toISOString(),
        },
      };
    },
    reducer(state, action) {
      state.fullName = action.payload.fullName;
      state.nationalID = action.payload.nationalID;
      state.createAt = action.payload.createAt;
    },
  },

  updateName(state, action) {
    state.fullName = action.payload;
  },
});

export const { createCustomer, updateName } = customerSlice.actions;

export default customerSlice.reducer;

// export default function customerReducer(state = intialState, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//         createAt: action.payload.createAt,
//       };

//     case "account/updateName":
//       return {
//         ...state,
//         fullName: action.payload,
//       };

//     default:
//       return state;
//   }
// }

// export function createCustomer(fullName, nationalID) {
//   return {
//     type: "customer/createCustomer",
//     payload: { fullName, nationalID, createAt: new Date().toISOString() },
//   };
// }

// export function updateName(fullName) {
//   return { type: "customer/updateName", payload: fullName };
// }
