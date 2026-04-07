import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data } from "./data";
import MainWrapper from "@/myComponents/common/MainWrapper";
import LocalizationsMapTabs from "./_components/LocalizationsMapTabs";
import Form from "./_components/Form";
import Toaster from "@/components/ui/sonner";

export default function TermsAndConditions() {
  return (
    <MainWrapper>
      <SectionContainer>
        <SectionContent
          badge={data.badge}
          title={data.title}
          description={data.description}
        ></SectionContent>

        <div className=" grid grid-cols-1  gap-36 xl:grid-cols-[1fr_0.8fr] items-center">
          <LocalizationsMapTabs />

          <div className={sectionSurfaceStyles}>
            <Form />
          </div>
        </div>

        <AnyQuestionsContact />
        <Toaster />
      </SectionContainer>
    </MainWrapper>
  );
}

const sectionSurfaceStyles =
  " order-1 lg:order-2 rounded-lg border border-black/[0.06] bg-white/[0.72] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.55)] ring-1 ring-inset ring-white/50 backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.04] dark:shadow-[0_12px_40px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.06)] dark:ring-white/[0.05] md:p-6 xl:p-8";
