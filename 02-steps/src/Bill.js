import { useState } from "react";

function Bill() {
  return (
      <div>
        <BillInput />
        <SelectPercentage />
        <SelectPercentage />
        <Output />
        <Reset />
      </div>
  );
}

function BillInput() {
    return(
        <input type="text" placeholder="Bill value"></>
    );
}

function SelectPercentage() {
  
}
