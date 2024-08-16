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


export default function ExperienceLevel() {
  const [openSection, setOpenSection] = useState<boolean>(false);
  const [experienceLevel, setExperienceLevel] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState<{ [key: string]: boolean }>({
    checkBox1: false,
    checkBox2: false,
    checkBox3: false,
    checkBox4: false,
  });

  const { updateFilter } = useJobListContext();

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
      addExperienceLevel(event.target.value);
    } else {
      removeExperienceLevel(event.target.value);
    }
  };

  const addExperienceLevel = (experience: string) => {
    setExperienceLevel((prev) => {
      const updatedLevels = [...prev, experience];
      updateFilter(updatedLevels);

      return updatedLevels;
    });
  };
  const removeExperienceLevel = (experience: string) => {
    setExperienceLevel((prev) => {
      const updatedLevels = prev.filter((exp) => exp !== experience);
      updateFilter(updatedLevels);
      return updatedLevels;
    });
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
            <CheckboxInput
              name="checkBox1"
              checked={isChecked.checkBox1}
              onChange={handleChange}
              type="checkbox"
              value="entry-level"
            />
            Entry Level
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput
              name="checkBox2"
              checked={isChecked.checkBox2}
              onChange={handleChange}
              type="checkbox"
              value="internship"
            />
            Internship
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput
              name="checkBox3"
              checked={isChecked.checkBox3}
              onChange={handleChange}
              type="checkbox"
              value="mid-level"
            />
            Mid Level
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput
              name="checkBox4"
              checked={isChecked.checkBox4}
              onChange={handleChange}
              type="checkbox"
              value="senior"
            />
            Senior
          </CheckboxLabel>
        </CheckboxGroup>
      </FilterContent>
    </FilterSection>
  );
}
