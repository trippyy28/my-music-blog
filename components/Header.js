import Link from "next/link";
import React from "react";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";
import { faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBandcamp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">delightful</button>
          </Link>
        </li>

        <li>
          <Link href="/">
            <button className="">blog</button>
          </Link>
        </li>
        <li>
          <Link href="/shop">
            <button className="">shop</button>
          </Link>
        </li>
        <li>
          <Link href="/">
            <button className="">contact</button>
          </Link>
        </li>
        <div className="icons">
          {/* <Link href="/">
            <FontAwesomeIcon
              icon={faTwitch}
              style={{ cursor: "pointer", margin: "0 14px 0 0" }}
            />
          </Link> */}
          <Link href="https://soundcloud.com/yanivhe2/">
            <FontAwesomeIcon
              icon={faSoundcloud}
              style={{ cursor: "pointer", margin: "0 14px 0 0" }}
            />
          </Link>
          <Link href="https://yanivhe.bandcamp.com/">
            <FontAwesomeIcon
              icon={faBandcamp}
              style={{ cursor: "pointer", margin: "0 14px 0 0" }}
            />
          </Link>
          <Link href="https://www.youtube.com/channel/UCBijNZ7w3IFp6tIf3m9ELJA">
            <FontAwesomeIcon
              icon={faYoutube}
              style={{ cursor: "pointer", margin: "0 14px 0 0" }}
            />
          </Link>
        </div>
      </ul>
    </nav>
  );
}

export default Header;
