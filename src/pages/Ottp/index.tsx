import React, { useState } from "react";
import OtpInput from "react-otp-input";
import "./index.scss";

export default function App() {
  const [otp, setOtp] = useState("");

  return (
    <div className="ottp">
      <h1>Enter verification Code</h1>
      <OtpInput
        containerStyle={{ gap: "1rem",marginTop:"2rem" }}
        inputStyle={{ height: "5rem", width: "5rem",fontSize:"1.5rem" }}
        value={otp}
        onChange={setOtp}
        numInputs={4}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
      />
    </div>
  );
}
