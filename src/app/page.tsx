import "./globals.css";
import Image from "next/image";
import sadruImage from "./sadbirthdaydog.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="container">
      <div className="main-content">
        <h1 className="page-heading">Rupert’s 8th Birthday & Fundraiser 🎉</h1>
        <p>
          🎉 It&apos;s a PAW-ty! Join us at <strong>Foreigner Brewery</strong>{" "}
          in Brunswick to celebrate the amazing Rupert turning{" "}
          <strong>8 years young</strong>!
        </p>
        <p>
          🐾 Our big boy recently had surgery (goodbye, tail tumor, 👋), and the
          vet bills were no joke. But don&apos;t worry - Rupert&apos;s still
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
        <a
          href="https://rupertfund.square.site/"
          target="_blank"
          rel="noopener noreferrer"
          className="donate-button"
        >
          Donate & Buy Merch
        </a>
        <div className="event-details">
          <h2>Event Details</h2>
          <p>
            📅 <strong>Date:</strong> Saturday, 7th December
          </p>
          <p>
            🕓 <strong>Time:</strong> 4:00 PM till late
          </p>
          <p>
            📍 <strong>Venue:</strong>{" "}
            <a
              href="https://www.google.com/maps?q=Foreigner+Brewing+Company,+12/102+Henkel+Street,+Brunswick,+VIC+3056"
              target="_blank"
              rel="noopener noreferrer"
              className="venue-link"
            >
              Foreigner Brewing Company
            </a>
          </p>
        </div>
      </div>
      <div className="imageContainer">
        <Image
          src={sadruImage}
          alt="Rupert the dog with a party hat looking a bit sorry for himself"
          width={1945}
          height={1768}
          style={{ maxWidth: "100%", height: "auto" }} // Ensure responsiveness
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
        </div>
      </footer>
    </div>

  );
}
