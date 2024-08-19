import React, { useState } from "react";
import {
  DropdownHeader,
  FilterContent,
  FilterInput,
  FilterSection,
  SliderContainer,
} from "../styled-components/styledComponents";
import { Slider } from "@mui/material";
import { useJobListContext } from "../context/jobListContext.provider";

export default function SalaryRange() {
  const [openSection, setOpenSection] = useState<boolean>(false);
  const [salary, setSalary] = useState<number>();
  const { updateSalaryFilter } = useJobListContext();

  const handleSection = () => {
    setOpenSection(!openSection);
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    updateSalaryFilter(newValue as number);
  };
  return (
    <FilterSection isOpen={true}>
      <DropdownHeader onClick={handleSection}>
        Salary Range
        <span>{openSection ? "−" : "+"}</span>
      </DropdownHeader>
      <FilterContent isOpen={openSection}>
        <SliderContainer>
          <Slider
            defaultValue={50000}
            min={20000}
            max={150000}
            step={1000}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `$${value.toLocaleString()}`}
            onChange={handleChange}
          />
        </SliderContainer>
      </FilterContent>
    </FilterSection>
  );
}
