import { useState } from "react";
import { Box, Paper, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useForm } from "react-hook-form";
import InputController from "../../components/formControlHelper/InputController";
import { Link } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import { routePath } from "../../routerPath";

const Login = () => {
  const [_isLoading, _setLoading] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { handleSubmit, control } = useForm();

  const _validate = (data: any) => {
    _setLoading(true);
  };

  return (
    <Box m='20px'>
      <Paper
        elevation={2}
        sx={{ display: "flex", width: "500px", p: 5, flexDirection: "column" }}
      >
        <Box>
          <Typography
            variant='h3'
            color={colors.blueAccent[300]}
            fontWeight='bold'
            sx={{ m: "0 0 5px 0" }}
          >
            Login
          </Typography>
        </Box>
        <form
          autoComplete={"off"}
          onSubmit={handleSubmit(_validate)}
          noValidate
        >
          <Box mt={"20px"}>
            <InputController
              inputType='email'
              label='Email Address'
              inputProps={{
                name: "email",
                control: control,
                defaultValue: "",
                rules: {
                  required: {
                    value: true,
                    message: "Requried valid email address",
                  },
                },
              }}
            />
          </Box>
          <Box mt={"20px"}>
            <InputController
              inputType='password'
              label='Password'
              inputProps={{
                name: "password",
                control: control,
                defaultValue: "",
                rules: {
                  required: {
                    value: true,
                    message: "Required valid password",
                  },
                },
              }}
            />
          </Box>
          <Box
            mt={"20px"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <LoadingButton
              variant={"contained"}
              color={"primary"}
              type={"submit"}
              className='px-5'
              loading={_isLoading}
            >
              Pay Now
            </LoadingButton>
            <Link
              to='/'
              className='anchorLink'
              style={{ color: colors.blueAccent[300] }}
            >
              Forget Password
            </Link>
          </Box>
          <Box mt={"20px"}>
            <div style={{ fontWeight: "bolder", marginBottom: "5px" }}>
              Don't have a account
            </div>
            <Link
              to={routePath.auth.register}
              className='anchorLink'
              style={{ color: colors.blueAccent[300] }}
            >
              Create Account
            </Link>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
