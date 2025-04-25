import { useState } from "react";

import BodyContainer from "../components/BodyContainer";
import FilterToggle from "../components/buttons/FilterToggle";
import Footer from "../components/Footer";
import PetReportsGroup from "../components/petreportspage/PetReportsGroup";
import PetReportsPageButtons from "../components/petreportspage/PetReportsPageButtons";
import PetReportsFilter from "../components/petreportspage/PetReportsFilter";

import { useNavigationContext } from "../hooks/navigation/useNavigationContext";
import { useFilterContext } from "../hooks/pet_reports/useFilterContext";

const PetReports = () => {

  const { isNavOpen } = useNavigationContext();
  const { isFiltered, setIsFiltered } = useFilterContext();

  console.log(isFiltered);
    
  return (

    <div className={isNavOpen ? "hidden" : "font-lato bg-white-100"}>
      <BodyContainer>
        {isFiltered ? (
          <div>
            <PetReportsFilter />
          </div>
        ) : (
          <div className="relative px-[var(--size-sm)] py-[var(--size-md)]">
          <div className="mb-[var(--size-xsm)]">
            <PetReportsGroup />
          </div>
          <div className="mb-[var(--size-xsm)]">
            <PetReportsPageButtons />
          </div>
          {/* Filter */}
          <div className="fixed bottom-[72px] right-[24px]" onClick={() => (setIsFiltered(true))} >
            <FilterToggle/>
          </div>
          <Footer />
        </div>
        )}
        
      </BodyContainer>
    </div>
  )
}

export default PetReports