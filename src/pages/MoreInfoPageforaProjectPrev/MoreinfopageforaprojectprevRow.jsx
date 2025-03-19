import { Button, Text, Heading } from "../../components";
import React from "react";

export default function MoreinfopageforaprojectprevRow() {
  return (
    <div>
      <div className="flex justify-center bg-blue_gray-800_cc py-14 md:py-5">
        <div className="container-xs mt-[108px] flex justify-center md:p-5">
          <div className="flex w-full flex-col items-start gap-6">
            <Heading size="heading3x1" as="h1" className="capitalize">
              Project One Details
            </Heading>
            <Text as="p" className="leading-[26px]">
              <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus ut condimentum <br />
                feugiat at urna eu donec. Blandit suscipit ir company
              </>
            </Text>
            <div className="flex gap-4 self-stretch">
              <Button color="gray_600" shape="square" className="min-w-[300px] font-bold">
                Participate in the community
              </Button>
              <Button color="gray_600" shape="square" className="min-w-[156px] font-bold">
                Map View
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}