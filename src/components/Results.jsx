import PropTypes from "prop-types";
import close from "../assets/images/close.svg";
const Result = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-40 mx-auto p-5 border w-[60%] h-[50%] shadow-lg rounded-3xl bg-white">
        <div className="m-3">
          <div className="flex items-center justify-between w-full">
            <h1 className=" text-2xl font-semibold">Results</h1>
            <div onClick={onClose} className="w-8">
              <img src={close} alt="" />
            </div>
          </div>
          <div className=" mt-12">{children}</div>
        </div>
      </div>
    </div>
  );
};

Result.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Result;
