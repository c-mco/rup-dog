/* page.tsx */

import "./globals.css";
import Image from "next/image";
import sadruImage from "./sadru.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="container">
      <div className="main-content">
        <p>
          🎉 It&apos;s a PAW-ty! Join us at <strong>Foreigner Brewery</strong>{" "}
          in Brunswick to celebrate the amazing Rupert turning{" "}
          <strong>8 years young</strong>!
        </p>
        <p>
          🐾 Our big boy recently had surgery (goodbye, tail tumor, 👋), and the
          vet bills were no joke. But don&apos;t worry—Rupert&apos;s still
          wagging what he&apos;s got left!
        </p>
        <p>
          To help out, we&apos;re throwing a fundraiser with exclusive Rupert
          merch, fun surprises, and plenty of brews. All proceeds go to covering
          his medical bills—and maybe a few extra dog treats.
        </p>
        <p>
          Don&apos;t miss the chance to support the best boy in town. Be there
          or be...a sad dog pun. 🐶
        </p>
      </div>
      <div className="imageContainer">
        <Image
          src={sadruImage}
          alt="Sadru the Dog"
          layout="responsive"
          width={500}
          height={500}
        />
      </div>
      <footer className="footer">
        <div className="socials">
          <a
            href="https://www.instagram.com/theokayestdane"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} /> @theokayestdane
          </a>
          <a
            href="https://www.instagram.com/foreignerbrewery"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} /> @foreignerbrewing
          </a>
          <a
            href="https://www.facebook.com/foreignerbrewery"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} /> @foreignerbrewing
          </a>
        </div>
      </footer>
    </div>
  );
}
