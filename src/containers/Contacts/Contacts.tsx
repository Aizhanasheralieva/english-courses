import React from "react";

const Contacts = () => {
  return (
    <div>
      <h1>Contact us</h1>
      <p>We welcome your questions, comments and feedback.</p>

      <p>Before asking a question, check our Frequently asked questions page.</p>

      <p>We aim to reply within three working days, but if your question requires more detailed information or is of a technical nature, our response time may be longer.</p>

      <strong>All fields marked with an asterisk (*) are obligatory.</strong>

      <form className="mt-3">
        <label><strong>Name *</strong></label>
        <div>
          <input className="w-75 required p-2 mt-3 mb-3 border border-primary"/>
        </div>
        <label><strong>Place of residence *</strong></label>
        <div>
          <input className="w-75 required p-2 mt-3 mb-3 border border-primary" placeholder="-select-"/>
        </div>
        <label><strong>Email address *</strong></label>
        <div>
          <input className="w-75 required p-2 mt-3 mb-3 border border-primary"/>
        </div>
        <label><strong>Enquiry *</strong></label>
        <div>
          <textarea className="w-75 h6 required p-2 mt-3 mb-3 border border-primary"/>
        </div>
        <button type="submit" className="btn btn-primary mb-5">Submit</button>

      </form>
    </div>
  );
};

export default Contacts;
