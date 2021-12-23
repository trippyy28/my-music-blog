import React from "react";
import Link from "next/link";
const index = () => {
  return (
    <div className="shop">
      <Link href="/shop/bandcamp">
        <h1 className="box">Bandcamp</h1>
      </Link>
      <Link href="/shop/samples">
        <h1 className="box">Samples</h1>
      </Link>
    </div>
  );
};

export default index;
