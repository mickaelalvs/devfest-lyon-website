export interface Speaker {
    name: string
    avatar: string
}

export interface Talk {
    time: string
    endTime: string
    title: string
    theme?: string
    speakers: Speaker[]
    description?: string
}

export interface Break {
    time: string
    endTime: string
    title: string
    type: "break"
}

export type ScheduleItem = Talk | Break
