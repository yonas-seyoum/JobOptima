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
import { useJobListContext } from "../context/jobListContext.provider";

export default function WorkType() {
  const [openSection, setOpenSection] = useState<boolean>(true);
  const [workType, setWorkType] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState<{ [key: string]: boolean }>({
    remote: false,
    onsite: false,
    hybrid: false,
  });
  const { updateWorkTypeFilter } = useJobListContext();

  const handleSection = () => {
    setOpenSection(!openSection);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked, value } = event.target;

    setIsChecked((prevState) => ({
      ...prevState,

      [name]: checked,
    }));

    setWorkType((prev) => {
      const updatedWorkTypes = checked
        ? [...prev, value]
        : prev.filter((type) => type !== value);

      setTimeout(() => {
        updateWorkTypeFilter(updatedWorkTypes);
      });

      return updatedWorkTypes;
    });
  };

  return (
    <FilterSection isOpen={true}>
      <DropdownHeader onClick={handleSection}>
        Work Type
        <span>{openSection ? "−" : "+"}</span>
      </DropdownHeader>
      <FilterContent isOpen={openSection}>
        <CheckboxGroup>
          <CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              name="remote"
              value="Remote"
              checked={isChecked.remote}
              onChange={handleChange}
            />
            Remote
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              name="onsite"
              value="Onsite"
              checked={isChecked.onsite}
              onChange={handleChange}
            />
            Onsite
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              name="hybrid"
              value="Hybrid"
              checked={isChecked.hybrid}
              onChange={handleChange}
            />
            Hybrid
          </CheckboxLabel>
        </CheckboxGroup>
      </FilterContent>
    </FilterSection>
  );
}
