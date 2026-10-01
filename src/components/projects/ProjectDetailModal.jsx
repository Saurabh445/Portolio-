import { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Gsap, GsapPresence } from "../../utils/gsapAnimate";
import ProjectDetailRouter from "./ProjectDetailRouter";

export default function ProjectDetailModal() {
  const navigate = useNavigate();
  const location = useLocation();

  // Opened from a project card, the app pushed this entry itself, so going
  // back restores Home underneath at the exact scroll position. Opened from a
  // shared /projects/:slug link there is nothing to pop, so fall back to Home.
  const hasBackground = Boolean(location.state?.backgroundLocation);

  const handleClose = useCallback(() => {
    if (hasBackground) {
      navigate(-1);
    } else {
      navigate("/", { replace: true });
    }
  }, [hasBackground, navigate]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, []);

  useEffect(() => {
    const onEscape = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", onEscape);

    return () => window.removeEventListener("keydown", onEscape);
  }, [handleClose]);

  return (
    <GsapPresence>
      <div className="fixed inset-0 z-[9998] flex items-center justify-center p-0 md:p-6 lg:p-10">
        <Gsap.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={handleClose}
        />
        <Gsap.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          data-lenis-prevent
          className="relative z-10 w-full h-dvh md:h-auto md:max-h-[90vh] max-w-6xl bg-[#FAF9F6] shadow-2xl md:rounded-lg overflow-y-auto overscroll-contain flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <ProjectDetailRouter mode="modal" />
        </Gsap.div>
      </div>
    </GsapPresence>
  );
}
