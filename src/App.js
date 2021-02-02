import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(0);

  function calculate(e) {
    e.preventDefault();
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsRemaining = grams - (burning * time);
    if (gender === "male") {
      setResult(gramsRemaining / (weight * 0.7));
    } else {
      setResult(gramsRemaining / (weight * 0.6));
    }
  }

  return (
    <div style={{marginLeft: "10px"}}>
      <h2>Calculating alcohol blood level</h2>
      <form onSubmit={calculate}>
        <div>
          <label>
            Weight
            <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Bottles
            <input type="number" value={bottles} onChange={e => setBottles(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Time
            <input type="number" value={time} onChange={e => setTime(e.target.value)} />
          </label>
        </div>
        <div>
          <label>Gender</label>
          <input type="radio" name="gender" value="male" onChange={e => setGender(e.target.value)} defaultChecked />
          <label>Male</label>
          <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} />
          <label>Female</label>
        </div>
        <div style={{marginTop: "1em", marginBottom: "1em"}}>
          <output>{result.toFixed(1)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
