import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data, kids, adults } from "./data";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function Offer() {
  return (
    <main>
      <SectionContainer>
        <SectionContent
          badge={data.badge}
          title={data.title}
          description={data.description}
        ></SectionContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kids.map((item) => (
            <Card key={item.nazwa}>
              <CardHeader>
                <CardTitle>{item.nazwa}</CardTitle>
                <CardDescription>{item.opis}</CardDescription>
              </CardHeader>
              <CardFooter>Zapisz sie</CardFooter>
            </Card>
          ))}
        </div>
      </SectionContainer>
    </main>
  );
}
