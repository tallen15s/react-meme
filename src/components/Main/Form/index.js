import PropTypes from "prop-types";

const Form = ({ submitHandler }) => (
  <form
    onSubmit={submitHandler}
    className="flex flex-col items-center gap-2 pb-4"
  >
    <div>
      <label htmlFor=""></label>
      <input type="text" />
    </div>
    <div>
      <label htmlFor=""></label>
      <input type="text" />
    </div>
  </form>
);

Form.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};

export default Form;
