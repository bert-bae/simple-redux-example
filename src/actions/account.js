export const updateName = (name) => ({
  type: "updateName",
  payload: name
});

export const addVehicle = () => ({
  type: "addVehicle"
});

export const updateVehicle = (vehicle) => ({
  type: "updateVehicle",
  payload: vehicle
});

export const removeVehicle = (id) => ({
  type: "removeVehicle",
  payload: id
});

// const accountReducers = (state = initialState, action) => {
//   switch (action.type) {
//     case "updateName":
//       return {
//         ...state,
//         name: action.payload
//       };
//     case "addVehicle":
//       const id = v4();
//       return {
//         ...state,
//         vehicles: {
//           ...state.vehicles,
//           [id]: {
//             id,
//             ...action.payload
//           }
//         }
//       };
//     case "updateVehicle":
//       const updateId = action.payload.id;
//       return {
//         ...state,
//         vehicles: {
//           ...state.vehicles,
//           [updateId]: {
//             ...state.vehicles[updateId],
//             ...action.payload
//           }
//         }
//       };
//     case "removeVehicle":
//       const removeId = action.payload.id;
//       return {
//         ...state,
//         vehicles: {
//           ...state.vehicles,
//           [removeId]: undefined
//         }
//       };
//     default:
//       return state;
//   }
// };
