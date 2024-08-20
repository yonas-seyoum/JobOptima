import React, { useState } from "react";
import {
  DropdownHeader,
  FilterContent,
  FilterInput,
  FilterSection,
} from "../../styled-components/styledComponents";

export default function Location() {
  const [openSection, setOpenSection] = useState<boolean>(true);

  const handleSection = () => {
    setOpenSection(!openSection);
  };
  return (
    <FilterSection isOpen={true}>
      <DropdownHeader onClick={handleSection}>
        Location
        <span>{openSection ? "−" : "+"}</span>
      </DropdownHeader>
      <FilterContent isOpen={openSection}>
        <FilterInput type="text" placeholder="Enter location" />
      </FilterContent>
    </FilterSection>
  );
}
