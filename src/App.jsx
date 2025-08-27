import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"
import { useState } from "react";

function App() {
  const [UserInputFields, setUserInputFields] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 7,
    duration: 10
  });

  const validateNumber = UserInputFields.initialInvestment >= 0 &&
    UserInputFields.annualInvestment >= 0 &&
    UserInputFields.expectedReturn >= 0 &&
    UserInputFields.duration > 0;
  function handleInputChange(inputIdentifier, value) {
    setUserInputFields((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +value
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput handleChange={handleInputChange} UserInputs={UserInputFields} />
      {validateNumber && <Results UserInputs={UserInputFields} />}
      {!validateNumber && <p className="center">Please enter valid non-negative numbers .</p>}
    </>
  )
}

export default App
