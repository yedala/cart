import { useEffect, useState } from "react";

export default function Cart({
  state,
  dispatch,
}: {
  state: any;
  dispatch: any;
}) {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const sum = state?.cart?.reduce((a: any, curr: any) => {
      a += curr.quantity * curr.price;
      return a;
    }, 0);
    setTotal(sum);
  }, [state]);

  const changeQuantity = (item: any) => {
    dispatch({ type: "CHANGE_Quantity", payload: item });
  };

  return (
    <div className="cartContainer">
      <div className="productItems">
        {state?.cart?.map((item: any, index: any) => {
          return (
            <div className="card">
              <div className="count">
                <img className="img1" src={item.images[0]} />
                <div>
                  <button
                  className="action"
                    onClick={() =>
                      changeQuantity({ ...item, quantity: item.quantity - 1 })
                    }
                  >
                    -
                  </button>
                  <input type="number" value={item.quantity} />
                  <button
                  className="action"
                    onClick={() =>
                      changeQuantity({ ...item, quantity: item.quantity + 1 })
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="description">{item.description}</div>
            </div>
          );
        })}
      </div>
      <div className="total">
        <div>Total:</div>
        <div>
          {/* {total.toString().split(".")?.[0]}.
          {total.toString().split(".")?.[1]?.slice(0, 2)}$ */}
          {Math.round(total)}
        </div>
      </div>
    </div>
  );
}
