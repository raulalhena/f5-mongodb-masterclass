import { useLocation } from "react-router-dom";
import './Result.css';

const Result = () => {

  const { state } = useLocation();

  return (
    <div className="result-main-container">
      <h1 style={{ fontFamily: 'monospace' }}>Result</h1>
      <div className="result-card">
        <div>
          Email: {state.data.email}
        </div>
        <div>
          Password: {state.data.password}
        </div>
        {state.data.role && <div>Role: {state.data.role}</div>}
      </div>
    </div>
  )
}

export default Result;
