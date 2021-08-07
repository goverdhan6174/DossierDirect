import React, { forwardRef, useRef } from "react";
import mergeRefs from "react-merge-refs";
import s from "./Button.module.css";
import { LoadingDots } from "../LoadingDots";

const Button = forwardRef((props, buttonRef) => {
  const {
    className,
    variant = "flat",
    children,
    active,
    width,
    type,
    loading = false,
    disabled = false,
    style = {},
    Component = "button",
    ...rest
  } = props;
  const ref = useRef(null);

  const rootCN = [
    s.root,
    {
      [s.ghost]: variant === "ghost",
      [s.slim]: variant === "slim",
      [s.loading]: loading,
      [s.disabled]: disabled,
    },
    className,
  ];

  const rootClassName = `${s.root} ${s[type]} ${className}`;
  return (
    <Component
      aria-pressed={active}
      data-variant={variant}
      ref={mergeRefs([ref, buttonRef])}
      className={rootClassName}
      disabled={disabled}
      style={{
        width,
        ...style,
      }}
      {...rest}
    >
      {children}
      {loading && (
        <i className="pl-2 m-0 flex">
          <LoadingDots />
        </i>
      )}
    </Component>
  );
});

export default Button;
