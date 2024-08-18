"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react"; // Import the notFound function to handle 404 errors

interface Post {
  _id: string;
  image: string;
  title: string;
  content: string;
  createdAt: string;
}

interface Props {
  params: {
    slug: string;
  };
}

export default function PostDetailPage({ params }: Props) {
  const { slug } = params;
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://quoterider-server.onrender.com/api/post/getposts?slug=${slug}`
        );
        const postData = response.data.posts[0];
        if (postData) {
          setPost(postData);
        } else {
          setError("Post not found");
        }
      } catch (error) {
        setError("Failed to fetch post");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main className="p-4 max-w-7xl mx-auto min-h-screen my-[5vh]">
      {post ? (
        <>
          <div className="absolute top-[12vh] md:top-[22vh] left-10 lg:left-[10vh] cursor-pointer text-blue-500">
            <Link href="/post" className="flex items-center">
              <ArrowLeft />
              <span className="ml-2">Go Back</span>
            </Link>
          </div>
          <h1 className="text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl">
            {post.title}
          </h1>
          <img
            src={post.image}
            alt={post.title}
            className="my-10 p-3 max-h-[600px] w-[90%] mx-auto object-cover rounded-3xl"
          />
          <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-3xl text-xs">
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            <span className="italic">
              {(post.content.length / 1000).toFixed(0)} mins read
            </span>
          </div>
          <div
            className="p-3 max-w-3xl mx-auto w-full post-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </>
      ) : (
        <div className="text-center text-xl">
          <p>Post not found</p>
        </div>
      )}
    </main>
  );
}
