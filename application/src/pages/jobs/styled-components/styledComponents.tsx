import styled from "@emotion/styled";

export const FilterContainer = styled("aside")({
  width: "20%",
  padding: "1.5em",
  border: "1px solid #e0e0e0",
  borderRadius: "8px",

  backgroundColor: "#ffffff",
  maxHeight: "calc(100vh - 15em)",
  boxSizing: "border-box",
  overflow: "auto",
  marginRight: "1em",
});

export const Title = styled("h3")({
  margin: "0 0 1em",
  fontSize: "1.3rem",
  fontWeight: 600,
  color: "#333",
});

interface Props {
  isOpen: boolean;
}

export const FilterSection = styled("div")<Props>(({ isOpen }) => ({
  marginBottom: "1.5em",
  borderBottom: isOpen ? "1px solid #ddd" : "none",
  paddingBottom: isOpen ? "1em" : "0",
}));

export const DropdownHeader = styled("div")({
  cursor: "pointer",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontWeight: "bold",
  color: "#333",
});

export const FilterContent = styled("div")<Props>(({ isOpen }) => ({
  display: isOpen ? "block" : "none",
  marginTop: "0.5em",
}));

export const CheckboxGroup = styled("div")({
  display: "flex",
  flexDirection: "column",
});

export const RadioGroup = styled("div")({
  display: "flex",
  flexDirection: "column",
});

export const FilterInput = styled("input")({
  width: "100%",
  padding: "12px",
  borderRadius: "4px",
  border: "1px solid #ddd",
  boxSizing: "border-box",
  marginBottom: "0.5em",
});

export const CheckboxLabel = styled("label")({
  marginBottom: "0.5em",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
});

export const CheckboxInput = styled("input")({
  marginRight: "8px",
});

export const SliderContainer = styled("div")({
  marginBottom: "1em",
});
