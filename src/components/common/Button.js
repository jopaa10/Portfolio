import '../../styles/common/button.scss';

const Button = ({ text, colorVariant = 'primary', onClick, type = 'button' }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`btn ${colorVariant === 'secondary' ? `btn--secondary` : `btn--primary`}`}
    >
      {text}
    </button>
  );
};

export default Button;
