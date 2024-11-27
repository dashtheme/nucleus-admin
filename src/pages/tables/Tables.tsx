import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSort,
  faSortUp,
  faSortDown,
  faDownload,
  faFilter,
} from '@fortawesome/free-solid-svg-icons';

interface TableData {
  id: number;
  name: string;
  position: string;
  office: string;
  age: number;
  startDate: string;
  salary: number;
}

const Tables = () => {
  const [data] = useState<TableData[]>([
    {
      id: 1,
      name: 'Tiger Nixon',
      position: 'System Architect',
      office: 'Edinburgh',
      age: 61,
      startDate: '2011/04/25',
      salary: 320800,
    },
    {
      id: 2,
      name: 'Garrett Winters',
      position: 'Accountant',
      office: 'Tokyo',
      age: 63,
      startDate: '2011/07/25',
      salary: 170750,
    },
    {
      id: 3,
      name: 'Ashton Cox',
      position: 'Junior Technical Author',
      office: 'San Francisco',
      age: 66,
      startDate: '2009/01/12',
      salary: 86000,
    },
    {
      id: 4,
      name: 'Cedric Kelly',
      position: 'Senior Javascript Developer',
      office: 'Edinburgh',
      age: 22,
      startDate: '2012/03/29',
      salary: 433060,
    },
    {
      id: 5,
      name: 'Airi Satou',
      position: 'Accountant',
      office: 'Tokyo',
      age: 33,
      startDate: '2008/11/28',
      salary: 162700,
    },
  ]);

  return (
    <div className="tables-page">
      <h1 className="h3 mb-4">Tables</h1>

      <div className="row">
        {/* Basic Table */}
        <div className="col-12 col-lg-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Basic Table</h5>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.position}</td>
                        <td>{item.office}</td>
                        <td>${item.salary.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Striped Table */}
        <div className="col-12 col-lg-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Striped Table</h5>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.position}</td>
                        <td>{item.office}</td>
                        <td>{item.age}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Bordered Table */}
        <div className="col-12 col-lg-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Bordered Table</h5>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Start Date</th>
                      <th>Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.position}</td>
                        <td>{item.startDate}</td>
                        <td>${item.salary.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Hoverable Table */}
        <div className="col-12 col-lg-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Hoverable Table</h5>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.position}</td>
                        <td>{item.office}</td>
                        <td>{item.age}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Table */}
        <div className="col-12 mb-4">
          <div className="card">
            <div className="card-header">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title mb-0">Advanced Table</h5>
                <div className="d-flex gap-2">
                  <button className="btn btn-light">
                    <FontAwesomeIcon icon={faFilter} className="me-2" />
                    Filter
                  </button>
                  <button className="btn btn-light">
                    <FontAwesomeIcon icon={faDownload} className="me-2" />
                    Export
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                      />
                      <button className="btn btn-outline-secondary" type="button">
                        Search
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6 text-md-end">
                    <select className="form-select w-auto d-inline-block">
                      <option value="5">5 per page</option>
                      <option value="10">10 per page</option>
                      <option value="25">25 per page</option>
                    </select>
                  </div>
                </div>

                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>
                        Name{' '}
                        <FontAwesomeIcon
                          icon={faSortUp}
                          className="text-muted ms-1"
                        />
                      </th>
                      <th>
                        Position{' '}
                        <FontAwesomeIcon icon={faSort} className="text-muted ms-1" />
                      </th>
                      <th>
                        Office{' '}
                        <FontAwesomeIcon icon={faSort} className="text-muted ms-1" />
                      </th>
                      <th>
                        Age{' '}
                        <FontAwesomeIcon
                          icon={faSortDown}
                          className="text-muted ms-1"
                        />
                      </th>
                      <th>
                        Start date{' '}
                        <FontAwesomeIcon icon={faSort} className="text-muted ms-1" />
                      </th>
                      <th>
                        Salary{' '}
                        <FontAwesomeIcon icon={faSort} className="text-muted ms-1" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.position}</td>
                        <td>{item.office}</td>
                        <td>{item.age}</td>
                        <td>{item.startDate}</td>
                        <td>${item.salary.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <p className="text-muted">Showing 1 to 5 of 5 entries</p>
                  </div>
                  <div className="col-md-6">
                    <nav className="float-md-end">
                      <ul className="pagination mb-0">
                        <li className="page-item disabled">
                          <a className="page-link" href="#" tabIndex={-1}>Previous</a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="#">1</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">2</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">3</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">Next</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tables;
