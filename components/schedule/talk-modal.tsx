"use client"

import { X } from "lucide-react"
import type { Talk } from "@/types/schedule"
import { SpeakerCard } from "./speaker-card"

interface TalkModalProps {
    talk: Talk | null
    isOpen: boolean
    onClose: () => void
}

export function TalkModal({ talk, isOpen, onClose }: TalkModalProps) {
    if (!isOpen || !talk) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-gray-100 p-6 rounded-t-2xl">
                    <div className="flex items-start justify-between">
                        <div className="flex-1">
                            <div className="text-sm text-blue-600 font-medium mb-2">
                                {talk.time} - {talk.endTime}
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">{talk.title}</h2>
                            <div className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full inline-block">{talk.theme}</div>
                        </div>
                        <button onClick={onClose} className="ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <X className="w-6 h-6 text-gray-500" />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Description */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                        <p className="text-gray-700 leading-relaxed">{talk.description}</p>
                    </div>

                    {/* Speakers */}
                    <div>
                        <div className="space-y-4">
                            {talk.speakers.map((speaker, index) => (
                                <SpeakerCard key={index} speaker={speaker} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
