import { StarIcon } from "@heroicons/react/solid";
import CurrencyFormat from "react-currency-format";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../slices/basketSlice";

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };
    //push item to redux
    dispatch(addToCart(product));
  };

  const removeItemFromCart = () => {
    //remove item from redux
    dispatch(removeFromCart({ id }));
  };

  return (
    <div className="grid grid-cols-5 ">
      <Image src={image} height={200} width={200} objectFit={"contain"} />

      {/* Middle Section */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-5 text-yellow-500" />
            ))}
        </div>

        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <CurrencyFormat
          value={price}
          thousandSeparator={true}
          prefix={"$"}
          displayType={"text"}
        />

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      {/* Right add/remove buttons */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToCart} className="button">
          Add to cart
        </button>
        <button onClick={removeItemFromCart} className="button">
          Remove from cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
