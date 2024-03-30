import { motion } from "framer-motion";

interface SvgProps {
        shouldFill: boolean;
        percentage: number;
        delay: number;
        noAnimation: boolean;
    }

const RatingStar: React.FC<SvgProps> = ({shouldFill, percentage, delay, noAnimation}) => {
  const maskId = `halfStarMask_${Math.random().toString(36)}`;
  const gradientId = `linearGradient_${Math.random().toString(36)}`;

  const variants = {
    fill: {
      width: [`${percentage}%`, '0%', `${percentage}%`],
      transition:{ type: 'spring', duration: 1.5, delay: delay + 0.5}
    }
  }

  const onLeaveVariants = {
    fill: {
      width: `${percentage}%`,
      transition: {
        delay: 0
      }
    }
  }
  return (
    <div className="lg:w-[4rem] lg:h-[4rem] ss:h-[3rem] ss:w-[3rem] xxs:h-[2.5rem] xxs:w-[2.5rem] w-[2rem] h-[2rem]">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 64 64" fill="none" stroke="#A0A0A0" strokeWidth="1">
        <defs>
          <linearGradient id={gradientId} x1="-2.5" y1="-2" x2="76.999" y2="14.5842" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDA2FF"/>
            <stop offset="0.505208" stopColor="#782AD5"/>
            <stop offset="1" stopColor="#52B8FF"/>
          </linearGradient>

            <mask id={maskId}>
              <motion.rect
                height="100%"
                fill="white"
                variants={noAnimation ? onLeaveVariants : variants}
                animate={'fill'}
                transition={{ type: 'spring', duration: 1.5, delay: delay}}
              />
            </mask>
        </defs>
        <path d="M31.2251 46.5211C31.7017 46.2334 32.2986 46.2334 32.7753 46.5211L45.4367 54.163C46.5726 54.8486 47.974 53.8301 47.6725 52.538L44.3125 38.135C44.186 37.5927 44.3703 37.025 44.7911 36.6604L55.9849 26.9633C56.9871 26.0951 56.4526 24.449 55.1316 24.3351L40.3927 23.0641C39.8395 23.0164 39.3578 22.6669 39.1408 22.1558L33.3809 8.58614C32.8637 7.3676 31.1366 7.3676 30.6194 8.58614L24.8595 22.1558C24.6425 22.6669 24.1609 23.0164 23.6076 23.0641L8.86424 24.3355C7.54389 24.4493 7.00906 26.0941 8.00992 26.9628L19.1848 36.6613C19.6044 37.0255 19.7883 37.5918 19.6629 38.133L16.3216 52.5434C16.0221 53.835 17.4228 54.8516 18.5579 54.1664L31.2251 46.5211Z" fill={`url(#${gradientId})`} mask={`url(#${maskId})`} />

        {/*stroke */}
        <path d="M31.2251 46.5211C31.7017 46.2334 32.2986 46.2334 32.7753 46.5211L45.4367 54.163C46.5726 54.8486 47.974 53.8301 47.6725 52.538L44.3125 38.135C44.186 37.5927 44.3703 37.025 44.7911 36.6604L55.9849 26.9633C56.9871 26.0951 56.4526 24.449 55.1316 24.3351L40.3927 23.0641C39.8395 23.0164 39.3578 22.6669 39.1408 22.1558L33.3809 8.58614C32.8637 7.3676 31.1366 7.3676 30.6194 8.58614L24.8595 22.1558C24.6425 22.6669 24.1609 23.0164 23.6076 23.0641L8.86424 24.3355C7.54389 24.4493 7.00906 26.0941 8.00992 26.9628L19.1848 36.6613C19.6044 37.0255 19.7883 37.5918 19.6629 38.133L16.3216 52.5434C16.0221 53.835 17.4228 54.8516 18.5579 54.1664L31.2251 46.5211Z" fill="none" />
      </svg>
    </div>
  );
};

export default RatingStar;