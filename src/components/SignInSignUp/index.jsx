// import "./styles.css";
import { Button } from "antd";
import { useState } from "react";
import { useHistory } from "react-router";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";

const Wrapper = styled.div`
  width: 60vw;
  height: 60vh;
  position: relative;
  z-index: 0;
  display: flex;
  margin: 200px auto;
  @media screen and (max-width: 1440px) {
    height: 90vh;
    width: 75vw;
  }
`;

const LabelCol = styled(animated.div)`
  position: absolute;
  z-index: 5;
  height: 100%;
  width: 33%;
  background: url("https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  /* background-color: #3ab299; */
`;

const Blur = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  height: 100%;
  width: 100%;
  /* background-color: rgba(0, 128, 128, 0.5);
  backdrop-filter: blur(4px); */
`;

const InputCol = styled(animated.div)`
  position: absolute;
  height: 100%;
  width: 67%;
  background-color: white;
  display: flex;
  justify-content: center;
`;

const FormWrapper = styled.div`
  position: relative;
  flex: 1;
`;

export default function SignInSignup() {
  const history = useHistory();
  const [isSignIn, setSignIn] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: isSignIn ? 0 : 1,
    config: { duration: 500 },
  });

  const handleToggle = () => {
    isSignIn ? history.push("./register") : history.push("./login");
    setSignIn(!isSignIn);
  };

  return (
    <Wrapper>
      <LabelCol
        style={{
          marginLeft: x.to({ range: [0, 1], output: ["0%", "67%"] }),
          width: x.to({
            range: [0, 0.55, 1],
            output: ["33%", "60%", "33%"],
          }),
        }}
      >
        <Blur>
          <Button
            type="default"
            shape="round"
            onClick={handleToggle}
            size="large"
            style={{
              background: isSignIn ? "#ca0533" : "#FF8728",
              color: "white",
              border: "1px solid white",
              width: 200,
              height: 50,
              fontWeight: 600,
            }}
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </Button>
        </Blur>
      </LabelCol>
      <InputCol
        style={{
          marginLeft: x.to({ range: [0, 1], output: ["33%", "0%"] }),
        }}
      >
        <FormWrapper>
          <SignInForm
            style={{
              opacity: x.to({ range: [0, 1], output: [1, 0] }),
              zIndex: x.to({ range: [0, 1], output: [1, 0] }),
            }}
          />
          <SignUpForm
            style={{
              opacity: x.to({ range: [0, 1], output: [0, 1] }),
              zIndex: x.to({ range: [0, 1], output: [0, 1] }),
            }}
          />
        </FormWrapper>
      </InputCol>
    </Wrapper>
  );
}
