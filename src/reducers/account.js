import { v4 } from "uuid";

const initialState = {
  name: "",
  vehicles: {
    1: {
      id: 1,
      make: "Honda",
      model: "CRV"
    }
  }
};

const accountReducers = (state = initialState, action) => {
  switch (action.type) {
    case "updateName":
      return {
        ...state,
        name: action.payload
      };
    case "addVehicle":
      const id = v4();
      return {
        ...state,
        vehicles: {
          ...state.vehicles,
          [id]: {
            id,
            ...action.payload
          }
        }
      };
    case "updateVehicle":
      const updateId = action.payload.id;
      return {
        ...state,
        vehicles: {
          ...state.vehicles,
          [updateId]: {
            ...state.vehicles[updateId],
            ...action.payload
          }
        }
      };
    case "removeVehicle":
      const removeId = action.payload;
      const vehicles = { ...state.vehicles };
      delete vehicles[removeId];

      return {
        ...state,
        vehicles
      };
    default:
      return state;
  }
};

export default accountReducers;
