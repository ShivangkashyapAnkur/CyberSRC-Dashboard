
import React from 'react';

interface User {
  name: string;
  email: string;
  userType: string;
  joined: string;
  status: 'active' | 'pending' | 'approved';
}

const users: User[] = [
  { name: "Mike Howard", email: "mikehoward@gmail.com", userType: "Admin", joined: "20 Apr 2019", status: "active" },
  { name: "Andrew Peters", email: "andrew@gmail.com", userType: "Editor", joined: "20 Apr 2019", status: "pending" },
  { name: "Nora Ingestion", email: "noraingestion@gmail.com", userType: "Subscriber", joined: "20 Apr 2019", status: "approved" },
  { name: "Mike Hadley", email: "mikehadley@gmail.com", userType: "Admin", joined: "20 Apr 2019", status: "active" },
  { name: "Kevin Peterson", email: "kevinpeterson@gmail.com", userType: "Admin", joined: "20 Apr 2019", status: "pending" },
];

const getStatusColor = (status: User['status']) => {
  switch (status) {
    case 'active':
      return 'bg-purple-100 text-purple-600';
    case 'pending':
      return 'bg-blue-100 text-blue-600';
    case 'approved':
      return 'bg-coral-100 text-coral-600';
    default:
      return 'bg-gray-100 text-gray-600';
  }
};

export function UserTable() {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
      <h2 className="text-lg sm:text-xl font-semibold mb-6">Standard Table Design</h2>
      <div className="overflow-x-auto -mx-4 sm:mx-0">
        <div className="inline-block min-w-full align-middle">
          <table className="min-w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500">
                <th className="pb-4 px-4 sm:px-6">Name</th>
                <th className="pb-4 px-4 sm:px-6">Email</th>
                <th className="pb-4 px-4 sm:px-6">User Type</th>
                <th className="pb-4 px-4 sm:px-6">Joined</th>
                <th className="pb-4 px-4 sm:px-6">Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-t border-gray-100">
                  <td className="py-4 px-4 sm:px-6 whitespace-nowrap">{user.name}</td>
                  <td className="py-4 px-4 sm:px-6 text-gray-500 whitespace-nowrap">{user.email}</td>
                  <td className="py-4 px-4 sm:px-6 whitespace-nowrap">{user.userType}</td>
                  <td className="py-4 px-4 sm:px-6 text-gray-500 whitespace-nowrap">{user.joined}</td>
                  <td className="py-4 px-4 sm:px-6 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-sm capitalize ${getStatusColor(user.status)}`}>
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
