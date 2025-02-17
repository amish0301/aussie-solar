import { projectData } from "@/data/project-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectSecHomeTwo = () => {
  return (
    <>
      <section className="gap">
        <div className="container">
          <div className="row">
            {projectData?.slice(0,3)?.map((item) => (
              <div key={item?.id} className="col-lg-4 col-md-6">
                <div className="sectors">
                  <figure>
                    <Image alt="sectors-1" src={item?.img} />
                  </figure>
                  <h4>{item?.title}</h4>
                  <p>{item?.details}</p>
                  <Link href={`/projects-details/${item?.id}`}>
                    <i className="fa-solid fa-plus"></i>Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectSecHomeTwo;
