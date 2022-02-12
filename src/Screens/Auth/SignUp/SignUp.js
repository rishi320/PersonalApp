import { useState } from "react";
import { Tile } from "@dsi/react-eds";
import { Link } from "react-router-dom";
import Home from "../../Dashboard/Home";
import SignIn from "../SignIn/SignIn";

function SignUp({ modifySigned }) {
  const [Username, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedUp, setisSignedUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = (d) => ({
      ...d,
      userName: Username,
      email: email,
      password: password,
    });
    console.log("FUNTION", modifySigned);
    modifySigned(true, details);
  };

  return (
    <div className="signup">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label className="dataentry">Username</label>
          <input
            type="text"
            autoFocus
            required
            value={Username}
            onChange={(e) => setuserName(e.target.value)}
          />
          <label className="dataentry">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="dataentry">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <button className="btn primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
