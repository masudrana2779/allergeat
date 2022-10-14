import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram, AiOutlineEnvironment } from "react-icons/ai";
import { BsEnvelope, BsTelephone } from "react-icons/bs";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FooterMenu, FooterSingleItem, FooterWrap } from "./Footer.style";

const FooterComponent = () => {
  return (
    <FooterWrap>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12 col-12">
            <FooterSingleItem>
              <div className="fmap">
                <Image
                  src={"/assets/img/fMap.png"}
                  placeholder="blur"
                  blurDataURL="/assets/img/fMap.png"
                  width={90}
                  height={90}
                  alt="fMap"
                />
              </div>
              <div className="flogo">
                <Link href={"/"}>
                  <a>
                    <Image
                      src={"/assets/img/flogo.png"}
                      placeholder="blur"
                      blurDataURL="/assets/img/flogo.png"
                      width={300}
                      height={75}
                      alt="fMap"
                    />
                  </a>
                </Link>
              </div>
              <div className="fAbout">
                <span>One Map</span> <br />
                for all your dietary restrictions.
              </div>
              <div className="foSocial">
                <a href={"/"} target={"_blank"} rel="noreferrer">
                  <FaFacebookF />
                </a>
                <a href={"/"} target={"_blank"} rel="noreferrer">
                  <FaTwitter />
                </a>
                <a href={"/"} target={"_blank"} rel="noreferrer">
                  <AiFillInstagram />
                </a>
                <a href={"/"} target={"_blank"} rel="noreferrer">
                  <FaLinkedinIn />
                </a>
                <a href={"/"} target={"_blank"} rel="noreferrer">
                  <FaYoutube />
                </a>
              </div>
            </FooterSingleItem>
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-6">
                <FooterSingleItem>
                  <h4>Our Allergies</h4>
                  <FooterMenu>
                    <ul>
                      <li>
                        <Link href={"/"}>Gluten</Link>
                      </li>
                      <li>
                        <Link href={"/"}>Dairy</Link>
                      </li>
                      <li>
                        <Link href={"/"}>Meat</Link>
                      </li>
                      <li>
                        <Link href={"/"}>Egg</Link>
                      </li>
                      <li>
                        <Link href={"/"}>Nuts</Link>
                      </li>
                      <li>
                        <Link href={"/"}>Shellfish</Link>
                      </li>
                    </ul>
                  </FooterMenu>
                </FooterSingleItem>
              </div>
              <div className="col-md-3 col-sm-6 col-6">
                <FooterSingleItem>
                  <h4>Restaurants</h4>
                  <FooterMenu>
                    <ul>
                      <li>
                        <Link href={"/"}>Add my Location</Link>
                      </li>
                      <li>
                        <Link href={"/"}>Update Items</Link>
                      </li>
                      <li>
                        <Link href={"/"}>Advertise with Us</Link>
                      </li>
                      <li>
                        <Link href={"/"}>Events </Link>
                      </li>
                      <li>
                        <Link href={"/"}>Press</Link>
                      </li>
                      <li>
                        <Link href={"/"}>Gluten</Link>
                      </li>
                    </ul>
                  </FooterMenu>
                </FooterSingleItem>
              </div>
              <div className="col-md-3 col-sm-6 col-6">
                <FooterSingleItem>
                  <h4>Support</h4>
                  <FooterMenu>
                    <ul>
                      <li>
                        <Link href={"/"}>How to Use</Link>
                      </li>
                      <li>
                        <Link href={"/"}>Health Disclaimer</Link>
                      </li>
                      <li>
                        <Link href={"/"}>Report Item Issue</Link>
                      </li>
                      <li>
                        <Link href={"/"}>Report Site Issue</Link>
                      </li>
                      <li>
                        <Link href={"/"}>Chat with Support</Link>
                      </li>
                    </ul>
                  </FooterMenu>
                </FooterSingleItem>
              </div>
              <div className="col-md-3 col-sm-6 col-6">
                <FooterSingleItem>
                  <h4>Contacts us</h4>
                  <div className="fAddress">
                    <p>
                      <span>
                        <BsEnvelope />
                      </span>
                      hello@allergeat.app
                    </p>
                    <p>
                      <span>
                        <BsTelephone />
                      </span>
                      (414) 687 - 5892
                    </p>
                    <p>
                      <span>
                        <AiOutlineEnvironment />
                      </span>
                      Virtual Office Boca Raton Fl
                    </p>
                  </div>
                </FooterSingleItem>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="copyRightWrap">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-12">
                  <p>
                    Copyright © {new Date().getFullYear()} All Rights Reserved
                  </p>
                </div>
                <div className="col-md-6 col-sm6 col-12">
                  <div className="fTlonk">
                    <Link href={"/"}>Terms and Conditions</Link>|
                    <Link href={"/"}>Privacy Policy</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterWrap>
  );
};

export default FooterComponent;
