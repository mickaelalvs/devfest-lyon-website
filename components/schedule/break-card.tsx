import {Card, CardContent} from "@/components/ui/card"
import type {Break, Talk} from "@/types/schedule"
import {SpeakerCard} from "./speaker-card"

interface BreakCardProps {
    breakItem: Break
    onClick?: () => void
    lunchTalk?: Talk
}

export function BreakCard({breakItem, onClick, lunchTalk}: BreakCardProps) {
    const getBreakStyles = (title: string) => {
        if (title.toLowerCase().includes("coffee")) {
            return "h-full bg-slate-100 border border-slate-200 text-slate-700"
        } else if (title.toLowerCase().includes("déjeuner")) {
            return "h-full bg-pink-50 border border-pink-200 text-pink-700"
        }

        return "h-full bg-amber-50 border border-amber-200 text-amber-700"
    }

    // Special handling for lunch break
    if (breakItem.title.toLowerCase().includes("déjeuner")) {
        return (
            <Card className={getBreakStyles(breakItem.title)}>
                <CardContent className="p-6">
                    <div className="text-center mb-6">
                        <h3 className="font-semibold text-xl mb-30">{breakItem.title}</h3>
                    </div>
                    {lunchTalk && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-200 cursor-pointer hover:scale-[1.02]" onClick={onClick}>
                            <div className="bg-white/50 rounded-lg p-4 border-2 border-pink-700">
                                <h4 className="w-full border-pink-700 mb-4 inline-flex items-center justify-between font-bold">LA GRANDE HALLE
                                    <div className="text-md border-pink-700 font-black">{lunchTalk.time} - {lunchTalk.endTime}</div>
                                </h4>
                                <div className="bg-white rounded-lg p-3 border">
                                    <h5 className="font-semibold text-gray-900 text-lg mb-2">{lunchTalk.title}</h5>
                                    <p className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                                        {lunchTalk.theme}
                                    </p>
                                    <div className="mt-10 w-full">
                                        <SpeakerCard key={lunchTalk.speakers[0].name} speaker={lunchTalk.speakers[0]}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className={getBreakStyles(breakItem.title)}>
            <CardContent className="p-6 text-center">
                <h3 className="font-semibold">{breakItem.title}</h3>
            </CardContent>
        </Card>
    )
}
