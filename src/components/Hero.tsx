import { motion, useReducedMotion } from "framer-motion";
import { asset, EASE } from "../lib/utils";
import { useSpotlightMask } from "../hooks/useSpotlightMask";
import ParticleField from "./ParticleField";
import SocialLinks from "./SocialLinks";
import ScrollIndicator from "./ScrollIndicator";
import AnimatedText from "./AnimatedText";

const ZOOM_DURATION = 2.8;

interface HeroProps {
  /** False while the intro is on screen. The headline and zoom start when it turns true. */
  ready: boolean;
  onNavigate: (id: string) => void;
}

/**
 * The one cinematic moment on the page: a portrait with a cursor spotlight that
 * reveals a second portrait. It stays dark in both themes (`theme-dark`).
 */
export default function Hero({ ready, onNavigate }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const { containerRef, revealRef, maskDataUrl, maskSize } = useSpotlightMask({
    radius: 280,
    lerp: 0.1,
  });

  const zoomProps = prefersReducedMotion
    ? {}
    : {
        initial: false as const,
        animate: { scale: ready ? 1 : 1.12 },
        transition: { duration: ZOOM_DURATION, ease: EASE },
      };

  const fadeUp = (delay: number, y = 12) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { delay, duration: 0.8, ease: EASE },
        };

  return (
    <section
      id="home"
      ref={containerRef}
      className="theme-dark relative h-dscreen min-h-dscreen w-full overflow-hidden bg-bg text-ink"
    >
      {/* ---------- Base portrait (full bleed) ---------- */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div className="absolute inset-0" {...zoomProps}>
          <img
            src={asset("images/Base_image.webp")}
            alt="Portrait of Ammar Shaikh"
            className="h-full w-full object-cover object-[50%_18%]"
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>
      </div>

      {/* ---------- Reveal portrait (masked to the cursor spotlight) ---------- */}
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
            src={asset("images/Reveal_image.webp")}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-[50%_18%]"
            loading="eager"
          />
        </motion.div>
      </div>

      {/* ---------- Shared colour grade / grain / vignette / bloom ---------- */}
      <div className="pointer-events-none absolute inset-0 z-[2]">
        <div className="grain-layer" />
        <div className="vignette-layer" />
        <div className="bloom-layer" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-transparent" />
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            background: "radial-gradient(120% 90% at 50% 100%, rgba(86,0,20,0.45), transparent 60%)",
          }}
        />
      </div>

      <ParticleField />

      {/* ---------- Headline ---------- */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="sr-only">Hello, I&apos;m Ammar — Full Stack Developer</h1>

        {ready && (
          <>
            <div aria-hidden="true">
              <AnimatedText
                as="div"
                text="Hello,"
                className="font-serif-italic text-[clamp(1.6rem,3.6vw,2.5rem)] leading-none text-ink-soft"
                startDelay={0.3}
                staggerPerChar={0.032}
                charDuration={0.5}
              />
              <AnimatedText
                as="div"
                text="I'm Ammar"
                className="mt-2 font-display text-[clamp(3.1rem,11.5vw,8.75rem)] font-extrabold leading-[0.94] tracking-tighter2 text-ink sm:mt-3"
                startDelay={0.55}
                staggerPerChar={0.045}
                charDuration={0.65}
              />
              <AnimatedText
                as="div"
                text="Full Stack Developer"
                className="mt-2 font-serif-italic text-[clamp(1.9rem,4.6vw,3.4rem)] leading-none text-ink-soft sm:mt-3"
                startDelay={1.3}
                staggerPerChar={0.02}
                charDuration={0.5}
              />
            </div>

            <motion.p
              className="mt-7 max-w-md text-[15px] font-light leading-relaxed text-ink-soft sm:text-base"
              {...fadeUp(1.95)}
            >
              Building modern, mobile-responsive web experiences with clean code and intuitive design.
            </motion.p>

            <motion.div className="mt-8 flex flex-wrap items-center justify-center gap-3" {...fadeUp(2.15)}>
              <button
                type="button"
                onClick={() => onNavigate("projects")}
                className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-bg transition-transform duration-300 hover:-translate-y-0.5"
              >
                View projects
              </button>
              <button
                type="button"
                onClick={() => onNavigate("contact")}
                className="rounded-full border border-ink/35 bg-glass px-6 py-3 text-sm font-semibold text-ink backdrop-blur-md transition-colors duration-300 hover:bg-ink/15"
              >
                Get in touch
              </button>
            </motion.div>
          </>
        )}
      </div>

      {/* ---------- Bottom-left intro (hidden on mobile) ---------- */}
      {ready && (
        <>
          <motion.div
            className="absolute bottom-28 left-8 z-20 hidden max-w-[19rem] md:block lg:left-12 lg:max-w-xs"
            {...fadeUp(1.2, 20)}
          >
            <p className="text-[13.5px] font-light leading-relaxed text-ink-soft">
              B.Tech Computer Technology student passionate about building Progressive Web Apps (PWAs) and scalable
              digital products that feel simple, elegant, and fast.
            </p>
          </motion.div>

          <motion.div
            className="absolute bottom-28 right-8 z-20 hidden max-w-[19rem] text-right md:block lg:right-12 lg:max-w-xs"
            {...fadeUp(1.35, 20)}
          >
            <p className="text-[13.5px] font-light leading-relaxed text-ink-soft">
              I design, develop, and deploy cloud-based applications utilizing the React ecosystem, Tailwind CSS, and
              Firebase.
            </p>
            <p className="mt-3 text-[13.5px] font-light leading-relaxed text-ink-soft">
              Focused on creating edge-to-edge experiences that are highly responsive and visually refined.
            </p>
          </motion.div>

          <motion.div className="absolute bottom-8 left-6 z-20 sm:left-8 lg:left-12" {...fadeUp(1.5, 16)}>
            <SocialLinks />
          </motion.div>

          <ScrollIndicator />
        </>
      )}
    </section>
  );
}
