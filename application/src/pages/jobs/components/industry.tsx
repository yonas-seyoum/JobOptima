import React, { useState } from "react";
import {
  CheckboxGroup,
  CheckboxInput,
  CheckboxLabel,
  DropdownHeader,
  FilterContent,
  FilterSection,
} from "../styled-components/styledComponents";
import { useJobListContext } from "../context/jobListContext.provider";

export default function Industry() {
  const [openSection, setOpenSection] = useState<boolean>(false);
  const [industry, setIndustry] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState<{ [key: string]: boolean }>({
    technology: false,
    finance: false,
    healthCare: false,
    education: false,
  });

  const { updateIndustryFilter } = useJobListContext();

  const handleSection = () => {
    setOpenSection(!openSection);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setIsChecked((prevState) => ({
      ...prevState,
      [name]: checked,
    }));

    if (checked) {
      addIndustry(event.target.value);
    } else {
      removeIndustry(event.target.value);
    }
  };

  const addIndustry = (experience: string) => {
    setIndustry((prev) => {
      const updatedIndusty = [...prev, experience];
      setTimeout(() => {
        updateIndustryFilter(updatedIndusty);
      }, 0);

      return updatedIndusty;
    });
  };

  const removeIndustry = (experience: string) => {
    setIndustry((prev) => {
      const updatedIndusty = prev.filter((exp) => exp !== experience);
      setTimeout(() => {
        updateIndustryFilter(updatedIndusty);
      }, 0);
      return updatedIndusty;
    });
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
            <CheckboxInput
              type="checkbox"
              value="Technology"
              name="technology"
              checked={isChecked.technology}
              onChange={handleChange}
            />
            Technology
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              value="Finance"
              name="finance"
              checked={isChecked.finance}
              onChange={handleChange}
            />
            Finance
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              value="Health Care"
              name="healthCare"
              checked={isChecked.healthCare}
              onChange={handleChange}
            />
            Healthcare
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              value="Education"
              name="education"
              checked={isChecked.education}
              onChange={handleChange}
            />
            Education
          </CheckboxLabel>
        </CheckboxGroup>
      </FilterContent>
    </FilterSection>
  );
}
