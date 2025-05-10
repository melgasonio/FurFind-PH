import BodyContainer from "../components/BodyContainer";
import FilterToggle from "../components/buttons/FilterToggle";
import Footer from "../components/Footer";
import PetReportsGroup from "../components/petreportspage/PetReportsGroup";
import PetReportsPageButtons from "../components/petreportspage/PetReportsPageButtons";
import PetReportsFilter from "../components/petreportspage/PetReportsFilter";

import { useNavigationContext } from "../hooks/navigation/useNavigationContext";
import { useFilterContext } from "../hooks/pet_reports/useFilterContext";

import { FilteredCitiesContextProvider } from "../context/pet_report/FilteredCitiesContext";
import { ReportsPerPageContextProvider } from "../context/pet_report/ReportsPerPageContext";

const PetReports = () => {

  const { isNavOpen } = useNavigationContext();
  const { isFiltered, setIsFiltered } = useFilterContext();
    
  return (
    <ReportsPerPageContextProvider>
      <div className={isNavOpen ? "hidden" : "font-lato bg-white-100"}>
        <BodyContainer>
          <FilteredCitiesContextProvider>
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
          </FilteredCitiesContextProvider>
        </BodyContainer>
      </div>
    </ReportsPerPageContextProvider>
  )
}

export default PetReports;