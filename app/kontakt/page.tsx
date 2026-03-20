import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data } from "./data";
import MainWrapper from "@/myComponents/common/MainWrapper";
import { Mail, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { a11y } from "@/public/styles";
export default function TermsAndConditions() {
  return (
    <MainWrapper>
      <SectionContainer>
        <SectionContent
          badge={data.badge}
          title={data.title}
          description={data.description}
        ></SectionContent>

        <div className="mt-10 grid grid-cols-1 gap-6 xl:grid-cols-[1.05fr_1fr]">
          <div className={sectionSurfaceStyles}>
            ilustracja / zdjęcie / blok brandowy
          </div>

          <div className={sectionSurfaceStyles}>formularz</div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className={infoCardStyles}>
            <h3>Dane kontaktowe</h3>
            <ul>
              <li className="flex items-center gap-1">
                <Phone /> 123 456 789
              </li>
              <li className="flex items-center gap-1">
                <Mail /> hoodmood.recepcja@gmail.com
              </li>
            </ul>
          </div>
          <div className={infoCardStyles}>
            <h3>Lokalizacje</h3>
            <ul>
              <li className="flex items-center gap-1">
                <MapPin />
                Koszalin, ul. Zwycięstwa 115 (siedziba)
              </li>
              <li className="flex items-center gap-1">
                <MapPin />
                Polanów, ul. Grabowe Wzgórze 5
              </li>
              <li className="flex items-center gap-1">
                <MapPin />
                Biały Bór, ul. Tamka 3{" "}
              </li>
            </ul>
          </div>
          <div className={infoCardStyles}>
            <h3>Socialmedia</h3>
            <ul>
              <li>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={a11y}
                >
                  <img
                    width={24}
                    height={24}
                    alt={`instagram logo`}
                    src={`/icons/instagram.svg`}
                    className="dark:invert"
                  />
                  @hoodmood
                </a>
              </li>
              <li>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={a11y}
                >
                  <img
                    width={24}
                    height={24}
                    alt={`facebook logo`}
                    src={`/icons/facebook.svg`}
                    className="dark:invert"
                  />
                  facebook.com/hoodmood
                </a>
              </li>
              <li>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={a11y}
                >
                  <img
                    width={24}
                    height={24}
                    alt={`tik-tok logo`}
                    src={`/icons/tik-tok.svg`}
                    className="dark:invert"
                  />
                  @hoodmood
                </a>
              </li>
              <li>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={a11y}
                >
                  <img
                    width={24}
                    height={24}
                    alt={`youtube logo`}
                    src={`/icons/youtube.svg`}
                    className="dark:invert"
                  />
                  hoodmood
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10">tabs lokalizacji mapa</div>
        <AnyQuestionsContact />
      </SectionContainer>
    </MainWrapper>
  );
}
const contactTextareaStyles =
  "min-h-[160px] rounded-2xl border border-black/[0.08] dark:border-white/[0.10] bg-white/80 dark:bg-white/[0.06] px-4 py-3 text-[#21191d] dark:text-white/92 placeholder:text-black/35 dark:placeholder:text-white/32 shadow-[0_8px_20px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.65)] dark:shadow-[0_8px_20px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-lg ring-1 ring-inset ring-black/[0.03] dark:ring-white/[0.05] transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#21191d]/20 dark:focus-visible:ring-white/85 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#21191d]";
const contactInputStyles =
  "h-12 rounded-2xl border border-black/[0.08] dark:border-white/[0.10] bg-white/80 dark:bg-white/[0.06] px-4 text-[#21191d] dark:text-white/92 placeholder:text-black/35 dark:placeholder:text-white/32 shadow-[0_8px_20px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.65)] dark:shadow-[0_8px_20px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-lg ring-1 ring-inset ring-black/[0.03] dark:ring-white/[0.05] transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#21191d]/20 dark:focus-visible:ring-white/85 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#21191d]";
const fieldLabelStyles =
  "pl-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/55 dark:text-white/55";
const infoCardStyles =
  "rounded-2xl border border-black/[0.06] bg-white/[0.10] p-4 shadow-[0_8px_20px_rgba(0,0,0,0.10)] transition-colors duration-300 dark:border-white/[0.10] dark:bg-white/[0.06]";
const sectionSurfaceStyles =
  "rounded-[28px] border border-black/[0.06] bg-white/[0.72] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.55)] ring-1 ring-inset ring-white/50 backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.04] dark:shadow-[0_12px_40px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.06)] dark:ring-white/[0.05] md:p-6 xl:p-8";
