"use client";

import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";
import ConfirmDialog from "../shearedComponents/ConfirmDialog";
// import profile_icon from '../../../public/assets/img/profile_icon'

interface BlogTableItemProps {
  authorImg: string;
  title: string;
  author: string;
  date: string;
  deleteBlog: (id: string) => void;
  mongoId: string;
}

const BlogTableItem: React.FC<BlogTableItemProps> = ({
  authorImg,
  title,
  author,
  date,
  deleteBlog,
  mongoId,
}) => {
  const BlogDate = new Date(date);
  const [confirmDialog, setConfirmDialog] = useState(false);

  const onClose = () => {
    setConfirmDialog(false);
  };

  const handleDelete = () => {
    deleteBlog(mongoId);
    onClose();
  };

  return (
    <>
      {confirmDialog && (
        <ConfirmDialog
          isOpen={confirmDialog}
          onClose={onClose}
          onConfirm={handleDelete}
        />
      )}
      <tr className="bg-white border-bottom">
        {/* Author Column with Image */}
        <th
          scope="row"
          className="d-flex align-items-center gap-3 px-3 py-3 fw-medium text-dark"
        >
          {authorImg && (
            <Image
              width={40}
              height={40}
              alt="author-img"
              src={authorImg}
              className="rounded-circle"
            />
          )}
          <p className="m-0">{author ? author : "No author"}</p>
        </th>

        {/* Blog Title */}
        <td className="px-3 py-3">{title ? title : "No title"}</td>

        {/* Blog Date */}
        <td className="px-3 py-3">{BlogDate.toDateString()}</td>

        {/* Actions: Edit & Delete */}
        <td className="px-3 py-3">
          <div className="d-flex align-items-center gap-2">
            <button
              className="btn btn-warning btn-sm"
              onClick={() =>
                (window.location.href = `/admin/edit-blog/${mongoId}`)
              }
            >
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => setConfirmDialog(true)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default BlogTableItem;
