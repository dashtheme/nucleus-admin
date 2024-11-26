import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEdit,
  faTrash,
  faSort,
  faSortUp,
  faSortDown
} from '@fortawesome/free-solid-svg-icons';

const Tables: React.FC = () => {
  return (
    <div className="components-page">
      <div className="page-header">
        <h1>Tables</h1>
        <p className="lead">Examples of table styles and variations</p>
      </div>

      <div className="row">
        {/* Basic Table */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Basic Table</h5>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Striped Table */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Striped Table</h5>
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Bordered Table */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Bordered Table</h5>
            </div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Hoverable Table */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Hoverable Table</h5>
            </div>
            <div className="card-body">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Table with Actions */}
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Table with Actions</h5>
            </div>
            <div className="card-body">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">
                      ID
                      <FontAwesomeIcon icon={faSort} className="ms-2" />
                    </th>
                    <th scope="col">
                      Name
                      <FontAwesomeIcon icon={faSortUp} className="ms-2" />
                    </th>
                    <th scope="col">
                      Email
                      <FontAwesomeIcon icon={faSortDown} className="ms-2" />
                    </th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>John Doe</td>
                    <td>john@example.com</td>
                    <td><span className="badge bg-success">Active</span></td>
                    <td>
                      <button className="btn btn-sm btn-info me-2">
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button className="btn btn-sm btn-danger">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jane Smith</td>
                    <td>jane@example.com</td>
                    <td><span className="badge bg-warning">Pending</span></td>
                    <td>
                      <button className="btn btn-sm btn-info me-2">
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button className="btn btn-sm btn-danger">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Bob Johnson</td>
                    <td>bob@example.com</td>
                    <td><span className="badge bg-danger">Inactive</span></td>
                    <td>
                      <button className="btn btn-sm btn-info me-2">
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button className="btn btn-sm btn-danger">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tables;
