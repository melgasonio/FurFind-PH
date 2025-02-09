import { Link } from 'react-router-dom';
import { usePetReportContext } from '../../hooks/pet_reports/usePetReportContext';
import { useLastButtonContext } from '../../hooks/pet_reports/useLastButtonContext';

const PetReportsPageButtons = () => {
    const { lastClicked, setLastClicked } = useLastButtonContext();
    const { petReports } = usePetReportContext();

    const reportsCount = petReports.length;
    const totalPages = Math.ceil(reportsCount / 20);
    const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

    const setPage = (pageNum) => setLastClicked(pageNum);

    const handlePrev = () => setPage(Math.max(1, lastClicked - 1));
    const handleNext = () => setPage(Math.min(totalPages, lastClicked + 1));
    const handleFirst = () => setPage(1);
    const handleLast = () => setPage(totalPages);

    const getPaginationButtons = () => {
        if (totalPages <= 5) {
            return pagesArray;
        }

        if (lastClicked < 6) {
            return [...pagesArray.slice(0, 5), '...'];
        }

        if (lastClicked > totalPages - 5) {
            return ['...', ...pagesArray.slice(-5)];
        }

        return ['...', lastClicked - 1, lastClicked, lastClicked + 1, '...'];
    };

    return (
        <div className='page-btns flex gap-2'>
            <div className='page-btn flex items-center'>
                {totalPages > 5 && (
                    <Link to='/petreports/page/1'>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleFirst}>&lt;&lt;</button>
                    </Link>
                )}
                <Link to={`/petreports/page/${lastClicked - 1}`}>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handlePrev}>&lt;</button>
                </Link>
                {getPaginationButtons().map((page, index) => (
                    <Link key={index} to={`/petreports/page/${page}`}> 
                        <button
                            className={
                                page === lastClicked
                                    ? 'bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' 
                                    : 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                            }
                            onClick={() => (page !== '...' ? setPage(page) : null)}>
                            {page}
                        </button>
                    </Link>
                ))}
                <Link to={`/petreports/page/${lastClicked + 1}`}>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleNext}>&gt;</button>
                </Link>
                {totalPages > 5 && (
                    <Link to={`/petreports/page/${totalPages}`}>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleLast}>&gt;&gt;</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default PetReportsPageButtons;
