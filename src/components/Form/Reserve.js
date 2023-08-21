import React from 'react';
import './Reserve.css';

function Reserve() {
  return (
    <>
      <div className="container">
        <div className="title">Reservation</div>
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input type="number" placeholder="Enter your number" required />
              </div>
              <div className="input-box">
                <span className="details">Day</span>
                <input type="date" placeholder="Select Day" required />
              </div>
              <div className="input-box">
                <span className="details">Time</span>
                <input type="time" placeholder="Check-In Time" required />
              </div>
              <div className="input-box">
                <span className="details">Number of Guests</span>
                <input type="number" placeholder="Enter guest count" required />
              </div>
              <div className="input-box">
                <span className="details">Restaurant</span>
                <div className="drop">
                  <select name="hotelName" required>
                    <option value="">Select Hotel Name</option>
                    {/* ... other options ... */}
                  </select>
                </div>
              </div>
            </div>
            <div id="pop">
              <label htmlFor="terms" className="input-box">
                <input type="checkbox" id="terms" name="terms" required />
                I agree to the terms and conditions. <a href="#">Learn More</a>
              </label>
            </div>
            <div id="side">
              <div className="button">
                <input type="submit" value="Reserve" />
              </div>
              <div className="button">
                <input type="reset" value="Reset" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div id="footer">
        &copy; Copyright Interslaller 2023 | Designed & Developed by Bon Appetite!
      </div>
    </>
  );
}

export default Reserve;
