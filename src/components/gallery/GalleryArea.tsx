"use client";
import React from "react";
import "./GalleryArea.css";

const GalleryArea = () => {
  return (
    <>
      <section className="gap section-contact">
        <div className="container">
          <div className="heading">
            <p>Gallery</p>
            <div className="line"></div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="masonry-container">
                {[
                  {
                    title: "Crashing Waves",
                    tags: "Landscapes, Waves, Beach",
                    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/waves.jpg",
                  },
                  {
                    title: "Blue Docks",
                    tags: "Docks, Sunset, Horizon",
                    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/docks.jpg",
                  },
                  {
                    title: "Pastel Canyons",
                    tags: "Canyon, Rock formations",
                    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/canyon.jpg",
                  },
                  {
                    title: "Pink Mountain Sunset",
                    tags: "Landscapes, Sunset, Mountains",
                    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/dawn-mountains.jpg",
                  },
                  {
                    title: "Autumn Pine",
                    tags: "Forest, Pines, Mountains",
                    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/forest.jpg",
                  },
                  {
                    title: "Purple Power Poles",
                    tags: "Urban, landscape, manmade",
                    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/power-poles.jpg",
                  },
                  {
                    title: "Purple Ridges",
                    tags: "Mountains, Sunrise, Landscapes",
                    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/purple-mtn.jpg",
                  },
                  {
                    title: "Spinning Lights",
                    tags: "Carnival, Lights, Nightlife",
                    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/rides.jpg",
                  },
                  {
                    title: "Feather Bokeh",
                    tags: "Close-ups, Feather, Bokeh",
                    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/feather.jpg",
                  },
                  {
                    title: "Irridescent Bench",
                    tags: "Landscapes, Still-Life, Countryside",
                    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/bench-alt.jpg",
                  },
                  {
                    title: "Blazing Dandelions",
                    tags: "Dandelion, Bokeh, Flora",
                    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/bokeh-dandelion.jpg",
                  },
                ].map((panel, index) => (
                  <div className="panel" key={index}>
                    <div className="panel-wrapper">
                      <div className="panel-overlay">
                        <div className="panel-text">
                          <div className="panel-title">{panel.title}</div>
                          <div className="panel-tags">
                            <span className="tag-icon">
                              <img
                                className="tag-icon-img"
                                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/tag-icon.svg"
                                alt="Tag Icon"
                              />
                            </span>
                            <span className="tags-list">{panel.tags}</span>
                          </div>
                        </div>
                        <img
                          className="panel-gradient"
                          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/base-gradient.png"
                          alt="Gradient"
                        />
                        <img
                          className="panel-vingette"
                          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/darken-gradient.png"
                          alt="Darken Gradient"
                        />
                      </div>
                      <img
                        className="panel-img"
                        src={panel.img}
                        alt={panel.title}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryArea;
