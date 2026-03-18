"use client";

import { useMemo } from "react";
import PricingTable from "@/myComponents/pages/pricing/PricingTable";
import { data } from "./data";
import { data as contentData, tabs } from "../data";
import { filterAndSortPricingData } from "../../../../myComponents/pages/pricing/filterHelper";
import {
  PricingFiltersProvider,
  usePricingFilters,
} from "../../../../myComponents/pages/pricing/PricingFiltersProvider";
import MainWrapper from "@/myComponents/common/MainWrapper";
import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import ToggleButtons from "@/myComponents/common/ToggleButtons";
import PricingFilterBar from "@/myComponents/pages/pricing/PricingFilterBar";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
export default function Page() {
  const { searchInput, searchAge, sorting } = usePricingFilters();

  const filteredData = useMemo(() => {
    return filterAndSortPricingData(data, searchInput, searchAge, sorting);
  }, [searchInput, searchAge, sorting]);

  return (
    <MainWrapper>
      <PricingFiltersProvider>
        <SectionContainer>
          <SectionContent
            badge={contentData.badge}
            title={contentData.title}
            description={contentData.description}
          />
          <ToggleButtons tabs={tabs} />
          <PricingFilterBar />
          <PricingTable items={filteredData} />;
          <AnyQuestionsContact />
        </SectionContainer>
      </PricingFiltersProvider>
    </MainWrapper>
  );
}
