'use client';

import type { Talk } from '@/types/schedule';
import { SpeakerCard } from './speaker-card';

interface TalkCardProps {
  talk: Talk;
  onClick?: () => void;
}

const getThemeColors = (theme: string) => {
  const normalizedTheme = theme
    .replace(/[📝📊🗃️📏🔧]/g, '')
    .trim()
    .toLowerCase();

  switch (normalizedTheme) {
    case 'software architecture':
      return 'bg-primary/10 text-primary border border-primary/20';
    case 'data & ai':
      return 'bg-green/10 text-green border border-green/20';
    case 'backend':
      return 'bg-navy/10 text-navy border border-navy/20';
    case 'frontend':
      return 'bg-pink/10 text-pink border border-pink/20';
    case 'cloud, infra & devops':
      return 'bg-yellow/10 text-yellow border border-yellow/20';
    default:
      return 'bg-gray-100 text-gray-700 border border-gray-200';
  }
};

export function TalkCard({ talk, onClick }: TalkCardProps) {
  return (
    <div
      onClick={onClick}
      className={`h-full bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col${talk.description ? ' hover:shadow-md transition-all duration-200 cursor-pointer hover:scale-[1.02]' : ''}`}
    >
      <div className="flex-1">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="font-bold text-xl text-gray-900 leading-tight mb-2">{talk.title}</h3>
            {talk.theme ? (
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getThemeColors(talk.theme)}`}>
                {talk.theme}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="space-y-3 mt-4">
        {talk.speakers.map((speaker, index) => (
          <SpeakerCard key={index} speaker={speaker} />
        ))}
      </div>
    </div>
  );
}
