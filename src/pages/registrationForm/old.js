import React from "react";

const RegistrationForm = props => {
  return (
    <div className="inner-container">
      <form
        action="https://e-commerce.cartubank.ge/servlet/Process3DSServlet/3dsproxy_init.jsp"
        method="post"
      >
        <input
          required
          type="text"
          placeholder="NAME *"
          className="main-input"
        />
        <input
          required
          type="text"
          placeholder="SURNAME *"
          className="main-input"
        />
        <label>Choose a Prefix:</label>

        <select>
          <option value="Mr">Mr</option>
          <option value="Ms">Ms</option>
          <option value="Dr">Dr</option>
          <option value="Prof">Prof</option>
        </select>

        <br></br>
        <br></br>

        <input
          required
          type="text"
          placeholder="INSTITUTION *"
          className="main-input"
        />

        <input type="text" placeholder="DEPARTMENT" className="main-input" />

        <input type="text" placeholder="POSITION" className="main-input" />

        <input type="text" placeholder="STREET" className="main-input" />

        <input
          required
          type="text"
          placeholder="CITY *"
          className="main-input"
        />

        <input type="text" placeholder="ZIP CODE" className="main-input" />

        <input
          required
          type="text"
          placeholder="COUNTRY *"
          className="main-input"
        />

        <input
          required
          type="email"
          placeholder="EMAIL *"
          className="main-input"
        />

        <input
          required
          type="number"
          placeholder="PHONE *"
          className="main-input"
        />

        <input type="text" placeholder="COMMENTS" className="main-input" />
        <input name="PurchaseDesc" type="hidden" value="gaismvas2130asd" />
        <input
          name="PurchaseAmt"
          type="text"
          placeholder="Enter participation price"
          className="main-input"
        />
        <input name="CountryCode" type="hidden" value="268" />
        <input name="CurrencyCode" type="hidden" value="840" />
        <input name="MerchantName" type="hidden" value="www.icord2020.org" />
        <input
          name="MerchantURL"
          type="hidden"
          value="http://www.icord2020.org/"
        />
        <input name="MerchantCity" type="hidden" value="Tbilisi" />
        <input
          name="MerchantID"
          type="hidden"
          value="000000008001437-00000001"
        />
        <input name="xDDDSProxy.Language" type="hidden" value="01" />
        <label>
          *I’d like to participate the Gala Dinner{" "}
          <input type="checkbox" className="checkbox" />
        </label>
        <br />
        <button className="button">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
