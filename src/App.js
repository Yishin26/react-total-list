import './assets/all.scss'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand">Shop</span>
        <button className="btn btn-outline-dark my-2 my-sm-0 position-relative" type="submit">購物車<span className="badge position-absolute top-0 start-100 translate-middle">10</span></button>
      </nav>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-7">
            <div className="row row-cols-3 g-3">
              <div className="col">
                <div className="card" >
                  <img src="https://img.freepik.com/free-vector/5g-networking-technology-background-with-blue-digital-line_53876-119504.jpg?w=1480&t=st=1676901770~exp=1676902370~hmac=8394eb368f6f48d067704f8fb1d1a3a20ee13816005ebe3fdeb9205aad920c52" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Card title
                      <span className='float-end'>1</span>
                      </h5>
                      <button type='button' className="btn btn-primary w-100">Add Cart</button>
                    </div>
                </div>
              </div>
              <div className="col">
                <div className="card" >
                  <img src="https://img.freepik.com/free-vector/5g-networking-technology-background-with-blue-digital-line_53876-119504.jpg?w=1480&t=st=1676901770~exp=1676902370~hmac=8394eb368f6f48d067704f8fb1d1a3a20ee13816005ebe3fdeb9205aad920c52" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Card title
                      <span className='float-end'>1</span>
                      </h5>
                      <button type='button' className="btn btn-primary w-100">Add Cart</button>
                    </div>
                </div>
              </div>
              <div className="col">
                <div className="card" >
                  <img src="https://img.freepik.com/free-vector/5g-networking-technology-background-with-blue-digital-line_53876-119504.jpg?w=1480&t=st=1676901770~exp=1676902370~hmac=8394eb368f6f48d067704f8fb1d1a3a20ee13816005ebe3fdeb9205aad920c52" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Card title
                      <span className='float-end'>1</span>
                      </h5>
                      <button type='button' className="btn btn-primary w-100">Add Cart</button>
                    </div>
                </div>
              </div>
              <div className="col">
                <div className="card" >
                  <img src="https://img.freepik.com/free-vector/5g-networking-technology-background-with-blue-digital-line_53876-119504.jpg?w=1480&t=st=1676901770~exp=1676902370~hmac=8394eb368f6f48d067704f8fb1d1a3a20ee13816005ebe3fdeb9205aad920c52" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Card title
                      <span className='float-end'>1</span>
                      </h5>
                      <button type='button' className="btn btn-primary w-100">Add Cart</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="bg-light p-3">
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      <a href=''>1</a>
                    </td>
                    <td>
                      <img src="" alt="" />
                    </td>
                    <td><span>健康餐</span>
                      <br />
                        <small className='text-muted' >NT $300</small>
                    </td>
                    <td>
                      <select name="" id="" className='form-select'></select>
                    </td>
                    <td className='text-end'>$440</td>
                    
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                  <td colSpan={5} className='text-end'>
                    總金額 $440
                  </td>

                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
