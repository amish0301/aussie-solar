import BlogDetailsMain from "@/components/blog-details/BlogDetailsMain";
import useGlobalContext from "@/hooks/use-context";
import Wrapper from "@/layout/DefaultWrapper";
import React, { useEffect } from "react";

const BlogDetailsDynamicPage = ({ params }: { params: { id: number } }) => {
  const id = params.id;
  return (
    <>
      <Wrapper>
        <main>
          <BlogDetailsMain id={id}/>
        </main>
      </Wrapper>
    </>
  );
};

export default BlogDetailsDynamicPage;
