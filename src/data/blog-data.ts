import blogImg1 from "../../public/assets/img/blog-1.jpg"
import blogImg2 from "../../public/assets/img/blog-2.jpg"
import blogImg3 from "../../public/assets/img/blog-3.jpg"
import blogImg4 from "../../public/assets/img/blog-4.jpg"
import blogImg5 from "../../public/assets/img/blog-5.jpg"

// our blog
import ourBlogImg1 from "../../public/assets/img/our-blog-1.jpg"
import ourBlogImg2 from "../../public/assets/img/our-blog-2.jpg"
import ourBlogImg3 from "../../public/assets/img/our-blog-3.jpg"
import ourBlogImg4 from "../../public/assets/img/our-blog-4.jpg"
import ourBlogImg5 from "../../public/assets/img/our-blog-5.jpg"
 
import adminImg from "../../public/assets/img/admin.jpg" 
import vectorImg from "../../public/assets/img/vector.png"
import authorImg from "../../public/assets/img/man.jpg"
import { TblogCategories, TblogData } from "@/interFace/interFace" 

export const blogData:TblogData[] = [
    {
        id:1,
        img:blogImg1,
        date:"December 12, 2023",
        designation:"Design Process",
        title:"Solar energy’s exceptional synergies",
        adminImg:adminImg,
        author:"By Thomas Walkar",
        comment:"14 Comment",
        commentLogo:vectorImg,
        authorImg:authorImg,

    },
    {
        id:2,
        img:blogImg2,
        date:"December 12, 2023",
        designation:"Design Process",
        title:"Solar energy’s exceptional synergies",
        adminImg:adminImg,
        author:"By Thomas Walkar",
        comment:"14 Comment",
        commentLogo:vectorImg,
        authorImg:authorImg,

    },
    {
        id:3,
        img:blogImg3,
        date:"December 12, 2023",
        designation:"Design Process",
        title:"Solar energy’s exceptional synergies",
        adminImg:adminImg,
        author:"By Thomas Walkar",
        comment:"14 Comment",
        commentLogo:vectorImg,
        authorImg:authorImg,

    },
    // our blog
    {
        id:4,
        img:ourBlogImg1,
        date:"December 12, 2023",
        designation:"Design Process",
        title:"Solar energy’s exceptional synergies",
        adminImg:adminImg,
        author:"By Thomas Walkar",
        comment:"14 Comment",
        commentLogo:vectorImg,
        authorImg:authorImg,

    },
    {
        id:5,
        img:ourBlogImg2,
        date:"December 12, 2023",
        designation:"Design Process",
        title:"Solar energy’s exceptional synergies",
        adminImg:adminImg,
        author:"By Thomas Walkar",
        comment:"14 Comment",
        commentLogo:vectorImg,
        authorImg:authorImg,

    },
    {
        id:6,
        img:ourBlogImg3,
        date:"December 12, 2023",
        designation:"Design Process",
        title:"Solar energy’s exceptional synergies",
        adminImg:adminImg,
        author:"By Thomas Walkar",
        comment:"14 Comment",
        commentLogo:vectorImg,
        authorImg:authorImg,

    },
    {
        id:7,
        img:ourBlogImg4,
        date:"December 12, 2023",
        designation:"Design Process",
        title:"5 energy innovations revolution",
        adminImg:adminImg,
        author:"By Thomas Walkar",
        comment:"14 Comment",
        commentLogo:vectorImg,
        authorImg:authorImg,

    },
    {
        id:8,
        img:ourBlogImg5,
        date:"December 12, 2023",
        designation:"Design Process",
        title:"Solar energy’s exceptional synergies",
        adminImg:adminImg,
        author:"By Thomas Walkar",
        comment:"14 Comment",
        commentLogo:vectorImg,
        authorImg:authorImg,
    },

]

export const blogCategories: TblogCategories[] = [
    {
        id: 1,
        category: "Services",
        href: "/blog?category=service"
    },
    {
        id: 2,
        category: "Solar Packages",
        href: "/blog?category=packages"
    },
    {
        id: 3,
        category: "Solar Products",
        href: "/blog?category=products"
    }
]