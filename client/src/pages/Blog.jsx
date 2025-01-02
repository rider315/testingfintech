


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Newsletter } from "../../components/Newsletter";
import { Profile } from "../../components/Profile";
import { client } from "../lib/client";
import { format } from "date-fns";
import "./Blog.css"; // Importing the new CSS file

export const Blog = () => {
    const [stories, setStories] = useState([]);
    useEffect(() => {
        client
            .fetch(
                `*[_type == "post"] {
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
        }| order(publishedAt desc)`
            )
            .then((data) => {
                setStories(data);
            })
            .catch(console.error);
    }, []);

    return (
        <>
            <div className="blog-header">
                <h1 className="blog-title">All Blog Posts</h1>
            </div>
            <section className="blog-grid">
                {stories.map((story) => (
                    <Link to={`/blog/${story.slug.current}`} key={story.slug.current}>
                        <article className="blog-article">
                            {story.mainImage && (
                                <img
                                    src={story.mainImage.asset.url}
                                    alt={story.mainImage.alt}
                                    loading="lazy"
                                    className="blog-article-image"
                                />
                            )}
                            <div className="blog-article-content">
                                <p className="blog-article-meta">
                                    By {story.name} &middot; {format(new Date(story.publishedAt), "dd MMMM yyyy")}
                                </p>
                                <h2 className="blog-article-title">{story.title}</h2>
                                <p className="blog-article-excerpt">
                                    {`${story.body[0].children[0].text.substring(0, 200)}...`}
                                </p>
                            </div>
                        </article>
                    </Link>
                ))}
            </section>
            <div className="blog-footer">
                <Link to="/" className="back-home-button">
                    Back to Home Page
                </Link>
            </div>
        </>
    );
};
