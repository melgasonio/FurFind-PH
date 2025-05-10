import { Link } from 'react-router-dom';
import { usePetReportContext } from '../../hooks/pet_reports/usePetReportContext';
import { useLastButtonContext } from '../../hooks/pet_reports/useLastButtonContext';
import { useReportsPerPageContext } from '../../hooks/pet_reports/useReportsPerPageContext';

const PetReportsPageButtons = ({ className }) => {
    // Last clicked button is saved as a state, so when user leaves and returns to the page, the last page chosen is still selected.
    const { lastClicked, setLastClicked } = useLastButtonContext();
    const { petReports } = usePetReportContext();
    const { reportsPerPage } = useReportsPerPageContext();

    const reportsCount = petReports.length;
    // Total number of pet reports per page: 20; Last page can have 20 or less reports
    const totalPages = Math.ceil(reportsCount / reportsPerPage);
    const numsArray = Array.from({ length: totalPages }, (_, i) => i + 1);

    const setPage = (pageNum) => setLastClicked(pageNum);

    const handlePrev = () => setPage(Math.max(1, lastClicked - 1)); // Don't go below 1
    const handleNext = () => setPage(Math.min(totalPages, lastClicked + 1)); // Don't go over totalPages
    const handleFirst = () => setPage(1);
    const handleLast = () => setPage(totalPages);
    const handleNum = (page) => setPage(page);

    // Return an array of 5 page numbers depending on where the user is
    const getBtsDisplay = () => {
        if (totalPages <= 5) return numsArray;

        if (lastClicked > 5 && lastClicked < totalPages - 4) {
            return numsArray.slice(lastClicked - 1, lastClicked + 5);
        }

        if (lastClicked > 5 && lastClicked >= totalPages - 4) {
            return numsArray.slice(totalPages - 5);
        }

        return numsArray.slice(0, 5);
    };

    // Render dynamic number buttons with active highlighting
    const renderNumberButtons = () =>
        getBtsDisplay().map((page, index) => (
            <Link key={index} to={`/petreports/page/${page}`}>
                <button
                    className={
                        page === lastClicked
                            ? 'cursor-pointer rounded-[8px] bg-black-600 text-white-200 hover:bg-black-500 p-[var(--size-sm)]'
                            : 'cursor-pointer rounded-[8px] hover:bg-black-100 p-[var(--size-sm)]'
                    }
                    onClick={() => handleNum(page)}
                >
                    {page}
                </button>
            </Link>
        ));

    // Reusable nav buttons
    const FirstButton = () => (
        <Link to='/petreports/page/1'>
            <button className='cursor-pointer rounded-[8px] hover:bg-black-100 p-[var(--size-sm)]' onClick={handleFirst}>
                &lt;&lt;
            </button>
        </Link>
    );

    const PrevButton = () => (
        <Link to={lastClicked === 1 ? '/petreports/page/1' : `/petreports/page/${lastClicked - 1}`}>
            <button className='cursor-pointer rounded-[8px] hover:bg-black-100 p-[var(--size-sm)]' onClick={handlePrev}>
                &lt;
            </button>
        </Link>
    );

    const NextButton = () => (
        <Link to={lastClicked === totalPages ? `/petreports/page/${totalPages}` : `/petreports/page/${lastClicked + 1}`}>
            <button className='cursor-pointer rounded-[8px] hover:bg-black-100 p-[var(--size-sm)]' onClick={handleNext}>
                &gt;
            </button>
        </Link>
    );

    const LastButton = () => (
        <Link to={`/petreports/page/${totalPages}`}>
            <button className='cursor-pointer rounded-[8px] hover:bg-black-100 p-[var(--size-sm)]' onClick={handleLast}>
                &gt;&gt;
            </button>
        </Link>
    );

    return (
        <div className={`flex w-full text-black-500 font-semibold ${className}`}>
            {/* No pagianation buttons if total page is 1 */}
            {totalPages === 1 && (
                <div className='hidden'>
                </div>
            )}

            {/* Do not show ellipsis if total pages is 5 or less */}
            {totalPages <= 5 && totalPages > 1 && (
                <div className='flex-1 flex flex-row justify-around'>
                    <PrevButton />
                    {renderNumberButtons()}
                    <NextButton/>
                </div>
            )
            }

            {/* First 5 pages (show right ellipsis) */}
            {totalPages > 5 && lastClicked <= 5 && (
                <div className='flex-1 flex flex-row justify-around'>
                    <FirstButton />
                    <PrevButton />
                    {renderNumberButtons()}
                    <Link to={`/petreports/page/${totalPages}`}>
                        <button
                            className='cursor-pointer rounded-[8px] hover:bg-black-100 p-[var(--size-sm)]'
                            onClick={handleLast}
                        >
                            ...
                        </button>
                    </Link>
                    <NextButton />
                    <LastButton />
                </div>
            )}

            {/* Last 5 pages (show left ellipsis) */}
            {lastClicked > 5 && lastClicked >= totalPages - 4 && (
                <div className='flex-1 flex flex-row justify-around'>
                    <FirstButton />
                    <PrevButton />
                    <Link to='/petreports/page/1'>
                        <button
                            className='cursor-pointer rounded-[8px] hover:bg-black-100 p-[var(--size-sm)]'
                            onClick={handleFirst}
                        >
                            ...
                        </button>
                    </Link>
                    {renderNumberButtons()}
                    <NextButton />
                    <LastButton />
                </div>
            )}

            {/* Middle pages (show both ellipses) */}
            {lastClicked > 5 && lastClicked < totalPages - 4 && (
                <div className='flex-1 flex flex-row justify-around'>
                    <FirstButton />
                    <PrevButton />
                    <Link to='/petreports/page/1'>
                        <button
                            className='cursor-pointer rounded-[8px] hover:bg-black-100 p-[var(--size-sm)]'
                            onClick={handleFirst}
                        >
                            ...
                        </button>
                    </Link>
                    {renderNumberButtons()}
                    <Link to={`/petreports/page/${totalPages}`}>
                        <button
                            className='cursor-pointer rounded-[8px] hover:bg-black-100 p-[var(--size-sm)]'
                            onClick={handleLast}
                        >
                            ...
                        </button>
                    </Link>
                    <NextButton />
                    <LastButton />
                </div>
            )}
        </div>
    );
};

export default PetReportsPageButtons;
