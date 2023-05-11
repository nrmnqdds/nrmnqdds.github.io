import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";

class Header extends Component {
  state = {};
  render() {
    return (
      <header className="m-5">
        <div className="flex flex-row items-center">
          <SocialIcon
            url="https://twitter.com/nrmnqdds"
            fgColor="#515151"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://github.com/qryskalyst20"
            fgColor="#515151"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://instagram.com/nrmnqdds"
            fgColor="#515151"
            bgColor="transparent"
          />
        </div>
      </header>
    );
  }
}

export default Header;
