import HomeIcon from "../images/icons/Home.svg";
import PricingIcon from "../images/icons/tag.svg";
import HelpCenterIcon from "../images/icons/call.svg";
import TrendingMusicIcon from "../images/icons/arrow.svg";
import PopularSongsIcon from "../images/icons/love.svg";
import FeaturedIcon from "../images/icons/star.svg";
import TopTrackIcon from "../images/icons/music.svg";

//Explore Music
import TrendingMusicBg from "../images/others/exploreOne.png";
import FeaturedMusicBg from "../images/others/exploreTwo.png";
import PopularMusicBg from "../images/others/exploreThree.png";
import BestMusicBg from "../images/others/exploreFour.png";

//Music Array
import MuOne from "../images/others/artistOne.png";
import MuTwo from "../images/others/artistTwo.png";
import MuThree from "../images/others/artistThree.png";
import MuFour from "../images/others/artistFour.png";
import MuFive from "../images/others/artistFive.png";
import MuSix from "../images/others/artistSix.png";
import MuSeven from "../images/others/artistSeven.png";
import MuEight from "../images/others/artistEight.png";
import MuNine from "../images/others/artistNine.png";
import MuTen from "../images/others/artistTen.png";
import MuEleven from "../images/others/artistEleven.png";
import MuTwelve from "../images/others/artistTwelve.png";
import MuThirteen from "../images/others/artistThirteen.png";
import MuFourteen from "../images/others/artistFourteen.png";

//Music Player
import musicOne from "../images/others/musicOne.png";
import musicTwo from "../images/others/musicTwo.png";
import musicThree from "../images/others/musicThree.png";

interface INavMenu {
  id: number;
  image?: string;
  path: string;
  title: string;
}

interface IMusics {
  id: number;
  bg?: string;
  title: string;
  image?: string;
  artist?: string;
}

interface IPlayers {
  id: number;
  title: string;
  image: string;
  artist: string;
  duration: string;
}

export const menu: INavMenu[] = [
  {
    id: 1,
    image: HomeIcon,
    path: "/",
    title: "Home",
  },
  {
    id: 2,
    image: PricingIcon,
    path: "/pricing",
    title: "Pricing",
  },
  {
    id: 3,
    image: HelpCenterIcon,
    path: "/help-center",
    title: "Help Center",
  },
];

export const quickAccess: INavMenu[] = [
  {
    id: 1,
    image: TrendingMusicIcon,
    path: "/trending-music",
    title: "Trending Music",
  },
  {
    id: 2,
    image: FeaturedIcon,
    path: "/featured",
    title: "Featured",
  },
  {
    id: 3,
    image: PopularSongsIcon,
    path: "/popular-songs",
    title: "Popular Songs",
  },
  {
    id: 4,
    image: TopTrackIcon,
    path: "/top-track",
    title: "Top Track",
  },
];

export const exploreMusic: IMusics[] = [
  {
    id: 1,
    bg: TrendingMusicBg,
    title: "Trending Music",
  },
  {
    id: 2,
    bg: FeaturedMusicBg,
    title: "Featured Music",
  },
  {
    id: 3,
    bg: PopularMusicBg,
    title: "Popular",
  },
  {
    id: 4,
    bg: BestMusicBg,
    title: "Best New",
  },
  {
    id: 5,
    bg: TrendingMusicBg,
    title: "Trending Music",
  },
  {
    id: 6,
    bg: FeaturedMusicBg,
    title: "Featured Music",
  },
  {
    id: 7,
    bg: PopularMusicBg,
    title: "Popular",
  },
  {
    id: 8,
    bg: BestMusicBg,
    title: "Best New",
  },
];

export const Musics: IMusics[] = [
  {
    id: 1,
    image: MuOne,
    title: "Don’t Get Too Close",
    artist: "Skrillex, PinkPa",
  },
  {
    id: 2,
    image: MuTwo,
    title: "The Long Ride Home",
    artist: "Sky Toes",
  },
  {
    id: 3,
    image: MuThree,
    title: "Can't Stop Chasing You",
    artist: "Ben Johnson",
  },
  {
    id: 4,
    image: MuFour,
    title: "Lift Me Up",
    artist: "Mark July",
  },
  {
    id: 5,
    image: MuFive,
    title: "Nowhere To Be",
    artist: "Cory Alstad",
  },
  {
    id: 6,
    image: MuSix,
    title: "Beds Of Virtue",
    artist: "Dan Barracuda",
  },
  {
    id: 7,
    image: MuSeven,
    title: "Swings & Roundabouts",
    artist: "Skrillex, PinkPa",
  },
  {
    id: 8,
    image: MuEight,
    title: "With The Winds",
    artist: "Volo",
  },
  {
    id: 9,
    image: MuNine,
    title: "Stop War",
    artist: "Monument Music",
  },
  {
    id: 10,
    image: MuTen,
    title: "Adventure Is Calling",
    artist: "Vens Adams",
  },
  {
    id: 11,
    image: MuEleven,
    title: "No Time To Die",
    artist: "Hartzmann",
  },
  {
    id: 12,
    image: MuTwelve,
    title: "The Magical",
    artist: "Tatami",
  },
  {
    id: 13,
    image: MuThirteen,
    title: "With The Winds",
    artist: "Hey Pluto!",
  },
  {
    id: 14,
    image: MuFourteen,
    title: "With The Winds",
    artist: "Volo",
  },
];

export const Moods: IMusics[] = [
  {
    id: 1,
    title: "Emotional",
  },
  {
    id: 2,
    title: "Energetic",
  },
  {
    id: 3,
    title: "Fast",
  },
  {
    id: 4,
    title: "Funny",
  },
  {
    id: 5,
    title: "Inspirational",
  },
  {
    id: 6,
    title: "Intense",
  },
  {
    id: 7,
    title: "Love",
  },
  {
    id: 8,
    title: "Motivational",
  },
  {
    id: 9,
    title: "Patriotic",
  },
  {
    id: 10,
    title: "Relaxing",
  },
  {
    id: 11,
    title: "Romantic",
  },
  {
    id: 12,
    title: "Retro",
  },
  {
    id: 13,
    title: "Country",
  },
  {
    id: 14,
    title: "Sneaky",
  },
  {
    id: 15,
    title: "Soft",
  },
  {
    id: 16,
    title: "Stylist",
  },
  {
    id: 17,
    title: "Suspense",
  },
];

export const Instruments: IMusics[] = [
  {
    id: 1,
    title: "Acoustic",
  },
  {
    id: 2,
    title: "Bass",
  },
  {
    id: 3,
    title: "Drum",
  },
  {
    id: 4,
    title: "Flute",
  },
  {
    id: 5,
    title: "Guitar",
  },
  {
    id: 6,
    title: "Piano",
  },
  {
    id: 7,
    title: "Retro synth",
  },
  {
    id: 8,
    title: "Synth",
  },
  {
    id: 9,
    title: "Ukulele",
  },
  {
    id: 10,
    title: "Violin",
  },
  {
    id: 11,
    title: "Chirstmas",
  },
  {
    id: 12,
    title: "Halloween",
  },
  {
    id: 13,
    title: "Weeding",
  },
  {
    id: 14,
    title: "Weeding",
  },
  {
    id: 15,
    title: "8 bit",
  },
  {
    id: 16,
    title: "Ambient",
  },
  {
    id: 17,
    title: "Beats",
  },
  {
    id: 18,
    title: "Chilihop",
  },
];

export const Genres: IMusics[] = [
  {
    id: 1,
    title: "Classical",
  },
  {
    id: 2,
    title: "Cinematic",
  },
  {
    id: 3,
    title: "Country",
  },
  {
    id: 4,
    title: "Dance",
  },
  {
    id: 5,
    title: "Dubstep",
  },
  {
    id: 6,
    title: "EDM",
  },
  {
    id: 7,
    title: "Electronic",
  },
  {
    id: 8,
    title: "Elevator",
  },
  {
    id: 9,
    title: "Epic",
  },
  {
    id: 10,
    title: "Folk",
  },
];

export const Occations: IMusics[] = [
  {
    id: 1,
    title: "Hype",
  },
  {
    id: 2,
    title: "Indie",
  },
  {
    id: 3,
    title: "Jazz",
  },
  {
    id: 4,
    title: "Lofi",
  },
  {
    id: 5,
    title: "Metal",
  },
  {
    id: 6,
    title: "Pop",
  },
  {
    id: 7,
    title: "Punk",
  },
  {
    id: 8,
    title: "Rap",
  },
  {
    id: 9,
    title: "Reggae",
  },
  {
    id: 10,
    title: "Rock",
  },
  {
    id: 11,
    title: "Synthwave",
  },
  {
    id: 12,
    title: "Techno",
  },
  {
    id: 13,
    title: "Trap",
  },
  {
    id: 14,
    title: "Action",
  },
  {
    id: 15,
    title: "Battle",
  },
  {
    id: 16,
    title: "Business",
  },
];

export const Themes: IMusics[] = [
  {
    id: 1,
    title: "Cristian",
  },
  {
    id: 2,
    title: "Church",
  },
  {
    id: 3,
    title: "Commercial",
  },
  {
    id: 4,
    title: "Cooking",
  },
  {
    id: 5,
    title: "Documentary",
  },
  {
    id: 6,
    title: "Drone",
  },
  {
    id: 7,
    title: "Fantasy",
  },
  {
    id: 8,
    title: "Fitness",
  },
];

export const Eras: IMusics[] = [
  {
    id: 1,
    title: "Medieval",
  },
  {
    id: 2,
    title: "1920s",
  },
  {
    id: 3,
    title: "50s",
  },
  {
    id: 4,
    title: "60s",
  },
  {
    id: 5,
    title: "70s",
  },
  {
    id: 6,
    title: "80s",
  },
  {
    id: 7,
    title: "90s",
  },
  {
    id: 8,
    title: "Global",
  },
  {
    id: 9,
    title: "African",
  },
];

export const AllCategories = [
  { title: "Moods", type: Moods },
  { title: "Insturemnts", type: Instruments },
  { title: "Genres", type: Genres },
  { title: "Occations", type: Themes },
  { title: "Eras", type: Eras },
];

export const allCategorie = [
  {
    id: "moodMenu",
    title: "Moods",
    items: [
      {
        id: 1,
        title: "Emotional",
      },
      {
        id: 2,
        title: "Energetic",
      },
      {
        id: 3,
        title: "Fast",
      },
      {
        id: 4,
        title: "Funny",
      },
      {
        id: 5,
        title: "Inspirational",
      },
      {
        id: 6,
        title: "Intense",
      },
      {
        id: 7,
        title: "Love",
      },
      {
        id: 8,
        title: "Motivational",
      },
      {
        id: 9,
        title: "Patriotic",
      },
      {
        id: 10,
        title: "Relaxing",
      },
      {
        id: 11,
        title: "Romantic",
      },
      {
        id: 12,
        title: "Retro",
      },
      {
        id: 13,
        title: "Country",
      },
      {
        id: 14,
        title: "Sneaky",
      },
      {
        id: 15,
        title: "Soft",
      },
      {
        id: 16,
        title: "Stylist",
      },
      {
        id: 17,
        title: "Suspense",
      },
    ],
  },
  {
    id: "instumentMenu",
    title: "Instuments",
    items: [
      {
        id: 1,
        title: "Acoustic",
      },
      {
        id: 2,
        title: "Bass",
      },
      {
        id: 3,
        title: "Drum",
      },
      {
        id: 4,
        title: "Flute",
      },
      {
        id: 5,
        title: "Guitar",
      },
      {
        id: 6,
        title: "Piano",
      },
      {
        id: 7,
        title: "Retro synth",
      },
      {
        id: 8,
        title: "Synth",
      },
      {
        id: 9,
        title: "Ukulele",
      },
      {
        id: 10,
        title: "Violin",
      },
      {
        id: 11,
        title: "Chirstmas",
      },
      {
        id: 12,
        title: "Halloween",
      },
      {
        id: 13,
        title: "Weeding",
      },
      {
        id: 14,
        title: "Weeding",
      },
      {
        id: 15,
        title: "8 bit",
      },
      {
        id: 16,
        title: "Ambient",
      },
      {
        id: 17,
        title: "Beats",
      },
      {
        id: 18,
        title: "Chilihop",
      },
    ],
  },
  {
    id: "genreMenu",
    title: "Genres",
    items: [
      {
        id: 1,
        title: "Classical",
      },
      {
        id: 2,
        title: "Cinematic",
      },
      {
        id: 3,
        title: "Country",
      },
      {
        id: 4,
        title: "Dance",
      },
      {
        id: 5,
        title: "Dubstep",
      },
      {
        id: 6,
        title: "EDM",
      },
      {
        id: 7,
        title: "Electronic",
      },
      {
        id: 8,
        title: "Elevator",
      },
      {
        id: 9,
        title: "Epic",
      },
      {
        id: 10,
        title: "Folk",
      },
    ],
  },
  {
    id: "occationsMenu",
    title: "Occations",
    items: [
      {
        id: 1,
        title: "Hype",
      },
      {
        id: 2,
        title: "Indie",
      },
      {
        id: 3,
        title: "Jazz",
      },
      {
        id: 4,
        title: "Lofi",
      },
      {
        id: 5,
        title: "Metal",
      },
      {
        id: 6,
        title: "Pop",
      },
      {
        id: 7,
        title: "Punk",
      },
      {
        id: 8,
        title: "Rap",
      },
      {
        id: 9,
        title: "Reggae",
      },
      {
        id: 10,
        title: "Rock",
      },
      {
        id: 11,
        title: "Synthwave",
      },
      {
        id: 12,
        title: "Techno",
      },
      {
        id: 13,
        title: "Trap",
      },
      {
        id: 14,
        title: "Action",
      },
      {
        id: 15,
        title: "Battle",
      },
      {
        id: 16,
        title: "Business",
      },
    ],
  },
  {
    id: "themeMenu",
    title: "Themes",
    items: [
      {
        id: 1,
        title: "Cristian",
      },
      {
        id: 2,
        title: "Church",
      },
      {
        id: 3,
        title: "Commercial",
      },
      {
        id: 4,
        title: "Cooking",
      },
      {
        id: 5,
        title: "Documentary",
      },
      {
        id: 6,
        title: "Drone",
      },
      {
        id: 7,
        title: "Fantasy",
      },
      {
        id: 8,
        title: "Fitness",
      },
    ],
  },
  {
    id: "erasMenu",
    title: "Eras",
    items: [
      {
        id: 1,
        title: "Medieval",
      },
      {
        id: 2,
        title: "1920s",
      },
      {
        id: 3,
        title: "50s",
      },
      {
        id: 4,
        title: "60s",
      },
      {
        id: 5,
        title: "70s",
      },
      {
        id: 6,
        title: "80s",
      },
      {
        id: 7,
        title: "90s",
      },
      {
        id: 8,
        title: "Global",
      },
      {
        id: 9,
        title: "African",
      },
    ],
  },
];

export const footerMenu: INavMenu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Discover",
    path: "/discover",
  },
  {
    id: 3,
    title: "My Music",
    path: "/my-music",
  },
  {
    id: 4,
    title: "Favorite",
    path: "/favorite",
  },
];

export const besound: INavMenu[] = [
  {
    id: 1,
    title: "Royality Free Music",
    path: "/royality",
  },
  {
    id: 2,
    title: "Pricing/Licence",
    path: "/pricing",
  },
  {
    id: 3,
    title: "Free Music for Videos",
    path: "/free-music",
  },
];

export const info: INavMenu[] = [
  {
    id: 1,
    title: "About",
    path: "/about",
  },
  {
    id: 2,
    title: "Become an Artist",
    path: "/artist",
  },
  {
    id: 3,
    title: "Terms of use",
    path: "/terms",
  },
  {
    id: 4,
    title: "Privacy policy",
    path: "/privacy-policy",
  },
  {
    id: 5,
    title: "Legal Notice",
    path: "/legal-notice",
  },
];

export const comunities: INavMenu[] = [
  {
    id: 1,
    title: "For Arlist",
    path: "/for-artist",
  },
  {
    id: 2,
    title: "Developer",
    path: "/developer",
  },
  {
    id: 3,
    title: "Advertising",
    path: "/advertising",
  },
  {
    id: 4,
    title: "Investor",
    path: "/investors",
  },
  {
    id: 5,
    title: "Vendors",
    path: "/vendors",
  },
];

export const support: INavMenu[] = [
  {
    id: 1,
    title: "FAQ",
    path: "/faq",
  },
  {
    id: 2,
    title: "Contact",
    path: "/contact",
  },
  {
    id: 3,
    title: "Cookies Settings",
    path: "/cookies-settings",
  },
];

export const audioPlayers: IPlayers[] = [
  {
    id: 1,
    title: "Boundless Space",
    artist: "Denis Pavlov",
    image: musicOne,
    duration: "2: 30",
  },
  {
    id: 2,
    title: "Fearless",
    artist: "Jhon Walker",
    image: MuFive,
    duration: "2: 13",
  },
  {
    id: 3,
    title: "Flying With You",
    artist: "Denis Pavlov",
    image: MuNine,
    duration: "2: 30",
  },
];
