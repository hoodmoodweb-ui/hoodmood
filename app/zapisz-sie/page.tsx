import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data } from "./data";
import MainWrapper from "@/myComponents/common/MainWrapper";
import EnrollmentForm from "./_components/enrollmentForm/EnrollmentForm";
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
        <EnrollmentForm />

        <AnyQuestionsContact />
        <Toaster />
      </SectionContainer>
    </MainWrapper>
  );
}
