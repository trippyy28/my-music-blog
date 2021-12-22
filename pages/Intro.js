import React from "react";

function Intro() {
  return (
    <div>
      <section className="my-intro" id="intro">
        <h1 className="section__title--intro">Hello! My Name Is Yaniv</h1>
        <div className="section_body">
          <p>
            I׳m a music producer and sound designer based in Tel Aviv , Israel
            <br />I started producing in 2013 with geners like future bass,
            electro house and more.
            <br /> Today I mostly prodcuing Minimal & Micro House music
            <br /> There is something very unique and magical in this genre
          </p>
        </div>
        <div className="music-links">
          <div className="link">
            <iframe
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/706441363&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <div>
              <a
                href="https://soundcloud.com/yanivhe2"
                title="delightful"
                target="_blank"
                rel="noreferrer"
              ></a>
              <a
                href="https://soundcloud.com/yanivhe2/untitled"
                title="Untitled"
                target="_blank"
                rel="noreferrer"
              ></a>
            </div>
          </div>
          <div className="link">
            <iframe
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/704501206&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <div>
              <a
                href="https://soundcloud.com/yanivhe2"
                title="delightful"
                target="_blank"
                rel="noreferrer"
              ></a>
              <a
                href="https://soundcloud.com/yanivhe2/oooo"
                title="#Oooo"
                target="_blank"
                rel="noreferrer"
              ></a>
            </div>
          </div>
          <div className="link">
            <iframe
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/704496013&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <div className="soundcloud">
              <a
                href="https://soundcloud.com/yanivhe2"
                title="delightful"
                target="_blank"
                rel="noreferrer"
              ></a>
              <a
                href="https://soundcloud.com/yanivhe2/d-1"
                title="D"
                target="_blank"
                rel="noreferrer"
              ></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Intro;
