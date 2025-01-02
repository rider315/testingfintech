
import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { client } from "../lib/client";
import { PortableText } from "@portabletext/react";
import { Profile } from "../../components/Profile";
import "./Blogpost.css"; // Importing the new CSS file

export const Blogpost = () => {
    const [blogpost, setBlogpost] = useState([]);
    const { slug } = useParams();

    useEffect(() => {
        client
            .fetch(
                `*[slug.current == "${slug}"] {
          title,
          slug,
          body,
          publishedAt,
          mainImage {
            asset -> {
              _id,
              url
            },
            alt,
          },
          "name":author->name
        } `
            )
            .then((data) => {
                setBlogpost(data[0]);
            })
            .catch(console.error);
    }, [slug]);

    useEffect(() => {
        document.title = `Reading | ${blogpost.title}`;
    }, [blogpost.title]);

    return (
        <>
            {blogpost && (
                <section className="blogpost-section">
                    {blogpost.mainImage && (
                        <img
                            src={blogpost.mainImage.asset.url}
                            alt={blogpost.mainImage.alt}
                            className="blogpost-image"
                        />
                    )}
                    <h1 className="blogpost-title">{blogpost.title}</h1>
                    <p className="blogpost-meta">
                        By {blogpost.name}{" "}
                        {blogpost.publishedAt && (
                            <>
                                &middot;{" "}
                                {format(new Date(blogpost.publishedAt), "dd MMMM yyyy")}
                            </>
                        )}
                    </p>
                    <PortableText value={blogpost.body} className="blogpost-body" />
                </section>
            )}
            <div className="read-all-container">
                <Link to="/blog" className="read-all">
                    Read all blog posts
                </Link>
            </div>
            <Profile />
        </>
    );
};
