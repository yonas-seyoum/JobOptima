import React, { useState } from "react";
import {
  Button,
  TextField,
  Divider,
  Typography,
  Container,
  Box,
} from "@mui/material";
import {
  Google as GoogleIcon,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { styles } from "./util/styles";
import { useAuthContext } from "../../Context/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import { routes } from "../../components/Navigation/util/constants";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const { jobsRoute } = routes;

  const toggleAuthMode = () => {
    setIsLogin((prev) => !prev);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const { currentUser, login, signInWithGoogle, signUp } = useAuthContext();

  const handleLogin = () => {
    login(email, password);
    setPassword("");
    if (currentUser) {
      navigate(jobsRoute, { replace: true });
    }
  };

  const handleGoogleLogin = () => {
    signInWithGoogle();
  };

  const handleSignUp = () => {
    signUp(email, password);
    setPassword("");
  };

  return (
    <Box style={styles.background}>
      <Container maxWidth="xs" sx={styles.container}>
        <Typography variant="h4" style={styles.title}>
          {isLogin ? "Welcome Back!" : "Create an Account"}
        </Typography>

        <Button
          startIcon={<GoogleIcon />}
          variant="outlined"
          style={styles.googleButton}
          fullWidth
          onClick={handleGoogleLogin}
        >
          {isLogin ? "Sign in with Google" : "Sign up with Google"}
        </Button>

        <Divider style={styles.divider}>OR</Divider>

        <form>
          {!isLogin && (
            <TextField
              variant="outlined"
              label="Full Name"
              fullWidth
              margin="normal"
              style={styles.input}
            />
          )}
          <TextField
            variant="outlined"
            label="Email"
            fullWidth
            margin="normal"
            style={styles.input}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <span role="img" aria-label="email">
                    📧
                  </span>
                </InputAdornment>
              ),
            }}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            variant="outlined"
            label="Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            margin="normal"
            style={styles.input}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onChange={(event) => setPassword(event.target.value)}
          />

          <Button
            variant="contained"
            style={styles.submitButton}
            fullWidth
            onClick={isLogin ? handleLogin : handleSignUp}
          >
            {isLogin ? "Login" : "Sign Up"}
          </Button>
        </form>

        <Typography variant="body2" style={styles.toggleText}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <Button
            color="primary"
            sx={styles.toggleButton}
            onClick={toggleAuthMode}
          >
            {isLogin ? "Sign Up" : "Login"}
          </Button>
        </Typography>
      </Container>
    </Box>
  );
}
