import React from "react";
import "./index.scss";
import uniqueString from "unique-string";
import { priceValues } from "../../data/prices";
import axios from "axios";
class RegistrationForm extends React.Component {
  state = {
    name: "",
    surname: "",
    sex: "mr",
    price: priceValues[0].val,
    institution: "",
    department: "",
    position: "",
    street: "",
    city: "",
    zip: "",
    country: "",
    email: "",
    phone: "",
    comments: "",
    gala: false
  };

  submitForm = async e => {
    e.preventDefault();
    const {
      name,
      surname,
      sex,
      price,
      institution,
      department,
      position,
      street,
      city,
      zip,
      comments,
      email,
      phone,
      gala
    } = this.state;
    const newPrice = priceValues.filter(item => item.val === price)[0];
    let paymentType = newPrice.type;
    paymentType === "EURO" ? (paymentType = 978) : (paymentType = 981);
    let proxyLanguage = paymentType === 978 ? "02" : "01";
    let formData = new FormData();
    formData.append("name", name);
    formData.append("surname", surname);
    formData.append("sex", sex);
    formData.append("price", newPrice.price);
    formData.append("institution", institution);
    formData.append("department", department);
    formData.append("position", position);
    formData.append("street", street);
    formData.append("city", city);
    formData.append("zip", zip);
    formData.append("comments", comments);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("gala", gala);
    try {
      const result = await axios.post(
        "http://icord2020.org/api/database/user",
        formData
      );
      if (result.status === 200) {
        const form = this.generateForm(
          newPrice.price,
          paymentType,
          proxyLanguage
        );
        document.body.appendChild(form);
        form.submit();
      }
    } catch (e) {
      if (e.response.status === 403) {
        console.log("something went wrong");
      }
    }
  };
  generateForm = (price, paymentType, language) => {
    const form = document.createElement("form");
    form.classList.add("submit-form");
    let innerInputs = `<input name="PurchaseDesc" type="hidden" value=${uniqueString()}/>
    <input name="PurchaseAmt" type="text" value=${price} />
    <input name="CountryCode" type="hidden" value="268"/>
    <input name="CurrencyCode" type="hidden" value=${paymentType} />
    <input name="MerchantName" type="hidden" value="ICORD2020"/>
    <input name="MerchantURL" type="hidden" value="http://www.icord2020.org/"/>
    <input name="MerchantCity" type="hidden" value="Tbilisi"/>
    <input name="MerchantID" type="hidden" value="000000008001437-00000001"/>
    <input name="xDDDSProxy.Language" type="hidden" value=${language} />
    <input type="submit" value="Finalize payment"/>`;
    form.innerHTML = innerInputs;
    form.action =
      "https://e-commerce.cartubank.ge/servlet/Process3DSServlet/3dsproxy_init.jsp";
    form.method = "POST";
    return form;
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="inner-container">
        <form className="registration-form" onSubmit={this.submitForm}>
          <input
            required
            type="text"
            placeholder="NAME *"
            name="name"
            className="main-input"
            value={this.state.name}
            onChange={this.onChange}
          />
          <input
            required
            type="text"
            name="surname"
            placeholder="SURNAME *"
            value={this.state.surname}
            onChange={this.onChange}
            className="main-input"
          />
          <label className="select-label">
            Choose a Prefix:
            <select name="sex" onChange={this.onChange} value={this.state.sex}>
              <option value="Mr">Mr</option>
              <option value="Ms">Ms</option>
              <option value="Dr">Dr</option>
              <option value="Prof">Prof</option>
            </select>
          </label>
          <label className="select-label price-label">
            Choose Status:
            <select
              name="price"
              onChange={this.onChange}
              value={this.state.price}
            >
              {priceValues.map((price, index) => (
                <option value={price.val} key={index}>
                  {price.val} - {price.price} {price.type}
                </option>
              ))}
            </select>
          </label>
          <input
            required
            type="text"
            placeholder="INSTITUTION *"
            name="institution"
            onChange={this.onChange}
            value={this.state.institution}
            className="main-input"
          />

          <input
            type="text"
            placeholder="DEPARTMENT"
            className="main-input"
            onChange={this.onChange}
            value={this.state.department}
            name="department"
          />

          <input
            type="text"
            placeholder="POSITION"
            className="main-input"
            onChange={this.onChange}
            value={this.state.position}
            name="position"
          />

          <input
            type="text"
            placeholder="STREET"
            className="main-input"
            onChange={this.onChange}
            value={this.state.street}
            name="street"
          />

          <input
            required
            type="text"
            placeholder="CITY *"
            className="main-input"
            onChange={this.onChange}
            value={this.state.city}
            name="city"
          />

          <input
            type="text"
            placeholder="ZIP CODE"
            className="main-input"
            onChange={this.onChange}
            value={this.state.zip}
            name="zip"
          />

          <input
            required
            type="text"
            placeholder="COUNTRY *"
            className="main-input"
            onChange={this.onChange}
            value={this.state.country}
            name="country"
          />

          <input
            required
            type="email"
            placeholder="EMAIL *"
            className="main-input"
            onChange={this.onChange}
            value={this.state.email}
            name="email"
          />

          <input
            required
            type="number"
            placeholder="PHONE *"
            className="main-input"
            onChange={this.onChange}
            value={this.state.phone}
            name="phone"
          />

          <input
            type="text"
            placeholder="COMMENTS"
            className="main-input"
            onChange={this.onChange}
            value={this.state.comments}
            name="comments"
          />
          <label>*I’d like to participate the Gala Dinner </label>
          <input
            type="checkbox"
            className="checkbox"
            onChange={() => this.setState({ gala: !this.state.gala })}
          />
          <br></br>
          <button className="button">Submit</button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
