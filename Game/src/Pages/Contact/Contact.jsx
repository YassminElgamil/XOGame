import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div className="contact-container">
        <h2>Contact</h2>

        <p className="funny-text">
          Are you <strong>sure</strong> you want to contact me? 👀
        </p>
        <p className="funny-text">Okay fine… but I warned you! 😆</p>
        <p className="funny-text">Go ahead, I don’t bite… usually.</p>

        <img
          src="Laughing.gif"
          alt="Funny laughing GIF"
          className="laugh-gif"
        />
      </div>
    </>
  );
}
