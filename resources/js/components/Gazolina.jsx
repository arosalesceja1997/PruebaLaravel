import React from "react";
import ReactDOM from "react-dom";
import Maps from "simple-react-google-maps";

const RenderGazolina = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 col-md-4">
          <form>
            <div className="form-group">
              <label for="est">Estado:</label>
              <input type="text" className="form-control" id="est" />
            </div>
            <div className="form-group">
              <label for="mun">Municipio:</label>
              <input type="text" className="form-control" id="mun" />
            </div>
            <div className="form-group">
              <label for="exampleFormControlSelect2">Ordenamiento:</label>
              <select
                multiple
                className="form-control"
                id="exampleFormControlSelect2"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </form>

          <button type="button" className="btn btn-success">
            Buscar
          </button>
        </div>

        <div className="col-12 col-md-8 mb-3 myTable">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">_id</th>
                <th scope="col">calle</th>
                <th scope="col">rfc</th>
                {/* <th scope="col">date_insert</th> */}
                <th scope="col">regular</th>
                <th scope="col">premium</th>
                <th scope="col">dieasel</th>
              </tr>
            </thead>
            <tbody>

              {response.results.map((res, key) => {
                return (
                  <tr className="myHeightTh">
                    <th scope="row">{key}</th>
                    <td width="50px">{res._id}</td>
                    <td>{res.calle}</td>
                    <td>{res.rfc}</td>
                    {/* <td>{res.date_insert}</td> */}
                    <td>{res.regular}</td>
                    <td>{res.premium}</td>
                    <td>{res.dieasel}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* <div className="col-12 text-center">
        </div> */}
      </div>

      <div className="row mb-3">
            <div className="col-12">
              <Maps
                apiKey={"AIzaSyBTU0HPGDirncPvv3vHI45ayIpff5ZnZSA"}
                style={{ height: "400px", width: "100%" }}
                zoom={12}
                center={{
                  lat: 19.245554776991014,
                  lng: -103.71573392448778
                }}
              />
            </div>
          </div>
    </div>
  );
};

function App() {
  return <RenderGazolina></RenderGazolina>;
}

export default App;

if (document.getElementById("gazolina")) {
  ReactDOM.render(<App />, document.getElementById("gazolina"));
}
