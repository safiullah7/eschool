import { useState } from "react";
import CreateStepper from "../components/Create/Stepper";

function Create() {
  const [test, setTest] = useState({});

  const handleChange = (e: any) => {
    setTest({ ...test, [e.target.name]: e.target.value });
  };
  console.log(test);

  return (
    <div className="container">
      <CreateStepper
        handleChange={handleChange}
        test={test}
        setTest={setTest}
      />
    </div>
  );
}

export default Create;
