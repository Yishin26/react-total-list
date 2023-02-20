

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
                      <h6 className="card-title">Card title
                      <span className='float-end'>1</span>
                      </h6>
                      <button type='button' className="btn btn-primary w-100">Add Cart</button>
                    </div>
                </div>
              </div>
              <div className="col">
                <div className="card" >
                  <img src="data:image/jpeg;base64,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" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h6 className="card-title">Card title
                      <span className='float-end'>1</span>
                      </h6>
                      <button type='button' className="btn btn-primary w-100">Add Cart</button>
                    </div>
                </div>
              </div>
              <div className="col">
                <div className="card" >
                  <img src="https://img.freepik.com/free-vector/5g-networking-technology-background-with-blue-digital-line_53876-119504.jpg?w=1480&t=st=1676901770~exp=1676902370~hmac=8394eb368f6f48d067704f8fb1d1a3a20ee13816005ebe3fdeb9205aad920c52" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h6 className="card-title">Card title
                      <span className='float-end'>1</span>
                      </h6>
                      <button type='button' className="btn btn-primary w-100">Add Cart</button>
                    </div>
                </div>
              </div>
              <div className="col">
                <div className="card" >
                  <img src="https://img.freepik.com/free-vector/5g-networking-technology-background-with-blue-digital-line_53876-119504.jpg?w=1480&t=st=1676901770~exp=1676902370~hmac=8394eb368f6f48d067704f8fb1d1a3a20ee13816005ebe3fdeb9205aad920c52" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h6 className="card-title">Card title
                      <span className='float-end'>1</span>
                      </h6>
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
                      <img src="data:image/jpeg;base64,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" alt="" 
                      className="table-image"
                      />
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
