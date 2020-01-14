import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Head from "next/head";

import BlogPost from "../../components/BlogPost";
import Breadcrumb from "../../components/Breadcrumb";

type Post = {
  content: string;
};

const BlogPostPage = () => {
  const [post, setPost] = useState<Post | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!router.query.post) {
      return;
    }
    fetch(`https://raw.githubusercontent.com/TejasQ/tejaskumar.com/master/blog/${router.query.post}.md`)
      .then(r => r.text())
      .then(content =>
        setPost({
          content,
        }),
      );
  }, [router.query.post]);

  return (
    post && (
      <BlogPost>
        <Head>
          <title>{post.content.slice(0).replace("# ", "")} : Tejas Kumar | Speaker, Engineer, JavaScript, Love</title>
        </Head>
        <Breadcrumb
          path={[
            { label: "tejaskumar.com", link: "/" },
            { label: "blog", link: "/blog" },
            { label: String(router.query.post) },
          ]}
        ></Breadcrumb>
        <ReactMarkdown escapeHtml={false} source={post.content}></ReactMarkdown>
      </BlogPost>
    )
  );
};

export default BlogPostPage;