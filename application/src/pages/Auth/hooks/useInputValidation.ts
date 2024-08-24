export default function useInputValidation() {
  const isEmail = (email: string): boolean | string => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || "input valid Email";
  };

  const isValidPassword = (password: string) => {
    return password.length >= 8 || "password less than 8 ";
  };

  return { isEmail, isValidPassword };
}
