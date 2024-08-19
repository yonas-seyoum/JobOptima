import React, { useState } from "react";
import {
  CheckboxGroup,
  CheckboxInput,
  CheckboxLabel,
  DropdownHeader,
  FilterContent,
  FilterSection,
} from "../../styled-components/styledComponents";
import { useJobListContext } from "../../context/jobListContext.provider";

export default function JobType() {
  const [openSection, setOpenSection] = useState<boolean>(true);
  const [jobType, setJobType] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState<{ [key: string]: boolean }>({
    fullTime: false,
    partTime: false,
    contract: false,
  });

  const { updateJobTypeFilter } = useJobListContext();

  const handleSection = () => {
    setOpenSection(!openSection);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked, value } = event.target;

    setIsChecked((prevState) => ({
      ...prevState,

      [name]: checked,
    }));

    setJobType((prev) => {
      const updatedLevels = checked
        ? [...prev, value]
        : prev.filter((exp) => exp !== value);

      setTimeout(() => {
        updateJobTypeFilter(updatedLevels);
      });

      return updatedLevels;
    });
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
            <CheckboxInput
              type="checkbox"
              value="Full-time"
              name="fullTime"
              checked={isChecked.fullTime}
              onChange={handleChange}
            />
            Full-Time
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              value="Part-time"
              name="partTime"
              checked={isChecked.partTime}
              onChange={handleChange}
            />
            Part-Time
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              value="Contract"
              name="contract"
              checked={isChecked.contract}
              onChange={handleChange}
            />
            Contract
          </CheckboxLabel>
        </CheckboxGroup>
      </FilterContent>
    </FilterSection>
  );
}
