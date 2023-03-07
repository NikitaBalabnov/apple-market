import React, { FC } from "react";
import "./Quantity.scss";
type Props = {
  className: string;
  ProductCount: number;
  setProductCount: (prev: number) => void;
  price: number;
  IncrementTotalPrice: () => void;
  DecrementTotalPrice: () => void;
};

const Quantity: FC<Props> = ({
  className,
  ProductCount,
  setProductCount,
  IncrementTotalPrice,
  DecrementTotalPrice,
}) => {
  function IncrementCount() {
    setProductCount(ProductCount + 1);
    IncrementTotalPrice();
  }
  function DicrementCount() {
    if (ProductCount > 1) {
      setProductCount(ProductCount - 1);
      DecrementTotalPrice();
    }
  }
  return (
    <div className={className}>
      <span className="Quantity_plus" onClick={IncrementCount}>
        <i className="fa-solid fa-plus"></i>
      </span>
      <span className="Quantity_counter">{ProductCount}</span>
      <span onClick={DicrementCount} className="Quantity_minus">
        <i className="fa-solid fa-minus"></i>
      </span>
    </div>
  );
};

export default Quantity;
