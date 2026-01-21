import { getThemeColors } from "@/configs/theme";

const Banner = () => {
  const themeColors = getThemeColors();

  return (
    <div className={`flex flex-wrap items-center justify-center w-full py-2 font-medium text-sm text-white text-center bg-linear-to-b ${themeColors.bgGradient}`}>
      <p>New AI Feature Added!</p>
      <a
        href="/app"
        className={`flex items-center gap-1 px-3 py-1 text-xs rounded-md ${themeColors.text} bg-white hover:bg-slate-200 transition active:scale-95 ml-3`}
      >
         Try It Free
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.91797 7H11.0846"
            stroke={themeColors.svgStroke}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 2.9165L11.0833 6.99984L7 11.0832"
            stroke={themeColors.svgStroke}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
};

export default Banner;
