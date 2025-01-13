import { Link } from 'react-router-dom';
import { usePetReportContext } from '../hooks/pet_reports/usePetReportContext';
import { useLastButtonContext } from '../hooks/pet_reports/useLastButtonContext';


const PetReportsPageButtons = () => {
    const { lastClicked, setLastClicked } = useLastButtonContext();

    console.log(lastClicked)

    const { petReports } = usePetReportContext();

    const buttonsArr = [];

    const reportsLen = petReports.length;
    const buttonsNum = Math.ceil(reportsLen / 1);

    for (let i = 0; i < buttonsNum; i++) {
        buttonsArr.push(i + 1);
    }

    const buttonsC1 = [...buttonsArr.slice(0, 5), '...'];
    const buttonsC2 = ['...', ...buttonsArr.slice(buttonsNum - 5)];
    const buttonsC3 = ['...', ...buttonsArr.slice(lastClicked - 1, lastClicked + 2)];

    console.log(buttonsC3)

    // onclick handlers for button
    const handleNumClick = (buttonNum) => {
        setLastClicked(buttonNum);
    }
    
    const handleDoublePrevClick = () => {
        setLastClicked(1);
    }

    const handleDoubleNextClick = () => {
        setLastClicked(buttonsNum);
    }

    const handleSinglePrevClick = () => {
        if (Number(lastClicked) > 1) {
            setLastClicked(Number(lastClicked) - 1);
            console.log(Number(lastClicked) - 1)
        }
    }

    const handleSingleNextClick = () => {
        if (Number(lastClicked) < buttonsNum) {
            setLastClicked(Number(lastClicked) + 1);
            console.log(Number(lastClicked) + 1)
        }
    }

    const handleRightEllClick = () => {
        setLastClicked(buttonsNum);
    }

    const handleLeftEllClick = () => {
        setLastClicked(1);
    }   

  return (
    <div className='page-btns'>
        <div className='page-btn'>
            <Link key='doublePrev' to={'/petreports/page/1'}>
                <button 
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    onClick={handleDoublePrevClick}>
                        &lt;&lt;
                </button>
            </Link>
            <Link key='singlePrev' to={`/petreports/page/${Number(lastClicked) > 1 ? Number(lastClicked) - 1 : 1}`}>
                <button 
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    onClick={handleSinglePrevClick}>
                        &lt;
                </button>
            </Link> 
            {/* If last clicked is from 1 to 5 */}
            {lastClicked < 6 && 
                buttonsC1.map((b) => (
                    <Link key={b} to={b === '...' ? `/petreports/page/${buttonsNum}` : `/petreports/page/${b}`}>
                        <button 
                            className={Number(lastClicked) === b
                            ? 'bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' 
                            : 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'}
                            onClick={b === '...' ? handleRightEllClick : () => handleNumClick(b)}>
                            {b}
                        </button>
                    </Link>
                ))          
            }
            {/* If last clicked is from buttonsNum - 4 to butttonsNum */}
            {lastClicked > buttonsNum - 5 && 
                buttonsC2.map((b) => (
                    <Link key={b} to={b === '...' ? '/petreports/page/1' : `/petreports/page/${b}`}>
                        <button 
                            className={Number(lastClicked) === b
                            ? 'bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' 
                            : 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'}
                            onClick={b === '...' ? handleLeftEllClick : () => handleNumClick(b)}>
                            {b}
                        </button>
                    </Link>
                ))
            }
            {/* If last clicked if from 6 to buttonsNum - 5 */}
            {lastClicked > 5 && lastClicked < buttonsNum - 4 &&
                <>
                    {buttonsC3.map((b) => (
                        <Link key={b} to={b === '...' ? '/petreports/page/1' : `/petreports/page/${b}`}>
                            <button 
                                className={Number(lastClicked) === b
                                ? 'bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' 
                                : 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'}
                                onClick={b === '...' ? handleLeftEllClick : () => handleNumClick(b)}>
                                {b}
                            </button>
                        </Link>
                    ))}
                    <Link to={`/petreports/page/${buttonsNum}`}>
                        <button 
                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                            onClick={handleRightEllClick}>
                            ...
                        </button>
                    </Link>
                </>        
            }
            <Link key='singleNext' to={`/petreports/page/${Number(lastClicked) < buttonsNum ? Number(lastClicked) + 1 : buttonsNum}`} >
                <button 
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    onClick={handleSingleNextClick}>
                        &gt;
                </button>
            </Link>                
            <Link key='doubleNext' to={`/petreports/page/${buttonsNum}`} >
                <button 
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    onClick={handleDoubleNextClick}>
                        &gt;&gt;
                </button>
            </Link>
        </div>
    </div>
  )
}

export default PetReportsPageButtons