import React from "react";

const index = () => {
  return (
    <div className="shop">
      <div className="bandcamp-links">
        <iframe
          className="bandcamp"
          src="https://bandcamp.com/EmbeddedPlayer/album=2120683824/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
          seamless
        >
          <a href="https://yanivhe.bandcamp.com/album/010101">
            010101 by delightful
          </a>
        </iframe>
        <iframe
          className="bandcamp"
          src="https://bandcamp.com/EmbeddedPlayer/track=1677496615/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
          seamless
        >
          <a href="https://yanivhe.bandcamp.com/track/oooo">
            #Oooo by delightful
          </a>
        </iframe>
        <iframe
          className="bandcamp"
          src="https://bandcamp.com/EmbeddedPlayer/track=3091614042/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
          seamless
        >
          <a href="https://yanivhe.bandcamp.com/track/untitled">
            Untitled by delightful
          </a>
        </iframe>
        <iframe
          className="bandcamp"
          src="https://bandcamp.com/EmbeddedPlayer/track=2407765553/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
          seamless
        >
          <a href="https://yanivhe.bandcamp.com/track/d">D by delightful</a>
        </iframe>
      </div>
    </div>
  );
};

export default index;
