import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "../lib/utils";
import { useSpotlightMask } from "../hooks/useSpotlightMask";
import Navbar from "./Navbar";
import ParticleField from "./ParticleField";
import SocialLinks from "./SocialLinks";
import ScrollIndicator from "./ScrollIndicator";
import AnimatedText from "./AnimatedText";

const ZOOM_DURATION = 2.8;

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const { containerRef, revealRef, maskDataUrl, maskSize } = useSpotlightMask({
    radius: 280,
    lerp: 0.1,
  });

  const zoomProps = prefersReducedMotion
    ? {}
    : {
        initial: { scale: 1.12 },
        animate: { scale: 1 },
        transition: { duration: ZOOM_DURATION, ease: EASE },
      };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-dscreen min-h-dscreen w-full overflow-hidden bg-bg"
    >
      {/* ---------- Base portrait (full bleed) ---------- */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div className="absolute inset-0" {...zoomProps}>
          <img
            src="/images/Base_image.png"
            alt="Ammar Shaikh, full stack developer"
            className="h-full w-full object-cover object-[50%_18%]"
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>
      </div>

      {/* ---------- Reveal portrait (masked to cursor spotlight) ---------- */}
      <div
        ref={revealRef}
        className="absolute inset-0 overflow-hidden"
        style={{
          maskImage: maskDataUrl ? `url(${maskDataUrl})` : undefined,
          WebkitMaskImage: maskDataUrl ? `url(${maskDataUrl})` : undefined,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskSize: `${maskSize}px ${maskSize}px`,
          WebkitMaskSize: `${maskSize}px ${maskSize}px`,
          opacity: maskDataUrl ? 1 : 0,
        }}
      >
        <motion.div className="absolute inset-0" {...zoomProps}>
          <img
            src="/images/Reveal_image.png"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-[50%_18%]"
            loading="eager"
          />
        </motion.div>
      </div>

      {/* ---------- Shared color grade / grain / vignette / bloom ---------- */}
      <div className="pointer-events-none absolute inset-0 z-[2]">
        <div className="grain-layer" />
        <div className="vignette-layer" />
        <div className="bloom-layer" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-transparent" />
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 100%, rgba(86,0,20,0.45), transparent 60%)",
          }}
        />
      </div>

      {/* ---------- Ambient particles ---------- */}
      <ParticleField />

      {/* ---------- Navbar ---------- */}
      <Navbar />

      {/* ---------- Headline ---------- */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="sr-only">Hello, I&apos;m Ammar — Full Stack Developer</h1>

        <div aria-hidden="true">
          <AnimatedText
            as="div"
            text="Hello,"
            className="font-serif-italic text-[clamp(1.4rem,3.4vw,2.25rem)] font-medium leading-none text-ink-soft"
            startDelay={0.85}
            staggerPerChar={0.032}
            charDuration={0.5}
          />

          <AnimatedText
            as="div"
            text="I'm Ammar"
            className="mt-2 font-sans text-[clamp(3.1rem,11.5vw,8.75rem)] font-extrabold leading-[0.94] tracking-tighter2 text-ink sm:mt-3"
            startDelay={1.1}
            staggerPerChar={0.045}
            charDuration={0.65}
          />

          <AnimatedText
            as="div"
            text="Full Stack Developer"
            className="mt-2 font-serif-italic text-[clamp(1.6rem,4.2vw,3.1rem)] font-medium leading-none text-ink-soft sm:mt-3"
            startDelay={1.85}
            staggerPerChar={0.02}
            charDuration={0.5}
          />
        </div>

        <motion.p
          className="mt-7 max-w-md text-[15px] font-light leading-relaxed text-ink-soft sm:text-base"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.55, duration: 0.8, ease: EASE }}
        >
          Building modern, mobile-responsive web experiences with clean code and intuitive design.
        </motion.p>
      </div>

      {/* ---------- Bottom-left intro (hidden on mobile) ---------- */}
      <motion.div
        className="absolute bottom-28 left-8 z-20 hidden max-w-[19rem] md:block lg:left-12 lg:max-w-xs"
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.9, ease: EASE }}
      >
        <p className="text-[13.5px] font-light leading-relaxed text-ink-soft">
          B.Tech Computer Technology student passionate about building Progressive Web Apps (PWAs) and scalable digital products that feel simple, elegant, and fast.
        </p>
      </motion.div>

      {/* ---------- Bottom-right (desktop only) ---------- */}
      <motion.div
        className="absolute bottom-28 right-8 z-20 hidden max-w-[19rem] text-right md:block lg:right-12 lg:max-w-xs"
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.85, duration: 0.9, ease: EASE }}
      >
        <p className="text-[13.5px] font-light leading-relaxed text-ink-soft">
          I design, develop, and deploy cloud-based applications utilizing the React ecosystem, Tailwind CSS, and Firebase.
        </p>
        <p className="mt-3 text-[13.5px] font-light leading-relaxed text-ink-soft">
          Focused on creating edge-to-edge experiences that are highly responsive and visually refined.
        </p>
      </motion.div>

      {/* ---------- Socials ---------- */}
      <motion.div
        className="absolute bottom-8 left-6 z-20 sm:left-8 lg:left-12"
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.0, duration: 0.8, ease: EASE }}
      >
        <SocialLinks />
      </motion.div>

      {/* ---------- Scroll indicator ---------- */}
      <ScrollIndicator />
    </section>
  );
}