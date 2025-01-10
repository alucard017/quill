import { useState } from 'react';
import { Camera, Link as LinkIcon } from 'lucide-react';

export default function Profile() {
  const [profile, setProfile] = useState({
    name: 'Sarah Chen',
    bio: 'Full-stack developer passionate about React and TypeScript. Love sharing knowledge through writing.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    email: 'sarah.chen@example.com',
    location: 'San Francisco, CA',
    socialLinks: {
      twitter: 'twitter.com/sarahchen',
      github: 'github.com/sarahchen',
      linkedin: 'linkedin.com/in/sarahchen',
    },
  });

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, avatar: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">Profile Settings</h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-32 h-32 rounded-full object-cover"
            />
            <label className="absolute bottom-0 right-0 bg-purple-600 text-white p-2 rounded-full cursor-pointer">
              <Camera size={20} />
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
              />
            </label>
          </div>
          <h2 className="text-xl font-semibold mt-4 dark:text-white">{profile.name}</h2>
          <p className="text-gray-500 dark:text-gray-400">{profile.location}</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Display Name
            </label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Bio
            </label>
            <textarea
              value={profile.bio}
              onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
              rows={4}
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Location
            </label>
            <input
              type="text"
              value={profile.location}
              onChange={(e) => setProfile({ ...profile, location: e.target.value })}
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div className="border-t dark:border-gray-700 pt-4">
            <h3 className="text-lg font-medium mb-4 dark:text-white">Social Links</h3>
            <div className="space-y-3">
              {Object.entries(profile.socialLinks).map(([platform, url]) => (
                <div key={platform} className="flex items-center gap-2">
                  <LinkIcon size={20} className="text-gray-400" />
                  <input
                    type="text"
                    value={url}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        socialLinks: {
                          ...profile.socialLinks,
                          [platform]: e.target.value,
                        },
                      })
                    }
                    placeholder={`${platform} URL`}
                    className="flex-1 p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}