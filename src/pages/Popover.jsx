import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Input,
  useSelect,
} from "@nextui-org/react";
import "../styles.css";

import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  deleteProduct,
  removeProduct,
  addProduct,
} from "../App/slices/cartSlice";

export default function Popoveer() {
  const backdrops = ["opaque", "blur", "transparent"];
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  function handleDelete(title) {
    dispatch(deleteProduct(title));
  }
  function handleplus(title) {
    dispatch(addProduct(title));
  }
  function handleminus(title) {
    dispatch(removeProduct(title));
  }
  const content = (
    <PopoverContent className="w-[240px] ">
      {(titleProps) => (
        <div className="px-1 py-2 w-full">
          <p className="text-small font-bold text-foreground" {...titleProps}>
            Cart
          </p>
          {cart?.map((item, idx) => (
            <div key={idx} className="mt-2 flex flex-col gap-2 w-full">
              <div className="selectedfruit">
                <div className="prop">
                  <div>
                    <h1>{item.name}</h1>
                    <h2>{item.price}</h2>
                  </div>
                  <div className="corb">
                    <h2>
                      <span onClick={() => handleminus(item.title)}>-</span>­­
                      ­­<span>{item.count}</span>
                      <span onClick={() => handleplus(item.title)}>+</span>
                    </h2>{" "}
                    <img
                      onClick={() => handleDelete(item.title)}
                      src="/poubelle.png"
                      alt="non"
                    />
                  </div>
                </div>
                <div>
                  <img src={item.img} alt="fruit img" />
                </div>
              </div>
              <div className="justekhet"></div>
            </div>
          ))}
        </div>
      )}
    </PopoverContent>
  );

  return (
    <div className="flex flex-wrap gap-4 buttonre popov">
      <Popover
        key={backdrops}
        showArrow
        offset={10}
        placement="bottom"
        backdrop={backdrops[0]}
      >
        <PopoverTrigger>
          <Button variant="flat" className="capitalize">
            <img src="/cart.png" alt="ee" />
          </Button>
        </PopoverTrigger>
        {content}
      </Popover>
    </div>
  );
}
