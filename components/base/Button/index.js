import classNames from "classnames";
import PropTypes from "prop-types";
import Link from "../Link";

export default function Button(props) {
  if (props.href) {
    return (
      <Link href={props.href}>
        <ButtonComponent {...props} />
      </Link>
    );
  }
  return <ButtonComponent {...props} />;
}

const ButtonComponent = (props) => {
  const className = classNames({
    ["flex justify-center items-center w-full px-8 py-4 gap-[10px] rounded-[32px] bg-primary text-white"]: true,
    [props.className]: true,
  });
  return (
    <button {...props} className={className}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  className: PropTypes.any,
  onClick: PropTypes.func,
};
