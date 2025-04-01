import { Link } from 'react-router-dom';
import { usePetReportContext } from '../../hooks/pet_reports/usePetReportContext';
import { useLastButtonContext } from '../../hooks/pet_reports/useLastButtonContext';

const PetReportsPageButtons = () => {
    const { lastClicked, setLastClicked } = useLastButtonContext();
    const { petReports } = usePetReportContext();

    const reportsCount = petReports.length;
    // 
    const totalPages = Math.ceil(reportsCount / 20);
    const numsArray = Array.from({ length: totalPages }, (_, i) => i + 1);

    const setPage = (pageNum) => setLastClicked(pageNum);

    const handlePrev = () => setPage(Math.max(1, lastClicked - 1)); //Prevents going to 0 and below
    const handleNext = () => setPage(Math.min(totalPages, lastClicked + 1)); //Prevents going beyond the total number of pages
    const handleFirst = () => setPage(1);
    const handleLast = () => setPage(totalPages);
    const handleNum = (page) => setPage(page);

    // If totalPages is greater than 5, it will be complicated :)
    // Only show five number buttons at a time
    // Basic: totalPages is 5 or less. Show double previous, previous, numbers, next, double next.
    // Complex: totalPages is 5 or more. The number buttons to be displayed, and the placement of ellipses, will depend on the lastClicked value.
        // If lastClicked is 5 or less. Show double previous, previous, numbers, ellipse (linked to the last page), next, double next.
        // If lastClicked is totalPages - 4 or more. Show double previous, previous, ellipse (linked to the first page), numbers, next, double next.
        // If lastClicked is greater than 5 and or less than totalPages - 4. Show double previous, previous, ellipse (linked to the first page), numbers, ellipse (linked to the last page), next, double next.
    
    console.log(lastClicked)
    
    const getBtsDisplay = () => {
        if (totalPages <= 5)
            return numsArray;

        if (lastClicked > 5 && lastClicked < totalPages - 4) {
            return numsArray.slice(lastClicked - 1, lastClicked + 5);
        } 

        if (lastClicked > 5 && lastClicked >= totalPages - 4) {
            return numsArray.slice(totalPages - 5);
        }

        return numsArray.slice(0, 5);
    }

    return (
        <div className='flex flex-row items-center justify-between w-full text-black-500 font-semibold'>
            {totalPages <= 5 && (
                <div>
                    <Link to='/petreports/page/1'>
                        <button className='cursor-pointer rounded-[8px] hover:bg-black-100 p-[var(--size-sm)]' onClick={handleFirst}>&lt;&lt;</button>
                    </Link>
                    <Link to={lastClicked === 1 ? '/petreports/page/1' : `/petreports/page/${lastClicked - 1}`}>
                        <button className='cursor-pointer rounded-[8px] hover:bg-black-100 p-[var(--size-sm)]' onClick={handlePrev}>&lt;</button>
                    </Link>
                    {getBtsDisplay().map((page, index) => (
                        <Link key={index} to={`/petreports/page/${page}`}>
                            <button className={page === lastClicked ? 'cursor-pointer rounded-[8px] bg-black-600 text-white-200 hover:bg-black-500 p-[var(--size-sm)]' : 'cursor-pointer rounded-[8px] hover:bg-black-100 p-[var(--size-sm)]'} onClick={() => handleNum(page)}>{page}</button>
                        </Link>
                    ))}
                    <Link to={lastClicked === totalPages ? `/petreports/page/${totalPages}` : `/petreports/page/${lastClicked + 1}`}>
                        <button className='cursor-pointer rounded-[8px] hover:bg-black-100 p-[var(--size-sm)]' onClick={handleNext}>&gt;</button>
                    </Link>
                    <Link to={`/petreports/page/${totalPages}`}>
                        <button className='cursor-pointer rounded-[8px] hover:bg-black-100 p-[var(--size-sm)]' onClick={handleLast}>&gt;&gt;</button>
                    </Link>                
                </div>
            )}
            {lastClicked <= 5 && (
                <div>
                    <Link to='/petreports/page/1'>
                        <button className='cursor-pointer rounded-[8px] hover:bg-black-100 p-[var(--size-sm)]' onClick={handleFirst}>&lt;&lt;</button>
                     </Link>
                    <Link to={lastClicked === 1 ? '/petreports/page/1' : `/petreports/page/${lastClicked - 1}`}>
                        <button className='cursor-pointer rounded-[8px] hover:bg-black-100 p-[var(--size-sm)]' onClick={handlePrev}>&lt;</button>
                    </Link>
                    {getBtsDisplay().map((page, index) => (
                        <Link key={index} to={`/petreports/page/${page}`}>
                            <button className={page === lastClicked ? 'cursor-pointer rounded-[8px] bg-black-600 text-white-200 hover:bg-black-500 p-[var(--size-sm)]' : 'cursor-pointer rounded-[8px] hover:bg-black-100 p-[var(--size-sm)]'} onClick={() => handleNum(page)}>{page}</button>
                        </Link>
                    ))}
                    <Link to={`/petreports/page/${totalPages}`}>
                        <button className='cursor-pointer rounded-[8px] hover:bg-black-100 p-[var(--size-sm)]' onClick={handleLast}>...</button>
                    </Link>
                    <Link to={lastClicked === totalPages ? `/petreports/page/${totalPages}` : `/petreports/page/${lastClicked + 1}`}>
                        <button className='cursor-pointer rounded-[8px] hover:bg-black-100 p-[var(--size-sm)]' onClick={handleNext}>&gt;</button>
                    </Link>
                    <Link to={`/petreports/page/${totalPages}`}>
                        <button className='cursor-pointer rounded-[8px] hover:bg-black-100 p-[var(--size-sm)]' onClick={handleLast}>&gt;&gt;</button>
                    </Link>
                </div>
            )}
            {lastClicked > 5 && lastClicked >= totalPages - 4 && (
                <div>
                    <Link to='/petreports/page/1'>
                        <button className='cursor-pointer rounded-[8px] hover:bg-black-100 p-[var(--size-sm)]' onClick={handleFirst}>&lt;&lt;</button>
                     </Link>
                    <Link to={lastClicked === 1 ? '/petreports/page/1' : `/petreports/page/${lastClicked - 1}`}>
                        <button className='cursor-pointer rounded-[8px] hover:bg-black-100 p-[var(--size-sm)]' onClick={handlePrev}>&lt;</button>
                    </Link>
                    <Link to='/petreports/page/1'>
                        <button className='cursor-pointer rounded-[8px] hover:bg-black-100 p-[var(--size-sm)]' onClick={handleFirst}>...</button>
                     </Link>                    
                    {getBtsDisplay().map((page, index) => (
                        <Link key={index} to={`/petreports/page/${page}`}>
                            <button className={page === lastClicked ? 'cursor-pointer rounded-[8px] bg-black-600 text-white-200 hover:bg-black-500 p-[var(--size-sm)]' : 'cursor-pointer rounded-[8px] hover:bg-black-100 p-[var(--size-sm)]'} onClick={() => handleNum(page)}>{page}</button>
                        </Link>
                    ))}
                    <Link to={lastClicked === totalPages ? `/petreports/page/${totalPages}` : `/petreports/page/${lastClicked + 1}`}>
                        <button className='cursor-pointer rounded-[8px] hover:bg-black-100 p-[var(--size-sm)]' onClick={handleNext}>&gt;</button>
                    </Link>
                    <Link to={`/petreports/page/${totalPages}`}>
                        <button className='cursor-pointer rounded-[8px] hover:bg-black-100 p-[var(--size-sm)]' onClick={handleLast}>&gt;&gt;</button>
                    </Link>
                </div>
            )}
            {lastClicked > 5 && lastClicked < totalPages - 4 && (
                <div>
                    <Link to='/petreports/page/1'>
                        <button className='cursor-pointer rounded-[8px] hover:bg-black-100 p-[var(--size-sm)]' onClick={handleFirst}>&lt;&lt;</button>
                     </Link>
                    <Link to={lastClicked === 1 ? '/petreports/page/1' : `/petreports/page/${lastClicked - 1}`}>
                        <button className='cursor-pointer rounded-[8px] hover:bg-black-100 p-[var(--size-sm)]' onClick={handlePrev}>&lt;</button>
                    </Link>
                    <Link to='/petreports/page/1'>
                        <button className='cursor-pointer rounded-[8px] hover:bg-black-100 p-[var(--size-sm)]' onClick={handleFirst}>...</button>
                     </Link>                    
                    {getBtsDisplay().map((page, index) => (
                        <Link key={index} to={`/petreports/page/${page}`}>
                            <button className={page === lastClicked ? 'cursor-pointer rounded-[8px] bg-black-600 text-white-200 hover:bg-black-500 p-[var(--size-sm)]' : 'cursor-pointer rounded-[8px] hover:bg-black-100 p-[var(--size-sm)]'} onClick={() => handleNum(page)}>{page}</button>
                        </Link>
                    ))}
                    <Link to={`/petreports/page/${totalPages}`}>
                        <button className='cursor-pointer rounded-[8px] hover:bg-black-100 p-[var(--size-sm)]' onClick={handleLast}>...</button>
                    </Link>                    
                    <Link to={lastClicked === totalPages ? `/petreports/page/${totalPages}` : `/petreports/page/${lastClicked + 1}`}>
                        <button className='cursor-pointer rounded-[8px] hover:bg-black-100 p-[var(--size-sm)]' onClick={handleNext}>&gt;</button>
                    </Link>
                    <Link to={`/petreports/page/${totalPages}`}>
                        <button className='cursor-pointer rounded-[8px] hover:bg-black-100 p-[var(--size-sm)]' onClick={handleLast}>&gt;&gt;</button>
                    </Link>
                </div>
            )}                        
        </div>
    );
};

export default PetReportsPageButtons;
