import React from 'react';
import BreadCamb from '../shearedComponents/BreadCamb';
import BlogDetailsContent from './BlogDetaiilsContent';
import { TblogData, idType } from '@/interFace/interFace';
import { blogData } from '@/data/blog-data';

const BlogDetailsMain = ({id}:idType) => {
    const data = blogData?.find((item)=> item?.id == id)
    
    return (
        <>
           <BreadCamb title='Blog Details'/> 
           <BlogDetailsContent data={data as TblogData}/>
        </>
    );
};

export default BlogDetailsMain;