export interface Project {
  id: string;
  title: string;
  category: 'GENERATIVE AI' | 'MOTION DESIGN' | 'COMMERCIAL & ADS' | 'CONCERTS & EVENTS' | 'TRAVEL & CINEMATIC';
  description: string;
  thumbnail: string;
  videoUrl: string;
  embedType: 'youtube' | 'instagram' | 'local';
  aspectRatio: '16:9' | '9:16' | '1:1';
  duration?: string;
  client?: string;
  year?: string;
  tags: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  highlight?: string;
  bullets: string[];
}

export interface CapabilityItem {
  step: string;
  title: string;
  subtitle: string;
  summary: string;
  subservices: string[];
  deliverables: string[];
  specs: {
    turnaround: string;
    revisions: string;
    output: string;
  };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  points?: string[];
}

export const PERSONAL_INFO = {
  name: 'JEET NAG',
  brand: 'JEET.NAG',
  role: 'AI VIDEO CREATOR / VIDEO EDITOR / CINEMATOGRAPHER',
  descriptor: 'AI-powered visual storytelling, generative video production, motion design and cinematic content for brands and creators.',
  location: 'Bangalore, India',
  email: 'jeetnag2003@gmail.com',
  availability: 'AVAILABLE FOR SELECT COMMISSIONS',
  experienceYears: '3+',
  deliveredCount: '200+',
  engagementRate: '+40%',
  socials: {
    linkedin: 'https://www.linkedin.com/in/jeet-nag-608b171bb/',
    instagram: 'https://www.instagram.com/',
    youtube: 'https://www.youtube.com/',
    email: 'mailto:jeetnag2003@gmail.com'
  }
};

export const PROJECTS: Project[] = [
  // GENERATIVE AI
  {
    id: 'genai-01',
    title: 'NEURAL HORIZONS — SCI-FI ODYSSEY',
    category: 'GENERATIVE AI',
    description: 'Cinematic worldbuilding and camera motion generated with Veo 3 and Runway Gen-3 pipelines. Sound design and grading in Premiere Pro.',
    thumbnail: '/thumbnails/jPzWNqfiZq4.jpg',
    videoUrl: 'https://www.youtube.com/embed/jPzWNqfiZq4?autoplay=1&rel=0&modestbranding=1',
    embedType: 'youtube',
    aspectRatio: '16:9',
    duration: '01:14',
    client: 'Autonomous IP',
    year: '2026',
    tags: ['Veo 3', 'Runway ML', 'Prompt Engineering', 'Sound Design']
  },
  {
    id: 'genai-02',
    title: 'SYNAPSE REALISM CHARACTER STUDY',
    category: 'GENERATIVE AI',
    description: 'High-fidelity character generation with consistent lighting, skin texture, and emotive cinematic lens emulation.',
    thumbnail: '/thumbnails/0e4ZjNlzG-c.jpg',
    videoUrl: 'https://www.youtube.com/embed/0e4ZjNlzG-c?autoplay=1&rel=0&modestbranding=1',
    embedType: 'youtube',
    aspectRatio: '16:9',
    duration: '00:48',
    client: 'Visual Research',
    year: '2026',
    tags: ['Kling 3.0', 'ComfyUI', 'Face Consistency', 'Color Grade']
  },
  {
    id: 'genai-03',
    title: 'METROPOLIS 2099 ARCHITECTURE',
    category: 'GENERATIVE AI',
    description: 'Surreal architectural forms and hyper-fluid drone passes synthesized from text prompts into photorealistic 4K output.',
    thumbnail: '/thumbnails/5hhOAjfn7hM.jpg',
    videoUrl: 'https://www.youtube.com/embed/5hhOAjfn7hM?autoplay=1&rel=0&modestbranding=1',
    embedType: 'youtube',
    aspectRatio: '16:9',
    duration: '01:05',
    client: 'Experimental',
    year: '2026',
    tags: ['Seedance', 'Nanobanana', 'Visual Dev', '4K Upscaling']
  },
  {
    id: 'genai-04',
    title: 'CYBERNETIC BRAND REVEAL',
    category: 'GENERATIVE AI',
    description: 'High-concept commercial teaser exploring generative biomechanics, macro optics, and kinetic editorial cuts.',
    thumbnail: '/thumbnails/w4Aq3-7M7go.jpg',
    videoUrl: 'https://www.youtube.com/embed/w4Aq3-7M7go?autoplay=1&rel=0&modestbranding=1',
    embedType: 'youtube',
    aspectRatio: '16:9',
    duration: '00:52',
    client: 'Brand Spec',
    year: '2026',
    tags: ['Runway Gen-3', 'ElevenLabs', 'After Effects', 'Pacing']
  },
  {
    id: 'genai-client-01',
    title: 'AI SHORT REEL — CAMPAIGN CUT 01',
    category: 'GENERATIVE AI',
    description: 'Viral vertical AI commercial reel crafted for client social campaign engagement, utilizing custom LoRA training.',
    thumbnail: '/reels/showreel_01.jpg',
    videoUrl: 'https://www.instagram.com/reel/DawouH5Et5L/embed/',
    embedType: 'instagram',
    aspectRatio: '9:16',
    duration: '00:30',
    client: 'GRX10 Client',
    year: '2026',
    tags: ['Instagram Reel', 'Vertical 9:16', 'Social-First', 'Veo 3']
  },
  {
    id: 'genai-client-02',
    title: 'AI SHORT REEL — CAMPAIGN CUT 02',
    category: 'GENERATIVE AI',
    description: 'High-energy generative promo reel blending rapid shot transitions and synthetic audio design.',
    thumbnail: '/reels/showreel_02.jpg',
    videoUrl: 'https://www.instagram.com/reel/DaKmPmxJGfB/embed/',
    embedType: 'instagram',
    aspectRatio: '9:16',
    duration: '00:28',
    client: 'Client Production',
    year: '2026',
    tags: ['Sync.so', 'ComfyUI', 'Color Grading']
  },
  {
    id: 'genai-client-03',
    title: 'AI SHORT REEL — BRAND SPEC 03',
    category: 'GENERATIVE AI',
    description: 'Cinematic portrait generation demonstrating photorealistic cloth dynamics and camera parallax.',
    thumbnail: '/reels/showreel_03.jpg',
    videoUrl: 'https://www.instagram.com/reel/DZ4z7j4DHb-/embed/',
    embedType: 'instagram',
    aspectRatio: '9:16',
    duration: '00:35',
    client: 'Brand Campaign',
    year: '2025',
    tags: ['Kling AI', 'Premiere Pro', '9:16']
  },

  // MOTION DESIGN
  {
    id: 'motion-01',
    title: 'KINETIC RETENTION & GRAPHICS EDIT',
    category: 'MOTION DESIGN',
    description: 'Punchy typography, animated infographics, and dynamic sound cues engineered to maximize audience retention.',
    thumbnail: '/thumbnails/f6IcUPwyMvE.jpg',
    videoUrl: 'https://www.youtube.com/embed/f6IcUPwyMvE?autoplay=1&rel=0&modestbranding=1',
    embedType: 'youtube',
    aspectRatio: '16:9',
    duration: '01:20',
    client: 'Creator Series',
    year: '2025',
    tags: ['After Effects', 'Kinetic Typography', 'Motion Design', 'Retention']
  },
  {
    id: 'motion-02',
    title: 'TALKING HEAD MASTERCLASS EDIT',
    category: 'MOTION DESIGN',
    description: 'Seamless B-roll transitions, visual accents, dialogue cleanup, and pacing tailored for modern digital audiences.',
    thumbnail: '/thumbnails/8KJJK44Qknw.jpg',
    videoUrl: 'https://www.youtube.com/embed/8KJJK44Qknw?autoplay=1&rel=0&modestbranding=1',
    embedType: 'youtube',
    aspectRatio: '16:9',
    duration: '02:15',
    client: 'Production Studio',
    year: '2025',
    tags: ['Premiere Pro', 'Dialogue Cleanup', 'B-Roll Integration']
  },

  // COMMERCIAL & ADS
  {
    id: 'comm-01',
    title: 'ECOSOCH SOLAR — CLEAN ENERGY FILM',
    category: 'COMMERCIAL & ADS',
    description: 'Documentary-style commercial film highlighting clean energy innovation, industrial cinematography, and concise brand storytelling.',
    thumbnail: '/thumbnails/GIa39NMrEvs.jpg',
    videoUrl: 'https://www.youtube.com/embed/GIa39NMrEvs?autoplay=1&rel=0&modestbranding=1',
    embedType: 'youtube',
    aspectRatio: '16:9',
    duration: '02:40',
    client: 'Ecosoch Solar',
    year: '2026',
    tags: ['Commercial', 'Cinematography', 'Sound Design', 'Color Grading']
  },

  // CONCERTS & EVENTS
  {
    id: 'event-01',
    title: 'HYPER-ENERGY CONCERT STAGE RECAP',
    category: 'CONCERTS & EVENTS',
    description: 'Electrifying live stage recap with speed-ramping, strobe sync, and explosive crowd energy cinematography.',
    thumbnail: '/thumbnails/FDNVj9rJELE.jpg',
    videoUrl: 'https://www.youtube.com/embed/FDNVj9rJELE?autoplay=1&rel=0&modestbranding=1',
    embedType: 'youtube',
    aspectRatio: '16:9',
    duration: '01:10',
    client: 'Live Arena',
    year: '2024',
    tags: ['Live Concert', 'Speed Ramping', 'Bass Sync', 'Event Film']
  },
  {
    id: 'event-02',
    title: 'ARENA FESTIVAL AFTERMOVIE',
    category: 'CONCERTS & EVENTS',
    description: 'Immersive multi-cam event film edited to capture the raw heartbeat, artist performance, and atmospheric scale.',
    thumbnail: '/thumbnails/bF2sEFKmcwM.jpg',
    videoUrl: 'https://www.youtube.com/embed/bF2sEFKmcwM?autoplay=1&rel=0&modestbranding=1',
    embedType: 'youtube',
    aspectRatio: '16:9',
    duration: '01:45',
    client: 'Festival Productions',
    year: '2024',
    tags: ['Aftermovie', 'Cinematography', 'Multi-Cam Editing']
  },
  {
    id: 'event-03',
    title: 'KINETIC RHYTHM BEAT DROP',
    category: 'CONCERTS & EVENTS',
    description: 'Precision cut-to-the-beat performance reel highlighting fast-paced lighting changes and crowd response.',
    thumbnail: '/thumbnails/5Qme0kpXGog.jpg',
    videoUrl: 'https://www.youtube.com/embed/5Qme0kpXGog?autoplay=1&rel=0&modestbranding=1',
    embedType: 'youtube',
    aspectRatio: '16:9',
    duration: '00:55',
    client: 'Nightlife Collective',
    year: '2023',
    tags: ['Rhythm Edit', 'Sound FX', 'Event Recap']
  },
  {
    id: 'event-04',
    title: 'MAINSTAGE HEADLINER HIGHLIGHT',
    category: 'CONCERTS & EVENTS',
    description: 'Cinematic low-light festival footage treated with custom LUT grading and dynamic motion stabilization.',
    thumbnail: '/thumbnails/Kz-H5Y1s__A.jpg',
    videoUrl: 'https://www.youtube.com/embed/Kz-H5Y1s__A?autoplay=1&rel=0&modestbranding=1',
    embedType: 'youtube',
    aspectRatio: '16:9',
    duration: '01:18',
    client: 'Music Live',
    year: '2023',
    tags: ['Low Light', 'LUT Grading', 'Stabilization']
  },
  {
    id: 'event-05',
    title: 'EXPERIENTIAL NIGHTLIFE & CLUB REEL',
    category: 'CONCERTS & EVENTS',
    description: 'Punchy short-form recap combining handheld gimbal moves and punch-in transitions.',
    thumbnail: '/thumbnails/bXeqeTUku_w.jpg',
    videoUrl: 'https://www.youtube.com/embed/bXeqeTUku_w?autoplay=1&rel=0&modestbranding=1',
    embedType: 'youtube',
    aspectRatio: '16:9',
    duration: '01:02',
    client: 'Club Venue',
    year: '2023',
    tags: ['Gimbal Work', 'Transitions', 'Music Video Style']
  },

  // TRAVEL & CINEMATIC
  {
    id: 'travel-01',
    title: 'GOLDEN HOUR CINEMATIC WANDERLUST',
    category: 'TRAVEL & CINEMATIC',
    description: 'Atmospheric travel film exploring golden-hour light, organic camera movement, and evocative soundscapes.',
    thumbnail: '/thumbnails/STmefO96_o4.jpg',
    videoUrl: 'https://www.youtube.com/embed/STmefO96_o4?autoplay=1&rel=0&modestbranding=1',
    embedType: 'youtube',
    aspectRatio: '16:9',
    duration: '02:08',
    client: 'Personal Travel Film',
    year: '2024',
    tags: ['Cinematography', 'Golden Hour', 'Color Grading', 'Soundscape']
  }
];

export const CLIENT_STRIP = [
  { name: 'GRX10 SOLUTIONS', tag: 'BANGALORE', role: 'AI Production' },
  { name: 'SK PHOTOGRAPHY', tag: 'STUDIO', role: 'Cinematography' },
  { name: 'JOSH TALKS', tag: 'MEDIA', role: 'Docu Series' },
  { name: 'ECOSOCH SOLAR', tag: 'COMMERCIAL', role: 'Brand Films' },
  { name: 'KEYLINE DIGITECH', tag: 'KOLKATA', role: 'Short-Form Edits' },
  { name: 'CREATIVE MEMORIES', tag: 'STUDIO', role: 'Event Production' }
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    step: '[001]',
    title: 'CONCEPT & DIRECTION',
    subtitle: 'Strategic Creative Ideation',
    summary: 'Brief interpretation, visual moodboards, narrative treatment, and AI prompt architecture built to elevate brand vision.',
    subservices: [
      'Visual Script & Storyboarding',
      'AI Prompt Architecture',
      'Look & Feel Exploration',
      'Audience Engagement Strategy'
    ],
    deliverables: [
      'Treatment & Visual Deck',
      'Prompt Recipe Repository',
      'Pre-vis Shot Sequences'
    ],
    specs: {
      turnaround: '2–4 Business Days',
      revisions: '2 Rounds Included',
      output: 'High-Res PDF Treatment + Script'
    }
  },
  {
    step: '[002]',
    title: 'GENERATION & AI PIPELINES',
    subtitle: 'Node-Based GenAI Production',
    summary: 'Multi-model generation across Veo 3, Runway Gen-3, Kling 3.0, and ComfyUI with character consistency, LoRA tuning, and 4K upscaling.',
    subservices: [
      'Veo 3 & Runway Video Generation',
      'ComfyUI Scalable Workflows',
      'Character & Face Consistency',
      'ElevenLabs Voice & Lip Sync'
    ],
    deliverables: [
      'Raw GenAI Takes & Master Plates',
      'Upscaled 4K Asset Renders',
      'Audio & Voiceover Stems'
    ],
    specs: {
      turnaround: '3–6 Business Days',
      revisions: 'Iterative Generation Passes',
      output: 'ProRes 422 / 4K Clean Plates'
    }
  },
  {
    step: '[003]',
    title: 'EDITING & MOTION DESIGN',
    subtitle: 'Rhythmic Craft & Kinetic Flow',
    summary: 'Precision editorial pacing, kinetic typography, multi-layered sound design, and custom LUT color grading in Premiere Pro and After Effects.',
    subservices: [
      'Kinetic Typography & Motion Graphics',
      'Dialogue & Sound Design Polish',
      'Custom Color Grading & LUTs',
      'High-Retention Short Form Cuts'
    ],
    deliverables: [
      'Master Timeline & Cutdowns',
      'Motion Design Lower Thirds & Title Cards',
      'Mastered 5.1 & Stereo Audio'
    ],
    specs: {
      turnaround: '3–7 Business Days',
      revisions: '2 Structured Revision Rounds',
      output: '4K Master + Social Aspect Ratios'
    }
  },
  {
    step: '[004]',
    title: 'DELIVERY & MULTI-FORMAT',
    subtitle: 'Platform-Ready Export Ecosystem',
    summary: 'Deliverables tailored for YouTube 16:9, Instagram / TikTok 9:16 vertical reels, and square formats with embedded captions.',
    subservices: [
      'Multi-Format Framing (16:9, 9:16, 1:1)',
      'Subtitles & Burning (.SRT / Motion)',
      'Platform Optimization & Bitrate Tuning',
      'Organized Master Project Archive'
    ],
    deliverables: [
      'Web-Optimized MP4 Exports',
      'Clean Uncompressed Masters',
      'Thumbnail Pack & Cover Frames'
    ],
    specs: {
      turnaround: '1–2 Business Days',
      revisions: 'Final Approval Sign-Off',
      output: 'Cloud Drive Package & Premiere Project'
    }
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'GRX10 Solutions',
    role: 'Associate Video Editor',
    period: 'April 2026 — Present',
    location: 'Bangalore · On-site',
    isCurrent: true,
    highlight: 'CURRENT ROLE',
    bullets: [
      'Leading end-to-end AI video pipelines using Veo 3, Runway Gen-3, Kling 3.0, and Seedance for brand campaigns.',
      'Constructing node-based generative workflows in ComfyUI for scalable multi-shot scene generation.',
      'Integrating ElevenLabs voice synthesis, LipSync.so, and high-fidelity image upscalers.',
      'Collaborating directly with creative leads from ideation through editorial post-production to final delivery.'
    ]
  },
  {
    company: 'SK Photography Studio',
    role: 'Video Editor & Cinematographer',
    period: 'December 2024 — April 2026',
    location: 'Bangalore',
    highlight: '+40% ENGAGEMENT',
    bullets: [
      'Ideated, shot, and edited 200+ commercial and social videos driving average 40% engagement increase.',
      'Operated cinema cameras and gimbals for multi-cam brand shoots and high-energy live event productions.',
      'Color graded footage and designed kinetic motion graphics in After Effects for client ad campaigns.'
    ]
  },
  {
    company: 'Keyline Digitech',
    role: 'Digital Marketing Intern',
    period: 'September 2024',
    location: 'Kolkata',
    highlight: '+50% ENGAGEMENT',
    bullets: [
      'Created 100+ social-first short-form video assets optimizing hook retention.',
      'Collaborated with influencer talent to conceptualize trending viral formats.'
    ]
  },
  {
    company: 'Josh Talks',
    role: 'Cinematographer',
    period: 'May — June 2022',
    location: 'Kolkata',
    highlight: '+25% RETENTION',
    bullets: [
      'Shot and directed 50+ studio interview YouTube videos with two-point lighting and multi-mic audio.',
      'Boosted average viewer retention by 25% through dynamic punch-ins and pacing adjustments.'
    ]
  },
  {
    company: 'Creative Memories',
    role: 'Video Editor & Cinematographer',
    period: 'June 2019 — June 2021',
    location: 'Midnapore',
    highlight: '+30% RETENTION',
    bullets: [
      'Filmed and edited 100+ event recap films with seamless emotional pacing and color correction.',
      'Trained junior assistants in Premiere Pro editing workflows and audio sync techniques.'
    ]
  }
];

export const SKILLS_CATEGORIES = [
  {
    title: 'AI VIDEO & GENERATIVE WORKFLOWS',
    skills: [
      'Veo 3',
      'Runway Gen-3 Alpha',
      'Kling AI 3.0',
      'Seedance 2.0',
      'ComfyUI Nodes',
      'Nanobanana',
      'ElevenLabs Audio',
      'Sync.so Lip-Sync',
      'Prompt Engineering',
      'Image Upscaling & Realism'
    ]
  },
  {
    title: 'POST-PRODUCTION & MOTION',
    skills: [
      'Adobe Premiere Pro',
      'Adobe After Effects',
      'DaVinci Resolve',
      'Color Grading & LUT Design',
      'Kinetic Typography',
      'Sound Design & Audio Mix',
      'B-Roll Compositing',
      'Multi-Cam Synchronization'
    ]
  },
  {
    title: 'PRODUCTION & CAMERA',
    skills: [
      'Cinematography & Framing',
      'Lighting & Keying Setups',
      'Gimbal Operation',
      'Directing & Interview Framing',
      'Short-Form Hook Retention',
      'Multi-Format Deliverables'
    ]
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-01',
    question: 'How does the generative AI video production process work?',
    answer: 'We begin with creative strategy and visual research. Once we agree on the visual style and script, I craft custom prompt architectures across Veo 3, Kling, or Runway. We produce test clips to lock consistency, then upscale, assemble the timeline in Premiere Pro, add motion design, synthesize custom audio/voiceover, and color grade the final cut.'
  },
  {
    id: 'faq-02',
    question: 'How long does a typical video project take, and how do revisions work?',
    answer: 'Short-form AI ads and focused motion edits typically take 3 to 7 business days. Full multi-scene brand films or complex generative pipelines usually take 1 to 2 weeks. Every project includes structured feedback rounds where notes are consolidated to ensure quick turnarounds without scope fatigue.'
  },
  {
    id: 'faq-03',
    question: 'Can you combine AI-generated footage with live-action camera footage?',
    answer: 'Absolutely. Many of our strongest projects blend real filmed talent or product photography with hyper-stylized AI environmental extensions, generative transitions, or surreal VFX that would otherwise require massive physical sets.'
  },
  {
    id: 'faq-04',
    question: 'What do you need from me before we kick off?',
    answer: 'A brief description of your goal, target audience, preferred platforms (e.g. YouTube 16:9, Instagram Reels 9:16), brand guidelines or logos, and any reference videos you love. If you don’t have a full brief yet, we can ideate the concept together during kickoff.'
  },
  {
    id: 'faq-05',
    question: 'Who owns the final video deliverables and usage rights?',
    answer: 'Upon project completion and final payment, full commercial usage rights for the final delivered video files are transferred to you. You are free to publish, advertise, and monetize across all digital platforms.'
  }
];
