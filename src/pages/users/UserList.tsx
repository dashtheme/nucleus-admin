import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faUserPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive';
  joinDate: string;
}

const UserList = () => {
  const [users] = useState<User[]>([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'Active',
      joinDate: '2023-01-15'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Editor',
      status: 'Active',
      joinDate: '2023-02-20'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      role: 'User',
      status: 'Inactive',
      joinDate: '2023-03-10'
    },
    {
      id: 4,
      name: 'Sarah Williams',
      email: 'sarah@example.com',
      role: 'Editor',
      status: 'Active',
      joinDate: '2023-04-05'
    }
  ]);

  const getRoleBadgeClass = (role: string) => {
    switch (role.toLowerCase()) {
      case 'admin':
        return 'bg-primary';
      case 'editor':
        return 'bg-info';
      default:
        return 'bg-secondary';
    }
  };

  return (
    <div className="users-page">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 mb-0">Users</h1>
        <button className="btn btn-primary">
          <FontAwesomeIcon icon={faUserPlus} className="me-2" />
          Add User
        </button>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search users..."
                />
                <button className="btn btn-primary" type="button">
                  <FontAwesomeIcon icon={faSearch} className="me-2" />
                  Search
                </button>
              </div>
            </div>
            <div className="col-md-6 text-md-end">
              <select className="form-select w-auto d-inline-block">
                <option value="all">All Roles</option>
                <option value="admin">Admin</option>
                <option value="editor">Editor</option>
                <option value="user">User</option>
              </select>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Join Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <span className={`badge ${getRoleBadgeClass(user.role)}`}>
                        {user.role}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`badge ${
                          user.status === 'Active'
                            ? 'bg-success'
                            : 'bg-danger'
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td>{user.joinDate}</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2">
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button className="btn btn-sm btn-danger">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <nav className="d-flex justify-content-between align-items-center mt-3">
            <p className="text-muted small mb-0">Showing 1 to 4 of 4 entries</p>
            <ul className="pagination pagination-sm mb-0">
              <li className="page-item disabled">
                <span className="page-link">Previous</span>
              </li>
              <li className="page-item active">
                <span className="page-link">1</span>
              </li>
              <li className="page-item disabled">
                <span className="page-link">Next</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default UserList;
