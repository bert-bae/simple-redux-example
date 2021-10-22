import React from "react";
import { useSelector } from "react-redux";
import { AccountForm } from "../components/account-form";

export const Account = () => {
  const account = useSelector((state) => state.account);

  const vehicleList = Object.keys(account.vehicles).map((id, i) => {
    const vehicle = account.vehicles[id];
    return (
      <div className="data-container">
        <h6>Vehicle {i + 1}</h6>
        <p>{vehicle.make}</p>
        <p>{vehicle.model}</p>
        <p>{vehicle.licensePlate}</p>
      </div>
    );
  });

  return (
    <div>
      <h4>App State</h4>
      <h6>Account Name = {account.name}</h6>
      {vehicleList}
      <AccountForm />
    </div>
  );
};
