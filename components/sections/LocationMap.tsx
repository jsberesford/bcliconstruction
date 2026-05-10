import { contact } from "@/content/copy";
import { AnimatedHeadline } from "@/components/shared/AnimatedHeadline";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function LocationMap() {
  return (
    <section className="bg-beige py-section">
      <div className="container-x">
        <ScrollReveal>
          <p className="text-eyebrow uppercase tracking-eyebrow text-gray">
            {contact.map.eyebrow}
          </p>
        </ScrollReveal>
        <div className="mt-6">
          <AnimatedHeadline
            as="h2"
            text={contact.map.headline}
            className="text-display-md"
          />
        </div>
        <ScrollReveal delay={0.1}>
          <p className="mt-4 text-base leading-relaxed text-gray">
            {contact.map.body}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 overflow-hidden rounded-lg border border-rule">
            <svg
              viewBox="0 0 800 600"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Stylized map of coastal Berbice, Guyana, with Bath Settlement marked"
              role="img"
              className="w-full"
            >
              <rect width="800" height="600" fill="#F5F2EC" />

              {/* Ocean fill */}
              <rect
                x="0"
                y="0"
                width="800"
                height="600"
                fill="#E8E2D5"
                opacity="0.4"
              />

              {/* Blueprint grid overlay */}
              <defs>
                <pattern
                  id="map-grid-minor"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="#0F0F0F"
                    strokeOpacity="0.06"
                    strokeWidth="0.5"
                  />
                </pattern>
                <pattern
                  id="map-grid-major"
                  width="200"
                  height="200"
                  patternUnits="userSpaceOnUse"
                >
                  <rect width="200" height="200" fill="url(#map-grid-minor)" />
                  <path
                    d="M 200 0 L 0 0 0 200"
                    fill="none"
                    stroke="#0F0F0F"
                    strokeOpacity="0.12"
                    strokeWidth="0.6"
                  />
                </pattern>
              </defs>
              <rect width="800" height="600" fill="url(#map-grid-major)" />

              {/* Atlantic Ocean label area */}
              <text
                x="680"
                y="80"
                fill="#0F0F0F"
                fillOpacity="0.18"
                fontFamily="ui-sans-serif, system-ui, sans-serif"
                fontSize="11"
                letterSpacing="0.14em"
                textAnchor="middle"
              >
                ATLANTIC
              </text>
              <text
                x="680"
                y="96"
                fill="#0F0F0F"
                fillOpacity="0.18"
                fontFamily="ui-sans-serif, system-ui, sans-serif"
                fontSize="11"
                letterSpacing="0.14em"
                textAnchor="middle"
              >
                OCEAN
              </text>

              {/* Coastline - north edge of Berbice */}
              <path
                d="M 20 120 Q 80 110 150 115 Q 230 108 310 112 Q 380 106 450 114 Q 530 108 600 116 Q 670 110 750 118 L 780 120"
                fill="none"
                stroke="#0F0F0F"
                strokeOpacity="0.22"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />

              {/* Coastal land fill suggestion */}
              <path
                d="M 20 120 Q 80 110 150 115 Q 230 108 310 112 Q 380 106 450 114 Q 530 108 600 116 Q 670 110 750 118 L 780 120 L 780 600 L 20 600 Z"
                fill="#F5F2EC"
                fillOpacity="0.7"
              />

              {/* Berbice River - major waterway */}
              <path
                d="M 280 600 Q 285 540 278 480 Q 272 420 280 360 Q 290 300 282 240 Q 276 190 284 145"
                fill="none"
                stroke="#0F0F0F"
                strokeOpacity="0.15"
                strokeWidth="8"
              />
              <path
                d="M 280 600 Q 285 540 278 480 Q 272 420 280 360 Q 290 300 282 240 Q 276 190 284 145"
                fill="none"
                stroke="#0F0F0F"
                strokeOpacity="0.08"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <text
                x="260"
                y="350"
                fill="#0F0F0F"
                fillOpacity="0.2"
                fontFamily="ui-sans-serif, system-ui, sans-serif"
                fontSize="9"
                letterSpacing="0.1em"
                textAnchor="middle"
                transform="rotate(-88, 260, 350)"
              >
                BERBICE RIVER
              </text>

              {/* Abary River */}
              <path
                d="M 90 600 Q 94 540 88 480 Q 84 420 90 360 Q 96 300 91 240 Q 87 195 93 148"
                fill="none"
                stroke="#0F0F0F"
                strokeOpacity="0.1"
                strokeWidth="4"
              />

              {/* Canje Creek */}
              <path
                d="M 400 600 Q 402 540 398 490 Q 394 440 400 400 Q 404 360 399 320 Q 396 280 402 240 Q 406 200 400 160"
                fill="none"
                stroke="#0F0F0F"
                strokeOpacity="0.1"
                strokeWidth="3"
              />

              {/* Main coastal road / Route 1 */}
              <path
                d="M 30 175 Q 100 170 180 172 Q 260 170 340 173 Q 420 170 500 174 Q 580 171 660 174 Q 720 172 770 175"
                fill="none"
                stroke="#0F0F0F"
                strokeOpacity="0.3"
                strokeWidth="1.5"
              />
              <text
                x="400"
                y="163"
                fill="#0F0F0F"
                fillOpacity="0.25"
                fontFamily="ui-sans-serif, system-ui, sans-serif"
                fontSize="8"
                letterSpacing="0.1em"
                textAnchor="middle"
              >
                WEST COAST BERBICE ROAD
              </text>

              {/* Secondary roads */}
              <path
                d="M 170 175 L 170 310"
                fill="none"
                stroke="#0F0F0F"
                strokeOpacity="0.15"
                strokeWidth="1"
                strokeDasharray="5 3"
              />
              <path
                d="M 340 173 L 340 290"
                fill="none"
                stroke="#0F0F0F"
                strokeOpacity="0.15"
                strokeWidth="1"
                strokeDasharray="5 3"
              />
              <path
                d="M 500 174 L 500 300"
                fill="none"
                stroke="#0F0F0F"
                strokeOpacity="0.15"
                strokeWidth="1"
                strokeDasharray="5 3"
              />
              <path
                d="M 620 174 L 620 280"
                fill="none"
                stroke="#0F0F0F"
                strokeOpacity="0.15"
                strokeWidth="1"
                strokeDasharray="5 3"
              />

              {/* Region labels */}
              <text
                x="90"
                y="320"
                fill="#0F0F0F"
                fillOpacity="0.18"
                fontFamily="ui-sans-serif, system-ui, sans-serif"
                fontSize="9"
                letterSpacing="0.12em"
                textAnchor="middle"
              >
                WEST BERBICE
              </text>
              <text
                x="550"
                y="300"
                fill="#0F0F0F"
                fillOpacity="0.18"
                fontFamily="ui-sans-serif, system-ui, sans-serif"
                fontSize="9"
                letterSpacing="0.12em"
                textAnchor="middle"
              >
                EAST BERBICE
              </text>

              {/* Settlement dots - small communities */}
              <circle cx="170" cy="175" r="2.5" fill="#0F0F0F" fillOpacity="0.25" />
              <circle cx="340" cy="173" r="2.5" fill="#0F0F0F" fillOpacity="0.25" />
              <circle cx="500" cy="174" r="2.5" fill="#0F0F0F" fillOpacity="0.25" />
              <circle cx="620" cy="174" r="2.5" fill="#0F0F0F" fillOpacity="0.25" />

              {/* Yellow accent stroke - single accent line near Bath Settlement */}
              <path
                d="M 192 188 L 232 188"
                stroke="#F5B800"
                strokeWidth="1.5"
                strokeOpacity="0.7"
              />

              {/* Bath Settlement pin */}
              <circle
                cx="212"
                cy="175"
                r="6"
                fill="#0F0F0F"
                fillOpacity="0.85"
              />
              <circle
                cx="212"
                cy="175"
                r="3"
                fill="#F5F2EC"
                fillOpacity="0.9"
              />

              {/* Bath Settlement label */}
              <text
                x="228"
                y="171"
                fill="#0F0F0F"
                fillOpacity="0.85"
                fontFamily="ui-sans-serif, system-ui, sans-serif"
                fontSize="11"
                fontWeight="500"
                letterSpacing="0.04em"
              >
                Bath Settlement
              </text>

              {/* Compass rose */}
              <g transform="translate(740, 540)">
                <line
                  x1="0"
                  y1="-18"
                  x2="0"
                  y2="18"
                  stroke="#0F0F0F"
                  strokeOpacity="0.25"
                  strokeWidth="0.8"
                />
                <line
                  x1="-18"
                  y1="0"
                  x2="18"
                  y2="0"
                  stroke="#0F0F0F"
                  strokeOpacity="0.25"
                  strokeWidth="0.8"
                />
                <text
                  x="0"
                  y="-22"
                  fill="#0F0F0F"
                  fillOpacity="0.3"
                  fontFamily="ui-sans-serif, system-ui, sans-serif"
                  fontSize="9"
                  textAnchor="middle"
                  letterSpacing="0.08em"
                >
                  N
                </text>
              </g>

              {/* Scale bar */}
              <g transform="translate(40, 560)">
                <line
                  x1="0"
                  y1="0"
                  x2="60"
                  y2="0"
                  stroke="#0F0F0F"
                  strokeOpacity="0.3"
                  strokeWidth="1"
                />
                <line
                  x1="0"
                  y1="-4"
                  x2="0"
                  y2="4"
                  stroke="#0F0F0F"
                  strokeOpacity="0.3"
                  strokeWidth="1"
                />
                <line
                  x1="60"
                  y1="-4"
                  x2="60"
                  y2="4"
                  stroke="#0F0F0F"
                  strokeOpacity="0.3"
                  strokeWidth="1"
                />
                <text
                  x="30"
                  y="14"
                  fill="#0F0F0F"
                  fillOpacity="0.3"
                  fontFamily="ui-sans-serif, system-ui, sans-serif"
                  fontSize="8"
                  textAnchor="middle"
                  letterSpacing="0.06em"
                >
                  ~10 km
                </text>
              </g>
            </svg>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
