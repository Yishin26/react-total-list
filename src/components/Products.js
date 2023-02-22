
import productsData from "../assets/productsData"
export default function Products() {
    return (
        <div className="row row-cols-3 g-3 mb-4">
            {productsData.map(product => {
                return (<div className="col" key={product.id}>
                    <div className="card" >
                        <img src={product.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h6 className="card-title">
                                {product.title}
                                <span className='float-end'>{product.price}</span>
                            </h6>
                            <button type='button' className="btn btn-primary w-100">Add Cart</button>
                        </div>
                    </div>
                </div>)
            })}

        </div>
    )
}