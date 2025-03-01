import React from "react";
import checkMark from "../../../public/assets/img/check-mark.png";
import Image from "next/image";
import { pricingPlan } from "@/interFace/interFace";
import Link from "next/link";

interface propsData {
  data: pricingPlan;
  margin: string;
}

const PricingPlanCard = ({ data, margin }: propsData) => {
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className={`solar-energy ${margin}`}>
          <Image
            alt="img"
            src={data?.img}
            width={100}
            height={90}
          />
          <h3>{data?.title}</h3>

          {/* Pricing Section */}
          <div className="price-container">
            <h2>
              <span className="original-price">${data?.originalPrice}</span>
              <span className="discounted-price">${data?.price}</span>
              {/* <sub>/{data?.package}</sub> */}
            </h2>
            <p className="savings-text">
              🎉 You Save:{" "}
              <strong>
                ${(data?.originalPrice ?? 0) - (data?.price ?? 0)}
              </strong>
            </p>
          </div>

          <ul>
            <li>
              <Image
                alt="img"
                src={checkMark}
                style={{ width: "auto", height: "auto" }}
              />
              Built using n-type mono
            </li>
            <li>
              <Image
                alt="img"
                src={checkMark}
                style={{ width: "auto", height: "auto" }}
              />
              Crystalline cell materials
            </li>
            <li>
              <Image
                alt="img"
                src={checkMark}
                style={{ width: "auto", height: "auto" }}
              />
              Reliability and performance
            </li>
          </ul>

          <Link href="/packages/1" className="button">
            Purchase Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default PricingPlanCard;
