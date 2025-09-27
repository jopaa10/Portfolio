import './button.scss';

const Button = ({ text, colorVariant = 'primary', onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${colorVariant === 'secondary' ? `btn--secondary` : `btn--primary`}`}>
      {text}
    </button>
  );
};

export default Button;
