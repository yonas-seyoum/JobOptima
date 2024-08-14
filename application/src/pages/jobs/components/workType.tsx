import React, { useState } from "react";
import {
  CheckboxGroup,
  CheckboxInput,
  CheckboxLabel,
  DropdownHeader,
  FilterContent,
  FilterSection,
  RadioGroup,
} from "../styled-components/styledComponents";

export default function WorkType() {
  const [openSection, setOpenSection] = useState<boolean>(true);

  const handleSection = () => {
    setOpenSection(!openSection);
  };
  return (
    <FilterSection isOpen={true}>
      <DropdownHeader onClick={handleSection}>
        Work Type
        <span>{openSection ? "−" : "+"}</span>
      </DropdownHeader>
      <FilterContent isOpen={openSection}>
        <RadioGroup>
          <CheckboxLabel>
            <CheckboxInput type="radio" name="workType" value="remote" />
            Remote
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput type="radio" name="workType" value="onsite" />
            Onsite
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput type="radio" name="workType" value="hybrid" />
            Hybrid
          </CheckboxLabel>
        </RadioGroup>
      </FilterContent>
    </FilterSection>
  );
}
