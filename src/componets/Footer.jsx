import React from "react";
import {
  faInstagramSquare,
  faFacebookSquare,
  faLinkedin,
  faGithubSquare,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="w-full flex flex-col justify-center items-center p-20 bg-gray-900">
      <div className="flex gap-5 mb-7 text-slate-200 text-base">
        <h2>Terms of Conditions</h2>
        <h2>Privacy Policy</h2>
        <h2>About</h2>
        <h2>Blog</h2>
        <h2>FAQ</h2>
      </div>
      <div className="max-w-2xl text-center text-slate-400 text-sm mb-6">
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi labore
          amet molestiae error, rerum nihil quas id vero enim optio delectus
          ducimus vel iusto officiis! Sed amet et doloremque. Molestiae.
        </h2>
      </div>
      <div className="flex text-slate-200 gap-4 text-sm">
        <FontAwesomeIcon
          icon={faInstagramSquare}
          className="p-4 rounded-full bg-gray-800"
        />
        <FontAwesomeIcon
          icon={faGithubSquare}
          className="p-4 rounded-full bg-gray-800"
        />
        <FontAwesomeIcon
          icon={faFacebookSquare}
          className="p-4 rounded-full bg-gray-800"
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          className="p-4 rounded-full bg-gray-800"
        />
        <FontAwesomeIcon
          icon={faXTwitter}
          className="p-4 rounded-full bg-gray-800"
        />
      </div>
    </div>
  );
}

export default Footer;
