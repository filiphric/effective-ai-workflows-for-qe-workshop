import React from 'react';
import { useStore } from '@/store/store';

const Settings: React.FC = () => {
  const activeUser = useStore((s) => s.activeUser);
  const settings = useStore((s) => s.settings);
  const showNotification = useStore((s) => s.showNotification);

  const updateSettings = (field: string, value: string | boolean) => {
    useStore.setState({ settings: { ...settings, [field]: value } });
  };

  const handleSave = () => {
    showNotification('Settings saved', false);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-6 py-10 max-w-2xl">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Settings</h1>

        <section className="mb-8">
          <h2 className="text-lg font-medium text-gray-700 mb-4 pb-2 border-b border-gray-200">Profile</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="settings-email">
              Email
            </label>
            <input
              id="settings-email"
              data-test-id="settings-email"
              value={activeUser.email || ''}
              readOnly
              className="px-3 w-full h-10 bg-gray3 rounded-sm text-gray-500 cursor-not-allowed"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="settings-display-name">
              Display name
            </label>
            <input
              id="settings-display-name"
              data-test-id="settings-display-name"
              value={settings.displayName}
              onChange={(e) => updateSettings('displayName', e.target.value)}
              placeholder="Enter your display name"
              className="px-3 w-full h-10 bg-gray3 focus:bg-white rounded-sm"
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-medium text-gray-700 mb-4 pb-2 border-b border-gray-200">Preferences</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="settings-currency">
              Currency
            </label>
            <select
              id="settings-currency"
              data-test-id="settings-currency"
              value={settings.currency}
              onChange={(e) => updateSettings('currency', e.target.value)}
              className="px-3 w-full h-10 bg-gray3 focus:bg-white rounded-sm"
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-600" htmlFor="settings-notifications">
              Email notifications
            </label>
            <input
              id="settings-notifications"
              data-test-id="settings-notifications"
              type="checkbox"
              checked={settings.emailNotifications}
              onChange={(e) => updateSettings('emailNotifications', e.target.checked)}
              className="w-4 h-4 cursor-pointer"
            />
          </div>
        </section>

        <button
          data-test-id="settings-save"
          onClick={handleSave}
          className="py-2 px-8 text-white bg-green7 hover:bg-green6 rounded-sm focus:outline-none"
        >
          Save changes
        </button>
      </div>
    </div>
  );
};

export default Settings;
