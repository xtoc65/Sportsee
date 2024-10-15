import errorImg from "../assets/error.png";

function Error({ description }) {
  return (
    <div>
      <img src={errorImg} alt="error" width="30"/> {description}
    </div>
  );
}

export default Error;
