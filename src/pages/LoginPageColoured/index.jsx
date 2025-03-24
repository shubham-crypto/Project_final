import { Text, Img, Heading, Button, Input } from "../../components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";

export default function LoginPageColouredPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // Stores email
  const [password, setPassword] = useState("");

  // Handle Login API Call
  const handleSignIn = async () => {
    try {
      // const response = await axios.post("http://localhost:5000/api/auth/login", {
      //   email,
      //   password,
      // });
  
      // If login is successful
      //login(response.data); // Assuming login function saves user data
      navigate("/home"); // Redirect to home page
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };
  return (
    <>
      <div className="flex flex-col md:flex-row p-5 w-full h-screen md:items-start md:justify-center md:gap-2.5 bg-white-a700 md:px-14 md:py-16">
        <div className="flex h-16 w-16">
          <Img
            src="images/img_logo_civique.png"
            alt="Logocivique"
            className="w-full object-cover h-auto"
          />
        </div>
        <div className="flex flex-col md:flex-row md:flex-1 items-center px-2.5 ml-[20px] w-full">
          <div className="h-[100%] md:w-[58%] w-full">
            <Img src="images/img_image.svg" alt="Image" className="h-full w-full object-contain" />
          </div>

          {/* Login Form */}
          <div className="flex md:w-[52%] flex-col space-y-8 items-start p-4 w-full">
            <Heading size="headingxl" as="h1" className="ml-5 !font-opensans !text-black-900 md:ml-0">
              Login to Your Account!
            </Heading>

            <div className="w-full">
              <div className="flex flex-col items-center">
                <div className="flex flex-col items-start gap-1.5 self-stretch">
                  <Heading size="headings" as="h2" className="!font-inter !font-bold !text-black-900">
                    Enter your Email Address
                  </Heading>
                  <Input
                    color="black 900"
                    variant="outline"
                    shape="square"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@gmail.com"
                    className="w-[62%] border border-gray-400"
                  />
                </div>

                {/* Password Input */}
                <div className="mt-[30px] self-stretch">
                  <div className="flex flex-col items-start">
                    <Heading size="headings" as="h3" className="!font-inter !font-bold !text-black-900">
                      Enter your Password
                    </Heading>
                    <Input
                      color="black 900"
                      variant="outline"
                      shape="square"
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="w-[62%] !text-gray-500 border border-gray-400"
                    />
                  </div>
                </div>

                {/* Sign In Button */}
                <Button
                  color="blue_gray_800_01"
                  size="md"
                  className="ml-[114px] mt-6 min-w-[110px] self-start rounded-[5px] font-roboto font-bold tracking-[0.64px] md:ml-0"
                  onClick={handleSignIn}
                >
                  Sign in
                </Button>
              </div>
            </div>

            <div className="mx-[46px] flex flex-col items-start md:mx-0">
              <Heading size="headings" as="h5" className="ml-[76px] !font-inter !font-bold !text-gray-800 md:ml-0">
                Sign in With
              </Heading>
              <div className="ml-[66px] mt-5 flex items-center gap-[37px] md:ml-0">
                <div className="flex h-[28px] flex-col items-center bg-[url(/public/images/img_group_36.svg)] bg-cover bg-no-repeat px-2 md:h-auto">
                  <Img src="images/img_facebook.svg" alt="facebook" className="mt-0 h-[30px]" />
                </div>
                <Img src="images/img_devicon_google.svg" alt="google" className="h-[28px] w-[28px]" />
              </div>

              {/* Register Link */}
              <Text size="textlg" as="p" className="mt-1.5 !font-inter !text-black-900 md:ml-0">
                <span className="text-black-900">Don't have an account?&nbsp;</span>
                <a href="/register">
                  <span className="font-semibold text-black-900">Sign up</span>
                </a>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
