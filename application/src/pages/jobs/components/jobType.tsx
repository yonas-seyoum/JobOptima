import React, { useState } from "react";
import {
  CheckboxGroup,
  CheckboxInput,
  CheckboxLabel,
  DropdownHeader,
  FilterContent,
  FilterSection,
} from "../styled-components/styledComponents";

export default function JobType() {
  const [openSection, setOpenSection] = useState<boolean>(true);

  const handleSection = () => {
    setOpenSection(!openSection);
  };
  return (
    <FilterSection isOpen={true}>
      <DropdownHeader onClick={handleSection}>
        Job Type
        <span>{openSection ? "−" : "+"}</span>
      </DropdownHeader>
      <FilterContent isOpen={openSection}>
        <CheckboxGroup>
          <CheckboxLabel>
            <CheckboxInput type="checkbox" value="full-time" />
            Full-Time
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput type="checkbox" value="part-time" />
            Part-Time
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput type="checkbox" value="contract" />
            Contract
          </CheckboxLabel>
        </CheckboxGroup>
      </FilterContent>
    </FilterSection>
  );
}
