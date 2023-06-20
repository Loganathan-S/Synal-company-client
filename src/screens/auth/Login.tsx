import { useState } from "react";
import { Box, Paper, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useForm, SubmitHandler } from "react-hook-form";
import { FieldValues } from 'react-hook-form/dist/types';
import InputController from "../../components/formControlHelper/InputController";
import { Link, useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import { routePath } from "../../routerPath";
import { useSnackbar } from 'notistack';
import { ILogin } from '../../interfaces/auth.interface'
import { authModel } from '../../models/auth.model'
import { setFormErrors } from "../../services/helperService";
import { useQueryClient } from "@tanstack/react-query";

const Login = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [_isLoading, _setLoading] = useState(false);
  const queryClient = useQueryClient()
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  const _userLogin = authModel.UserLogin()
  const { handleSubmit, control, setError, reset } = useForm();

  const _validate: SubmitHandler<FieldValues> = (data: FieldValues) => {
    _setLoading(true);
    const loginData: ILogin = data as ILogin;
    setTimeout(() => { 
      _userLogin.mutate(loginData, {
        onSuccess: (data: any) => {
          reset()
          localStorage.setItem('userDetails', encodeURIComponent(JSON.stringify(data)))
          queryClient.invalidateQueries(['userDetails'])
          navigate(routePath.home)
          _setLoading(false);
        },
        onError: (error: any) => {
          if (error.response?.data.status === 'unprocessable') {
            setFormErrors(error, setError);
          } else {
            enqueueSnackbar('Something when error', { variant: 'error', autoHideDuration: 3000, preventDuplicate: true });
          }
          _setLoading(false);
        },
      })
    }, 2000)
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
            Login form
          </Typography>
        </Box>
        <form
          autoComplete={"off"}
          onSubmit={handleSubmit(_validate)}
          noValidate
        >
          <Box mt={"20px"}>
            <InputController
              inputType='text'
              label='Email Address or User ID'
              id='keyUser'
              inputProps={{
                name: "keyUser",
                control: control,
                defaultValue: "",
                rules: {
                  required: {
                    value: true,
                    message: "Requried valid email address or User ID",
                  },
                },
              }}
            />
          </Box>
          <Box mt={"20px"}>
            <InputController
              inputType='password'
              label='Password'
              id='keyPassword'
              inputProps={{
                name: "keyPassword",
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
              Login
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
