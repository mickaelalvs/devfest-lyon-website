'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { Speaker } from '@/types/schedule';

interface SpeakerCardProps {
  speaker: Speaker;
  size?: 'sm' | 'md';
}

export function SpeakerCard({ speaker, size = 'md' }: SpeakerCardProps) {
  const avatarSize = size === 'sm' ? 'w-6 h-6' : 'w-10 h-10';
  const textSize = size === 'sm' ? 'text-xs' : 'text-sm';

  return (
    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100">
      <Avatar className={`${avatarSize} ring-2 ring-blue-200`}>
        <AvatarImage src={speaker.avatar || '/placeholder.svg'} alt={speaker.name} />
        <AvatarFallback className="bg-blue-100 text-blue-700 font-semibold">
          {speaker.name
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </AvatarFallback>
      </Avatar>
      <div>
        <span className={`font-semibold text-gray-900 ${textSize}`}>{speaker.name}</span>
      </div>
    </div>
  );
}
