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
              <input
                type="text"
                className="form-control"
                id="est"
              />
            </div>
            <div className="form-group">
              <label for="mun">Municipio:</label>
              <input
                type="text"
                className="form-control"
                id="mun"
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlSelect2">
                Ordenamiento:
              </label>
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

          <button type="button" class="btn btn-success">Buscar</button>
        </div>

        <div className="col-12 col-md-8">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Direcion</th>
                <th scope="col">Verde</th>
                <th scope="col">Roja</th>
                <th scope="col">Negra</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
            </tbody>
          </table>

          <div className="row">
            <div className="col-12">
              <Maps
                apiKey={"AIzaSyBTU0HPGDirncPvv3vHI45ayIpff5ZnZSA"}
                style={{height: "400px", width: "100%"}}
                zoom={12}
                center={{
                  lat: 19.245554776991014,
                  lng: -103.71573392448778
                }}
              />
            </div>
          </div>
        </div>
        {/* <div className="col-12 text-center">
        </div> */}
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
