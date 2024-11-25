import "./globals.css";
import Image from "next/image";
import sadruImage from "./sadbirthdaydog.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faCalendarPlus, faLocationDot } from "@fortawesome/free-solid-svg-icons";

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
        <div className="button-container">
          <a
            href="https://rupertfund.square.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="button primary"
          >
            Donate & Buy Merch
          </a>
        </div>
        <div className="event-details">
          <h2>Event Details</h2>
          <p>
            📅 <strong>Date:</strong> Saturday, 7th December
          </p>
          <p>
            🕓 <strong>Time:</strong> 4:00 PM till late
          </p>
            <div className="button-container">
              <a
                href="https://www.google.com/maps?q=Foreigner+Brewing+Company,+12/102+Henkel+Street,+Brunswick,+VIC+3056"
                target="_blank"
                rel="noopener noreferrer"
                className="button secondary"
              >
                <FontAwesomeIcon icon={faLocationDot} />Foreigner Brewing Company
              </a>
            </div>
          <div className="button-container">
            <a
              href="/rupert-birthday-event.ics"
              download="Rupert-Birthday-Fundraiser.ics"
              className="button secondary"
            >
              <FontAwesomeIcon icon={faCalendarPlus} /> Add to Calendar (.ics)
            </a>
          </div>
          <div className="button-container">
            <a
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Rupert%E2%80%99s+8th+Birthday+%26+Fundraiser&dates=20241207T060000Z/20241207T140000Z&details=Join+us+to+celebrate+Rupert%21+Help+raise+funds+for+his+vet+bills+while+having+fun+with+exclusive+merch%2C+brews%2C+and+surprises.&location=Foreigner+Brewing+Company,+12/102+Henkel+Street,+Brunswick,+VIC+3056"
              target="_blank"
              rel="noopener noreferrer"
              className="button secondary"
            >
              <FontAwesomeIcon icon={faGoogle} /> Add to Google Calendar
            </a>
          </div>
          <div className="button-container">
            <a
              href="https://www.facebook.com/events/551922977445582"
              target="_blank"
              rel="noopener noreferrer"
              className="button secondary"
            >
              <FontAwesomeIcon icon={faFacebook} /> Join the Facebook Event!
            </a>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <Image
          src={sadruImage}
          alt="Rupert the dog with a party hat looking a bit sorry for himself"
          width={1945}
          height={1768}
          layout="responsive"
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
    </div >
  );
}
