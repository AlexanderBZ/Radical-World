import classNames from 'classnames';
import PropTypes from "prop-types";

export default function Text(props) {
    const className = classNames({
      ["text-base"]: true,
      ["text-header-dark-text-color"]: props.variant === "dark",
      ["text-header-subtext-dark-text-color"]: props.variant !== "dark",
      [props.className]: true,
    });
    return <p {...props} className={className}>{props.children}</p>;
  }
  
  Text.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.string,
  };
  