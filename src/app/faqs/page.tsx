import React from "react";
import { Orbitron } from "next/font/google";
import { Calendar, MapPin } from "lucide-react";
import Link from "next/link";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["500", "900"] });

const FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: "What even is Trackshift?",
    a: (
      <>
        <p>
          Trackshift is a 24-hour innovation sprint where India’s sharpest
          student minds build wild ideas in AI, mobility, and sustainability.
        </p>
        <p>
          Think less “boring coding camp” and more “Formula 1 pit stop for
          innovators.”
        </p>
      </>
    ),
  },
  {
    q: "When & where is it happening?",
    a: (
      <>
        <p>
          <Calendar color="#D6001C" className="inline" /> 15-16 November, 2025
        </p>
        <p>
          <MapPin color="#D6001C" className="inline" /> Plaksha University,
          Mohali (hybrid prep + on-campus sprint)
        </p>
      </>
    ),
  },
  {
    q: "Who can participate?",
    a: <p>Open to all Indian UG students.</p>,
  },
  {
    q: "Is there any registration fee? Do I need to pay to participate?",
    a: <p>Nope. Zero. Nada. Free as free gets.</p>,
  },
  {
    q: "How big can my squad be?",
    a: (
      <p>2-3 members per team. No solos — we want teamwork, not lone wolves.</p>
    ),
  },
  {
    q: "Can I team up with folks from another college?",
    a: (
      <p>
        Yup. Inter-college dream teams are totally allowed (and encouraged).
      </p>
    ),
  },
  {
    q: "I’ve never done a hackathon before. Am I gonna survive?",
    a: (
      <p>
        Yes! First-timers are welcome. You’ll learn tons, meet epic people, and
        have mentors helping you out. Winning is sweet, but the experience is
        the real prize.
      </p>
    ),
  },
  {
    q: "How long is this madness?",
    a: <p>24 hours. Back-to-back hacking, building, and brainstorming.</p>,
  },
  {
    q: "What can we build?",
    a: (
      <div>
        <p>You’ll pick from 3 problem tracks:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Visual Difference Engine (spot tiny changes that matter)</li>
          <li>
            Smart File Transfer System (make files fly, even on bad networks)
          </li>
          <li>Mobility Simulator (simulate races, traffic, drones, chaos!)</li>
        </ul>
      </div>
    ),
  },
  {
    q: "Can we start coding before the event?",
    a: (
      <p>
        No sneaky head starts. You can think of ideas beforehand, but actual
        hacking begins right after kickoff.
      </p>
    ),
  },
  {
    q: "What do I need to bring?",
    a: (
      <p>
        Your laptop, chargers, caffeine tolerance, and team spirit. We’ll cover
        the rest. Internet, charging ports, and basic resources will be
        provided.
      </p>
    ),
  },
  {
    q: "Will I starve?",
    a: (
      <p>
        Not on our watch. All meals, snacks, and endless chai/coffee are on us.
      </p>
    ),
  },
  {
    q: "Do I need to book a hotel?",
    a: (
      <p>
        Nope. We’ve got gender-segregated rest zones + nap pods on campus. Bring
        a hoodie for those late-night power naps.
      </p>
    ),
  },
  {
    q: "WiFi? Charging ports?",
    a: <p>High-speed internet + plenty of charging spots = covered.</p>,
  },
  {
    q: "Travel expenses covered?",
    a: (
      <p>
        Sadly, no. You’ve gotta get to Mohali on your own. But once you’re here
        — food, stay, and the whole vibe is free.
      </p>
    ),
  },
  {
    q: "Who’s judging us?",
    a: (
      <div>
        <p>A powerhouse mix of:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Haas F1 leaders</li>
          <li>Mphasis experts</li>
          <li>Plaksha faculty</li>
          <li>Industry mentors from AI, IoT, and sustainability</li>
        </ul>
      </div>
    ),
  },
  {
    q: "How will projects be judged?",
    a: (
      <div>
        <p>We’ll score you on:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Understanding the problem (20%)</li>
          <li>Innovation & creativity (25%)</li>
          <li>Tech execution & Feasibility (25%)</li>
          <li>Scalability & real-world impact (20%)</li>
          <li>Presentation & teamwork (10%)</li>
        </ul>
      </div>
    ),
  },
  {
    q: "Will we get mentors?",
    a: (
      <p>
        Yes - mentors will roam around giving feedback, roasting weak ideas
        (nicely), and helping polish your builds.
      </p>
    ),
  },
  {
    q: "What’s in it for me (besides glory)?",
    a: (
      <div>
        <p>Prizes:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>🥇 1st Prize: ₹1,00,000</li>
          <li>🥈 2nd Prize: ₹50,000</li>
          <li>🥉 3rd Prize: ₹25,000</li>
        </ul>
        <p className="mt-2">Plus every winning team (All 3 teams) gets:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>A 1-month internship at Mphasis (Bangalore)</li>
          <li>
            A fully-sponsored trip to the MoneyGram Haas F1 facility in the UK
          </li>
        </ul>
        <p className="mt-2">
          What if I don’t win? You still get: Exclusive hackathon swag + goodies
          + bragging rights. Inc. mentorship, networking, certificates, and
          memories that slap harder than an all-nighter.
        </p>
      </div>
    ),
  },
  {
    q: "How do I apply?",
    a: (
      <p>
        Easy — through our{" "}
        <Link
          href="https://trackshift.devpost.com"
          className="text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          DevPost
        </Link>{" "}
        page.
      </p>
    ),
  },
  {
    q: "How are teams shortlisted?",
    a: (
      <p>
        We’ll review ideas + motivation, pick 60-75 teams (200 students), and
        bring you on campus.
      </p>
    ),
  },
  {
    q: "What’s the flow once I’m in?",
    a: (
      <div>
        <ol className="list-decimal pl-6">
          <li>Application → shortlisting</li>
          <li>Pre-hack prep (AMAs, webinars, resource kits)</li>
          <li>On-campus hack (mentorship + mid-hack screening)</li>
          <li>Final jury showcase (top 8-10 teams pitch for glory)</li>
        </ol>
      </div>
    ),
  },
  {
    q: "When will I know if I made it?",
    a: (
      <p>Check your DevPost dashboard + email inbox. We’ll keep you posted.</p>
    ),
  },
  {
    q: "Can I participate remotely?",
    a: <p>Prep is hybrid. Final sprint is strictly on campus.</p>,
  },
  {
    q: "Who owns the IP of what we build?",
    a: <p>You do. Your idea = your baby. We just get to evaluate it.</p>,
  },
  {
    q: "Where do I get updates?",
    a: (
      <div>
        <p>Follow us:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Website (trackshift.in)</li>
          <li>Insta & LinkedIn (@Trackshift_plaksha)</li>
          <li>Emails after registration</li>
        </ul>
      </div>
    ),
  },
];

export default function FAQs() {
  return (
    <main className="w-full max-w-5xl mx-auto px-4 py-12">
      <header className="text-center mb-8">
        <h1 className={`${orbitron.className} font-bold text-3xl md:text-5xl`}>
          FREQUENTLY ASKED QUESTIONS
          <span className="text-[#D6001C]">.</span>
        </h1>
        <p className="opacity-60 mt-3">
          Click to expand each question and see the answer.
        </p>
      </header>

      <section className="space-y-4">
        {FAQS.map((item, idx) => (
          <details
            key={idx}
            className="group border border-[#D6001C] rounded-lg p-4 shadow-sm"
          >
            <summary className="cursor-pointer list-none text-lg outline-none text-white">
              {item.q}
            </summary>
            <div className="mt-3 max-w-none text-gray-400">{item.a}</div>
          </details>
        ))}
      </section>
    </main>
  );
}
