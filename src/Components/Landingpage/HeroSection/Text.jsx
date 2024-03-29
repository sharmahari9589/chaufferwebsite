import React from "react";

const sizeClasses = {
  txtLatoSemiBold23: "font-lato font-semibold",
  txtLatoRegular8: "font-lato font-normal",
  txtBeVietnamProLight16WhiteA700: "font-bevietnampro font-light",
  txtLatoSemiBold23WhiteA700: "font-lato font-semibold",
  txtLatoRegular10: "font-lato font-normal",
  txtLatoRegular14: "font-lato font-normal",
  txtLatoRegular14WhiteA700: "font-lato font-normal",
  txtPlayfairDisplaySemiBold34: "font-playfairdisplay font-semibold",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtPlayfairDisplaySemiBold72: "font-playfairdisplay font-semibold",
  txtPlayfairDisplaySemiBold48Gray900: "font-playfairdisplay font-semibold",
  txtLatoSemiBold14: "font-lato font-semibold",
  txtPlayfairDisplaySemiBold48: "font-playfairdisplay font-semibold",
  txtLatoRegular16WhiteA70090: "font-lato font-normal",
  txtPlayfairDisplaySemiBold34WhiteA700: "font-playfairdisplay font-semibold",
  txtLatoRegular18: "font-lato font-normal",
  txtLatoSemiBold23Bluegray200: "font-lato font-semibold",
  txtLatoRegular16: "font-lato font-normal",
  txtLatoRegular16Bluegray600: "font-lato font-normal",
  txtInterMedium16: "font-inter font-medium",
  txtInterSemiBold18: "font-inter font-semibold",
  txtBeVietnamProLight16: "font-bevietnampro font-light",
  txtLatoSemiBold19: "font-lato font-semibold",
  txtLatoSemiBold16: "font-lato font-semibold",
  txtLatoRegular20: "font-lato font-normal",
  txtLatoRegular16Bluegray50001: "font-lato font-normal",
  txtInterRegular16: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
