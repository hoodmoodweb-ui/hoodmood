import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data } from "./data";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import NoEvents from "@/myComponents/pages/camps/NoEvents";
import PreviousEvents from "@/myComponents/pages/camps/PreviousEvents";

export default function Camps() {
  return (
    <main className="space-y-36 my-36">
      <SectionContainer>
        <SectionContent
          badge={data.badge}
          title={data.title}
          description={data.description}
        ></SectionContent>
        <NoEvents/>
        <PreviousEvents/>
        <AnyQuestionsContact />
      </SectionContainer>
    </main>
  );
}
