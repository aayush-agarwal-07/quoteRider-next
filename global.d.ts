// globals.d.ts
export interface CursorIcon {
  show: (text: string) => void;
  hide: () => void;
}

export interface Window {
  cursorIcon?: CursorIcon;
}

// types.ts
export interface Post {
  _id: string;
  title: string;
  image: string;
  createdAt: string;
  content: string;
  slug: string;
}

export interface PostPageProps {
  post: Post | null;
  recentPosts: Post[];
  error: boolean;
}
