import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_contacts">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, sint voluptatum a exercitationem expedita mollitia
            tempore nulla reiciendis quas numquam magni, culpa dignissimos
            possimus. Iure sed odit obcaecati autem repellendus.
          </p>

          <div className="footer_contacts__logo">
            <a href="*">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png"
                alt="Instagram"
              />
            </a>

            <a href="*">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384012.png"
                alt="Youtube"
              />
            </a>
            <a href="*">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384007.png"
                alt="Whatsapp"
              />
            </a>
          </div>
        </div>
        <div className="footer_two">
          {" "}
          <h5>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet,
            ex!
          </h5>
        </div>
      </div>
    </>
  );
};

export default Footer;
