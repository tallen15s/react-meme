import PropTypes from "prop-types";

// Destructure props - MUST match the name for parent
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
    <button className="bg-blue-400 hover:bg-red-700 rounded text-lg">
      Submit
    </button>
  </form>
);

Form.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};

export default Form;
