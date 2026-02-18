import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import ButtonSecondary from "../common/ButtonSecondary";
import ButtonPrimary from "../common/ButtonPrimary";
import { Switch } from "../themeSwitch/switch";

export default function NavMenuMobile() {
  return (
    <div className="absolute top-full left-0 right-0 bg-black md:hidden">
      <Accordion type="single" collapsible className="max-w-lg uppercase">
        <AccordionItem value="shipping">
          <AccordionTrigger>Oferta</AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>
                {" "}
                <Link href="/docs">Koszalin</Link>
              </li>
              <li>
                {" "}
                <Link href="/docs">Polanów</Link>
              </li>
              <li>
                {" "}
                <Link href="/docs">Biały Bór</Link>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="returns">
          <AccordionTrigger>grafik</AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>
                {" "}
                <Link href="/docs">Koszalin</Link>
              </li>
              <li>
                {" "}
                <Link href="/docs">Polanów</Link>
              </li>
              <li>
                {" "}
                <Link href="/docs">Biały Bór</Link>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="support">
          <AccordionTrigger>cennik</AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>
                {" "}
                <Link href="/docs">Koszalin</Link>
              </li>
              <li>
                {" "}
                <Link href="/docs">Polanów</Link>
              </li>
              <li>
                {" "}
                <Link href="/docs">Biały Bór</Link>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="kadra">
          <AccordionTrigger>kadra</AccordionTrigger>
        </AccordionItem>
        <AccordionItem value="kolonie">
          <AccordionTrigger>kolonie</AccordionTrigger>
        </AccordionItem>
        <AccordionItem value="aktualnosci">
          <AccordionTrigger>aktualności</AccordionTrigger>
        </AccordionItem>
      </Accordion>
      <div className="bg-blue-500 flex justify-end gap-2">
        <ButtonSecondary />
        <ButtonPrimary />
      </div>
    </div>
  );
}
