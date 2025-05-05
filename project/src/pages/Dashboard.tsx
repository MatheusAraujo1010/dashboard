import React from 'react';
import { 
  Network, 
  Building2, 
  Send, 
  Users, 
  Cpu, 
  MessageSquare,
  Link as ConnectionIcon
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { icon: Network, label: 'Conexões Ativas', value: '128', change: '+12%' },
    { icon: ConnectionIcon, label: 'Total de Conexões', value: '2,451', change: '+5%' },
    { icon: Building2, label: 'Empresas', value: '847', change: '+18%' },
    { icon: Send, label: 'Empresas Enviadas', value: '632', change: '+15%' },
    { icon: Users, label: 'Leads Gerados', value: '1,293', change: '+25%' },
    { icon: Cpu, label: 'Chips Ativos', value: '45', change: '+8%' },
    { icon: MessageSquare, label: 'Mensagens Hoje', value: '3,847', change: '+22%' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-neutral-900">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className="p-2 bg-primary-50 rounded-lg">
                <stat.icon className="w-6 h-6 text-primary-600" />
              </div>
              <span className={`text-sm font-medium ${
                stat.change.startsWith('+') ? 'text-success-600' : 'text-danger-600'
              }`}>
                {stat.change}
              </span>
            </div>
            <p className="mt-4 text-2xl font-semibold text-neutral-900">
              {stat.value}
            </p>
            <p className="text-sm text-neutral-600 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;