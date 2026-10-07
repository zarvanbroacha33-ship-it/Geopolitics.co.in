import heroImg from '../assets/images/hero_geopolitics_indo_pacific_1791343449838.jpg';
import eurasiaImg from '../assets/images/article_eurasia_energy_1791343462429.jpg';
import semiImg from '../assets/images/article_semiconductor_chokepoints_1791343481849.jpg';
import spaceImg from '../assets/images/article_space_defense_corridor_1791343493882.jpg';

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: 'Indo-Pacific' | 'Eurasia' | 'Strategic Tech' | 'Defense & Space' | 'Global Diplomacy';
  author: {
    name: string;
    title: string;
    institution: string;
  };
  date: string;
  readTime: string;
  image: string;
  imageCaption: string;
  featured?: boolean;
  pullQuote?: string;
  summary: string;
  paragraphs: string[];
  takeaways: string[];
  citations: string[];
  tags: string[];
}

export interface Chokepoint {
  id: string;
  name: string;
  region: string;
  trafficVolume: string;
  strategicImportance: string;
  vulnerabilityStatus: 'Guarded' | 'Heightened Risk' | 'Active Interruption' | 'Stable Flow';
  primaryGuarantors: string;
  description: string;
}

export const CHOKEPOINTS: Chokepoint[] = [
  {
    id: 'malacca',
    name: 'Strait of Malacca',
    region: 'Southeast Asia / Indo-Pacific',
    trafficVolume: '84,000+ vessels / year (~25% global maritime trade)',
    strategicImportance: 'Vital conduit linking the Indian Ocean to the South China Sea. Primary energy corridor for East Asian economies.',
    vulnerabilityStatus: 'Guarded',
    primaryGuarantors: 'India (ANC Forward Posture), Singapore, Malaysia, Indonesia',
    description: 'Narrowing to 1.5 nautical miles at Phillips Channel in the Singapore Strait, it remains the quintessential global maritime vulnerability point.'
  },
  {
    id: 'hormuz',
    name: 'Strait of Hormuz',
    region: 'Persian Gulf',
    trafficVolume: '20.8M barrels / day (~21% global petroleum consumption)',
    strategicImportance: 'Artery of global hydrocarbon liquidity connecting Gulf exporters to international refiners.',
    vulnerabilityStatus: 'Heightened Risk',
    primaryGuarantors: 'Combined Maritime Forces (CMF), Regional Navies, US Fifth Fleet',
    description: 'Separating Iran and Oman, any disruption immediately translates to Brent crude volatility and strategic petroleum reserve reassessments worldwide.'
  },
  {
    id: 'bab-el-mandeb',
    name: 'Bab el-Mandeb & Red Sea',
    region: 'Horn of Africa / Arabian Peninsula',
    trafficVolume: 'Historically 12% global trade (~55% rerouted via Cape of Good Hope)',
    strategicImportance: 'Gateway between the Indian Ocean and the Mediterranean via Suez Canal.',
    vulnerabilityStatus: 'Active Interruption',
    primaryGuarantors: 'Operation Prosperity Guardian, EUNAVFOR Aspides, Indian Navy Escorts',
    description: 'Persistent anti-ship cruise missile and drone proliferation has driven prolonged maritime diversions around the Cape of Good Hope.'
  },
  {
    id: 'suez',
    name: 'Suez Canal',
    region: 'North Africa / Mediterranean',
    trafficVolume: '19,000+ transits pre-crisis (~$1 Trillion goods annually)',
    strategicImportance: 'Shortest maritime route between Europe and Asia, reducing transit by 10 to 14 days.',
    vulnerabilityStatus: 'Heightened Risk',
    primaryGuarantors: 'Suez Canal Authority, Egyptian Naval Forces',
    description: 'Direct economic barometer for European containerized imports, impacted by upstream Red Sea vessel diversions.'
  },
  {
    id: 'sunda-lombok',
    name: 'Sunda & Lombok Straits',
    region: 'Indonesian Archipelago',
    trafficVolume: 'Deep-draft Very Large Crude Carriers (VLCC) & naval undersea corridors',
    strategicImportance: 'Alternative deep-water oceanic corridors bypassing shallow waters of Malacca.',
    vulnerabilityStatus: 'Stable Flow',
    primaryGuarantors: 'Indonesian Navy, Regional Maritime Surveillance',
    description: 'Critical alternative transit for deep-draft supertankers and strategic submarine patrols navigating Indo-Pacific bathymetry.'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'indo-pacific-maritime-mandala',
    title: "The New Maritime Equilibrium: India's Strategic Mandala Across the Indo-Pacific Rim",
    subtitle: "How naval modernization, forward infrastructure in the Andaman & Nicobar archipelago, and trilateral maritime diplomacy are reshaping the oceanic balance.",
    category: 'Indo-Pacific',
    author: {
      name: 'Vice Admiral K. Raghavan (Retd.)',
      title: 'Distinguished Fellow in Maritime Geostrategy',
      institution: 'Centre for Indian Ocean Studies, New Delhi'
    },
    date: '04 October 2026',
    readTime: '9 min read',
    image: heroImg,
    imageCaption: 'Fig. 1 - Naval task group operating near the western approaches to the Malacca Strait.',
    featured: true,
    pullQuote: "Geography is the unalterable grammar of national power. For India, the peninsular thrust into the northern Indian Ocean is neither an advantage to be squandered nor a fortress to hide behind—it is an oceanic pivot.",
    summary: "As global commerce encounters unprecedented friction along classic maritime choke corridors, India's naval posture has evolved from brown-water coastal defense into a comprehensive maritime domain awareness network anchoring stability across the Malacca, Sunda, and Horn of Africa vectors.",
    paragraphs: [
      "Geography has bequeathed India an unparalleled maritime vantage point. Extending nearly two thousand kilometers into the Indian Ocean basin, the subcontinent commands the sea lines of communication (SLOCs) that bear sixty percent of global container shipments and over seventy percent of oil traffic.",
      "In recent years, New Delhi's maritime doctrine has undergone a decisive transformation under the aegis of Security and Growth for All in the Region (SAGAR). The Andaman and Nicobar Command (ANC)—India's sole tri-service unified theater command—has transformed from an administrative outpost into a formidable strategic vanguard guarding the Six Degree and Ten Degree channels, the natural western gateways to the Strait of Malacca.",
      "The deployment of long-range maritime patrol aircraft, persistent undersea acoustic sensor arrays, and enhanced runway infrastructure at INS Kohassa and INS Baaz gives New Delhi unprecedented transparency over sub-surface and surface transit. When combined with bilateral logistics exchange agreements spanning from Diego Garcia and Duqm to Changi and Subic Bay, India's operational radius now seamlessly interfaces with Quad and ASEAN partners.",
      "Critically, this posture is non-hegemonic. Rather than asserting exclusionary control, India acts as a net security provider—launching anti-piracy boarding missions, conducting humanitarian disaster relief, and securing commercial bulk vessels across the western Arabian Sea during heightened geopolitical turmoil."
    ],
    takeaways: [
      "The Andaman & Nicobar archipelago functions as an unsinkable carrier commanding the western approaches to Malacca.",
      "SAGAR doctrine pairs deterrence with bilateral capacity building for littoral states across East Africa, Maldives, Seychelles, and Mauritius.",
      "Real-time information fusion via the IFC-IOR in Gurugram now networks 25+ partner nations for maritime domain transparency."
    ],
    citations: [
      "Ministry of Defence, Government of India: 'Ensuring Secure Seas: Indian Maritime Security Strategy' (2025 Revision).",
      "International Maritime Bureau: Annual Piracy and Armed Robbery Assessment Report.",
      "Naval War College Review: 'The Andaman Vanguard and Sea-Denial Capabilities in the Eastern Indian Ocean' (Vol. 79)."
    ],
    tags: ['Maritime Strategy', 'Indo-Pacific', 'Naval Warfare', 'Quad', 'Chokepoints']
  },
  {
    id: 'pipeline-geopolitics-eurasia',
    title: "Pipeline Geopolitics: Central Asia's Reorientation & the INSTC Multimodal Arc",
    subtitle: "Hydrocarbon flows, railway gauge standardization, and the race between northern Siberian transit and southern Arabian Sea maritime outlets.",
    category: 'Eurasia',
    author: {
      name: 'Dr. Anya V. Chernova',
      title: 'Senior Eurasia Energy Fellow',
      institution: 'Institute for Strategic Eurasian Studies'
    },
    date: '02 October 2026',
    readTime: '7 min read',
    image: eurasiaImg,
    imageCaption: 'Fig. 2 - High-altitude natural gas pumping station along the trans-Caspian pipeline route.',
    featured: false,
    pullQuote: "Eurasia's landlocked energy reserves are no longer captive to single imperial trunk lines; the southern oceanic vectors through Chabahar and Bandar Abbas are the emerging arteries of multipolarity.",
    summary: "As sanctions and political divergences disrupt historic east-west Eurasian transit corridors, Central Asian republics are aggressively diversifying natural gas and mineral export arteries toward the Indian Ocean via the International North-South Transport Corridor (INSTC).",
    paragraphs: [
      "For over a century, Central Asian transit geography was dictated by the gravitational pull of northern railway routes and radial pipeline systems terminating in European industrial hubs. The geopolitical rupture of the mid-2020s has shattered that century-old assumption.",
      "Today, Uzbekistan, Kazakhstan, and Turkmenistan are actively constructing alternative southern and trans-Caspian conduits. The International North-South Transport Corridor (INSTC)—spanning from St. Petersburg across the Caspian Sea through Iran to the western ports of India—has emerged as a vital multimodal valve.",
      "India's sustained capital investment in the Shahid Beheshti terminal at Chabahar port offers Central Asian landlocked republics an unhindered gateway to South Asian and Southeast Asian consumers, completely bypassing overland bottlenecks.",
      "Moreover, the development of dry ports, automated rail transshipment hubs, and electronic customs clearing along the INSTC has reduced transit durations by over 40% compared to traditional maritime journeys through the North Sea and Suez."
    ],
    takeaways: [
      "Central Asian republics have accelerated multi-vector energy diplomacy to hedge against sole-purchaser monopsony.",
      "The INSTC provides a 40% transit time reduction between the Caspian littoral and Indian ports compared to the Suez sea route.",
      "Chabahar Port operates as the institutional anchor providing landlocked economies access to global maritime commerce."
    ],
    citations: [
      "UN Economic and Social Commission for Asia and the Pacific (ESCAP): 'Multimodal Corridor Connectivity in Central Asia'.",
      "Eurasian Development Bank (EDB): 'Investment Infrastructure in the INSTC Corridors: 2026 Outlook'."
    ],
    tags: ['Central Asia', 'Energy Security', 'INSTC', 'Chabahar', 'Pipelines']
  },
  {
    id: 'semiconductor-sovereignty-2nm',
    title: "The 2nm Chokepoint: Semiconductor Lithography, Rare Earths, and Tech Bloc Hegemony",
    subtitle: "Why the global balance of power rests on single-digit nanometer gate-all-around architectures and critical mineral export controls.",
    category: 'Strategic Tech',
    author: {
      name: 'Siddharth N. Mehta',
      title: 'Director of Technology & Strategic Trade',
      institution: 'Global Geopolitics Review'
    },
    date: '28 September 2026',
    readTime: '8 min read',
    image: semiImg,
    imageCaption: 'Fig. 3 - Cleanroom fabrication environment showcasing high-NA extreme ultraviolet (EUV) optical chambers.',
    featured: false,
    pullQuote: "National sovereignty in the 21st century is measured not merely by sovereign borders or standing armies, but by the physical capacity to fabricate high-density silicon and control the mineral precursors that feed the foundry.",
    summary: "The semiconductor supply chain represents the most concentrated technological chokepoint in human history. We examine how advanced lithography export restrictions, gallium/germanium quotas, and national fab incentives are creating regional silicon alliances.",
    paragraphs: [
      "Few industrial processes rival the geopolitical sensitivity of sub-2nm silicon fabrication. The entire global stack relies on an extraordinarily narrow chain of single points of failure: High-NA Extreme Ultraviolet lithography machines fabricated exclusively in Veldhoven; chemical photoresists synthesized by a handful of Japanese houses; and raw gallium, germanium, and graphite refined predominantly within East Asia.",
      "The weaponization of trade restrictions has sparked unprecedented state-backed re-shoring initiatives. The United States CHIPS and Science Act, the European Chips Act, and India's Semicon India Program have poured over $250 billion into sovereign fab development.",
      "India's rapid emergence as an assembly, testing, and packaging (ATMP) hub—combined with the construction of commercial silicon foundries in Dholera and Sanand—marks New Delhi's transition from a software design powerhouse into a hardware fabrication stakeholder.",
      "Yet, physical foundries cannot function without raw precursor minerals. The strategic contest of the coming decade will center on mining concessions, refining capacities, and synthetic recycling for dysprosium, neodymium, and lithium."
    ],
    takeaways: [
      "High-NA EUV lithography tools remain the world's tightest technological monopoly, with fewer than 50 systems produced per year.",
      "The weaponization of raw mineral export quotas has spurred bilateral critical mineral clubs between Quad and EU nations.",
      "India's semiconductor manufacturing ecosystem is positioning the nation as a resilient hedge in the global supply chain."
    ],
    citations: [
      "Semiconductor Industry Association (SIA): 'Global Fab Capacity and Geopolitical Vulnerability Assessment'.",
      "Peterson Institute for International Economics: 'The Weaponized Interdependence of High-Tech Hardware'."
    ],
    tags: ['Semiconductors', 'Critical Minerals', 'Tech Sovereignty', 'Industrial Policy']
  },
  {
    id: 'space-c4isr-domain-awareness',
    title: "Orbital Geopolitics: Low-Earth Orbit Constellations and Indian Ocean Domain Awareness",
    subtitle: "From NavIC constellation updates to commercial synthetic aperture radar (SAR), how low-Earth orbit has become the ultimate strategic high ground.",
    category: 'Defense & Space',
    author: {
      name: 'Dr. Meenakshi Sundaram',
      title: 'Principal Research Fellow in Aerospace Systems',
      institution: 'Strategic Space Policy Institute'
    },
    date: '24 September 2026',
    readTime: '6 min read',
    image: spaceImg,
    imageCaption: 'Fig. 4 - High-resolution orbital tracking telemetry over the Indian Ocean maritime corridor.',
    featured: false,
    pullQuote: "Space is no longer a benign sanctuary for scientific observation; it is the sensor nervous system of modern national defense and terrestrial deterrence.",
    summary: "The proliferation of proliferated Low-Earth Orbit (pLEO) constellations and high-revisit Synthetic Aperture Radar (SAR) satellites has rendered ocean camouflage nearly obsolete, permanently altering naval battle management.",
    paragraphs: [
      "In classical naval theory, the vastness of the high seas provided inherent concealment for capital assets. A carrier strike group could vanish into weather fronts and radio silence. In 2026, the density of commercial and defense orbital sensors has permanently dissolved that fog of war.",
      "Synthetic Aperture Radar (SAR) constellations can peer through cloud cover and darkness to detect the radar cross-section of moving vessels, while radio-frequency (RF) mapping satellites pinpoint maritime communications and automatic identification system (AIS) dark targets within minutes.",
      "India's space agency ISRO, alongside indigenous defense aerospace startups, has integrated military reconnaissance satellites (such as the RISAT and Cartosat series) with the regional satellite navigation system NavIC.",
      "The next frontier is orbital resilience: establishing rapid-launch responsive rocket capabilities, protecting undersea fiber-optic cable landing stations, and hardening satellite ground stations against cyber-electronic warfare."
    ],
    takeaways: [
      "High-revisit commercial SAR constellations have eliminated traditional naval operational concealment across open oceans.",
      "NavIC provides high-precision autonomous positioning over the Indian subcontinent and 1,500 kilometers beyond its borders.",
      "Space situational awareness (SSA) centers now track orbital debris and counter-space maneuvers in real-time."
    ],
    citations: [
      "ISRO Strategic Directorate: 'Space Domain Awareness and Indian Ocean Security White Paper'.",
      "Center for Strategic and International Studies (CSIS): 'Space Threat Assessment 2026'."
    ],
    tags: ['Space Defense', 'ISRO', 'NavIC', 'C4ISR', 'Orbital Security']
  },
  {
    id: 'strategic-autonomy-multipolarity',
    title: "Beyond Non-Alignment: The Geometry of India's Strategic Multi-Alignment",
    subtitle: "How New Delhi balances participation in the Quad, BRICS, SCO, and I2U2 without succumbing to bloc confrontation.",
    category: 'Global Diplomacy',
    author: {
      name: 'Prof. Harsh Vardhan Pant',
      title: 'Vice President of Studies and Foreign Policy',
      institution: 'Observer Research Foundation'
    },
    date: '20 September 2026',
    readTime: '10 min read',
    image: heroImg,
    imageCaption: 'Fig. 5 - High-level diplomatic summit delegations convening on multipolar economic cooperation.',
    featured: false,
    pullQuote: "Strategic autonomy is not aloof neutrality; it is the freedom of choice backed by internal strength and multidirectional diplomatic engagement.",
    summary: "Rather than adhering to rigid alliance treaties of the Cold War era, 21st-century diplomacy is governed by issue-based coalitions. An in-depth examination of India's multi-alignment foreign policy architecture.",
    paragraphs: [
      "The twentieth-century concept of Non-Alignment was forged in a bipolar era defined by the ideological clash between Washington and Moscow. In today's polycentric world, passive detachment is an unaffordable luxury.",
      "Instead, Indian foreign policy has pioneered 'Multi-Alignment'—engaging simultaneously with competing global powers on terms dictated strictly by national interest. India is an active pillar of the Quad alongside the US, Japan, and Australia, while simultaneously participating in BRICS and the Shanghai Cooperation Organisation (SCO).",
      "This diplomatic geometry enables New Delhi to serve as a bridge between the Global North and Global South, articulating the developmental priorities of developing economies on climate finance, food security, and digital public infrastructure.",
      "As international institutions face gridlock, India's model of issue-based strategic convergence represents the blueprint for middle and major powers seeking stability in an era of great-power contestation."
    ],
    takeaways: [
      "Multi-alignment replaces defensive non-alignment with proactive issue-based multilateral diplomacy.",
      "India acts as a diplomatic bridge between established powers and developing Global South nations.",
      "Digital Public Infrastructure (DPI) and economic resilience serve as the core currencies of soft power."
    ],
    citations: [
      "Ministry of External Affairs, India: 'The India Way: Strategies for an Uncertain World'.",
      "Foreign Affairs: 'The Rise of the Geopolitical Swing States'."
    ],
    tags: ['Multi-Alignment', 'Diplomacy', 'Global South', 'Quad', 'BRICS']
  }
];
