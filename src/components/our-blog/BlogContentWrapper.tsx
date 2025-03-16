"use client";

import { IBlog } from "@/models/blog";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import BlogRightSidebar from "./BlogRightSidebar";

const BlogContentWrapper = () => {
  const [blogData, setBlogData] = useState<IBlog[]>([]);
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "";
  const [page, setPage] = useState(() => parseInt(localStorage.getItem("currentPage") || "1", 10));
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const handlePagePrevNext = (next: boolean) => {
    setPage((prev) => {
      const newPage = next
        ? Math.min(prev + 1, totalPages)
        : Math.max(prev - 1, 1);
      return newPage;
    });
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // If category is provided, filter by category; otherwise, get all blogs
        const endpoint = category
          ? `/api/blogs?category=${category}&page=${page}&limit=4`
          : `/api/blogs?page=${page}&limit=4`;

        const response = await axios.get(endpoint);
        const data = response.data;

        setBlogData([...data.blogs]);
        setTotalBlogs(data?.totalBlogs);
        setTotalPages(data?.totalPages);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBlogs();
  }, [page, category]);

  useEffect(() => {
    return localStorage.setItem("currentPage", page.toString());
  }, [page]);

  return (
    <>
      <section className="gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row row-cols-1 row-cols-md-2 g-4">
                {blogData.map((item, index) => (
                  <div
                    className="card border border-dark shadow-sm mx-auto"
                    style={{
                      maxWidth: "330px",
                      maxHeight: "450px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    key={index}
                  >
                    <div className="position-relative">
                      {/* Category Badge inside Image */}
                      {/* <span
                          className="badge text-white position-absolute"
                          style={{
                            bottom: 0,
                            right: 0,
                            backgroundColor: '#0f9544',
                            padding: "12px 12px",
                            fontSize: "0.8rem",
                            borderRadius: "5px",
                            zIndex: "2",
                          }}
                        >
                          {item?.category}
                        </span> */}

                      <Link href={`/blog-details/${item?._id}`}>
                        <Image
                          src={item?.image || ""}
                          height={180}
                          width={100}
                          alt="Blog Image"
                          className="card-img-top border-bottom"
                          style={{
                            objectFit: "contain",
                            height: "180px",
                          }}
                        />
                      </Link>
                    </div>

                    <div className="card-body d-flex flex-column p-3">
                      <Link href={`/blog-details/${item?._id}`}>
                        <h5
                          className="card-title text-dark fw-semibold"
                          style={{
                            fontSize: "1.1rem",
                            minHeight: "48px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {item?.title}
                        </h5>
                      </Link>

                      <p
                        className="card-text text-muted"
                        style={{
                          fontSize: "0.9rem",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          marginBottom: "8px",
                        }}
                      >
                        {item?.summary}
                      </p>

                      <Link
                        href={`/blog-details/${item?._id}`}
                        className="d-inline-flex align-items-center fw-medium py-3 mt-2"
                        style={{ color: "#0f9544" }}
                      >
                        Read more
                        <i className="ms-2 fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination - Centered Properly */}
              <div className="d-flex justify-content-center mt-5">
                <ul className="pagination g-2">
                  {/* Previous Button */}
                  <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                    <Link
                      href={"#"}
                      className="page-link"
                      onClick={() => handlePagePrevNext(false)}
                    >
                      <i className="fa-solid fa-chevron-left"></i>
                    </Link>
                  </li>

                  {/* Page Numbers */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (p) => (
                      <li
                        key={p}
                        className={`page-item ${page === p ? "active" : ""}`}
                      >
                        <Link
                          href="#"
                          className="page-link"
                          onClick={(e) => {
                            e.preventDefault();
                            setPage((prev) => (prev === p ? prev : p)); // Only update if different
                          }}
                        >
                          {p}
                        </Link>
                      </li>
                    )
                  )}

                  {/* Next Button */}
                  <li
                    className={`page-item ${
                      page === totalPages ? "disabled" : ""
                    }`}
                  >
                    <Link
                    href={'#'}
                      className="page-link"
                      onClick={() => handlePagePrevNext(true)}
                    >
                      <i className="fa-solid fa-chevron-right"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Right Sidebar */}
            <BlogRightSidebar />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogContentWrapper;
