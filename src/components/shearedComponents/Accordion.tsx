"use client";
import { AccordianPropTypes } from "@/interFace/interFace";
import { useEffect, useRef, useState } from "react";

const AccordionItem: React.FC<AccordianPropTypes> = ({
  title,
  content,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const isActive = index === activeIndex;
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<string | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      if (isActive) {
        setHeight(`${contentRef.current.scrollHeight}px`);
      } else {
        setHeight("0px");
      }
    }
  }, [isActive]);

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${isActive ? "" : "collapsed"}`}
          type="button"
          onClick={() => setActiveIndex(isActive ? null : index)}
        >
          {title}
        </button>
      </h2>
      <div
        ref={contentRef}
        style={{
          maxHeight: isActive
            ? contentRef.current
              ? contentRef.current.scrollHeight
              : "0px"
            : "0px",
          overflow: "hidden",
          transition: "max-height 0.4s ease-in-out",
        }}
      >
        <div className="accordion-body">{content}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
