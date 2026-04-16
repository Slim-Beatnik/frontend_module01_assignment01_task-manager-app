interface ProgressProps {
  // all props optional
  numerator?: number;
  denominator?: number;
}

export default function ProgressCircle({
  numerator = 0,
  denominator = 0,
}: ProgressProps) {
  const radius = 25;
  const size = 75;

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="h-full w-full content-center-safe"
    >
      <circle // progress circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        className="stroke-dracula-red-shift fill-none transition-all duration-500"
        pathLength="100" // I can set the length to 100 so I don't have to use js to getSVGLength()
        strokeDasharray="100"
        strokeLinecap="round"
        // now the percentage math is straight forward and don't divide by 0
        strokeDashoffset={denominator ? ((numerator / denominator) * 100) : 100}
        strokeWidth="10"
      />
      <circle // background circle 50% opacity
        cx={size / 2}
        cy={size / 2}
        r={radius}
        className="stroke-dracula-bg-light/40 fill-none mix-blend-color-burn"
        strokeWidth="12"
      />

      <svg // nest svg to scale with circle
        x="21"
        y="20"
        width="33"
        height="33"
        viewBox="0 0 100 100"
      >
        <text // align middle and adjust length set to scale with larger numbers
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className={ denominator ? "fill-dracula-3000 font-bold" : "fill-dracula-fg font-bold"}
          textLength="90"
          lengthAdjust="spacingAndGlyphs"
        >
          {denominator ? ( // only show if denominator over 0
            <>
              <tspan // numerator shifted up with negative dy
                fontSize="40"
                dy="-8"
              >
                {numerator}
              </tspan>
              <tspan
                fontSize="50"
                className="fill-dracula-green/90 font-light text-7xl"
                dy="20"
              >
                {/* had to search for this non-standard character */}
                {'\u2044'}
              </tspan>
            <tspan // denominator shifted down with positive dy if denominator over 0
            fontSize="40"
            dy="10"
            >
              {denominator}
            </tspan>
          </>
          ) : (
            <>
              <tspan>
                No Data
              </tspan>
            </>
          )
        }
        </text>
      </svg>
    </svg>
  );
}
