import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Image,
  Settings as SettingsIcon,
  Save,
  Send,
} from "lucide-react";

export default function Editor() {
  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [tags, setTags] = useState("");
  const [category, setCategory] = useState("");
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState({
    allowComments: true,
    isFeatured: false,
  });

  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    editorProps: {
      attributes: {
        class: "prose prose-lg max-w-none dark:prose-invert focus:outline-none",
      },
    },
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="mb-6 space-y-4">
        <input
          type="text"
          placeholder="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full text-3xl font-bold bg-transparent border-none focus:outline-none dark:text-white"
        />

        <div className="relative h-64 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
          {coverImage ? (
            <img
              src={coverImage}
              alt="Cover"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <div className="flex flex-col items-center text-gray-500 dark:text-gray-400">
                  <Image size={32} />
                  <span>Add cover image</span>
                </div>
              </label>
            </div>
          )}
        </div>

        <div className="flex gap-2 border-b dark:border-gray-700 pb-2">
          <button
            onClick={() => editor?.chain().focus().toggleBold().run()}
            className={`p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ${
              editor?.isActive("bold") ? "bg-gray-100 dark:bg-gray-800" : ""
            }`}
          >
            <Bold size={20} />
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleItalic().run()}
            className={`p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ${
              editor?.isActive("italic") ? "bg-gray-100 dark:bg-gray-800" : ""
            }`}
          >
            <Italic size={20} />
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleBulletList().run()}
            className={`p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ${
              editor?.isActive("bulletList")
                ? "bg-gray-100 dark:bg-gray-800"
                : ""
            }`}
          >
            <List size={20} />
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleOrderedList().run()}
            className={`p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ${
              editor?.isActive("orderedList")
                ? "bg-gray-100 dark:bg-gray-800"
                : ""
            }`}
          >
            <ListOrdered size={20} />
          </button>
        </div>

        <EditorContent
          editor={editor}
          className="min-h-[400px] dark:text-white"
        />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Tags
            </label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="Enter tags separated by commas"
              className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            >
              <option value="">Select category</option>
              <option value="technology">Technology</option>
              <option value="programming">Programming</option>
              <option value="design">Design</option>
              <option value="productivity">Productivity</option>
            </select>
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t dark:border-gray-700">
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
          >
            <SettingsIcon size={20} />
            Post Settings
          </button>
          <div className="flex gap-2">
            <button className="px-4 py-2 border rounded-lg dark:border-gray-700 dark:text-white">
              <Save size={20} className="inline-block mr-2" />
              Save Draft
            </button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              <Send size={20} className="inline-block mr-2" />
              Publish
            </button>
          </div>
        </div>

        {showSettings && (
          <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="font-medium mb-3 dark:text-white">Post Settings</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={settings.allowComments}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      allowComments: e.target.checked,
                    })
                  }
                  className="rounded text-purple-600"
                />
                <span className="text-sm dark:text-gray-300">
                  Allow comments
                </span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={settings.isFeatured}
                  onChange={(e) =>
                    setSettings({ ...settings, isFeatured: e.target.checked })
                  }
                  className="rounded text-purple-600"
                />
                <span className="text-sm dark:text-gray-300">
                  Featured post
                </span>
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
