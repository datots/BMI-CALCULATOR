import React from "react";
import InterpretBMI from "../Interpretation/Interpretation";

const Calculator = ({
  weight,
  setWeight,
  height,
  setHeight,
  name,
  setName,
  age,
  setAge,
  gender,
  setGender,
  bmiValue,
  calculateBMI,
  resetFields,
}) => {
  return (
    <div className="app">
      <div className="container mx-auto p-4">
        <label className="block mb-2">Name: </label>
        <input
          className="border p-2 w-full"
          type="text"
          placeholder="Enter Your Name"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
      </div>
      <div className="container mx-auto p-4">
        <label className="block mb-2">Gender</label>
        <input
          className="border p-2 w-full"
          type="text"
          id="gender"
          placeholder="Enter Your Gender"
          onChange={(event) => setGender(event.target.value)}
          value={gender}
        />
      </div>
      <div className="container mx-auto p-4">
        <label className="block mb-2">Age: </label>
        <input
          className="border p-2 w-full"
          type="number"
          id="age"
          placeholder="Enter Your Age"
          onChange={(event) => setAge(event.target.value)}
          value={age}
        />
      </div>
      <div className="container mx-auto p-4">
        <label className="block mb-2">Height in CM</label>
        <input
          className="border p-2 w-full"
          id="height"
          type="number"
          onChange={(event) => setHeight(event.target.value)}
          value={height}
          placeholder="Enter Your Height"
        />
      </div>
      <div className=" container mx-auto p-4">
        <label className="block mb-2">Weight in KG</label>
        <input
          className="border p-2 w-full"
          id="weight"
          type="number"
          onChange={(event) => setWeight(event.target.value)}
          value={weight}
          placeholder="Enter Your Weight"
        />
      </div>
      <div className="container mx-auto p-4">
        <button
          onClick={calculateBMI}
          className="btn bg-green-600 hover:bg-green-700 text-white p-2 rounded"
        >
          Calculate BMI
        </button>
        <button
          onClick={resetFields}
          className="btn btn-outline border-green-600 text-gray-600 hover:bg-gray-400 p-2 rounded"
        >
          Reload
        </button>
      </div>

      {bmiValue > 0 && (
        <div className="center container mx-auto p-4">
          <h2 className="text-xl font-bold mb-2"> Your Age is: {age} </h2>
          <h2 className="text-xl font-bold mb-2">Your Name is: {name} </h2>
          <h2 className="text-xl font-bold mb-2"> Your Gender is: {gender} </h2>
          <h2 className="text-xl font-bold mb-2">Your Weight is: {weight}</h2>
          <h2 className="text-xl font-bold mb-2"> Your Height is:{height} </h2>
          <h2 className="text-xl font-bold mb-2">Your BMI is {bmiValue}</h2>
          <h2 className="text-xl font-bold mb-2">
            Interpretation: {<InterpretBMI bmiValue={bmiValue} />}{" "}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Calculator;
