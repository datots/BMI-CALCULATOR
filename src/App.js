import { useState } from "react";
import Calculator from "../src/Components/Calculator/Calculator";

const App = () => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmiValue, setBmiValue] = useState();
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [gender, setGender] = useState("");

  const resetFields = () => {
    setWeight("");
    setHeight("");
    setBmiValue("");
    setName("");
    setAge("");
    setGender("");
  };
  const calculateBMI = (event) => {
    event.preventDefault();
    const heightInMeteres = height / 100;
    const bmi = weight / (heightInMeteres * heightInMeteres);
    setBmiValue(bmi.toFixed(1));
  };
  return (
    <div>
      <Calculator
        height={height}
        setHeight={setHeight}
        weight={weight}
        setWeight={setWeight}
        bmiValue={bmiValue}
        name={name}
        setName={setName}
        age={age}
        setAge={setAge}
        gender={gender}
        setGender={setGender}
        calculateBMI={calculateBMI}
        resetFields={resetFields}
      />
    </div>
  );
};

export default App;
