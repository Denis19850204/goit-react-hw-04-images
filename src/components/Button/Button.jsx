import PropTypes from 'prop-types';

const Button = ({ clickLoadMore }) => {
  return (
    <button onClick={clickLoadMore} className="Button">
      Load more
    </button>
  );
};

export default Button;

Button.propTypes = {
  clickLoadMore: PropTypes.func.isRequired,
}
