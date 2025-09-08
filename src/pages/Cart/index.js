import { useSelector } from "react-redux";

function Home() {
  const cart = useSelector(state => state.cartReducer);
  
  return (
    <>
      <h2>Cart</h2>
    </>
  )
}

export default Home;