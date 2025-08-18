"use client"

import {useEffect, useState} from "react"
import {TalkCard} from "./talk-card"
import {BreakCard} from "./break-card"
import { TalkModal } from "./talk-modal"
import { breaks, roomASchedule, roomBSchedule, lunchTalk } from "@/data/schedule-data"
import type { Talk } from "@/types/schedule"

export function ScheduleGrid() {
    const [selectedTalk, setSelectedTalk] = useState<Talk | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        if (isModalOpen) {
            // Prevent scrolling on the body
            document.body.style.overflow = "hidden"
        } else {
            // Restore scrolling
            document.body.style.overflow = "unset"
        }

        // Cleanup function to restore scrolling when component unmounts
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isModalOpen])

    const handleTalkClick = (talk: Talk) => {
        if (!talk.description) return

        setSelectedTalk(talk)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedTalk(null)
    }

    const allItems = [...breaks, ...roomASchedule, ...roomBSchedule]
    const timeSlots = Array.from(new Set(allItems.map((item) => item.time))).sort((a, b) => {
        const timeA = new Date(`1970/01/01 ${a}`).getTime()
        const timeB = new Date(`1970/01/01 ${b}`).getTime()
        return timeA - timeB
    })

    const findBreakByTime = (time: string) => {
        return breaks.find((item) => item.time === time)
    }

    const findRoomAItemByTime = (time: string) => {
        if (time === "1:00 PM") {
            return lunchTalk
        }

        return roomASchedule.find((item) => item.time === time)
    }

    const findRoomBItemByTime = (time: string) => {
        return roomBSchedule.find((item) => item.time === time)
    }

    return (
        <>
            <div className="hidden md:block w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-15">
                {/* Grid Header */}
                <div className="grid grid-cols-[150px_1fr_1fr] gap-4 mb-4">
                    <div className="font-semibold text-gray-700 text-center py-4">Time</div>
                    <div
                        className="text-white p-15 rounded-lg text-center relative overflow-hidden"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/room/grande-hall.jpg')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <h2 className="text-xl font-semibold relative z-10">LA GRANDE HALLE</h2>
                    </div>
                    <div
                        className="text-white p-15 rounded-lg text-center relative overflow-hidden"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/room/rez-de-saone.jpg')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <h2 className="text-xl font-semibold relative z-10">LE REZ-DE-SAÔNE</h2>
                    </div>
                </div>

                {/* Grid Content */}
                <div className="space-y-4">
                    {timeSlots.map((time, index) => {
                        const breakItem = findBreakByTime(time)
                        const roomAItem = findRoomAItemByTime(time)
                        const roomBItem = findRoomBItemByTime(time)

                        if (breakItem) {
                            return (
                                <div key={index} className="grid grid-cols-[150px_1fr] gap-4">
                                    <div className="flex flex-col items-center justify-center">
                                        <span className="text-lg font-semibold text-gray-700">{time}</span>
                                        <span className="text-sm text-gray-500">{breakItem.endTime}</span>
                                    </div>
                                    <div className="col-span-1">
                                        <BreakCard breakItem={breakItem} onClick={() => handleTalkClick(lunchTalk)}/>
                                    </div>
                                </div>
                            )
                        }

                        return (
                            <div key={index} className="grid grid-cols-[150px_1fr_1fr] gap-4">
                                <div className="flex flex-col items-center justify-center">
                                    <span className="text-lg font-semibold text-gray-700">{time}</span>
                                    {(roomAItem || roomBItem) && (
                                        <span
                                            className="text-sm text-gray-500">{roomAItem?.endTime || roomBItem?.endTime}</span>
                                    )}
                                </div>
                                <div>{roomAItem && <TalkCard talk={roomAItem} onClick={() => handleTalkClick(roomAItem)}/>}</div>
                                <div>{roomBItem && <TalkCard talk={roomBItem} onClick={() => handleTalkClick(roomBItem)}/>}</div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden space-y-15 py-10 px-8">
                {timeSlots.map((time, index) => {
                    const breakItem = findBreakByTime(time)
                    const roomAItem = findRoomAItemByTime(time)
                    const roomBItem = findRoomBItemByTime(time)

                    return (
                        <div key={index}>
                            <div className="text-center my-6">
                                <span
                                    className="text-xl font-bold text-gray-800 bg-gray-100 px-4 py-2 rounded-full">{time}</span>
                                <div className="text-sm text-gray-500 mt-4">
                                    {breakItem?.endTime || roomAItem?.endTime || roomBItem?.endTime}
                                </div>
                            </div>

                            {breakItem ? (
                                <BreakCard breakItem={breakItem}/>
                            ) : (
                                <div className="space-y-4 my-10">
                                    {roomAItem && (
                                        <div>
                                            <div className="text-sm font-medium text-blue-600 mb-2">LA GRANDE HALLE</div>
                                            <TalkCard talk={roomAItem} onClick={() => handleTalkClick(roomAItem)}/>
                                        </div>
                                    )}
                                    {roomBItem && (
                                        <div>
                                            <div className="text-sm font-medium text-green-600 mb-2">LE REZ-DE-SAÔNE</div>
                                            <TalkCard talk={roomBItem} onClick={() => handleTalkClick(roomBItem)}/>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>

            <TalkModal talk={selectedTalk} isOpen={isModalOpen} onClose={handleCloseModal} />
        </>
    )
}
