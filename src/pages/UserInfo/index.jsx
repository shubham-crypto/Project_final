import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Input, SelectBox, Img } from "../../components";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

const genderOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];

const contactOptions = [
  { label: "Email", value: "email" },
  { label: "Phone", value: "phone" },
];

const educationOptions = [
  { label: "High School", value: "highschool" },
  { label: "Bachelor's Degree", value: "bachelor" },
  { label: "Master's Degree", value: "master" },
  { label: "Ph.D.", value: "phd" },
];

export default function UserProfilePage() {
  return (
    <>
      <Header />
      <div className="w-full bg-gray-100 py-10 mt-24">
        <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
          <div className="flex justify-center items-center mb-8">
            <Img
              src="images/img_logo_civique.png"
              alt="Logo"
              className="h-10 w-10 mr-4"
            />
            <Heading
              size="headingxl"
              as="h1"
              className="!font-merriweathersans !text-black-900 text-4xl font-bold text-center"
            >
              User Profile
            </Heading>
          </div>
          <div className="grid md:grid-cols-1 grid-cols-2 gap-6 mb-8">
            <div className="flex flex-col items-center">
              <Img
                src="images/profilePic.png"
                alt="Profile"
                className="h-40 w-40 rounded-full object-cover mb-4"
              />
              <button className="bg-yellow-500  py-2 px-4 rounded hover:bg-yellow-400">
                Change Profile Picture
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              <Input
                shape="square"
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full"
              />
              <Input
                shape="square"
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full"
              />
              <Input
                shape="square"
                type="text"
                name="userName"
                placeholder="Username"
                className="w-full"
              />
              <Input
                shape="square"
                type="email"
                name="email"
                placeholder="Email"
                className="w-full"
              />
              <Input
                shape="square"
                type="tel"
                name="tel"
                placeholder="Phone Number"
                className="w-full"
                pattern="[0-9]{10}"
                style={{
                  outline: "none",
                  border: "none",
                  boxShadow: "none",
                }}
                onFocus={(e) => {
                  e.target.style.outline = "none";
                  e.target.style.border = "none";
                  e.target.style.boxShadow = "none";
                }}
              />
              <div className="flex justify-between gap-5">
                <SelectBox
                  shape="round"
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      alt="Arrow Down"
                      className="h-[16px] w-[16px] pl-1"
                    />
                  }
                  getOptionLabel={(e) => (
                    <>
                      <div className="flex items-center">
                        <span>{e.label}</span>
                      </div>
                    </>
                  )}
                  name="gender"
                  placeholder="Gender"
                  options={genderOptions}
                  className="bg-gray-200 h-[40px] pl-4 w-1/2"
                />
                <SelectBox
                  shape="round"
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      alt="Arrow Down"
                      className="h-[16px] w-[16px] pl-1"
                    />
                  }
                  getOptionLabel={(e) => (
                    <>
                      <div className="flex items-center">
                        <span>{e.label}</span>
                      </div>
                    </>
                  )}
                  name="contactMethod"
                  placeholder="Preferred Contact Method"
                  options={contactOptions}
                  className="bg-gray-200 h-[40px] pl-4 w-1/2"
                />
              </div>
            </div>
          </div>
          <div className="mb-8">
            <Heading
              size="headinglg"
              as="h2"
              className="!font-inter !text-black-900 mb-4"
            >
              Address Details
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                shape="square"
                name="city"
                placeholder="City"
                className="w-full"
              />
              <Input
                shape="square"
                name="state"
                placeholder="State"
                className="w-full"
              />
              <Input
                shape="square"
                name="country"
                placeholder="Country"
                className="w-full"
              />
              <Input
                shape="square"
                name="pinCode"
                placeholder="PIN Code"
                className="w-full"
              />
              <SelectBox
                shape="round"
                indicator={
                  <Img
                    src="images/img_arrowdown.svg"
                    alt="Arrow Down"
                    className="h-[16px] w-[16px] pl-1"
                  />
                }
                getOptionLabel={(e) => (
                  <>
                    <div className="flex items-center">
                      <span>{e.label}</span>
                    </div>
                  </>
                )}
                name="education"
                placeholder="Educational Qualification"
                options={educationOptions}
                className="w-full bg-gray-200 h-[40px] pl-4"
              />
            </div>
          </div>
          {/* <div className="mb-8"> */}
          {/* <Heading
              size="headinglg"
              as="h3"
              className="!font-inter !text-black-900 mb-4"
            >
              Terms and Policies
            </Heading> */}
          {/* <div className="flex flex-col space-y-4"> */}
          {/* <label className="flex items-center gap-2">
                                <input type="checkbox" name="terms" className="form-checkbox" />
                                <Text size="textmd" className="text-black-900">
                                    I agree to the Terms of Service
                                </Text>
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" name="cookiePolicy" className="form-checkbox" />
                                <Text size="textmd" className="text-black-900">
                                    I agree to the Cookie Policy
                                </Text>
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" name="privacyPolicy" className="form-checkbox" />
                                <Text size="textmd" className="text-black-900">
                                    I agree to the Privacy Policy
                                </Text>
                            </label> */}
          {/* </div> */}
          {/* </div> */}
          <div className="flex justify-between items-center">
            <button className="bg-yellow-500  text-white py-2 px-4 rounded hover:bg-yellow-400">
              Update Profile
            </button>
            <Text size="textmd" as="p" className="!font-inter !text-black-900">
              <span className="text-black-900">Want to log out?&nbsp;</span>
              <Link
                to="/"
                className="font-semibold text-black-900 inline"
              >
                Logout
              </Link>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
