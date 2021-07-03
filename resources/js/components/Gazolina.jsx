import React from "react";
import ReactDOM from "react-dom";

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
