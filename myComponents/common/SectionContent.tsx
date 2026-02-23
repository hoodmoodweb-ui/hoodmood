import Title from "./Title";
import Description from "./Description";
import { Badge } from "@/components/ui/badge";

type Props = {
  badge: string;
  title: string;
  description: string;
};

export default function SectionContent({ badge, title, description }: Props) {
  return (
    <div>
      <Badge className="bg-(--brand-700) text-(--brand-200) uppercase">
        {badge}
      </Badge>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </div>
  );
}
