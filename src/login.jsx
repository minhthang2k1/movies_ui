import { Form, Input, Button, Checkbox } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_KEY = "26370393c28fe739f97aa4e0322e030f";
// e5a20c1500c5707d6d3c3306169358b9bb1e1453

const LoginForm = () => {
  const history = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const tokenResponse = await axios.get(
        `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`
      );
      const requestToken = tokenResponse.data.request_token;

      const loginResponse = await axios.post(
        `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${API_KEY}&username=${values.username}&password=${values.password}&request_token=${requestToken}`
      );
      if (loginResponse.data.success === true) {
        const sessionIdResponse = await axios.post(
          `https://api.themoviedb.org/3/authentication/session/new?api_key=${API_KEY}&request_token=${requestToken}`
        );
        const sessionId = sessionIdResponse.data.session_id;

        localStorage.setItem("session_id", sessionId);
        history("/home");
      } else {
        form.setFields([
          {
            name: "password",
            errors: ["Tên đăng nhập hoặc mật khẩu không chính xác"],
          },
        ]);
      }
    } catch (error) {
      console.error(error);
      form.setFields([
        {
          name: "password",
          errors: ["Đã xảy ra lỗi trong quá trình đăng nhập"],
        },
      ]);
    }
  };

  return (
    <Form
      form={form}
      name="login"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Tên đăng nhập"
        name="username"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập tên đăng nhập!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Mật khẩu"
        name="password"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập mật khẩu!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Nhớ tôi</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Đăng nhập
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
