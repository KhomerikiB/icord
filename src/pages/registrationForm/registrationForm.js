import React from "react";

const RegistrationForm = props => {
  return (
    <div className="inner-container">
      <form>
        <input
          type="text"
          placeholder="Name"
          className="main-input"
        />
        <input
          type="text"
          placeholder="Surname"
          className="main-input"
        />
        <label>Choose a Prefix:</label>
       
          <select >
                    <option  value="Mr">Mr</option>
                    <option  value="Ms">Ms</option>
                    <option  value="Dr">Dr</option>
                    <option  value="Prof">Prof</option>              
         </select>
       
        <br></br>
        <br></br>

        <input
          type="text"
          placeholder="Institution"
          className="main-input"
        />
 
        <input
          type="text"
          placeholder="Department"
          className="main-input"
        />

         <input
          type="text"
          placeholder="Position"
          className="main-input"
        />

        <input
          type="text"
          placeholder="Street"
          className="main-input"
        />

         <input
          type="text"
          placeholder="City"
          className="main-input"
        />

         <input
          type="text"
          placeholder="ZIP Code"
          className="main-input"
        />

         <input
          type="text"
          placeholder="Country"
          className="main-input"
        />
        
        <input type="email" placeholder="Email" className="main-input" />

         <input
          type="number"
          placeholder="Phone"
          className="main-input"
        />

        <input
          type="text"
          placeholder="Comments"
          className="main-input"
        />

        <button className="button">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;


// *
// 
// 
// 
// *
// 
// *
// *
// 
// 
