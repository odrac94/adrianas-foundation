import type { Program } from '../types/index'
import { slugify } from '../utils/slugify'

import imgElevate from '../assets/programms/elevate-academy.jpg'
import imgSoccer from '../assets/adrianas-soccer-academy.jpg'
import imgCopa from '../assets/programms/annual-copa-adrianas-soccer-tournament.png'
import imgSchool from '../assets/programms/annual-back-to-school-drive.jpg'
import imgSanta from '../assets/programms/annual-santa-tour.jpg'
import imgFestival from '../assets/programms/festival-de-la-familia-2.jpg'
import imgFood from '../assets/programms/annual-food-drive.jpg'
import imgPartners from '../assets/programms/global-community-partnerships.jpg'

const programsData: Omit<Program, 'id'>[] = [
  {
    title: "AGLA Academy",
    tagline: "Mentorship and career development for young adults ages 18–25",
    image: imgElevate,
    description: "A mentorship and career development program for young adults ages 18–25. Through hands-on training led by business professionals and industry mentors, participants build real-world skills in leadership, communication, sales, and career readiness. We provide structured guidance, specialty tracks, and direct access to job opportunities, turning potential into profession.",
    goals: [
      "Deliver structured mentorship and career development focused on leadership, communication, and professional skill-building",
      "Create a supportive environment where young adults can grow, build confidence, and prepare for meaningful careers",
      "Maintain accessibility by providing opportunity-driven programming with strong mentorship and career pathways"
    ],
    keyComponents: [
      "Structured academy sessions led by business professionals and industry mentors",
      "Hands-on training in leadership, communication, sales, emotional intelligence, and career readiness",
      "Specialty tracks offering exposure to fields such as entrepreneurship, financial literacy, real estate, and content creation",
      "Direct connection to employer partners, networking opportunities, and potential job placement pathways"
    ],
    category: 'mentorship'
  },
  {
    title: "Adriana's Soccer Academy",
    tagline: "Free youth soccer academy providing training, mentorship, and development",
    image: imgSoccer,
    description: "A free youth soccer academy providing training, mentorship, and development while forming a competitive team under Adriana's Team. Weekly training sessions led by qualified coaches with emphasis on fundamentals, tactics, and sportsmanship.",
    goals: [
      "Deliver structured training focused on skill development, fitness, and teamwork",
      "Create a club environment where players can grow and compete",
      "Maintain accessibility by keeping participation free of charge"
    ],
    keyComponents: [
      "Weekly training sessions led by qualified coaches",
      "Emphasis on fundamentals, tactics, and sportsmanship",
      "Team selection for competitive play, including uniforms and branded identity",
      "Community engagement through family involvement and sponsorship support"
    ],
    category: 'sports'
  },
  {
    title: "Annual Copa Adriana's Soccer Tournament",
    tagline: "Community-driven youth soccer tournament bringing families together",
    image: imgCopa,
    description: "Copa Adriana's is a community-driven youth soccer tournament designed to bring families together through sports, culture, and celebration. Hosted annually, the event creates a fun, inclusive environment where young athletes can compete, connect, and create lasting memories.",
    goals: [
      "Promote youth development through sports and teamwork",
      "Create a joyful, family-friendly community experience",
      "Provide accessible recreational opportunities for local families",
      "Celebrate culture, music, and community connection"
    ],
    keyComponents: [
      "Organized youth soccer matches across multiple age divisions",
      "Prizes and raffles for participants and attendees",
      "Live music and on-site entertainment",
      "Community engagement with families, volunteers, and partners"
    ],
    category: 'sports'
  },
  {
    title: "Annual Back-to-School Drive",
    tagline: "Providing school-aged children with backpacks, supplies, and essential resources",
    image: imgSchool,
    description: "A community initiative providing school-aged children with backpacks, supplies, and essential resources to ensure they begin the school year prepared and confident. Distribution events across Los Angeles, Orange, San Bernardino, and Riverside counties.",
    goals: [
      "Ensure every child in our community starts school prepared and confident",
      "Promote educational equity by reducing barriers for families facing financial challenges",
      "Strengthen community involvement through donations and volunteer support"
    ],
    keyComponents: [
      "Collection of school supplies via drop-off locations and online contributions",
      "Distribution events across Los Angeles, Orange, San Bernardino, and Riverside counties",
      "Family-friendly events with activities and community activations",
      "Promotion through media, social platforms, print materials, and street team"
    ],
    category: 'community'
  },
  {
    title: "Annual Santa Tour",
    tagline: "A multi-day holiday experience bringing joy and tradition to families",
    image: imgSanta,
    description: "Adriana's Santa Tour is a multi-day holiday experience created to bring joy, connection, and tradition back to families. The event is free to the public and powered entirely by partnerships and community support, with a goal of distributing over 3,000 toys.",
    goals: [
      "Bring hope and joy to communities that deserve it",
      "Create a joyful, immersive holiday experience designed to unite families and support local businesses",
      "Direct impact on families in need"
    ],
    keyComponents: [
      "Strategic planning and sponsorship outreach",
      "Toy donations with a goal of exceeding 3,000 gifts distributed",
      "Community engagement through churches, schools, bikers, and volunteers",
      "Participation from influencers, celebrities, and local organizations"
    ],
    category: 'community'
  },
  {
    title: "Festival de La Familia",
    tagline: "Free community gathering celebrating Latino heritage through music and culture",
    image: imgFestival,
    description: "El Festival de La Familia is a free, community-centered gathering that brings families together in a joyful celebration of Latino heritage. The festival creates a space for connection and pride through music, culture, and shared experiences, featuring iconic performers and emerging local talent.",
    goals: [
      "Celebrate Latino culture and heritage through music, art, and shared community experiences",
      "Create a welcoming, free space where families and children of all ages can come together and feel connected",
      "Support local artists, vendors, and small businesses by providing visibility and economic opportunities"
    ],
    keyComponents: [
      "Live performances by iconic Latino artists and emerging local talent",
      "Cultural showcases and interactive family activities",
      "Curated food vendors featuring traditional and modern Latino cuisine",
      "Strategic promotion through media, social platforms, print, and street teams"
    ],
    category: 'community'
  },
  {
    title: "Annual Food Drive",
    tagline: "Holiday community gathering providing warm meals and dignity to families in need",
    image: imgFood,
    description: "A holiday community gathering designed to support families who may not have the means to enjoy a warm holiday meal. More than a food distribution, the experience is centered on celebration, comfort, and community — ensuring families feel valued and supported, not like charity recipients. Hosted at the Heritage Museum of Orange County.",
    goals: [
      "Provide families in need with a warm holiday meal in a safe, welcoming, and family-centered environment",
      "Create a meaningful holiday experience that reduces stress and brings joy during a season when families feel financial pressure",
      "Foster community connection and support by bringing families, partners, and volunteers together"
    ],
    keyComponents: [
      "Fresh, hot meals served in a comfortable setting",
      "Toy distribution and family-friendly entertainment",
      "Community engagement through churches, schools, bikers, and volunteers",
      "Hosted at the Heritage Museum of Orange County — anticipated attendance of 200+ community members"
    ],
    category: 'community'
  },
  {
    title: "Global & Community Partnerships",
    tagline: "Supporting a network of organizations that share our vision of service and empowerment",
    image: imgPartners,
    description: "Adriana's Growing Together proudly supports a network of organizations that share our vision of service, empowerment, and compassion, extending our reach locally and globally. Our partners include Drew Child Development Corporation, Urban Water, Dream Center, Rise Programs Africa, Rise Programs Mexico, Mujer Imagen Foundation, JSerra Catholic High School, and more.",
    goals: [
      "Extend the foundation's reach through strategic local and global partnerships",
      "Support organizations aligned with our vision of service, empowerment, and compassion",
      "Strengthen families and empower underserved Latino communities as a whole"
    ],
    keyComponents: [
      "Drew Child Development Corporation",
      "Rise Programs Africa & Rise Programs Mexico",
      "Mujer Imagen Foundation",
      "American Heart Association, Ismael Cala Foundation, and more"
    ],
    category: 'partnership'
  }
]

export const programs: Program[] = programsData.map(p => ({
  ...p,
  id: slugify(p.title)
}))

export function getPrograms(): Program[] {
  return programs
}
