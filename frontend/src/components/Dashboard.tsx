import {
  BarChart3,
  MessageSquare,
  Eye,
  FileEdit,
  Plus,
  FileText,
  ThumbsUp,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Dashboard() {
  const stats = [
    { icon: FileText, label: "Total Posts", value: "24" },
    { icon: Eye, label: "Total Views", value: "12.5K" },
    { icon: MessageSquare, label: "Comments", value: "164" },
    { icon: ThumbsUp, label: "Likes", value: "1.2K" },
  ];

  const latestPosts = [
    { title: "Getting Started with React 18", views: "2.3K", likes: 145 },
    { title: "Understanding TypeScript Generics", views: "1.8K", likes: 98 },
    { title: "CSS Grid Layout Guide", views: "956", likes: 76 },
  ];

  const latestComments = [
    {
      author: "Sarah Chen",
      text: "Great article! Very helpful.",
      post: "React 18 Guide",
    },
    {
      author: "Mike Ross",
      text: "Thanks for sharing!",
      post: "TypeScript Tips",
    },
    {
      author: "Emma Wilson",
      text: "Looking forward to more!",
      post: "CSS Grid Layout",
    },
  ];

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold dark:text-white">Dashboard</h1>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            <Plus size={20} />
            New Post
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white">
            <FileEdit size={20} />
            Drafts
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ icon: Icon, label, value }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm"
          >
            <div className="flex items-center gap-2 text-purple-600 mb-2">
              <Icon size={20} />
              <span className="font-medium">{label}</span>
            </div>
            <p className="text-2xl font-bold dark:text-white">{value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
          <h2 className="text-lg font-semibold mb-4 dark:text-white">
            Latest Posts
          </h2>
          <div className="space-y-4">
            {latestPosts.map((post) => (
              <div
                key={post.title}
                className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
              >
                <span className="dark:text-white">{post.title}</span>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <Eye size={16} />
                    {post.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <ThumbsUp size={16} />
                    {post.likes}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
          <h2 className="text-lg font-semibold mb-4 dark:text-white">
            Latest Comments
          </h2>
          <div className="space-y-4">
            {latestComments.map((comment) => (
              <div
                key={comment.author}
                className="p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
              >
                <div className="flex justify-between mb-1">
                  <span className="font-medium dark:text-white">
                    {comment.author}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    on {comment.post}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {comment.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
