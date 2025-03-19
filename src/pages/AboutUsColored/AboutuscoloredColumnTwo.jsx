import { ChipView, Heading } from "../../components/index.jsx";
import React from "react";

export default function AboutuscoloredColumnTwo() {
  const [chipOptions4, setChipOptions4] = React.useState([
    { value: 1, label: `fb` },
    { value: 2, label: `ig` },
    { value: 3, label: `tw` },
    { value: 4, label: `be` },
  ]);
  const [selectedChipOptions4, setSelectedChipOptions4] = React.useState([]);
  const [chipOptions3, setChipOptions3] = React.useState([
    { value: 1, label: `fb` },
    { value: 2, label: `ig` },
    { value: 3, label: `tw` },
    { value: 4, label: `be` },
  ]);
  const [selectedChipOptions3, setSelectedChipOptions3] = React.useState([]);
  const [chipOptions2, setChipOptions2] = React.useState([
    { value: 1, label: `fb` },
    { value: 2, label: `ig` },
    { value: 3, label: `tw` },
    { value: 4, label: `be` },
  ]);
  const [selectedChipOptions2, setSelectedChipOptions2] = React.useState([]);
  const [chipOptions1, setChipOptions1] = React.useState([
    { value: 1, label: `fb` },
    { value: 2, label: `ig` },
    { value: 3, label: `tw` },
    { value: 4, label: `be` },
  ]);
  const [selectedChipOptions1, setSelectedChipOptions1] = React.useState([]);
  const [chipOptions, setChipOptions] = React.useState([
    { value: 1, label: `fb` },
    { value: 2, label: `ig` },
    { value: 3, label: `tw` },
    { value: 4, label: `be` },
  ]);
  const [selectedChipOptions, setSelectedChipOptions] = React.useState([]);

  return (
    <div className="mt-40 flex flex-col items-center">
      <div className="container-xs flex flex-col gap-14 md:p-5 sm:gap-7">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <Heading
            size="heading2xl"
            as="h2"
            className="!text-[48px] !font-bold capitalize !text-blue_gray-900_01 md:!text-[44px] sm:!text-[38px]"
          >
            Meet City Council
          </Heading>
          <Heading
            as="h3"
            className="mb-2.5 self-end !text-[24px] capitalize !text-deep_orange-a700 md:!text-[22px]"
          >
            Explore All
          </Heading>
        </div>
        <div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 flex-col md:flex-row">
              <div className="w-full bg-gray-300_01">
                <img src="/images/Cimages/pic.jpg" alt="pic" className="" />
                <div className="flex flex-col items-center justify-center gap-[22px] bg-gray-900_02 py-8 px-5">
                  <Heading
                    as="h4"
                    className="!text-[24px] capitalize md:!text-[22px]"
                  >
                    Jono Sape
                  </Heading>
                  <ChipView
                    options={chipOptions}
                    setOptions={setChipOptions}
                    values={selectedChipOptions}
                    setValues={setSelectedChipOptions}
                    className="flex w-[88%] flex-wrap gap-4 justify-center"
                  >
                    {(option) => (
                      <React.Fragment key={option.index}>
                        {option.isSelected ? (
                          <div
                            onClick={option.toggle}
                            className="flex h-[40px] min-w-[40px] cursor-pointer flex-row items-center justify-center whitespace-pre-wrap rounded-[20px] border border-solid border-white-a700 bg-white-a700_33 px-2.5 text-center text-[16px] font-semibold capitalize text-white-a700"
                          >
                            <span>{option.label}</span>
                          </div>
                        ) : (
                          <div
                            onClick={option.toggle}
                            className="flex h-[40px] min-w-[40px] cursor-pointer flex-row items-center justify-center rounded-[20px] border border-solid border-white-a700 px-2.5 text-center text-[16px] font-semibold capitalize text-white-a700"
                          >
                            <span>{option.label}</span>
                          </div>
                        )}
                      </React.Fragment>
                    )}
                  </ChipView>
                </div>
              </div>
              <div className="w-full bg-gray-300_01">
                <img src="/images/Cimages/pic.jpg" alt="pic" className="" />
                <div className="flex flex-col items-center justify-center gap-[22px] bg-gray-900_02 py-8 px-5">
                  <Heading
                    as="h5"
                    className="!text-[24px] capitalize md:!text-[22px]"
                  >
                    Joni Zhak
                  </Heading>
                  <ChipView
                    options={chipOptions1}
                    setOptions={setChipOptions1}
                    values={selectedChipOptions1}
                    setValues={setSelectedChipOptions1}
                    className="flex w-[88%] flex-wrap gap-4 justify-center"
                  >
                    {(option) => (
                      <React.Fragment key={option.index}>
                        {option.isSelected ? (
                          <div
                            onClick={option.toggle}
                            className="flex h-[40px] min-w-[40px] cursor-pointer flex-row items-center justify-center whitespace-pre-wrap rounded-[20px] border border-solid border-white-a700 bg-white-a700_33 px-2.5 text-center text-[16px] font-semibold capitalize text-white-a700"
                          >
                            <span>{option.label}</span>
                          </div>
                        ) : (
                          <div
                            onClick={option.toggle}
                            className="flex h-[40px] min-w-[40px] cursor-pointer flex-row items-center justify-center rounded-[20px] border border-solid border-white-a700 px-2.5 text-center text-[16px] font-semibold capitalize text-white-a700"
                          >
                            <span>{option.label}</span>
                          </div>
                        )}
                      </React.Fragment>
                    )}
                  </ChipView>
                </div>
              </div>
              <div className="w-full bg-gray-300_01">
                <img src="/images/Cimages/pic.jpg" alt="pic" className="" />
                <div className="flex flex-col items-center justify-center gap-[22px] bg-gray-900_02 py-8 px-5">
                  <Heading
                    as="h6"
                    className="!text-[24px] capitalize md:!text-[22px]"
                  >
                    Bancilot Jack
                  </Heading>
                  <ChipView
                    options={chipOptions2}
                    setOptions={setChipOptions2}
                    values={selectedChipOptions2}
                    setValues={setSelectedChipOptions2}
                    className="flex w-[88%] flex-wrap gap-4 justify-center"
                  >
                    {(option) => (
                      <React.Fragment key={option.index}>
                        {option.isSelected ? (
                          <div
                            onClick={option.toggle}
                            className="flex h-[40px] min-w-[40px] cursor-pointer flex-row items-center justify-center whitespace-pre-wrap rounded-[20px] border border-solid border-white-a700 bg-white-a700_33 px-2.5 text-center text-[16px] font-semibold capitalize text-white-a700"
                          >
                            <span>{option.label}</span>
                          </div>
                        ) : (
                          <div
                            onClick={option.toggle}
                            className="flex h-[40px] min-w-[40px] cursor-pointer flex-row items-center justify-center rounded-[20px] border border-solid border-white-a700 px-2.5 text-center text-[16px] font-semibold capitalize text-white-a700"
                          >
                            <span>{option.label}</span>
                          </div>
                        )}
                      </React.Fragment>
                    )}
                  </ChipView>
                </div>
              </div>
            </div>
            <div className="flex gap-4 flex-col md:flex-row">
              <div className="w-full bg-gray-300_01">
                <img src="/images/Cimages/pic.jpg" alt="pic" className="" />
                <div className="flex flex-col items-center justify-center gap-6 bg-gray-900_02 py-8 px-5">
                  <Heading
                    as="h4"
                    className="!text-[24px] capitalize md:!text-[22px]"
                  >
                    Aurora Lee
                  </Heading>
                  <ChipView
                    options={chipOptions2}
                    setOptions={setChipOptions2}
                    values={selectedChipOptions2}
                    setValues={setSelectedChipOptions2}
                    className="flex w-[88%] flex-wrap gap-4 justify-center"
                  >
                    {(option) => (
                      <React.Fragment key={option.index}>
                        {option.isSelected ? (
                          <div
                            onClick={option.toggle}
                            className="flex h-[40px] min-w-[40px] cursor-pointer flex-row items-center justify-center whitespace-pre-wrap rounded-[20px] border border-solid border-white-a700 bg-white-a700_33 px-2.5 text-center text-[16px] font-semibold capitalize text-white-a700"
                          >
                            <span>{option.label}</span>
                          </div>
                        ) : (
                          <div
                            onClick={option.toggle}
                            className="flex h-[40px] min-w-[40px] cursor-pointer flex-row items-center justify-center rounded-[20px] border border-solid border-white-a700 px-2.5 text-center text-[16px] font-semibold capitalize text-white-a700"
                          >
                            <span>{option.label}</span>
                          </div>
                        )}
                      </React.Fragment>
                    )}
                  </ChipView>
                </div>
              </div>
              <div className="w-full bg-gray-300_01">
                <img src="/images/Cimages/pic.jpg" alt="pic" className="" />
                <div className="flex flex-col items-center justify-center gap-6 bg-gray-900_02 py-8 px-5">
                  <Heading
                    as="h4"
                    className="!text-[24px] capitalize md:!text-[22px]"
                  >
                    Brown Baker
                  </Heading>
                  <ChipView
                    options={chipOptions3}
                    setOptions={setChipOptions3}
                    values={selectedChipOptions3}
                    setValues={setSelectedChipOptions3}
                    className="flex w-[88%] flex-wrap gap-4 justify-center"
                  >
                    {(option) => (
                      <React.Fragment key={option.index}>
                        {option.isSelected ? (
                          <div
                            onClick={option.toggle}
                            className="flex h-[40px] min-w-[40px] cursor-pointer flex-row items-center justify-center whitespace-pre-wrap rounded-[20px] border border-solid border-white-a700 bg-white-a700_33 px-2.5 text-center text-[16px] font-semibold capitalize text-white-a700"
                          >
                            <span>{option.label}</span>
                          </div>
                        ) : (
                          <div
                            onClick={option.toggle}
                            className="flex h-[40px] min-w-[40px] cursor-pointer flex-row items-center justify-center rounded-[20px] border border-solid border-white-a700 px-2.5 text-center text-[16px] font-semibold capitalize text-white-a700"
                          >
                            <span>{option.label}</span>
                          </div>
                        )}
                      </React.Fragment>
                    )}
                  </ChipView>
                </div>
              </div>
              <div className="w-full bg-gray-300_01">
                <img src="/images/Cimages/pic.jpg" alt="pic" className="" />
                <div className="flex flex-col items-center justify-center gap-6 bg-gray-900_02 py-8 px-5">
                  <Heading
                    as="h4"
                    className="!text-[24px] capitalize md:!text-[22px]"
                  >
                    Michael Rick
                  </Heading>
                  <ChipView
                    options={chipOptions4}
                    setOptions={setChipOptions4}
                    values={selectedChipOptions4}
                    setValues={setSelectedChipOptions4}
                    className="flex w-[88%] flex-wrap gap-4 justify-center"
                  >
                    {(option) => (
                      <React.Fragment key={option.index}>
                        {option.isSelected ? (
                          <div
                            onClick={option.toggle}
                            className="flex h-[40px] min-w-[40px] cursor-pointer flex-row items-center justify-center whitespace-pre-wrap rounded-[20px] border border-solid border-white-a700 bg-white-a700_33 px-2.5 text-center text-[16px] font-semibold capitalize text-white-a700"
                          >
                            <span>{option.label}</span>
                          </div>
                        ) : (
                          <div
                            onClick={option.toggle}
                            className="flex h-[40px] min-w-[40px] cursor-pointer flex-row items-center justify-center rounded-[20px] border border-solid border-white-a700 px-2.5 text-center text-[16px] font-semibold capitalize text-white-a700"
                          >
                            <span>{option.label}</span>
                          </div>
                        )}
                      </React.Fragment>
                    )}
                  </ChipView>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
