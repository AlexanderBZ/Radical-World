import classNames from "classnames";
import PropTypes from "prop-types";

export default function Header(props) {
  const className = classNames({
    ["text-2xl lg:text-4xl font-semibold font-display capitalize"]: true,
    ["text-header-dark-text-color"]: props.variant === "dark",
    ["text-header-light-text-color"]: props.variant !== "dark",
    [props.className]: true,
  });
  return <h1 {...props} className={className} >{props.children}</h1>;
}

Header.propTypes = {
  className: PropTypes.any,
  variant: PropTypes.string,
};
