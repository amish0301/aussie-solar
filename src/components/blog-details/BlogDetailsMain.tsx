import BreadCamb from "../shearedComponents/BreadCamb";
import BlogDetailsContent from "./BlogDetaiilsContent";

interface idType {
  id: string;
}

const BlogDetailsMain = ({ id }: idType) => {
  // const data = blogData?.find((item)=> item?.id == id)

  return (
    <>
      <BreadCamb title="Blog Details" />
      <BlogDetailsContent id={id} />
    </>
  );
};

export default BlogDetailsMain;
