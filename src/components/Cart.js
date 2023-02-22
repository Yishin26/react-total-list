import { useContext } from "react"
import { CartContext } from "../store"
export default function Cart() {
    const [state, dispatch] = useContext(CartContext)
    const changeProductNum = (item, e) => {
        dispatch({
            type: 'CHANGE_PRODUCT_NUM',
            payload: {
                ...item,
                num: Number(e.target.value)
            }
        })
    }
    const removeProduct = (item) => {
        dispatch({
            type: 'REMOVE_PRODUCT',
            payload: { ...item }
        })
    }
   
    return (
        <div className="bg-light p-3 mb-4">
            <table className="table">
                <tbody>
                    {state.cartList.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td className="remove-btn" onClick={()=>removeProduct(item)}>
                                    x
                                </td>
                                <td>
                                    <img src={item.img} alt=""
                                        className="table-image"
                                    />
                                </td>
                                <td><span>{item.title}</span>
                                    <br />
                                    <small className='text-muted' >${item.price}</small>
                                </td>
                                <td>
                                    <select name="" id="" className='form-select' value={item.num} onChange={(e) => changeProductNum(item, e)}>
                                        {[...Array(5)].map((_, index) => {
                                            return (
                                                <option key={index} value={index + 1}>{index + 1}</option>
                                            )
                                        })}
                                    </select>
                                </td>
                                <td className='text-end'>${item.price * item.num}</td>

                            </tr>
                        )
                    })}

                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={5} className='text-end'>
                            總金額 ${state.totalPrice}
                        </td>

                    </tr>
                </tfoot>
            </table>
        </div>
    )
}