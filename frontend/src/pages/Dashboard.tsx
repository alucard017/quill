import React from "react";
import { Notifications } from '@mui/icons-material';
import Quill, { SidebarItem } from './Quill';

const Dashboard: React.FC = () => {
    return (
        <div className="flex min-h-screen">
            <div className="h-screen p-4">
                <Quill>
                    <SidebarItem icon={<Notifications></Notifications>} text="Item 1" active={true} alert={true} />
                    <SidebarItem icon={<Notifications></Notifications>} text="Item 2" active={false} alert={true} />
                    <SidebarItem icon={<Notifications></Notifications>} text="Item 3" active={false} alert={false} />
                </Quill>
            </div>


            <div className="p-4">
                {/* Header */}
                <header className="p-4 mb-6 text-black bg-white rounded-md">
                    <div className="flex items-center justify-between">
                        <h1 className="text-lg font-bold">Dashboard</h1>
                        <div className="flex items-center space-x-4">
                            <button className="text-xl text-gray-700 hover:text-gray-900">
                                <Notifications />
                            </button>
                            <img
                                src="data:image/jpeg;base64,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"
                                alt="User Avatar"
                                className="w-8 h-8 rounded-full"
                            />
                        </div>
                    </div>
                </header>

                {/* Metrics Section */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                    <Card title="Total Posts" value={124} change="+12%" />
                    <Card title="Total Views" value={"45.2K"} change="+8%" />
                    <Card title="Comments" value={892} change="+24%" />
                    <Card title="Subscribers" value={1504} change="+18%" />
                </div>

                {/* Recent Posts & Quick Actions */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h2 className="mb-4 text-lg font-semibold">Recent Posts</h2>
                        <table className="w-full overflow-hidden bg-white rounded-md shadow">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="p-3 text-left">Title</th>
                                    <th className="p-3 text-left">Views</th>
                                    <th className="p-3 text-left">Comments</th>
                                    <th className="p-3 text-left">Date</th>
                                    <th className="p-3 text-left">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <PostRow
                                    title="Getting Started with Quill"
                                    views="1.2K"
                                    comments={24}
                                    date="2024-02-20"
                                    status="Published"
                                />
                                <PostRow
                                    title="Writing Better Blog Posts"
                                    views="856"
                                    comments={18}
                                    date="2024-02-19"
                                    status="Draft"
                                />
                                <PostRow
                                    title="SEO Tips for Bloggers"
                                    views="2.4K"
                                    comments={32}
                                    date="2024-02-18"
                                    status="Published"
                                />
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h2 className="mb-4 text-lg font-semibold">Quick Actions</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <QuickAction title="New Post" description="Create a new blog post" />
                            <QuickAction title="Draft" description="View saved drafts" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Card Component
type CardProps = {
    title: string;
    value: string | number;
    change: string;
};

const Card: React.FC<CardProps> = ({ title, value, change }) => (
    <div className="p-4 bg-white rounded-md shadow">
        <h3 className="text-sm text-gray-500">{title}</h3>
        <p className="text-xl font-bold">{value}</p>
        <p className="text-sm text-green-500">{change} from last month</p>
    </div>
);

// PostRow Component
type PostRowProps = {
    title: string;
    views: string;
    comments: number;
    date: string;
    status: string;
};

const PostRow: React.FC<PostRowProps> = ({ title, views, comments, date, status }) => (
    <tr className="border-b">
        <td className="p-3">{title}</td>
        <td className="p-3">{views}</td>
        <td className="p-3">{comments}</td>
        <td className="p-3">{date}</td>
        <td className="p-3">
            <span
                className={`px-2 py-1 text-xs rounded ${status === "Published" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
                    }`}
            >
                {status}
            </span>
        </td>
    </tr>
);

// QuickAction Component
type QuickActionProps = {
    title: string;
    description: string;
};

const QuickAction: React.FC<QuickActionProps> = ({ title, description }) => (
    <div className="flex flex-col justify-between p-4 bg-white rounded-md shadow">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
    </div>
);

export default Dashboard;
