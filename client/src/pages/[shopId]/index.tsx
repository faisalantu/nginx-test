import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export default function Index() {
  const route = useRouter();
  const { shopId } = route.query;
  return (
    <div>
      welcome to {shopId}
      <div>
        local image
        <Image
          src='/1694978396672_pexels-jovana-nesic-593655 (1).webp'
          height={550}
          width={550}
          alt='rose'
        />
      </div>
      <div>
        server image
        <Image
          src='https://d6sv3r4fh2bzw.cloudfront.net/filters:quality(70)/fit-in/200x200/products/images/1695067934640_Rice%20Pudding.png'
          height={550}
          width={550}
          alt='rose'
        />
      </div>
    </div>
  );
}
