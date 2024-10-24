import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function ColoredButton({ buttonText, buttonType, linkTo = "", downloadProp }) {
  const commonClasses = "bg-[#F64E32] text-sm text-white font-bold px-10 py-5 uppercase shadow-box hover:shadow-hoverbox transition-all duration-500";

  return buttonType === "link" ? (
    <Link to={linkTo} className={commonClasses}>
      {buttonText}
    </Link>
  ) : (
    <button type="button" className={commonClasses} onClick={downloadProp}>
      {buttonText}
    </button>
  );
}