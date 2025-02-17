"use client";  // Mark the component as a Client Component

import LetterBox from "@/components/home-two/LetterBox";
import PackageDetailsMain from "@/components/package-details/PackageDetailsMain";
import MobileSearch from "@/components/shearedComponents/MobileSearch";
import Wrapper from "@/layout/DefaultWrapper";
import { useParams } from "next/navigation"; // ✅ Use useParams() instead of useRouter()
import { useEffect, useState } from "react";

const ProjectDetailsDynamicPage = () => {
  const { id } = useParams(); // ✅ Fetch the dynamic route parameter
  const [numericId, setNumericId] = useState<number | null>(null);

  useEffect(() => {
    if (id) {
      setNumericId(Number(id));
    }
  }, [id]);

  return (
    <>
      <Wrapper>
        <main>
          {numericId !== null ? (
            <PackageDetailsMain id={numericId} />
          ) : (
            <p>Loading package details...</p>
          )}
          <LetterBox />
        </main>
      </Wrapper>
      <MobileSearch />
    </>
  );
};

export default ProjectDetailsDynamicPage;
