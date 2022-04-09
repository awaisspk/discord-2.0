import React from "react";
import cx from "classnames";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  varient: "primary" | "secondary" | "tertiary";
};

export const Button = (props: ButtonProps) => {
  const { varient, children, className, ...rest } = props;
  return (
    <>
      <button
        {...rest}
        className={cx(
          "px-4 text-sm font-semibold text-gray-600 py-2 rounded-full",
          {
            "bg-white hover:bg-white/90 active:bg-white": varient === "primary",
          },
          {
            "bg-black hover:bg-black/80 active:bg-black/90 text-white":
              varient === "secondary",
          },
          className
        )}
      >
        {children}
      </button>
    </>
  );
};

type IconProps = React.ComponentPropsWithoutRef<"button">;

export const IconButton = ({ children, className, ...rest }: IconProps) => {
  return (
    <>
      <button
        {...rest}
        className={cx(
          "hover:bg-blue-200/20 p-1 rounded transition-colors",
          className
        )}
      >
        {children}
      </button>
    </>
  );
};
