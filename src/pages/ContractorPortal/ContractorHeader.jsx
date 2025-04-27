import React from 'react'
import { Heading, Text } from '../../components';

export const ContractorHeader = () => {
    return (
        <div className="self-stretch">
        <div className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 via-red-600 to-yellow-500 md:py-36 py-5">

            <div className="container-xs mt-5 flex flex-col items-start gap-6 md:p-5">
              <Heading size="heading3x1" as="h1" className="capitalize">
                Contractor Section
              </Heading>
              <Text as="p" className="leading-[26px]">
                <>
                  Collaborate with Expert Contractors: Explore Top Talent for Your Urban Development <br />
                  Projects and Build a Better Future Together
                </>
              </Text>
            </div>
          </div>
        </div>
      );
}
