export type LandingProps = {
  refs: {
    homeRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
  };
};

export type NavigationProps = {
  scrollTo: (section: string) => void;
};

export type HeroProp = {
  heroRef?: React.RefObject<HTMLDivElement>;
};

export type ThemeType = {
  primary: string;
  secondary: string;
  tertiary: string;
};

export type ThemeContextType = {
  theme: ThemeType;
  changeTheme: () => void;
};

export type InputFieldProps = {
  placeholder?: string;
  label?: string;
  color: { primary?: string; secondary?: string; tertiary?: string };
  multiline?: boolean;
};
