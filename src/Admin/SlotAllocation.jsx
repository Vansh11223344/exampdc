import { useState } from "react";
import "./SlotAllocation.css";

const initialAllocations = [
  {
    id: 1,
    name: "Dr. A. Sharma",
    department: "CSE",
    slots: ["Room 101 (09:00-11:00)", "Room 202 (11:30-13:30)"],
    dutyType: "Invigilation",
  },
  {
    id: 2,
    name: "Dr. B. Singh",
    department: "AIML",
    slots: ["Room 103 (09:00-11:00)"],
    dutyType: "Reliever",
  },
  {
    id: 3,
    name: "Dr. C. Patel",
    department: "ICT",
    slots: ["Room 104 (14:00-16:00)", "Room 105 (16:30-18:30)"],
    dutyType: "Squad",
  },
];

const SlotAllocation = () => {
  const [allocations] = useState(initialAllocations);

  return (
    <div className="main-content">
      <div className="slot-allocation-card">
        <h2 className="slot-allocation-title">Faculty Slot Allocations</h2>
        <div className="allocation-table">
          <div className="allocation-header-row">
            <div>Faculty Name</div>
            <div>Department</div>
            <div>Allocated Slots</div>
            <div>Duty Type</div>
          </div>
          {allocations.length === 0 ? (
            <div className="allocation-row no-data">No allocations found.</div>
          ) : (
            allocations.map((allocation) => (
              <div className="allocation-row" key={allocation.id}>
                <div>{allocation.name}</div>
                <div>{allocation.department}</div>
                <div>
                  {allocation.slots.map((slot, idx) => (
                    <span className="slot-badge" key={idx}>
                      {slot}
                    </span>
                  ))}
                </div>
                <div>
                  <span className={`duty-badge duty-${allocation.dutyType.toLowerCase()}`}>
                    {allocation.dutyType}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SlotAllocation;
