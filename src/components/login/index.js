import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions";

export let userName = "";
export let passWord = "";

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { TokenLogin, SessionIdResponse } = useSelector(
    (state) => state.infoMovies
  );
  useEffect(() => {
    dispatch(actions.postTokenLogin());
  }, [userName, passWord]);
  console.log(TokenLogin, SessionIdResponse);

  const [state, setState] = useState(false);
  const onFinish = async (values) => {
    state === false ? setState(true) : setState(false);
    userName = values.username;
    passWord = values.password;
    if (TokenLogin === null) {
      localStorage.setItem("session_id", SessionIdResponse);
      TokenLogin.success === false
        ? alert("username or password incorrect")
        : navigate("/");
    } else {
      alert("username or password incorrect");
    }
    return userName, passWord;
    // try {
    //   if (TokenLogin === true) {
    //     if (TokenLogin.success === true) {
    //       const sessionIdResponse = await axios.post(
    //         `${BASE_URL}/authentication/session/new?api_key=${API_KEY}&request_token=${RequestToken}`
    //       );
    //       const sessionId = sessionIdResponse.data.session_id;
    //       console.log(sessionId);
    //       localStorage.setItem("session_id", sessionId);
    //       navigate("/");
    //     } else {

    //     }
    //   }
    // } catch (error) {
    //   console.error(error);
    //   form.setFields([
    //     {
    //       name: "password",
    //       errors: ["Đã xảy ra lỗi trong quá trình đăng nhập"],
    //     },
    //   ]);
    // }
  };

  return (
    <Form
      name="login"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Login;
