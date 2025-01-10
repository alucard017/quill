import { useState } from 'react';
import { Bell, Shield, Eye, Moon } from 'lucide-react';

export default function Settings() {
  const [settings, setSettings] = useState({
    notifications: {
      emailDigest: true,
      newComments: true,
      mentions: true,
    },
    privacy: {
      profileVisibility: 'public',
      showEmail: false,
      allowMessages: true,
    },
    appearance: {
      fontSize: 'medium',
      reduceAnimations: false,
    },
  });

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">Settings</h1>

      <div className="space-y-6">
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-2 mb-4">
            <Bell className="text-purple-600" size={24} />
            <h2 className="text-xl font-semibold dark:text-white">Notifications</h2>
          </div>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span className="dark:text-white">Email Digest</span>
              <input
                type="checkbox"
                checked={settings.notifications.emailDigest}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    notifications: {
                      ...settings.notifications,
                      emailDigest: e.target.checked,
                    },
                  })
                }
                className="rounded text-purple-600"
              />
            </label>
            <label className="flex items-center justify-between">
              <span className="dark:text-white">New Comments</span>
              <input
                type="checkbox"
                checked={settings.notifications.newComments}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    notifications: {
                      ...settings.notifications,
                      newComments: e.target.checked,
                    },
                  })
                }
                className="rounded text-purple-600"
              />
            </label>
            <label className="flex items-center justify-between">
              <span className="dark:text-white">Mentions</span>
              <input
                type="checkbox"
                checked={settings.notifications.mentions}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    notifications: {
                      ...settings.notifications,
                      mentions: e.target.checked,
                    },
                  })
                }
                className="rounded text-purple-600"
              />
            </label>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="text-purple-600" size={24} />
            <h2 className="text-xl font-semibold dark:text-white">Privacy</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Profile Visibility
              </label>
              <select
                value={settings.privacy.profileVisibility}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    privacy: {
                      ...settings.privacy,
                      profileVisibility: e.target.value,
                    },
                  })
                }
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
                <option value="followers">Followers Only</option>
              </select>
            </div>
            <label className="flex items-center justify-between">
              <span className="dark:text-white">Show Email</span>
              <input
                type="checkbox"
                checked={settings.privacy.showEmail}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    privacy: {
                      ...settings.privacy,
                      showEmail: e.target.checked,
                    },
                  })
                }
                className="rounded text-purple-600"
              />
            </label>
            <label className="flex items-center justify-between">
              <span className="dark:text-white">Allow Messages</span>
              <input
                type="checkbox"
                checked={settings.privacy.allowMessages}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    privacy: {
                      ...settings.privacy,
                      allowMessages: e.target.checked,
                    },
                  })
                }
                className="rounded text-purple-600"
              />
            </label>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-2 mb-4">
            <Eye className="text-purple-600" size={24} />
            <h2 className="text-xl font-semibold dark:text-white">Appearance</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Font Size
              </label>
              <select
                value={settings.appearance.fontSize}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    appearance: {
                      ...settings.appearance,
                      fontSize: e.target.value,
                    },
                  })
                }
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
            <label className="flex items-center justify-between">
              <span className="dark:text-white">Reduce Animations</span>
              <input
                type="checkbox"
                checked={settings.appearance.reduceAnimations}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    appearance: {
                      ...settings.appearance,
                      reduceAnimations: e.target.checked,
                    },
                  })
                }
                className="rounded text-purple-600"
              />
            </label>
          </div>
        </section>
      </div>
    </div>
  );
}