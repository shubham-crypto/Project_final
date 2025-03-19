import { Helmet } from "react-helmet";
import { Text, Button, CheckBox, Heading, Input, SelectBox, Img } from "../../components/index.jsx";
import React from "react";
import { Link } from "react-router-dom";

const dropDownOptions = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
];

export default function RegisterPageColouredPage() {
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
                                        <Input shape="square" type="text" name="firstName" placeholder={`First Name`} className="w-full" />
                                        <Input shape="square" type="text" name="lastName" placeholder={`Last Name`} className="w-full" />
                                    </div>
                                    <div className="flex gap-[42px] flex-col md:flex-row">
                                        <Input shape="square" type="text" name="userName" placeholder={`Username`} className="w-full" />
                                        <Input shape="square" type="email" name="email" placeholder={`Email Id`} className="w-full" />
                                    </div>
                                    <div className="flex gap-[42px] flex-col md:flex-row">
                                        <Input shape="square" type="password" name="password" placeholder={`Password`} className="w-full" />
                                        <Input
                                            shape="square"
                                            type="password"
                                            name="confirmpassword"
                                            placeholder={`Confirm Password`}
                                            className="w-full" />
                                    </div>
                                    <div className="flex items-end flex-col md:flex-row">
                                        <Input
                                            shape="square"
                                            type="number"
                                            name="phoneNumber"
                                            placeholder={`Phone Number`}
                                            className="flex-grow self-center"
                                        />
                                        <SelectBox
                                            shape="round"
                                            indicator={<Img src="images/img_arrowdown.svg" alt="Arrow Down" className="h-[16px] w-[16px] pl-1" />}
                                            getOptionLabel={(e) => (
                                                <>
                                                    <div className="flex items-center">
                                                        {/* <Img src="images/img_lefticon.svg" alt="Lefticon" className="h-[30px] w-[20px]" /> */}
                                                        <span>{e.label}</span>
                                                    </div>
                                                </>
                                            )}
                                            name="value"
                                            placeholder={`Gender`}
                                            options={dropDownOptions}
                                            className="md:ml-[42px] md:w-[14%] gap-1 font-roboto font-bold ml-0 w-full bg-blue_gray-800_01 h-[30px] pl-4"
                                        />
                                        <SelectBox
                                            shape="round"
                                            indicator={<Img src="images/img_arrowdown.svg" alt="Arrow Down" className="h-[16px] w-[16px] pl-1" />}
                                            getOptionLabel={(e) => (
                                                <>
                                                    <div className="flex items-center">
                                                        {/* <Img src="images/img_lefticon.svg" alt="Lefticon" className="h-[30px] w-[30px]" /> */}
                                                        <span>{e.label}</span>
                                                    </div>
                                                </>
                                            )}

                                            name="preferred"
                                            placeholder={"Preferred Contact Method"}
                                            options={dropDownOptions}
                                            className="md:ml-[18px] md:w-[32%] gap-1 font-roboto font-bold ml-0 w-full bg-blue_gray-800_01 h-[30px] pl-4"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="md:mr-2 mt-12 flex md:w-[92%] flex-col items-start gap-[18px] mr-0  w-full p-5 md:p-0">
                                <Heading size="headinglg" as="h3" className="!font-inter !text-black-900">
                                    Address Details
                                </Heading>
                                <div className="flex flex-col gap-5 self-stretch">
                                    <div className="flex gap-[42px] flex-col md:flex-row">
                                        <Input shape="square" name="address" placeholder={`City`} className="w-full" />
                                        <Input shape="square" name="state_one" placeholder={`State`} className="w-full" />
                                    </div>
                                    <div className="flex gap-[42px] flex-col md:flex-row">
                                        <Input shape="square" name="country" placeholder={`Country`} className="w-full" />
                                        <div className="flex w-full items-center justify-between gap-5">
                                            <Input shape="square" name="pincode_one" placeholder={`PIN`} className="w-[26%] !text-white !placeholder:text-white" />
                                                            {/* <Img src="images/img_lefticon.svg" alt="Lefticon" className="h-[30px] w-[30px] bg-green-700" /> */}
                                            <SelectBox
                                                shape="round"
                                                indicator={
                                                    <Img src="images/img_arrowdown.svg" alt="Arrow Down" className="h-[16px] w-[16px] pl-1" />}
                                                getOptionLabel={(e) => (
                                                    <>
                                                        <div className="flex items-center">
                                                            <span>{e.label}</span>
                                                        </div>
                                                    </>
                                                )}
                                                name="preferred_one"
                                                placeholder={`Educational Qualification`}
                                                options={dropDownOptions}
                                                className="h-[30px] w-[64%] gap-1 font-roboto font-bold bg-blue_gray-800_01 pl-4"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <Input
                                    shape="square"
                                    name="how one"
                                    placeholder={"How did you hear about us?"}
                                    className="self-stretch"
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
                                        <div className="flex justify-between gap-5 self-stretch flex-col md:flex-row">
                                            <CheckBox
                                                name="check"
                                                label="I agree to the Terms of Service"
                                                id="check"
                                                className="gap-1.5 font-roboto text-[14px] text-black-900"
                                            />
                                            <CheckBox
                                                name="check_one"
                                                label="I agree to the Cookie Policy"
                                                id="checkone"
                                                className="gap-1.5 font-roboto text-[14px] text-black-900"
                                            />
                                            <CheckBox
                                                name="check two"
                                                label="I agree to the Privacy Policy"
                                                id="checktwo"
                                                className="gap-1.5 font-roboto text-[14px] text-black-900"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    color="blue_gray_800_01"
                                    size="md"
                                    className="mt-[26px] min-w-[116px] rounded-[5px] font-roboto font-bold tracking-[0.64px]"
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
