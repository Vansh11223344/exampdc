import { useState } from 'react';
import './DutyManagement.css';

const DutyManagement = () => {
  const [cadres, setCadres] = useState({
    cadre1: 2,
    cadre2: 3,
    cadre3: 4
  });
  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCadres({ ...cadres, [name]: value });
    setSaved(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend or global state
    setSaved(true);
    // Optionally: localStorage.setItem('dutyConfig', JSON.stringify(cadres));
  };

  return (
    <div className="main-content">
      <div className="duty-card">
        <h2 className="duty-title">Faculty Duty Configuration</h2>
        <form className="duty-form" onSubmit={handleSubmit}>
          <div className="cadre-group">
            <label>
              <span className="cadre-label">Cadre #1</span>
              <span className="cadre-desc">(Professor, Professor of Practice, Additional Professor, Associate Professor)</span>
            </label>
            <input
              type="number"
              min={0}
              name="cadre1"
              value={cadres.cadre1}
              onChange={handleChange}
              required
            />
          </div>
          <div className="cadre-group">
            <label>
              <span className="cadre-label">Cadre #2</span>
              <span className="cadre-desc">(Asst. Professor - Selection Grade/Senior Scale)</span>
            </label>
            <input
              type="number"
              min={0}
              name="cadre2"
              value={cadres.cadre2}
              onChange={handleChange}
              required
            />
          </div>
          <div className="cadre-group">
            <label>
              <span className="cadre-label">Cadre #3</span>
              <span className="cadre-desc">(Asst. Professor, Asst. Professor on Contract)</span>
            </label>
            <input
              type="number"
              min={0}
              name="cadre3"
              value={cadres.cadre3}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="duty-save-btn">Save Configuration</button>
          {saved && <div className="duty-success">Duty configuration saved!</div>}
        </form>
      </div>
    </div>
  );
};

export default DutyManagement;
