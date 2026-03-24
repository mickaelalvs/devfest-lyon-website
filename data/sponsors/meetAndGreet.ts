import zenika from '@/assets/images/sponsors/Zenika.svg';

export interface Sponsor {
  name: string;
  logo: string;
  website: string;
}

export const meetAndGreetSponsors: Sponsor[] = [
  {
    name: 'Zenika',
    logo: zenika.src,
    website: 'https://www.zenika.com',
  },
];
