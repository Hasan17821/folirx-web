export const ingredients = [
  {
    pct: "6%",
    name: "Minoxidil",
    desc: "Opens follicular potassium channels and prolongs the anagen growth phase. Compounded above the OTC strength of 5%.",
  },
  {
    pct: "0.25%",
    name: "Finasteride",
    desc: "Blocks DHT, the hormone responsible for male pattern hair loss. Topical delivery means systemic exposure is a fraction of the oral dose.",
  },
  {
    pct: "0.025%",
    name: "Tretinoin",
    desc: "A retinoid that increases scalp absorption of minoxidil up to 3×, so the formula does more with each dose.",
  },
] as const;

export const steps = [
  {
    n: "01",
    icon: "chat",
    title: "Take the consultation",
    body: "Two minutes. Photos of your scalp, basic medical history.",
  },
  {
    n: "02",
    icon: "stethoscope",
    title: "A licensed physician reviews",
    body: "Real US-licensed MDs. Usually within 24 hours.",
  },
  {
    n: "03",
    icon: "vial",
    title: "Compounded and shipped",
    body: "Your custom Rx compounded at our 503A pharmacy partner and shipped discreetly.",
  },
  {
    n: "04",
    icon: "droplet",
    title: "Apply once daily",
    body: "One pump, scalp, every night. Visible regrowth in 3–6 months.",
  },
] as const;

export const trust = [
  { label: "503A FDA-Recognized Pharmacy", icon: "shield" },
  { label: "US-Licensed Physicians", icon: "stethoscope" },
  { label: "Free Discreet Shipping", icon: "package" },
  { label: "Pause or Cancel Anytime", icon: "pause" },
] as const;

export const comparisonRows = [
  { label: "Triple-active compounded formula", values: [true, false, false, false] },
  { label: "Tretinoin absorption enhancer", values: [true, false, false, false] },
  { label: "503A FDA-recognized compounding pharmacy", values: [true, true, false, false] },
  { label: "Licensed US physician review", values: [true, true, true, false] },
  { label: "Includes free derma roller (6-month plan)", values: [true, false, false, false] },
  { label: "Pause or cancel anytime", values: [true, true, true, false] },
  { label: "Starting price", values: ["$49", "$35", "$25", "$15"] },
] as const;

export const comparisonCols = ["FoliRx", "Hims", "Keeps", "Generic Minoxidil"] as const;

export const testimonials = [
  {
    name: "Marcus",
    age: 34,
    months: 6,
    quote:
      "Six months in. My hairline isn't where it was at 22, but it's where it was at 28. I'll take it.",
  },
  {
    name: "Daniel",
    age: 29,
    months: 4,
    quote:
      "I tried Hims for a year. Nothing. Switched to FoliRx and saw new growth in three months. The tretinoin is the difference.",
  },
  {
    name: "Theo",
    age: 41,
    months: 9,
    quote:
      "I have actual baby hairs at the temples. I gave up on those temples a decade ago.",
  },
  {
    name: "Andre",
    age: 36,
    months: 5,
    quote:
      "Pump bottle. Once a night. No mess. My partner doesn't even know I use it. The shedding stopped at month two.",
  },
  {
    name: "Cole",
    age: 31,
    months: 7,
    quote:
      "Talked to a real doctor in 18 hours. The Rx showed up four days later. This is what telehealth is supposed to feel like.",
  },
] as const;

export const faq = [
  {
    q: "Is FoliRx safe?",
    a: "FoliRx is a prescription medication compounded at a 503A FDA-recognized pharmacy and dispensed only after review by a US-licensed physician. Like any medication it has potential side effects — most commonly mild scalp irritation. We screen for contraindications during the consultation.",
  },
  {
    q: "How is FoliRx different from Hims or Keeps?",
    a: "Single-active topical minoxidil and oral finasteride are decades old. We compound minoxidil, finasteride, and tretinoin in a single bottle. The tretinoin acts as an absorption enhancer for the minoxidil, and the topical finasteride keeps systemic exposure low.",
  },
  {
    q: "What is a 503A compounding pharmacy?",
    a: "503A pharmacies are state-licensed and FDA-recognized. They compound personalized prescriptions in patient-specific quantities under strict USP 795/797 standards. This is how we can offer custom strengths that don't exist as off-the-shelf products.",
  },
  {
    q: "When will I see results?",
    a: "Most users see reduced shedding by month two and visible regrowth between months three and six. The first few weeks may include a temporary 'shed' phase as miniaturized hairs are pushed out — this is normal and a sign the medication is working.",
  },
  {
    q: "What happens if I have side effects?",
    a: "Message your physician through the FoliRx portal. We can adjust your formula strength, switch the carrier, or pause your subscription at any time at no cost.",
  },
  {
    q: "Is the consultation really free?",
    a: "Yes. There is no charge for the consultation or physician review. You only pay if you receive and continue your prescription. Cancel any time before your first shipment for a full refund.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Pause or cancel from your account dashboard. No retention call. No fees.",
  },
  {
    q: "Do you ship internationally?",
    a: "Currently FoliRx ships to all 50 US states only. We're working on expanded availability — sign up for the waitlist on our home page to be notified.",
  },] as const;

export const faqCategories = {
  Product: [ "Is FoliRx safe?" ],
} as const;
