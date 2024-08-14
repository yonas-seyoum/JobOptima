import React, { useState } from "react";
import {
  CheckboxGroup,
  CheckboxInput,
  CheckboxLabel,
  DropdownHeader,
  FilterContent,
  FilterSection,
} from "../styled-components/styledComponents";

export default function Industry() {
  const [openSection, setOpenSection] = useState<boolean>(false);

  const handleSection = () => {
    setOpenSection(!openSection);
  };
  return (
    <FilterSection isOpen={true}>
      <DropdownHeader onClick={handleSection}>
        Industry
        <span>{openSection ? "−" : "+"}</span>
      </DropdownHeader>
      <FilterContent isOpen={openSection}>
        <CheckboxGroup>
          <CheckboxLabel>
            <CheckboxInput type="checkbox" value="technology" />
            Technology
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput type="checkbox" value="finance" />
            Finance
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput type="checkbox" value="healthcare" />
            Healthcare
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput type="checkbox" value="education" />
            Education
          </CheckboxLabel>
        </CheckboxGroup>
      </FilterContent>
    </FilterSection>
  );
}
