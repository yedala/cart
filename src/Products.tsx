export default function Products({
  state,
  dispatch,
}: {
  state: any;
  dispatch: any;
}) {
  const addtoCart = (product: any) => {
    dispatch({ type: "ADD_To_Cart", payload: product });
  };
  return (
    <div className="container">
      {state?.products?.map((product: any) => {
        return (
          <div key={product.id} className="card">
            <img className="img" src={product.images[0]} />
            <button onClick={() => addtoCart(product)} className="btn">
              Add to Cart
            </button>
            {/* <button className="btn">Remove from cart</button> */}
          </div>
        );
      })}
    </div>
  );
}
