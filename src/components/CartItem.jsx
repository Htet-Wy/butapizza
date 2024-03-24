import React from "react";
import { useDispatch } from "react-redux";
import { decrease, increase, removeItem } from "../features/menu/menuSlice";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

const CartItem = ({ id, name, price, image, amount }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 bg-white rounded-md p-2 text-primary-red w-full">
      <img src={image} alt={name} width={85} height={85} />
      <div className="flex flex-col justify-center items-start gap-2 w-full">
        <div className="flex justify-between items-center w-full">
          <div className="font-cabin text-lg font-bold">{name} Pizza</div>
          <div className="font-bold text-sm ">$ {price}</div>
        </div>
        <div className="flex justify-between items-center w-full">
          <button
            className="text-[12px] text-gray-500"
            onClick={() => {
              dispatch(removeItem(id));
            }}
          >
            Remove
          </button>
          <div className="flex justify-center items-center gap-2 px-2 border border-primary-red rounded-full">
            <button
              className="text-lg text-primary-red"
              onClick={() => {
                if (amount === 1) {
                  dispatch(removeItem(id));
                }
                dispatch(decrease(id));
              }}
            >
              <MdOutlineKeyboardArrowUp />
            </button>
            <span>{amount}</span>
            <button
              className="text-lg text-primary-red"
              onClick={() => {
                dispatch(increase(id));
              }}
            >
              <MdOutlineKeyboardArrowDown />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
