import BodyContainer from "../components/BodyContainer";
import Footer from "../components/Footer";
import PetReportsGroup from "../components/petreportspage/PetReportsGroup";
import PetReportsPageButtons from "../components/petreportspage/PetReportsPageButtons";

import { useNavigationContext } from "../hooks/navigation/useNavigationContext";

const PetReports = () => {

  const { isNavOpen } = useNavigationContext();
    
  return (

    <div className={isNavOpen ? "hidden" : "font-lato bg-white-100"}>
      <BodyContainer>
        <div className="px-[var(--size-sm)] py-[var(--size-md)]">
          <div className="mb-[var(--size-xsm)]">
            <PetReportsGroup />
          </div>
          <div className="mb-[var(--size-xsm)]">
            <PetReportsPageButtons />
          </div>
        </div>
        <Footer />
      </BodyContainer>
    </div>
  )
}

export default PetReports