"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

interface Post {
  _id: string;
  image: string;
  title: string;
  slug: string;
}

export default function PostPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://quoterider-server.onrender.com/api/post/getposts");
        setPosts(response.data.posts);
      } catch (error) {
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main className="p-4 max-w-[90%] md:max-w-[81.8%] mx-auto min-h-screen my-[5vh]">
      <div className="flex justify-start flex-wrap gap-[4vh]">
        {posts.map((post) => (
          <div
            key={post._id}
            className="w-full sm:w-[450px] border rounded-3xl overflow-hidden flex flex-col justify-start items-start group transition-transform duration-300 ease-in-out hover:border-blue-400"
          >
            <img
              src={post.image}
              alt={post.title}
              className="h-[170px] md:h-[210px] w-full object-cover group-hover:scale-[0.98] scale-[1.04] rounded-2xl transition-transform duration-300 ease-in-out"
            />
            <div className="p-[2vw] md:p-3 flex flex-col justify-start items-start">
              <h2 className="text-base md:text-lg font-semibold md:font-semibold h-[3vh] md:h-[3.2vh] line-clamp-1">
                {post.title}
              </h2>
              <Link href={`/post/${post.slug}`} passHref>
                <button
                  className="flex gap-3 signinboxshadowbtn md:w-[7vw] text-center h-[4vh] relative -top-1 pointer-events-auto"
                  onMouseEnter={(e) => e.stopPropagation()} // Prevent parent hover effects
                >
                  Tap Writing
                  {/* <span className="text-lg transition-transform duration-300 ease-in-out group-hover:translate-x-2 text-blue-500">
                    <ArrowRight />
                  </span> */}
                </button>
              </Link>
            </div>
            {/* Additional child div that shouldn't trigger parent hover */}
            <div className="w-full bg-gray-300 dark:text-black px-1 md:px-3 py-1 md:py-2 pointer-events-none">
              <p className="text-xs md:text-base">This child does not trigger parent hover effects.</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
