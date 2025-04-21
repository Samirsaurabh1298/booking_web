import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Sign in, save money!</h1>
      <span className="mailDesc">
        Save 10% or more at participating properties – just look for the blue
        Genius label
      </span>
      <div className="mailInputConatiner">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default MailList