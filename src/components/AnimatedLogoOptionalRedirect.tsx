import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function AnimatedLogoOptionalRedirect({
  redirectTo = '',
}: {
  redirectTo?: string;
}) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!redirectTo?.length) {
      return;
    }

    const TOTAL_DURATION_MS = 1600 + 3000; // last animation + wait

    const timer = setTimeout(() => {
      navigate(redirectTo, { replace: true });
    }, TOTAL_DURATION_MS);

    return () => clearTimeout(timer);
  }, [navigate, redirectTo]);

  return (
    <svg
      viewBox="0 0 600 400"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="#22c55e"
      stroke="#22c55e"
    >
      <defs>
        {/* ff reveal */}
        <clipPath id="ff-clip">
          <rect
            id="ff-reveal"
            x="300"
            y="0"
            width="0"
            height="400"
          >
            <animate
              id="ff-reveal-anim"
              attributeName="width"
              from="0"
              to="260"
              dur="0.4s"
              begin="1.4s"
              fill="freeze"
            />
          </rect>
        </clipPath>
      </defs>

      {/* ================= O ================= */}
      <path
        d=" m 272.94716,348.08337
            c -34.95756,0.79276
              -70.03768,-16.856
              -88.47665,-46.88633
              -20.22168,-31.71523
              -22.57905,-72.11473
              -14.23841,-108.03057
              8.45409,-34.97079
              35.36588,-65.42484
              70.34962,-75.31483
              38.69682,-11.48343
              84.54889,-1.58242
              111.38733,29.64342
              27.45908,30.95563
              32.82104,75.70613
              25.20353,115.09127
              -7.15125,37.82548
              -35.62156,71.7412
              -73.43506,81.49049
              -10.01017,2.7729
              -20.41323,4.01112
              -30.79036,4.00655
            z
            m 0,-41.52011
            c 23.44457,0.88988
              45.32821,-14.98675
              53.28231,-36.79699
              8.5466,-22.56354
              8.71486,-48.04602
              2.41493,-71.20109
              -5.90124,-21.75999
              -24.0838,-40.77954
              -47.16807,-43.18015
              -22.67211,-3.69354
              -46.97388,7.49867
              -57.61667,28.12887
              -12.28991,22.61536
              -12.9499,49.95055
              -7.76892,74.68158
              4.94514,23.50416
              23.58544,45.2089
              48.39402,47.81443
              2.80386,0.37745
              5.63367,0.55348
              8.4624,0.55335
            z"
        transform="matrix(1.3539838,0,0,1.3539838,-205.76841,-85.478918)"
        mask="url(#o-cut)"
      />

      {/* ================= CHECK ================= */}
      {/* stem */}

      <path
        d="m 162.50391,154.54292 v 139"
        strokeWidth="27"
        strokeLinecap="round"
        className="check-stem"
        transform="translate(-30 -4)"
      >
        <animateTransform
          id="stem-rise"
          attributeName="transform"
          type="translate"
          from="0 140"
          to="0 0"
          dur="0.8s"
          begin="0s"
          fill="freeze"
          calcMode="spline"
          keySplines="0.42 0 1 1"
        />
        <animate
          id="stem-hide"
          attributeName="opacity"
          from="1"
          to="0"
          dur="0.2s"
          begin="1s"
          fill="freeze"
        />
      </path>

      {/* arms */}
      <path
        d="M 145 230 L 175 265 L 235 200"
        fill="none"
        strokeWidth="27"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="check-arms"
        opacity="0"
        transform="translate(-30 -4)"
      >
        <animate
          id="arms-in"
          attributeName="opacity"
          from="0"
          to="1"
          dur="0.2s"
          begin="1s"
          fill="freeze"
        />
      </path>

      {/* ================= FF ================= */}
      <g clipPath="url(#ff-clip)">
        <path
          d=" M 424.27798 79.217904
              C 408.57013 79.217904 395.47992 81.491157 385.00802 86.038159
              C 374.53612 90.585171 366.61318 97.405947 361.23945 106.49996
              C 356.0035 115.59398 353.38566 126.96125 353.38566 140.60227
              L 353.38566 168.91785
              L 313.90952 168.91785
              L 313.90952 216.66171
              L 353.38566 216.66171
              L 353.38566 387.1743
              L 414.15043 387.1743
              L 414.15043 216.66171
              L 436.40902 216.66171
              L 458.7937 216.66171
              L 475.88516 216.66171
              L 475.88516 387.1743
              L 536.64993 387.1743
              L 536.64993 216.66171
              L 581.2932 216.66171
              L 581.2932 168.91785
              L 536.64993 168.91785
              L 536.64993 150.93652
              C 536.64993 142.25587 538.44128 136.12427 542.02376 132.54178
              C 545.74405 128.8215 551.94456 126.96124 560.62521 126.96124
              L 571.99248 126.96124
              L 581.2932 126.96124
              L 581.2932 79.217904
              L 567.65217 79.217904
              L 546.77748 79.217904
              C 531.06962 79.217904 517.97942 81.491157 507.50752 86.038159
              C 497.03562 90.585171 489.1132 97.405947 483.73947 106.49996
              C 478.50351 115.59398 475.88516 126.96125 475.88516 140.60227
              L 475.88516 168.91785
              L 458.7937 168.91785
              L 436.40902 168.91785
              L 414.15043 168.91785
              L 414.15043 150.93652
              C 414.15043 142.25587 415.94177 136.12427 419.52426 132.54178
              C 423.24454 128.8215 429.44506 126.96124 438.12571 126.96124
              L 449.49298 126.96124
              L 458.7937 126.96124
              L 458.7937 79.217904
              L 445.15267 79.217904
              L 424.27798 79.217904
              z"
        />
      </g>
      <animate
        id="logo-color"
        attributeName="fill"
        from="#22c55e"
        to="#ef4444"
        dur="0.4s"
        begin="1.6s"
        fill="freeze"
      />
      <animate
        id="logo-color"
        attributeName="stroke"
        from="#22c55e"
        to="#ef4444"
        dur="0.4s"
        begin="1.6s"
        fill="freeze"
      />
    </svg>
  );
}
