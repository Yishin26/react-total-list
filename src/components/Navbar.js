import { useContext } from "react"
import { CartContext } from "../store"

export default function Navbar() {
    const [state] = useContext(CartContext)
    return (
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand">Shop</span>
            <button className="btn btn-outline-dark my-2 my-sm-0 position-relative" type="submit">購物車<span className="badge position-absolute top-0 start-100 translate-middle">{state.cartList.length}</span></button>
        </nav>
    )
}