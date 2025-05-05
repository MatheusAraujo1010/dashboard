import React, { useState } from 'react';
import { Pencil, Trash2, Search } from 'lucide-react';
import Button from '../components/ui/Button';

interface Company {
  id: number;
  name: string;
  contact: string;
  email: string;
  phone: string;
  status: 'Contacted' | 'Pending' | 'Converted';
  lastContact: string;
}

const Companies: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock data - replace with actual API call
  const companies: Company[] = [
    {
      id: 1,
      name: 'Tech Corp',
      contact: 'John Doe',
      email: 'john@techcorp.com',
      phone: '(11) 99999-9999',
      status: 'Contacted',
      lastContact: '2025-03-15',
    },
    {
      id: 2,
      name: 'Innovation Labs',
      contact: 'Jane Smith',
      email: 'jane@innovationlabs.com',
      phone: '(11) 88888-8888',
      status: 'Converted',
      lastContact: '2025-03-14',
    },
  ];

  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.contact.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (id: number) => {
    // TODO: Implement edit functionality
    console.log('Edit company:', id);
  };

  const handleDelete = (id: number) => {
    // TODO: Implement delete functionality
    console.log('Delete company:', id);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-neutral-900">Companies</h1>
      </div>

      <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
        <div className="p-6 border-b border-neutral-200">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-neutral-50">
                <th className="px-6 py-3 text-left text-sm font-medium text-neutral-500">Company</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-neutral-500">Contact</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-neutral-500">Email</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-neutral-500">Phone</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-neutral-500">Status</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-neutral-500">Last Contact</th>
                <th className="px-6 py-3 text-right text-sm font-medium text-neutral-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {filteredCompanies.map((company) => (
                <tr key={company.id} className="hover:bg-neutral-50">
                  <td className="px-6 py-4 text-sm text-neutral-900">{company.name}</td>
                  <td className="px-6 py-4 text-sm text-neutral-600">{company.contact}</td>
                  <td className="px-6 py-4 text-sm text-neutral-600">{company.email}</td>
                  <td className="px-6 py-4 text-sm text-neutral-600">{company.phone}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      company.status === 'Converted' ? 'bg-success-50 text-success-600' :
                      company.status === 'Contacted' ? 'bg-primary-50 text-primary-600' :
                      'bg-warning-50 text-warning-600'
                    }`}>
                      {company.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-600">{company.lastContact}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => handleEdit(company.id)}
                        className="p-1 text-neutral-600 hover:text-primary-600 transition-colors"
                        title="Edit"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(company.id)}
                        className="p-1 text-neutral-600 hover:text-danger-600 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Companies;