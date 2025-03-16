"use client";

import SubsTableItem from "@/components/admin/SubsTableItem";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

export interface TAdminEmail {
  _id: string;
  email: string;
  date: string;
}

const Subscriptions = () => {
  const [emails, setEmails] = useState<TAdminEmail[]>([]);

  const fetchEmails = async () => {
    const response = await axios.get("/api/email");
    setEmails(response.data.emails);
  };

  const deleteEmail = async (mongoId: any) => {
    const response = await axios.delete("/api/email", {
      params: {
        id: mongoId,
      },
    });
    if (response.data.success) {
      toast.success(response.data.msg);
      fetchEmails();
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div className="flex-grow pt-5 px-4 px-md-5 pt-md-4 ps-md-5">
      <h1 className="fs-3 fw-bold mb-3">All Subscriptions</h1>

      <div
        className="position-relative border border-secondary rounded shadow-sm overflow-auto mt-3"
        style={{ maxWidth: "100%" }}
      >
        <table className="table table-hover table-bordered text-center">
          <thead className="table-light">
            <tr>
              <th scope="col" className="py-3">
                Email Subscription
              </th>
              <th scope="col" className="d-none d-sm-table-cell py-3">
                Date
              </th>
              <th scope="col" className="py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {emails.length > 0 ? (
              emails.map((item, index) => (
                <SubsTableItem
                  key={index}
                  mongoId={item._id}
                  deleteEmail={deleteEmail}
                  email={item.email}
                  date={item.date}
                />
              ))
            ) : (
              <tr>
                <td colSpan={3} className="text-center py-4 text-muted">
                  No Subscription found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Subscriptions;
