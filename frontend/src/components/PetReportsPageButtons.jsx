import { Link } from 'react-router-dom';
import { usePetReportContext } from '../hooks/pet_reports/usePetReportContext';
import { useEffect } from 'react';
import { useLastButtonContext } from '../hooks/pet_reports/useLastButtonContext';


const PetReportsPageButtons = () => {
    const { setLastClicked } = useLastButtonContext();

    useEffect(() => {
        const storedLastClicked = localStorage.getItem("lastClicked")

        if (storedLastClicked) {
            setLastClicked(storedLastClicked);
        }
    }, []);

    const handleClick = (buttonNum) => {
        setLastClicked(buttonNum);
        localStorage.setItem("lastClicked", buttonNum);
    }

    const { petReports } = usePetReportContext();

    const buttonsArr = [];

    const reportsLen = petReports.length;
    const buttonsNum = Math.ceil(reportsLen / 20);

    for (let i = 0; i < buttonsNum; i++) {
        buttonsArr.push(i + 1);
    }

  return (
    <div className='page-btns'>
        <div className='page-btn'>
            {buttonsArr && 
                buttonsArr.map((b) => (
                    <Link key={b} to={`/petreports/page/${b}`}>
                        <button 
                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                            onClick={() => handleClick(b)}>
                                {b}
                        </button>                    
                    </Link>
                ))}
        </div>
    </div>
  )
}

export default PetReportsPageButtons