"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useMemo, useState } from "react";
import { FaqItem } from "@/app/faq/data";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { CircleX } from "lucide-react";
const normalize = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

type Props = {
  faq: FaqItem[];
};

export default function FaqFilter({ faq }: Props) {
  const [search, setSearch] = useState("");

  const filteredFaq = useMemo(() => {
    const words = normalize(search).trim().split(/\s+/).filter(Boolean);

    if (words.length === 0) return faq;

    return faq.filter((item) => {
      const normalizedQuestion = normalize(item.question);
      return words.every((word) => normalizedQuestion.includes(word));
    });
  }, [search, faq]);

  const clearSearchBar = () => {
    setSearch("");
  };

  return (
    <>
      <InputGroup>
        <InputGroupInput
          id="input-field-question"
          type="text"
          placeholder="Wyszukaj pytanie"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <InputGroupAddon align={"inline-end"}>
          {search !== "" && (
            <button
              className="  py-1 px-2 hover:cursor-pointer text-black"
              onClick={clearSearchBar}
            >
              <CircleX />
            </button>
          )}
        </InputGroupAddon>
      </InputGroup>

      <Accordion type="single" collapsible>
        {filteredFaq.map((item, id) => (
          <AccordionItem key={id} value={`${id}`}>
            <AccordionTrigger className="text-xs md:text-md lg:text-lg py-6">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-12">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
