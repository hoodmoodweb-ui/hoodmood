"use client";

import { useMemo } from "react";
import PricingTable from "@/myComponents/pages/pricing/PricingTable";
import { data } from "./data";
import { usePricingFilters } from "../../../../myComponents/pages/pricing/PricingFiltersProvider";
import { filterAndSortPricingData } from "../../../../myComponents/pages/pricing/filterHelper";

export default function Page() {
  const { searchInput, searchAge, sorting } = usePricingFilters();

  const filteredData = useMemo(() => {
    return filterAndSortPricingData(data, searchInput, searchAge, sorting);
  }, [searchInput, searchAge, sorting]);

  return <PricingTable items={filteredData} />;
}
