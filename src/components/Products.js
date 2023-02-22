import { useContext } from "react"
import { CartContext } from "../store"

import productsData from "../assets/productsData"
export default function Products() {
    const [state,dispatch] = useContext(CartContext)
    const addCart = (product) => {
        dispatch({
            type: 'ADD_CART',
            payload: { 
                ...product,
                num:1
             }
        })
    }
    return (
        <div className="row row-cols-3 g-3">
            {productsData.map(product => {
                return (<div className="col" key={product.id}>
                    <div className="card" >
                        <img src={product.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h6 className="card-title">
                                {product.title}
                                <span className='float-end'>${product.price}</span>
                            </h6>
                            <button type='button' className="btn btn-primary w-100" onClick={()=>addCart(product)}>+</button>
                        </div>
                    </div>
                </div>)
            })}

        </div>
    )
}