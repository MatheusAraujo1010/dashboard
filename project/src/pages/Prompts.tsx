import React, { useState } from 'react';
import { Pencil, Trash2, Plus, Search } from 'lucide-react';
import Button from '../components/ui/Button';

interface Prompt {
  id: number;
  name: string;
  content: string;
  category: string;
  lastModified: string;
}

const Prompts: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Prompt | null>(null);
  
  const [prompts, setPrompts] = useState<Prompt[]>([
    {
      id: 1,
      name: 'Sales Introduction',
      content: 'Hello, I am reaching out regarding...',
      category: 'Sales',
      lastModified: '2025-03-15',
    },
    {
      id: 2,
      name: 'Follow-up Template',
      content: 'I wanted to follow up on our previous...',
      category: 'Follow-up',
      lastModified: '2025-03-14',
    },
  ]);

  const filteredPrompts = prompts.filter(prompt =>
    prompt.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prompt.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (prompt: Prompt) => {
    setIsEditing(prompt.id);
    setEditForm(prompt);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this prompt?')) {
      setPrompts(prompts.filter(prompt => prompt.id !== id));
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editForm) {
      setPrompts(prompts.map(prompt => 
        prompt.id === editForm.id ? editForm : prompt
      ));
      setIsEditing(null);
      setEditForm(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-neutral-900">Prompts</h1>
        <Button
          leftIcon={<Plus className="w-5 h-5" />}
          onClick={() => {
            const newPrompt: Prompt = {
              id: Date.now(),
              name: 'New Prompt',
              content: '',
              category: 'General',
              lastModified: new Date().toISOString().split('T')[0],
            };
            setPrompts([...prompts, newPrompt]);
            handleEdit(newPrompt);
          }}
        >
          Add Prompt
        </Button>
      </div>

      <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
        <div className="p-6 border-b border-neutral-200">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search prompts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
        </div>

        <div className="divide-y divide-neutral-200">
          {filteredPrompts.map((prompt) => (
            <div key={prompt.id} className="p-6">
              {isEditing === prompt.id ? (
                <form onSubmit={handleSave} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      value={editForm?.name}
                      onChange={(e) => setEditForm(prev => ({ ...prev!, name: e.target.value }))}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Category
                    </label>
                    <input
                      type="text"
                      value={editForm?.category}
                      onChange={(e) => setEditForm(prev => ({ ...prev!, category: e.target.value }))}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Content
                    </label>
                    <textarea
                      value={editForm?.content}
                      onChange={(e) => setEditForm(prev => ({ ...prev!, content: e.target.value }))}
                      rows={4}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div className="flex justify-end space-x-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setIsEditing(null);
                        setEditForm(null);
                      }}
                    >
                      Cancel
                    </Button>
                    <Button type="submit">
                      Save Changes
                    </Button>
                  </div>
                </form>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-medium text-neutral-900">{prompt.name}</h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-50 text-primary-700">
                        {prompt.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEdit(prompt)}
                        className="p-1 text-neutral-600 hover:text-primary-600 transition-colors"
                        title="Edit"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(prompt.id)}
                        className="p-1 text-neutral-600 hover:text-danger-600 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-neutral-600 whitespace-pre-wrap">{prompt.content}</p>
                  <p className="text-sm text-neutral-500 mt-2">
                    Last modified: {prompt.lastModified}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prompts;