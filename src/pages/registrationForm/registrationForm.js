import React from "react";

const RegistrationForm = props => {
  return (
    <div className="inner-container">
      <form>
        <input
          type="text"
          placeholder="NAME"
          className="main-input"
        />
        <input
          type="text"
          placeholder="SURNAME"
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
          placeholder="INSTITUTION"
          className="main-input"
        />
 
        <input
          type="text"
          placeholder="DEPARTMENT"
          className="main-input"
        />

         <input
          type="text"
          placeholder="POSITION"
          className="main-input"
        />

        <input
          type="text"
          placeholder="STREET"
          className="main-input"
        />

         <input
          type="text"
          placeholder="CITY"
          className="main-input"
        />

         <input
          type="text"
          placeholder="ZIP CODE"
          className="main-input"
        />

         <input
          type="text"
          placeholder="COUNTRY"
          className="main-input"
        />
        
        <input type="email" placeholder="EMAIL" className="main-input" />

         <input
          type="number"
          placeholder="PHONE"
          className="main-input"
        />

        <input
          type="text"
          placeholder="COMMENTS"
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
