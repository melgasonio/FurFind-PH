import React from 'react'
import BodyContainer from '../components/BodyContainer';
import ChatTab from '../components/chat_list/ChatTab';
import Footer from '../components/Footer';

const ChatList = () => {

    // Replace this later
    const mockChats = [
        {
          _id: "chat1",
          name: "John Doe",
          members: ["user1", "user2"],
          lastMessage: {
            _id: "msg1",
            senderId: "user2",
            text: "Hey, did you finish the project?",
            createdAt: "2025-05-27T09:15:00Z",
          },
          lastUnreadCount: 0,
          topic: {
            petName: "Buddy",
            status: "found",
          },
        },
        {
          _id: "chat2",
          name: "Elena Navarro",
          members: ["user1", "user3"],
          lastMessage: {
            _id: "msg2",
            senderId: "user3",
            text: "Deployed to staging",
            createdAt: "2025-05-26T18:42:00Z",
          },
          lastUnreadCount: 0,
          topic: {
            petName: "Buddy",
            status: "found",
          },
        },
        {
          _id: "chat3",
          name: "Mom",
          members: ["user1", "user5"],
          lastMessage: {
            _id: "msg3",
            senderId: "user5",
            text: "Don't forget to eat!",
            createdAt: "2025-05-22T06:20:00Z",
          },
          lastUnreadCount: 2,
          topic: {
            petName: "Buddy",
            status: "found",
          },
        },
        {
          _id: "chat4",
          name: "Liam Reyes",
          members: ["user1", "user6"],
          lastMessage: {
            _id: "msg4",
            senderId: "user6",
            text: "Who’s doing the slides?",
            createdAt: "2025-05-20T23:59:00Z",
          },
          lastUnreadCount: 4,
          topic: {
            petName: "Buddy",
            status: "found",
          },
        },
        {
          _id: "chat5",
          name: "Luna",
          members: ["user1", "user9"],
          lastMessage: {
            _id: "msg5",
            senderId: "user1",
            text: "Sent you her latest vet record.",
            createdAt: "2025-05-19T11:00:00Z",
          },
          lastUnreadCount: 0,
          topic: {
            petName: "Buddy",
            status: "found",
          },
        },
        {
          _id: "chat6",
          name: "Chris Mendoza",
          members: ["user1", "user10"],
          lastMessage: {
            _id: "msg6",
            senderId: "user10",
            text: "All tasks updated on Trello.",
            createdAt: "2025-05-21T15:35:00Z",
          },
          lastUnreadCount: 0,
          topic: {
            petName: "Buddy",
            status: "found",
          },
        }
    ];

    console.log("On ChatList page")

    return (
        // Slice mockChats
        // Arrange mockChats copy based on lastMessage.createdAt recency
        // Map through array
        <div>
            <BodyContainer className="h-screen flex flex-col">
                {mockChats && mockChats
                    .slice()
                    .sort((a, b) => b.lastMessage.createdAt.localeCompare(a.lastMessage.createdAt))
                    .map((m) => (
                        <div 
                            key={m._id}
                            className='flex flex-col gap-[8px] pt-[24px] pb-[16px] px-[12px]'
                        >
                            <ChatTab data={m} />
                        </div>
                    ))
                }
                <Footer />
            </BodyContainer>
        </div>
    )
}

export default ChatList