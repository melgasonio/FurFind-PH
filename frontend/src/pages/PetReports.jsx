import BodyContainer from "../components/BodyContainer";
import FilterToggle from "../components/buttons/FilterToggle";
import Footer from "../components/Footer";
import PetReportsGroup from "../components/petreportspage/PetReportsGroup";
import PetReportsPageButtons from "../components/petreportspage/PetReportsPageButtons";

import { useNavigationContext } from "../hooks/navigation/useNavigationContext";

const PetReports = () => {

  const { isNavOpen } = useNavigationContext();
    
  return (

    <div className={isNavOpen ? "hidden" : "font-lato bg-white-100"}>
      <BodyContainer>
        <div className="relative px-[var(--size-sm)] py-[var(--size-md)]">
          <div className="mb-[var(--size-xsm)]">
            <PetReportsGroup />
          </div>
          <div className="mb-[var(--size-xsm)]">
            <PetReportsPageButtons />
          </div>
          {/* Filter */}
          <div className="fixed bottom-[48px] right-[24px]">
            <FilterToggle />
          </div>
        </div>
        <Footer />
      </BodyContainer>
    </div>
  )
}

export default PetReports