import '../../styles/common/button.scss';

const Button = ({ text, colorVariant = 'primary', onClick, type = 'button', disabled }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`btn ${colorVariant === 'secondary' ? `btn--secondary` : `btn--primary`}`}>
      {text}
    </button>
  );
};

export default Button;
