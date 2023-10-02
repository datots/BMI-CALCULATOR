const InterpretBMI = ({ bmiValue }) => {
  switch (true) {
    case bmiValue < 18.5:
      return "Underweight";
    case bmiValue >= 18.5 && bmiValue < 24.9:
      return "Normal Weight";
    case bmiValue >= 25 && bmiValue < 29.9:
      return "Overweight";
    default:
      return "Obese";
  }
};

export default InterpretBMI;
