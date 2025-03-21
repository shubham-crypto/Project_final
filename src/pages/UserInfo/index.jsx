import React from "react";
import { Text, Heading, Input,  Img } from "../../components";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

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
                <select 
                  name="gender" 
                  className="md:ml-[42px] md:w-[14%] w-full h-[40px] px-4 rounded-md text-white-a700 bg-blue_gray-800 text-white font-bold"
                  >
                  <option value="" disabled selected>Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
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
                <select
                  name="preferred_one"
                  className="w-[64%] h-[40px] px-4 rounded-md text-white-a700 bg-blue_gray-800 font-bold focus:outline-none"
                  >
                  <option value="" disabled selected>
                      Educational Qualification
                  </option>
                  <option value="high_school">High School</option>
                  <option value="bachelor">Bachelor's</option>
                  <option value="master">Master's</option>
                  <option value="phd">PhD</option>
              </select>
            </div>
          </div>
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
