import { Helmet } from "react-helmet";
import { Text, Button, CheckBox, Heading, Input, SelectBox, Img } from "../../components/index.jsx";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function RegisterPageColouredPage() {
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        confirmpassword: "",
        phoneNumber: "",
        gender: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
        education: "",
        referral: "",
        termsOfService: false,
        privacyPolicy: false, 
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSignUp = async () => {
        if(!formData.email){
            toast.error("Email is required");
            return;
        }
        if (formData.password !== formData.confirmpassword) {
            toast.error("Passwords do not match");
            return;
        }
        if (!formData.termsOfService || !formData.privacyPolicy) {
            toast.error("You must agree to the Terms of Service and Privacy Policy");
            return;
        }
        alert(formData)
        try {
            const response = await axios.post("http://localhost:5000/api/auth/register", formData);
            alert("Registration successful!");
            navigate("/"); // Redirect to login page
        } catch (error) {
            alert(error.response?.data?.message || "Registration failed");
        }
    };
    return (
        <>
            <div className="w-full bg-white-a700 py-[30px] ">
                <div className="flex mb-[46px] md:flex-row  gap-[50px] flex-col ">
                    <div className="flex md:w-[38%] flex-col md:gap-48 w-full ">
                        <Img
                            src="images/img_logo_civique.png"
                            alt="Logocivique"
                            className="md:ml-16 h-[62px] w-[14%] object-contain ml-0"
                        />
                        <div className="mb-[200px] ">
                            <Img
                                src="images/img_image_left_side.png"
                                alt="Imageleftside"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col items-start self-stretch p-5 md:p-0">
                        <div className="flex md:w-[94%] flex-col items-center rounded-bl-[40px] rounded-tl-[40px] bg-white-a700 w-full">
                            <Heading size="headingxl" as="h1" className="mt-[42px] !font-merriweathersans !text-black-900">
                                Create your account!
                            </Heading>
                            <Heading size="headinglg" as="h2" className="mt-10  self-start !font-inter !text-black-900 pl-7">
                                Personal Details
                            </Heading>
                            <div className="md:mr-2 mt-[18px] flex md:w-[92%] justify-center  mr-0  w-full p-5 md:p-0">
                                <div className="flex w-full flex-col gap-5 ">
                                    <div className="flex gap-[42px] flex-col md:flex-row">
                                        <Input shape="square" type="text" name="firstName" placeholder={`First Name`} className="w-full" onChange={handleChange} />
                                        <Input shape="square" type="text" name="lastName" placeholder={`Last Name`} className="w-full" onChange={handleChange} />
                                    </div>
                                    <div className="flex gap-[42px] flex-col md:flex-row">
                                        <Input shape="square" type="text" name="userName" placeholder={`Username`} className="w-full" onChange={handleChange} />
                                        <Input shape="square" type="email" name="email" placeholder={`Email Id`} className="w-full" onChange={handleChange} />
                                    </div>
                                    <div className="flex gap-[42px] flex-col md:flex-row">
                                        <Input shape="square" type="password" name="password" placeholder={`Password`} className="w-full" onChange={handleChange} />
                                        <Input
                                            shape="square"
                                            type="password"
                                            name="confirmpassword"
                                            placeholder={`Confirm Password`}
                                            className="w-full" onChange={handleChange} />
                                    </div>
                                    <div className="flex items-end flex-col md:flex-row">
                                        <Input
                                            shape="square"
                                            type="number"
                                            name="phoneNumber"
                                            placeholder={`Phone Number`}
                                            className="flex-grow self-center" onChange={handleChange}
                                        />
                                        <select 
                                        name="gender" 
                                        className="md:ml-[42px] md:w-[14%] w-full h-[40px] px-4 text-white-a700 bg-blue_gray-800 rounded-md bg-blue-gray-800 text-white font-bold"
                                        onChange={handleChange}
                                        >
                                        <option value="" disabled selected>Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                        </select>

                                    </div>
                                </div>
                            </div>
                            <div className="md:mr-2 mt-12 flex md:w-[92%] flex-col items-start gap-[18px] mr-0  w-full p-5 md:p-0">
                                <Heading size="headinglg" as="h3" className="!font-inter !text-black-900">
                                    Address Details
                                </Heading>
                                <div className="flex flex-col gap-5 self-stretch">
                                    <div className="flex gap-[42px] flex-col md:flex-row">
                                        <Input shape="square" name="address" placeholder={`City`} className="w-full" onChange={handleChange} />
                                        <Input shape="square" name="state_one" placeholder={`State`} className="w-full" onChange={handleChange} />
                                    </div>
                                    <div className="flex gap-[42px] flex-col md:flex-row">
                                        <Input shape="square" name="country" placeholder={`Country`} className="w-full" onChange={handleChange} />
                                        <div className="flex w-full items-center justify-between gap-5">
                                            <Input shape="square" name="pincode_one" placeholder={`PIN`} className="w-[26%] !text-white !placeholder:text-white" onChange={handleChange} />
                                                            {/* <Img src="images/img_lefticon.svg" alt="Lefticon" className="h-[30px] w-[30px] bg-green-700" /> */}
                                            <select
                                                name="preferred_one"
                                                className="w-[64%] h-[40px] px-4 rounded-md bg-blue-gray-800 text-white-a700 bg-blue_gray-800 font-bold focus:outline-none"
                                                onChange={handleChange}
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
                                </div>
                                <Input
                                    shape="square"
                                    name="how one"
                                    placeholder={"How did you hear about us?"}
                                    className="self-stretch" onChange={handleChange}
                                />
                            </div>
                            <div className="mr-2 mt-12 flex w-[92%] flex-col items-start md:mr-0 md:w-full md:p-5">
                                <div className="self-stretch">
                                    <div className="flex flex-col items-start gap-2">
                                        <a href="#">
                                            <Heading size="headinglg" as="h4" className="!font-inter !text-black-900">
                                                Terms and conditions
                                            </Heading>
                                        </a>
                                        <div className="flex gap-5 self-stretch flex-col md:flex-row">
                                            <label className="flex items-center gap-2 text-black-900">
                                                <input
                                                    type="checkbox"
                                                    name="termsOfService"
                                                    checked={formData.termsOfService}
                                                    onChange={handleChange}
                                                />
                                                I agree to the Terms of Service
                                            </label>
                                            
                                            <label className="flex items-center gap-2 text-black-900">
                                                <input
                                                    type="checkbox"
                                                    name="privacyPolicy"
                                                    checked={formData.privacyPolicy}
                                                    onChange={handleChange}
                                                />
                                                I agree to the Privacy Policy
                                            </label>
                                        </div>

                                    </div>
                                </div>
                                <Button
                                    color="blue_gray_800_01"
                                    size="md"
                                    className="mt-[26px] min-w-[116px] rounded-[5px] font-roboto font-bold tracking-[0.64px]"
                                    onClick={handleSignUp}
                                >
                                    Register
                                </Button>
                                <Text size="textmd" as="p" className="mt-3 !font-inter ! text-black-900">
                                    <span className="text-black-900">Do you have an account?&nbsp;</span>
                                    <Link to="/" className="font-semibold text-black-900 inline ">Sign in</Link>
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
