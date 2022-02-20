import React, { useState } from "react";
import "../styles/ArticlePreview.css";

import {
    FaShare,
    FaFacebookSquare,
    FaTwitter,
    FaPinterest,
} from "react-icons/fa";

import avatar from "../images/avatar-michelle.jpg";

const ArticlePreview = () => {
    const [boxActive, setBoxActive] = useState(false);
    const mobile = window.innerWidth <= 860;

    return (
        <article className="ArticlePreview">
            <div className="article__header"></div>
            <div className="article__body">
                <h1>
                    Shift the overall look and feel by adding these wonderful
                    touches to furniture in your home
                </h1>
                <p>
                    Ever been in a room and felt like something was missing?
                    Perhaps it felt slightly bare and uninviting. 've got some
                    simple tips to help you make any room feel complete.
                </p>
                <div className="article__body__footer">
                    <div className="article__author">
                        <img
                            src={avatar}
                            alt="Michelle Applet"
                            className="article__author__avatar"
                        />
                        <div className="article__author__information">
                            <h4>Michelle Applet</h4>
                            <p>28 Jun 2020</p>
                        </div>
                    </div>
                </div>
                <button
                    className="share__button"
                    style={
                        boxActive
                            ? mobile
                                ? {
                                      color: "white",
                                      backgroundColor: "var(--grayish-blue)",
                                  }
                                : {
                                      color: "white",
                                      backgroundColor:
                                          "var(--very-dark-grayish-blue)",
                                  }
                            : null
                    }
                    onClick={() => {
                        setBoxActive(!boxActive);
                    }}
                >
                    <FaShare />
                </button>
                <div
                    className="share__box"
                    style={
                        boxActive
                            ? { opacity: 1, visibility: "visible" }
                            : { opacity: 0, visibility: "hidden" }
                    }
                >
                    <p>SHARE</p>
                    <FaFacebookSquare />
                    <FaTwitter />
                    <FaPinterest />
                </div>
            </div>
        </article>
    );
};

export default ArticlePreview;
