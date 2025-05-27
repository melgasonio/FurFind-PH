const ChatTab = ({ data }) => {

    const nameParts = data.name.trim().split(" ");
    const firstName = nameParts[0];
    const lastNameInitial = nameParts[1] ? `${nameParts[1][0]}.` : ""

    const getTimestamp = (date) => {
        const inputDate = new Date(date);
        const now = new Date();

        const isSameDay = (d1, d2) => 
            d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate();

        const yesterday = new Date();
        yesterday.setDate(now.getDate() - 1);

        if (isSameDay(inputDate, now)) {
            return inputDate.toLocaleTimeString("en-us", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
            });
        } else if (isSameDay(inputDate, yesterday)) {
            return "Yesterday";
        } else {
            return inputDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
            });
        }
    }

    const timestamp = getTimestamp(data.lastMessage.createdAt);
    const topicName = data.topic.petName;
    const topicStatus = data.topic.status;
    const topic = `${topicName.toUpperCase()},  ${topicStatus.toUpperCase()}`

  return (
    <div className="flex flex-row gap-[12px] p-[12px] cursor-pointer">
        {/* Avatar */}
        <div className="flex flex-col items-center justify-center h-full aspect-square rounded-full bg-coral-600">
            <p className="text-white-200 font-semibold text-[20px]">{data.name.charAt(0)}</p>
        </div>
        {/* Details */}
        <div className="grid grid-cols-9 w-full gap-[4px] py-[2px]">
            <div className="col-span-9">
                <p className="text-black-500 text-[12px]">{topic}</p>
            </div>
            <div className="col-span-6">
                <p className="text-black-600 font-bold text-[18px]">{firstName} {lastNameInitial}</p>
            </div>
            <div className="col-span-3 text-right">
                <p className="text-black-500 text-[12px]">{timestamp}</p>
            </div>
            <div className="col-span-7 truncate">
                <p className="text-black-600 text-[16px]">{data.lastMessage.text}</p>
            </div>
            {data.lastUnreadCount > 0 && (
                <div className="col-span-2 flex flex-col items-end">
                    <span className="flex flex-col items-center justify-center p-[8px] bg-coral-600 min-w-[24px] w-fit max-h-[24px] rounded-full">
                        <p className="text-white-200 font-semibold text-[12px]">{data.lastUnreadCount}</p>
                    </span>
                </div>
            )}
        </div>
    </div>
  )
}

export default ChatTab