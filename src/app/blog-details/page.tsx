import BlogDetailsMain from "@/components/blog-details/BlogDetailsMain";
import LetterBox from "@/components/home-two/LetterBox";
import MobileSearch from "@/components/shearedComponents/MobileSearch";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const BlogDetailsPage = () => {
  return (
    <>
      <Wrapper>
        <main>
          <BlogDetailsMain id={4} />
          <LetterBox/>
        </main>
      </Wrapper>
      <MobileSearch/>
    </>
  );
};

export default BlogDetailsPage;
