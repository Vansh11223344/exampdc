import { useState } from 'react';
import './SlotCalendar.css';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const timeslots = ['08:00-10:00', '10:30-12:30', '14:00-16:00'];

// Example: Booked slots (already taken by others)
const bookedSlots = ['Mon-08:00-10:00', 'Wed-14:00-16:00'];

const minRequired = 3; // Minimum number of preferences to select

const SlotCalendar = () => {
  const [selectedSlots, setSelectedSlots] = useState([]);

  const handleSlotClick = (day, time) => {
    const slotKey = `${day}-${time}`;
    // Do not allow selecting booked slots
    if (bookedSlots.includes(slotKey)) return;

    // Prevent selecting more than one slot per day
    const selectedDay = selectedSlots.find((s) => s.startsWith(day));
    if (!selectedSlots.includes(slotKey) && selectedDay) {
      alert("You can't select more than one slot in the same day.");
      return;
    }

    // Toggle select/deselect
    setSelectedSlots((prev) =>
      prev.includes(slotKey)
        ? prev.filter((s) => s !== slotKey)
        : [...prev, slotKey]
    );
  };

  return (
    <div className="calendar-container">
      <h2 className="calendar-title">Select Your Preferred Slots</h2>
      <div className="calendar-grid">
        <div className="header-row">
          <div className="time-label"></div>
          {days.map((day) => (
            <div key={day} className="day-header">
              {day}
            </div>
          ))}
        </div>

        {timeslots.map((time) => (
          <div key={time} className="time-row">
            <div className="time-label">{time}</div>
            {days.map((day) => {
              const slotKey = `${day}-${time}`;
              const isBooked = bookedSlots.includes(slotKey);
              const isSelected = selectedSlots.includes(slotKey);

              return (
                <div
                  key={slotKey}
                  className={`slot 
                    ${isBooked ? 'booked' : ''} 
                    ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleSlotClick(day, time)}
                  title={
                    isBooked
                      ? 'Already booked'
                      : isSelected
                      ? 'Selected'
                      : 'Available'
                  }
                >
                  {isBooked && <span className="slot-status">Booked</span>}
                  {isSelected && <span className="slot-status">Selected</span>}
                  {!isBooked && !isSelected && (
                    <span className="slot-status">Available</span>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="calendar-footer">
        <div>
          Selected Preferences:{" "}
          <span className={selectedSlots.length < minRequired ? "not-enough" : "enough"}>
            {selectedSlots.length} / {minRequired}
          </span>
        </div>
        {selectedSlots.length < minRequired && (
          <div className="calendar-alert">
            Please select at least {minRequired} slots as your preference.
          </div>
        )}
      </div>
    </div>
  );
};

export default SlotCalendar;
