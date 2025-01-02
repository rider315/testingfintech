

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Newsletter } from "../../components/Newsletter";
import { Profile } from "../../components/Profile";
import { client } from "../lib/client";
import { format } from "date-fns";
import "./Homeblog.css"; // Importing the new CSS file

export const Homeblog = () => {
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
                setStories(data.slice(0, 3));
            })
            .catch(console.error);
    }, []);

    return (
        <>
            {!stories.length ? (
                <h2>Loading...</h2>
            ) : (
                <Link to={`/blog/${stories[0].slug.current}`}>
                    <section className="main-feature">
                        <article className="feature-article">
                            {stories[0].mainImage && (
                                <img
                                    src={stories[0].mainImage.asset.url}
                                    className="feature-image"
                                    alt={stories[0].mainImage.alt}
                                />
                            )}
                            <div className="feature-text">
                                <h1 className="feature-title">
                                    {stories[0].title}
                                </h1>
                                <p className="feature-body">
                                    {`${stories[0].body[0].children[0].text.substring(0, 200)}...`}
                                </p>
                                <Link
                                    to={`/blog/${stories[0].slug.current}`}
                                    className="feature-read-more"
                                >
                                    Read More
                                </Link>
                            </div>
                        </article>
                    </section>
                </Link>
            )}
            <section className="story-grid">
                {stories.map((story) => (
                    <Link to={`/blog/${story.slug.current}`} key={story.slug.current}>
                        <article className="story-article">
                            {story.mainImage && (
                                <img
                                    src={story.mainImage.asset.url}
                                    alt={story.mainImage.alt}
                                    loading="lazy"
                                    className="story-image"
                                />
                            )}
                            <div className="story-text">
                                <p className="story-author">
                                    By {story.name} &middot;{" "}
                                    {format(new Date(story.publishedAt), "dd MMMM yyyy")}
                                </p>
                                <h2 className="story-title">{story.title}</h2>
                                <p className="story-body">
                                    {`${story.body[0].children[0].text.substring(0, 200)}...`}
                                </p>
                            </div>
                        </article>
                    </Link>
                ))}
            </section>
            <div className="read-all-container">
                <Link to="/blog" className="read-all">
                    Read all Blog Posts
                </Link>
            </div>
            {/* <Newsletter /> */}
            <Profile />
        </>
    );
};
