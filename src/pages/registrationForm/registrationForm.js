import React from "react";
import uniqueString from "unique-string";
import { getByDisplayValue } from "@testing-library/react";

const RegistrationForm = props => {
  var valuee;
  return (
        <div className="inner-container">
        <form>
        <input required
          type="text"
          placeholder="NAME *"
          className="main-input"
        />
        <input required
          type="text"
          placeholder="SURNAME *"
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
        

        <label>Choose Status:</label>

        <select id="bigSelect" >
                    <option  value={200} selected="selected">Regular Attendee</option>
                    <option  value={150}>ICORD Member</option>
                    <option  value={100}>Student/Resident</option>
                    <option  value={100}>Patient Organization Representative</option>     
                    <option  value={600}>Company</option>
                    <option  value={750}>Armenia/Azerbaijan Delegates</option>
                    <option  value={250}>Georgian Delegates</option>
                    <option  value={70}>Accompanying Persons</option>             
        </select>

        <br></br>
        <br></br>

        <input required
          type="text"
          placeholder="INSTITUTION *"
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
        
        <input required
          type="text"
          placeholder="CITY *"
          className="main-input"
        />
        
        <input
          type="text"
          placeholder="ZIP CODE"
          className="main-input"
        />
        
        <input required
          type="text"
          placeholder="COUNTRY *"
          className="main-input"
        />
        
        <input  required
        type="email" 
        placeholder="EMAIL *" 
        className="main-input" 
        />
        
        <input required
          type="number"
          placeholder="PHONE *"
          className="main-input"
        />
        
        <input
          type="text"
          placeholder="COMMENTS"
          className="main-input"
        />
        <label>*I’d like to participate the Gala Dinner  </label>
        <input
          type="checkbox"
          className="checkbox"
        />
        <br></br>
        <button className="button">Submit</button>
        </form>


              
        <script>          
              var e = document.getElementById("bigSelect") ;
              this.valuee = document.getElementById("bigSelect").value;        
        </script>
      
    
        <form action="https://e-commerce.cartubank.ge/servlet/Process3DSServlet/3dsproxy_init.jsp" method="post">
          <input name="PurchaseDesc" type="hidden" value={uniqueString()}/>
          <input name="PurchaseAmt" type="text" value={valuee}/>
          <input name="CountryCode" type="hidden" value="268"/>
          <input name="CurrencyCode" type="hidden" value="981"/>
          <input name="MerchantName" type="hidden" value="ICORD2020"/>
          <input name="MerchantURL" type="hidden" value="http://www.icord2020.org/"/>
          <input name="MerchantCity" type="hidden" value="Tbilisi"/>
          <input name="MerchantID" type="hidden" value="000000008001437-00000001"/>
          <input name="xDDDSProxy.Language" type="hidden" value="01"/>
          <input type="submit" value="Finalize payment"/>
        </form>
    </div>
  );
};

export default RegistrationForm;


