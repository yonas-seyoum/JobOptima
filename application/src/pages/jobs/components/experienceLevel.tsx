import React, { useState } from "react";
import {
  CheckboxGroup,
  CheckboxInput,
  CheckboxLabel,
  DropdownHeader,
  FilterContent,
  FilterSection,
} from "../styled-components/styledComponents";

export default function ExperienceLevel() {
  const [openSection, setOpenSection] = useState<boolean>(false);

  const handleSection = () => {
    setOpenSection(!openSection);
  };
  return (
    <FilterSection isOpen={true}>
      <DropdownHeader onClick={handleSection}>
        Experience Level
        <span>{openSection ? "−" : "+"}</span>
      </DropdownHeader>
      <FilterContent isOpen={openSection}>
        <CheckboxGroup>
          <CheckboxLabel>
            <CheckboxInput type="checkbox" value="entry-level" />
            Entry Level
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput type="checkbox" value="internship" />
            Internship
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput type="checkbox" value="mid-level" />
            Mid Level
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput type="checkbox" value="senior" />
            Senior
          </CheckboxLabel>
        </CheckboxGroup>
      </FilterContent>
    </FilterSection>
  );
}
