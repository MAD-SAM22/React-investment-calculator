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
      <Results UserInputs={UserInputFields} />
    </>
  )
}

export default App
