import { Text, Button, TextArea, Heading, Img } from "../../components";
import React from "react";
export default function MoreinfopageforaprojectprevColumnheading1() {
  return (
    <div className="mt-[84px] flex flex-col items-center gap-[50px] px-14 md:px-5  ">
      <Heading
        size="headingxl"
        as="h2"
        className="bg-gradient-to-r from-yellow-400 to-yellow-200 md:px-[34px] py-3.5 !text-gray-900_03 px-5"
      >
        Discussion Forum
      </Heading>
      <div className=" ml-1 md:mr-10 md:h-[1404px]  mx-0 h-auto  ">
        
        <div className="m-auto flex  flex-1 flex-col  items-start gap-4 rounded-[5px] border border-dashed border-deep_purple-q200 p-4">
          <div className="flex  justify-center bg-white-a700 p-2 w-full ">
            <div className="mt-3 flex w-full flex-col gap-5">
              <div className="flex items-center flex-col md:flex-row">
                <div className="flex flex-1 flex-col items-start md:self-stretch">
                  <div className="flex items-center self-stretch flex-col md:flex-row">
                    <Img
                      src="images/img_avatar_goes_here.png"
                      alt="Avatargoes"
                      className="h-[24px] rounded-[12px] object-cover w-full"
                    />
                    <div className="flex flex-1 items-center justify-center px-2.5 md:self-stretch">
                      <Heading
                        size="headingxs"
                        as="p"
                        className="! font-inter !text-blue_gray-600"
                      >
                        Michael Busch
                      </Heading>
                      <Text
                        size="textxs"
                        as="p"
                        className="ml-9 !font-inter !text-blue_gray-300"
                      >
                        published Flashcard
                      </Text>

                      <div className="flex flex-1 px-9 sm:px-5">
                        {/* <Img
                          src="images/img_mobile.svg"
                          alt="Mobile"
                          className="h-[16px]"
                        /> */}
                        <Text
                          size="textxs"
                          as="p"
                          className="!font-inter !text-blue_gray-300"
                        >
                          6 days ago
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Heading
                    as="h5"
                    className="mt-3 !font-inter tracking-[-0.30px] !text-blue_gray-900"
                  >
                    Ecosystems and Communities
                  </Heading>
                  <Heading
                    size="headings"
                    as="h6"
                    className="md:w-[90%] !font-inter leading-6 !text-blue_gray-600 w-full"
                  />
                  <span className="font-normal text-blue_gray-600">
                    Dummy comment -&nbsp;
                  </span>
                  <span className="font-normal text-blue_gray-600">
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings...
                  </span>
                  {/* </Heading> */}
                </div>
                <div className="flex md:w-[20%] justify-center md:self-end rounded-1g border-[0.5px] border-solid border-indigo-50 bg-white-a700 w-full self-auto">
                  <div className="w-full">
                    <Img
                      src="images/img_screenshot_2022_06_28.png"
                      alt="Screenshot2022"
                      className="md:h-[88px] w-full rounded-1g object-cover h-auto"
                    />
                    <div className="relative mt-[-14px] flex justify-center gap-1.5 rounded-b1-1g rounded-br-1g bg-indigo-60">
                      <img
                        src="images/img_glyphs_flashcards_fill.svg"
                        alt="Glyphs"
                        className="h-[16px]"
                      />
                      <Text size="textxs" as="p" className="!font-inter">
                        42 Flashcards
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-5 flex md:ml-0 md:flex-col">
                <div className="flex w-full">
                  <Button
                    size="xs"
                    shape="round"
                    className="min-w-[40px] font-lato"
                  >
                    <img
                      src={"/reactionimage/image.png"}
                      alt=""
                      className="h-[20px] w-[20px]"
                    />
                    4
                  </Button>
                  <Button
                    size="xs"
                    shape="round"
                    className="m1-2 min-w-[40px] font-lato"
                  >
                    <img
                      src={"/reactionimage/image2.png"}
                      alt=""
                      className="h-[20px] w-[20px]"
                    />
                    2
                  </Button>
                  <Button
                    size="xs"
                    shape="round"
                    className="m1-2 min-w-[40px] font-lato"
                  >
                    <img
                      src={"/reactionimage/image3.png"}
                      alt=""
                      className="h-[20px] w-[20px]"
                    />
                    1
                  </Button>
                </div>
                <div className="flex w-full items-center justify-end">
                  <Text
                    as="p"
                    className="self-start !font-inter !text-[14px] !font-medium !text-blue_gray-600"
                  >
                    2 comments
                  </Text>
                  <div className="flex w-[12%] justify-end">
                    <div className="flex w-full justify-center">
                      <Img
                        src="images/img_avatar_goes_here_24x30.png"
                        alt="Avatargoes"
                        className="h-[24px] rounded-[12px] object-cover"
                      />
                      <Img
                        src="images/img_avatar_goes_here_1.png"
                        alt="Avatargoes"
                        className="relative ml-[-10px] h-[24px] rounded-[12px] object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex  flex-col gap-3 border-b border-solid border-indigo-50 bg-white-a700 py-2 w-full ">
            <div className="flex flex-col gap-3 rounded-1g bg-gray-100_01 p-2 ">
              <div className="flex items-center justify-center flex-col md:flex-row ">
                <Img
                  src="images/img_avatar_goes_here.png"
                  alt="Avatargoes"
                  className="h-[24px] rounded-[12px] object-cover w-full"
                />
                <div className="flex flex-1 items-center self-start px-2.5 ">
                  <Heading
                    size="headingxs"
                    as="p"
                    className="!font-inter !text-blue_gray-600"
                  >
                    Michael Busch
                  </Heading>
                  <Text
                    size="textxs"
                    as="p"
                    className="ml-[34px] !font-inter !text-blue_gray-300"
                  >
                    published Flashcard
                  </Text>
                  {/* <Img
                    src="images/img_mobile.svg"
                    alt="Mobile"
                    className="ml-[34px] h-[16px]"
                  /> */}
                  <Text
                    size="textxs"
                    as="p"
                    className="!font-inter !text-blue_gray-300"
                  >
                    6 days ago
                  </Text>
                </div>
              </div>
              <div>
                <div className="flex items-center flex-col  md:flex-row ">
                  <div className="flex flex-1 flex-col items-start gap-0.5 md: self-stretch">
                    <Heading
                      as="h5"
                      className="!font-inter tracking-[-0.30px] !text-blue_gray-900"
                    >
                      Ecosystems and Communities
                    </Heading>
                    <Heading
                      size="headings"
                      as="h6"
                      className="md:w-[90%] !font-inter leading-6 !text-blue_gray-600 w-full"
                    />
                    <span className="font-normal text-blue_gray-600">
                      Dummy comment -&nbsp;
                    </span>
                    <span className="font-normal text-blue_gray-600">
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings...
                    </span>
                  </div>
                  <div className="flex md:w-[20%] justify-center rounded-1g border-[0.5px] border-solid border-indigo-50 bg-white-a700 w-full ">
                    <div className="w-full">
                      <Img
                        src="images/img_screenshot_2022_06_28_88x214.png"
                        alt="Screenshot2022"
                        className="md:h-[88px] w-full rounded-lg object-cover h-auto"
                      />
                      <div className="relative mt-[-14px] flex justify-center gap-1.5 rounded-bl-1g rounded-br-lg bg-indigo-600 p-1">
                        <Img
                          src="images/img_glyphs_flashcards_fill.svg"
                          alt="Glyphs"
                          className="h-[16px]"
                        />
                        <Text size="textxs" as="p" className="!font-inter">
                          42 Flashcards
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-[30px] mr-2.5 flex md:mx-0 md:flex-col ">
              <div className="flex flex-1 gap-[30px] md:self-stretch">
                <div className="flex gap-2">
                  T
                  <Button
                    size="xs"
                    shape="round"
                    className="min-w-[40px] font-lato"
                  >
                    <img
                      src={"/reactionimage/image.png"}
                      alt=""
                      className="h-[20px] w-[20px]"
                    />
                    4
                  </Button>
                  <Button
                    size="xs"
                    shape="round"
                    className="min-w-[40px] font-lato"
                  >
                    <img
                      src={"/reactionimage/image2.png"}
                      alt=""
                      className="h-[20px] w-[20px]"
                    />
                    2
                  </Button>
                  <Button
                    size="xs"
                    shape="round"
                    className="min-w-[40px] font-lato"
                  >
                    <img
                      src={"/reactionimage/image3.png"}
                      alt=""
                      className="h-[20px] w-[20px]"
                    />
                    1
                  </Button>
                </div>
                <Text
                  size="textx1"
                  as="p"
                  className="rounded-[12px] bg-gray-100 py-0.5 pl-0.5 pr-2 !font-slackicons !text-blue_gray-600"
                ></Text>
              </div>
              <div className="flex w-[48%] items-center justify-end md:w-full">
                <Text
                  as="p"
                  className="self-start !font-inter !text-[14px] !font-medium !text-blue_gray-600"
                >
                  2 comments
                </Text>
                <div className="flex w-[14%] justify-end">
                  <div className="flex w-full justify-center">
                    <Img
                      src="images/img_avatar_goes_here_24x30.png"
                      alt="Avatargoes"
                      className="h-[24px] rounded-[12px] object-cover"
                    />
                    <Img
                      src="images/img_avatar_goes_here_1.png"
                      alt="Avatargoes"
                      className="relative ml-[-10px] h-[24px] rounded-[12px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-14 flex  flex-col gap-[22px] bg-white-a700 w-full ">
            <div className="flex flex-col gap-5 bg-white-a700 p-2">
              <div className="mt-3 flex flex-col gap-3">
                <div className="flex items-center justify-center flex-col md:flex-row">
                  <Img
                    src="images/img_avatar_goes_here.png"
                    alt="Avatargoes"
                    className="h-[24px] rounded-[12px] object-cover w-full"
                  />
                  <div className="flex flex-1 items-center self-start px-2.5 sm:self-stretch">
                    <Heading
                      size="headingxs"
                      as="p"
                      className="!font-inter !text-blue_gray-600"
                    >
                      Michael Busch
                    </Heading>
                    <Text
                      size="textxs"
                      as="p"
                      className="ml-[34px] !font-inter !text-blue_gray-300"
                    >
                      published Flashcard
                    </Text>
                    {/* <Img
                      src="images/img_mobile.svg"
                      alt="Mobile"
                      className="ml-[34px] h-[16px]"
                    /> */}
                    <Text
                      size="textxs"
                      as="p"
                      className="!font-inter !text-blue_gray-300"
                    >
                      6 days ago
                    </Text>
                  </div>
                </div>
                <div className="justify-content-end">
                  <div className="flex items-center flex-col md:flex-row">
                    <div className="flex flex-1 flex-col items-start gap-0.5 md:self-stretch">
                      <Heading
                        as="h5"
                        className="!font-inter tracking-[-0.30px] !text-blue_gray-900"
                      >
                        Ecosystems and Communities
                      </Heading>
                      <Heading
                        size="headings"
                        as="h6"
                        className="md:w-[90%] !font-inter leading-6 !text-blue_gray-600 w-full"
                      />
                      <span className="font-normal text-blue_gray-600">
                        Dummy comment -&nbsp;
                      </span>
                      <span className="font-normal text-blue_gray-600">
                        But I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account of the system, and
                        expound the actual teachings...
                      </span>
                    </div>
                    <div className="flex md:w-[20%] justify-center rounded-1g border-[0.5px] border-solid border-indigo-50 bg-white-a700 w-full">
                      <div className="w-full">
                        <Img
                          src="images/img_screenshot_2022_06_28_88x214.png"
                          alt="Screenshot2022"
                          className="h-[88px] w-full rounded-lg object-cover md:h-auto"
                        />
                        <div className="relative mt-[-14px] flex justify-center gap-1.5 rounded-bl-1g rounded-br-lg bg-indigo-600 p-1">
                          <Img
                            src="images/img_glyphs_flashcards_fill.svg"
                            alt="Glyphs"
                            className="h-[16px]"
                          />
                          <Text size="textxs" as="p" className="!font-inter">
                            42 Flashcards
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:ml-5 flex items-center justify-center ml-0">
                <div className="flex flex-1 gap-2">
                  <Button
                    size="xs"
                    shape="round"
                    className="min-w-[40px] font-lato"
                  >
                    <img
                      src={"/reactionimage/image.png"}
                      alt=""
                      className="h-[20px] w-[20px]"
                    />
                    4
                  </Button>
                  <Button
                    size="xs"
                    shape="round"
                    className="min-w-[40px] font-lato"
                  >
                    <img
                      src={"/reactionimage/image2.png"}
                      alt=""
                      className="h-[20px] w-[20px]"
                    />
                    2
                  </Button>
                  <Button
                    size="xs"
                    shape="round"
                    className="min-w-[40px] font-lato"
                  >
                    <img
                      src={"/reactionimage/image3.png"}
                      alt=""
                      className="h-[20px] w-[20px]"
                    />
                    1
                  </Button>
                </div>
                <Text
                  as="p"
                  className="self-start !font-inter !text-[14px] !font-medium !text-blue_gray-600"
                >
                  2 comments
                </Text>
              </div>
            </div>
            <div>
              <div className="md:ml-2.5 flex flex-col items-start ml-0 ">
                <div className="flex items-center self-stretch flex-col md:flex-row">
                  <Img
                    src="images/img_avatar_goes_here.png"
                    alt="Avatargoes"
                    className="h-[24px] rounded-[12px] object-cover w-full"
                  />
                  <div className="flex flex-1 items-center justify-center px-2.5 md:self-stretch">
                    <Heading
                      size="headingxs"
                      as="p"
                      className="!font-inter !text-blue_gray-600"
                    >
                      Michael Busch
                    </Heading>
                    <div className="flex flex-1 md:px-9 px-5">
                      <Text
                        size="textxs"
                        as="p"
                        className="!font-inter !text-blue_gray-300"
                      >
                        {" "}
                        6 days ago
                      </Text>
                    </div>
                  </div>
                </div>
                <Heading
                  size="headings"
                  as="h6"
                  className="md:ml-[42px] mt-2 w-full !font-inter leading-6 !text-blue_gray-900 ml-0"
                />
                <span className="font-normal text-blue_gray-900">
                  Dummy comment -&nbsp;
                </span>
                <span className="font-normal text-blue_gray-900">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings...
                </span>

                <Text
                  size="textx1"
                  as="p"
                  className="md:ml-[30px] mt-9 flex h-[24px] w-[24px] items-center justify-center rounded-[12px] bg-gray-100 text-center !font-slackicons !text-blue_gray-600 ml-0"
                >
                </Text>
              </div>
              <div className="md:ml-2.5 flex flex-col items-start ml-0">
                <div className="flex items-center self-stretch flex-col md:flex-row">
                  <Img
                    src="images/img_avatar_goes_here.png"
                    alt="Avatargoes"
                    className="h-[24px] rounded-[12px] object-cover w-full"
                  />
                  <div className="flex flex-1 items-center justify-center px-2.5 md:self-stretch">
                    <Heading
                      size="headingxs"
                      as="p"
                      className="!font-inter !text-blue_gray-600"
                    >
                      Michael Busch
                    </Heading>
                    <div className="flex flex-1 md:px-9 px-5">
                      {/* <Img
                        src="images/img_mobile.svg"
                        alt="Mobile"
                        className="h-[16px]"
                      /> */}
                      <Text
                        size="textxs"
                        as="p"
                        className="!font-inter !text-blue_gray-300"
                      >
                        6 days ago
                      </Text>
                    </div>
                  </div>
                </div>
                <Heading
                  size="headings"
                  as="h6"
                  className="ml-[42px] mt-2 w-full !font-inter leading-6 !text-blue_gray-900 md:ml-0"
                />
                <span className="font-normal text-blue_gray-900">
                  Dummy comment -&nbsp;
                </span>
                <span className="font-normal text-blue_gray-900">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings...
                </span>

                <Text
                  size="textx1"
                  as="p"
                  className="md:ml-[30px] mt-9 flex h-[24px] w-[24px] items-center justify-center rounded-[12px] bg-gray-100 text-center !font-slackicons !text-blue_gray-600 ml-0"
                >
                </Text>
              </div>
            </div>

            <div className="bg-gray-100_01 p-3 ">
              <div className="flex flex-col gap-3.5">
                <div className="md:mx-1 flex items-center gap-2.5 mx-0">
                  <Img
                    src="images/img_avatar_goes_here_24x40.png"
                    alt="Avatargoes"
                    className="h-[24px] rounded-[12px] object-cover"
                  />
                  <Heading
                    size="headingxs"
                    as="p"
                    className="self-start !font-inter !text-blue_gray-600"
                  >
                    Drew Koski
                  </Heading>
                </div>
                <TextArea
                  shape="round"
                  name="textinput"
                  placeholder={`What are you thoughts?`}
                  className="font-inter text-blue_gray-300"
                />
                <div className="flex items-center gap-[53px]">
                  <Button
                    color="blue_A700_01"
                    size="sm"
                    className="min-w-[90px] rounded-1g font-inter font-medium"
                  >
                    Reply
                  </Button>
                  <Text
                    size="textlg"
                    as="p"
                    className="! font-inter !text-blue_gray-600"
                  >
                    Cancel
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
