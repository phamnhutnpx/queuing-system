import React from "react";
import { Button } from "antd";

interface IProps {
  className?: any;
  text?: any;
}
const ButtonCostum: React.FC<IProps> = ({ className, text }) => {
  return (
    <>
      <Button className={`btn ${className}`}>
        <span>{text}</span>
      </Button>
    </>
  );
};

// export const ButtonOutline: React.FC<IProps> = ({ className, text }) => {
//   return (
//     <>
//       <Button className="btn-outline" />
//     </>
//   );
// };
export default ButtonCostum;
