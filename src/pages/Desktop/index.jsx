import React from "react";

import { Button, Img, Line, List, Text } from "components";

const DesktopPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-epilogue items-center justify-end mx-auto w-full">
        <header className="flex flex-col h-[98px] md:h-auto items-center justify-center p-2.5 md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[202px] items-center justify-start w-auto md:w-full">
            <div className="flex flex-col items-center justify-start w-[4%] md:w-full">
              <Img
                className="h-[47px] md:h-auto object-cover w-full"
                src="images/img_screenshot20230807.png"
                alt="screenshot20230"
              />
            </div>
            <div className="bg-gray-50 flex flex-col items-center justify-start p-3.5 rounded-[24px] w-[47%] md:w-full">
              <ul className="flex sm:flex-col flex-row gap-[74px] sm:hidden items-start justify-start mb-0.5 w-auto sm:w-full common-row-list">
                <li>
                  <a
                    href="javascript:"
                    className="hover:font-semibold text-base text-indigo-500"
                  >
                    <Text size="txtEpilogueRomanSemiBold16">Home</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="hover:font-semibold text-base text-gray-800 hover:text-indigo-500"
                  >
                    <Text size="txtEpilogueRomanMedium16">About us</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="hover:font-semibold text-base text-gray-800 hover:text-indigo-500"
                  >
                    <Text size="txtEpilogueRomanMedium16">Services</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="hover:font-semibold text-base text-gray-800 hover:text-indigo-500"
                  >
                    <Text size="txtEpilogueRomanMedium16">Contact Us</Text>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
              <div className="bg-white-A700 flex flex-row gap-1.5 h-12 md:h-auto items-center justify-start px-4 py-1.5 rounded-[12px] w-[85px]">
                <Text
                  className="text-gray-800_01 text-sm w-auto"
                  size="txtEpilogueRomanRegular14"
                >
                  EN
                </Text>
                <Img
                  className="h-4 w-4"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
              <Button className="cursor-pointer font-medium leading-[normal] min-w-[172px] text-base text-center">
                Schedule a Call
              </Button>
            </div>
          </div>
        </header>
        <div className="flex flex-col mt-[26px] md:px-5 relative w-full">
          <div className="md:h-[705px] h-[752px] mx-auto w-full">
            <Img
              className="h-[679px] ml-auto mr-[49px] object-cover rounded-[33px] w-[77%]"
              src="images/img_pexelscanvastudio3153201.png"
              alt="pexelscanvastud"
            />
            <div className="absolute bg-gradient  flex flex-col gap-12 md:h-auto h-full inset-[0] items-start justify-center m-auto max-w-[1440px] md:px-10 sm:px-5 px-[60px] py-[135px] w-full">
              <div className="flex flex-col font-robotoflex gap-5 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-orange-300 text-xl tracking-[2.00px] w-auto"
                  size="txtRobotoFlexSemiBold20"
                >
                  TECH SERVICES{" "}
                </Text>
                <div className="flex flex-col font-epilogue gap-[34px] items-start justify-start w-auto sm:w-full">
                  <Text
                    className="leading-[80.00px] max-w-[490px] md:max-w-full md:text-5xl text-[64px] text-gray-800"
                    size="txtEpilogueRomanMedium64"
                  >
                    TechSynergy: Innovate, Create, Elevate
                  </Text>
                  <Text
                    className="text-blue_gray-700 text-xl w-auto"
                    size="txtEpilogueRomanMedium20"
                  >
                    Unlocking Possibilities, One Code at a Time
                  </Text>
                </div>
              </div>
              <Button
                className="cursor-pointer font-epilogue font-medium leading-[normal] min-w-[172px] text-base text-center"
                color="green_400"
              >
                See projects
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-[45px] h-[520px] md:h-auto items-center justify-center max-w-[1439px] mt-[-72px] mx-auto w-full z-[1]">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-gray-800 w-auto"
              size="txtEpilogueRomanMedium32"
            >
              <span className="text-gray-800 font-epilogue text-left font-medium">
                We have multidisciplinary teams to meet any
              </span>
              <span className="text-blue-700 font-epilogue text-left font-medium">
                {" "}
                challenge.
              </span>
            </Text>
            <div className="bg-white-A700 flex flex-col items-center justify-start p-8 sm:px-5 rounded-[35px] shadow-bs w-[94%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[95%] md:w-full">
                <div className="flex flex-col items-center justify-center w-auto md:w-full">
                  <List
                    className="sm:flex-col flex-row md:gap-10 gap-[105px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col gap-[35px] items-start justify-center w-auto">
                      <Img
                        className="h-[50px] md:h-auto object-cover w-[50px]"
                        src="images/img_monitor.png"
                        alt="monitor"
                      />
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-gray-800 w-auto"
                          size="txtEpilogueRomanMedium28"
                        >
                          Front-end
                        </Text>
                        <Text
                          className="leading-[24.00px] max-w-[329px] md:max-w-full text-base text-blue_gray-700"
                          size="txtEpilogueRomanRegular16"
                        >
                          Our frontend developers understand the delicate
                          balance between aesthetics and functionality.{" "}
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[35px] items-start justify-center w-auto">
                      <Img
                        className="h-[50px] md:h-auto object-cover w-[50px]"
                        src="images/img_simcard.png"
                        alt="simcard"
                      />
                      <div className="flex flex-col gap-2 items-start justify-center w-auto">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-gray-800 w-auto"
                          size="txtEpilogueRomanMedium28"
                        >
                          Back-end
                        </Text>
                        <Text
                          className="leading-[24.00px] max-w-[344px] md:max-w-full text-base text-blue_gray-700"
                          size="txtEpilogueRomanRegular16"
                        >
                          Our backend developers are the architects of
                          efficiency and security. They design and build the
                          databases andAPIs.
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[35px] items-start justify-center w-auto">
                      <Img
                        className="h-[50px] md:h-auto object-cover w-[50px]"
                        src="images/img_driver.png"
                        alt="driver"
                      />
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-gray-800 w-auto"
                          size="txtEpilogueRomanMedium28"
                        >
                          Data Analysts
                        </Text>
                        <Text
                          className="leading-[24.00px] max-w-[329px] md:max-w-full text-base text-blue_gray-700"
                          size="txtEpilogueRomanRegular16"
                        >
                          Our data analytics team is a blend of mathematicians,
                          statisticians, and technology enthusiasts.
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[1135px] md:h-[1262px] sm:h-[2385px] justify-end md:px-5 relative w-full">
          <Img
            className="absolute bottom-[38%] h-[184px] object-cover right-[27%] rounded-[22px]"
            src="images/img_vector4.png"
            alt="vectorFour"
          />
          <Img
            className="h-[184px] mb-[194px] ml-[356px] mt-auto object-cover rounded-[22px]"
            src="images/img_vector4.png"
            alt="vectorFive"
          />
          <div className="absolute flex flex-col md:gap-10 gap-[79px] md:h-auto h-full inset-[0] items-center justify-center m-auto max-w-[1439px] w-full">
            <div className="flex md:flex-col flex-row gap-[18px] items-start justify-start max-w-[841px] w-full">
              <Img
                className="sm:flex-1 h-[81px] md:h-auto object-cover rounded-[10px] w-[91px] sm:w-full"
                src="images/img_vector6.png"
                alt="vectorSix"
              />
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <Text
                  className="leading-[60.00px] max-w-[731px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-gray-800"
                  size="txtEpilogueRomanMedium40"
                >
                  Empowering Your Digital Vision: Our Comprehensive Tech
                  Services.
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <div className="md:gap-5 gap-[52px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col gap-[35px] items-start justify-start p-[27px] sm:px-5 rounded-[35px] hover:shadow-bs shadow-bs hover:w-full w-full">
                  <Img
                    className="h-[50px] w-[50px]"
                    src="images/img_thumbsup.svg"
                    alt="thumbsup"
                  />
                  <div className="flex flex-col gap-[19px] items-start justify-start mb-[11px] w-auto">
                    <Text
                      className="leading-[40.00px] max-w-[327px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-gray-800"
                      size="txtEpilogueRomanMedium28"
                    >
                      Custom SoftwareDevelopment
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[329px] md:max-w-full text-base text-blue_gray-700"
                      size="txtEpilogueRomanRegular16"
                    >
                      <span className="text-blue_gray-700 font-epilogue text-left font-normal">
                        Create{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-blue_gray-700 font-epilogue text-left font-normal underline"
                      >
                        custom software
                      </a>
                      <span className="text-blue_gray-700 font-epilogue text-left font-normal">
                        {" "}
                        tailored for your unique needs, including{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-blue_gray-700 font-epilogue text-left font-normal underline"
                      >
                        front-end
                      </a>
                      <span className="text-blue_gray-700 font-epilogue text-left font-normal">
                        , and core{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-blue_gray-700 font-epilogue text-left font-normal underline"
                      >
                        back-end
                      </a>
                      <span className="text-blue_gray-700 font-epilogue text-left font-normal">
                        {" "}
                        technology.
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col md:gap-10 gap-[76px] items-start justify-start p-[27px] sm:px-5 rounded-[35px] hover:shadow-bs shadow-bs hover:w-full w-full">
                  <Img
                    className="h-[47px] ml-0.5 md:ml-[0] mt-0.5 w-[47px]"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <div className="flex flex-col gap-[19px] items-start justify-start mb-[11px] ml-0.5 md:ml-[0] w-auto">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-gray-800 w-auto"
                      size="txtEpilogueRomanMedium28"
                    >
                      QA and Testing
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[329px] md:max-w-full text-base text-blue_gray-700"
                      size="txtEpilogueRomanRegular16"
                    >
                      <span className="text-blue_gray-700 font-epilogue text-left font-normal">
                        Create{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-blue_gray-700 font-epilogue text-left font-normal underline"
                      >
                        custom software
                      </a>
                      <span className="text-blue_gray-700 font-epilogue text-left font-normal">
                        {" "}
                        tailored for your unique needs, including{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-blue_gray-700 font-epilogue text-left font-normal underline"
                      >
                        front-end
                      </a>
                      <span className="text-blue_gray-700 font-epilogue text-left font-normal">
                        , and core{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-blue_gray-700 font-epilogue text-left font-normal underline"
                      >
                        back-end
                      </a>
                      <span className="text-blue_gray-700 font-epilogue text-left font-normal">
                        {" "}
                        technology.
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col md:gap-10 gap-[75px] items-start justify-start p-[27px] sm:px-5 rounded-[35px] hover:shadow-bs shadow-bs hover:w-full w-full">
                  <Img
                    className="h-[50px] w-[50px]"
                    src="images/img_television.svg"
                    alt="television"
                  />
                  <div className="flex flex-col gap-[19px] h-32 md:h-auto items-start justify-start mb-[13px] w-auto">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-gray-800 w-auto"
                      size="txtEpilogueRomanMedium28"
                    >
                      AI and Data Science
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[329px] md:max-w-full text-base text-blue_gray-700"
                      size="txtEpilogueRomanRegular16"
                    >
                      <span className="text-blue_gray-700 font-epilogue text-left font-normal">
                        Use leading{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-blue_gray-700 font-epilogue text-left font-normal underline"
                      >
                        AI, machine learning
                      </a>
                      <span className="text-blue_gray-700 font-epilogue text-left font-normal">
                        , and data engineering technologies to unlock business
                        value.
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col md:gap-10 gap-[75px] items-start justify-start p-[27px] sm:px-5 rounded-[35px] shadow-bs hover:w-full w-full">
                  <Img
                    className="h-[50px] w-[50px]"
                    src="images/img_settings_deep_orange_400.svg"
                    alt="settings"
                  />
                  <div className="flex flex-col gap-[19px] items-center justify-start mb-[11px] w-auto">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-gray-800 w-auto"
                      size="txtEpilogueRomanMedium28"
                    >
                      UX/UI Design
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[329px] md:max-w-full text-base text-blue_gray-700"
                      size="txtEpilogueRomanRegular16"
                    >
                      <span className="text-blue_gray-700 font-epilogue text-left font-normal">
                        Create beautiful, pixel-perfect, and easy-to-use{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-blue_gray-700 font-epilogue text-left font-normal underline"
                      >
                        designs
                      </a>
                      <span className="text-blue_gray-700 font-epilogue text-left font-normal">
                        {" "}
                        that delight your end users.
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col gap-[35px] items-start justify-start p-[27px] sm:px-5 rounded-[35px] shadow-bs hover:w-full w-full">
                  <Img
                    className="h-[46px]"
                    src="images/img_thumbsup_indigo_a200.svg"
                    alt="thumbsup"
                  />
                  <div className="flex flex-col gap-[19px] items-start justify-start mb-[15px] w-auto">
                    <Text
                      className="leading-[40.00px] max-w-[327px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-gray-800"
                      size="txtEpilogueRomanMedium28"
                    >
                      Mobile App Development
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[329px] md:max-w-full text-base text-blue_gray-700"
                      size="txtEpilogueRomanRegular16"
                    >
                      <span className="text-blue_gray-700 font-epilogue text-left font-normal">
                        Build performant, scalable, and secure{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-blue_gray-700 font-epilogue text-left font-normal underline"
                      >
                        mobile applications
                      </a>
                      <span className="text-blue_gray-700 font-epilogue text-left font-normal">
                        {" "}
                        for{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-blue_gray-700 font-epilogue text-left font-normal underline"
                      >
                        iOS
                      </a>
                      <span className="text-blue_gray-700 font-epilogue text-left font-normal">
                        {" "}
                        and{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-blue_gray-700 font-epilogue text-left font-normal underline"
                      >
                        Android
                      </a>
                      <span className="text-blue_gray-700 font-epilogue text-left font-normal">
                        {" "}
                        devices.
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col gap-[35px] items-start justify-start p-[27px] sm:px-5 rounded-[35px] shadow-bs hover:w-full w-full">
                  <Img
                    className="h-[50px] w-[50px]"
                    src="images/img_shapes.svg"
                    alt="shapes"
                  />
                  <div className="flex flex-col gap-[19px] items-start justify-start mb-[11px] w-auto">
                    <Text
                      className="leading-[40.00px] max-w-[327px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-gray-800"
                      size="txtEpilogueRomanMedium28"
                    >
                      Platform and Infrastructure
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[329px] md:max-w-full text-base text-blue_gray-700"
                      size="txtEpilogueRomanRegular16"
                    >
                      <span className="text-blue_gray-700 font-epilogue text-left font-normal">
                        Ensure applications are secure, fault tolerant and
                        highly available with our{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-blue_gray-700 font-epilogue text-left font-normal underline"
                      >
                        DevOps
                      </a>
                      <span className="text-blue_gray-700 font-epilogue text-left font-normal">
                        {" "}
                        and{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-blue_gray-700 font-epilogue text-left font-normal underline"
                      >
                        Security
                      </a>
                      <span className="text-blue_gray-700 font-epilogue text-left font-normal">
                        {" "}
                        engineers.
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50_01 flex flex-col items-center justify-start max-w-[1344px] mt-[97px] mx-auto md:px-5 py-9 rounded-[35px] w-full">
          <div className="flex flex-col items-center justify-start mb-3 w-full">
            <div className="flex flex-col gap-10 justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between ml-11 md:ml-[0] w-[72%] md:w-full">
                <Img
                  className="h-[81px] md:h-auto object-cover rounded-[10px]"
                  src="images/img_vector6.png"
                  alt="vectorSix_One"
                />
                <div className="flex flex-col gap-[21px] items-center justify-center max-w-[665px] md:mt-0 mt-[41px] w-full">
                  <div className="flex flex-col items-center justify-start max-w-[661px] w-full">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-gray-800 w-auto"
                        size="txtEpilogueRomanMedium40"
                      >
                        Trusted by Leading Organizations
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[25.00px] max-w-[561px] md:max-w-full text-blue_gray-700 text-center text-xl"
                    size="txtEpilogueRomanMedium20"
                  >
                    Our 4,000+ team has expertise in almost everyprogramming
                    language.
                  </Text>
                </div>
              </div>
              <div className="sm:h-[174px] h-[213px] md:h-[781px] relative w-full">
                <Button className="absolute bottom-[0] cursor-pointer font-medium inset-x-[0] leading-[normal] mx-auto text-base text-center w-[214px]">
                  Our full repertorie
                </Button>
                <div className="absolute flex md:flex-col flex-row md:gap-10 gap-[107.01px] inset-x-[0] items-center justify-center max-w-[1344px] mx-auto top-[0] w-full">
                  <Img
                    className="sm:flex-1 h-[174px] md:h-auto object-cover w-16 sm:w-full"
                    src="images/img_simpleiconssamsung.png"
                    alt="simpleiconssams"
                  />
                  <Img
                    className="h-[52px] w-[245px]"
                    src="images/img_logosmicrosoft.svg"
                    alt="logosmicrosoft"
                  />
                  <Img
                    className="h-14 w-[170px]"
                    src="images/img_logosgoogle.svg"
                    alt="logosgoogle"
                  />
                  <Img
                    className="h-[45px] w-[178px]"
                    src="images/img_vector.svg"
                    alt="vector"
                  />
                  <Img
                    className="h-[100px] w-[100px]"
                    src="images/img_simpleiconslg.svg"
                    alt="simpleiconslg"
                  />
                  <Img
                    className="sm:flex-1 h-[154px] md:h-auto object-cover w-12 sm:w-full"
                    src="images/img_simpleiconssony.png"
                    alt="simpleiconssony"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[1151px] md:h-[1402px] sm:h-[2599px] justify-end mt-[97px] md:px-5 relative w-full">
          <Img
            className="h-[184px] mb-[398px] ml-auto mt-auto object-cover rounded-[22px]"
            src="images/img_vector4.png"
            alt="vectorSix_Two"
          />
          <div className="absolute h-[1151px] md:h-auto inset-[0] m-auto overflow-auto w-[1440px] md:w-full">
            <div className="flex md:flex-col flex-row gap-[38px] items-start justify-start mx-auto w-[91%] md:w-full">
              <div className="md:h-[580px] h-[675px] relative w-[55%] md:w-full">
                <div className="absolute md:h-[580px] h-[675px] inset-y-[0] my-auto right-[0] w-[95%] md:w-full">
                  <Img
                    className="absolute bottom-[0] h-[545px] object-cover right-[0] rounded-[57px]"
                    src="images/img_vector4.png"
                    alt="vectorFour_One"
                  />
                  <Img
                    className="absolute h-[580px] left-[0] object-cover top-[0] w-[89%]"
                    src="images/img_intersect.png"
                    alt="intersect"
                  />
                </div>
                <Img
                  className="absolute h-[131px] left-[0] object-cover rounded-[15px] top-[19%]"
                  src="images/img_vector4.png"
                  alt="vectorFive_One"
                />
              </div>
              <div className="flex flex-col gap-[38px] items-center justify-start md:mt-0 mt-10 w-auto sm:w-full">
                <div className="flex flex-col items-start justify-start w-[553px] sm:w-full">
                  <Text
                    className="leading-[54.00px] max-w-[553px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-gray-800"
                    size="txtEpilogueRomanMedium40"
                  >
                    <>
                      We&#39;ve stopped counting. Over 500 brands count on us.
                    </>
                  </Text>
                </div>
                <Text
                  className="leading-[25.00px] max-w-[561px] md:max-w-full text-blue_gray-700 text-xl"
                  size="txtEpilogueRomanMedium20"
                >
                  Our 4,000+ team has expertise in almost everyprogramming
                  language.
                </Text>
              </div>
            </div>
            <div className="absolute bottom-[2%] flex flex-col font-dmsans md:gap-10 gap-[79px] items-center justify-start max-w-[1691px] md:px-10 px-12 sm:px-5 py-10 right-[-17%] w-full">
              <List
                className="sm:flex-col flex-row gap-[38.98px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start max-w-[1691px] w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 border border-blue_gray-50 border-solid flex sm:flex-1 flex-col h-[527px] md:h-auto items-start justify-start p-[34.65px] sm:px-5 rounded-[21px] shadow-bs1 w-auto sm:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Img
                      className="h-[34px] md:h-auto object-cover w-[151px] sm:w-full"
                      src="images/img_stars.png"
                      alt="stars"
                    />
                    <div className="flex flex-col items-center justify-start mt-[34px] w-full">
                      <div className="flex flex-col gap-[8.66px] items-start justify-start w-auto">
                        <Text
                          className="leading-[36.00px] max-w-[326px] md:max-w-full text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                          size="txtDMSansBold24"
                        >
                          <>
                            &quot;Exceptional Solutions, Exceeded
                            Expectations!&quot;
                          </>
                        </Text>
                        <Text
                          className="leading-[30.00px] max-w-[326px] md:max-w-full text-[17.32px] text-gray-600"
                          size="txtDMSansRegular1732"
                        >
                          <>
                            &quot;Working with Nearshore has been an absolute
                            pleasure. Their team took the time to understand our
                            unique needs and delivered a solution that not only
                            met but exceeded our expectations. Their expertise
                            and commitment to excellence are truly
                            commendable.&quot;
                          </>
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-gray-300 h-px mt-[35px] w-full" />
                    <div className="flex flex-row gap-[23px] items-center justify-start mt-[17px] w-[70%] md:w-full">
                      <Img
                        className="h-[33px] md:h-auto object-cover w-[33px]"
                        src="images/img_group.png"
                        alt="group"
                      />
                      <div className="flex flex-col items-center justify-start w-[76%]">
                        <div className="flex flex-col items-center justify-start w-auto">
                          <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                            <Text
                              className="sm:text-[16.21px] md:text-[18.21px] text-[20.21px] text-blue_gray-900"
                              size="txtDMSansBold2021"
                            >
                              Mary Johnson
                            </Text>
                            <Text
                              className="text-[13px] text-blue_gray-700"
                              size="txtDMSansBold13"
                            >
                              CEO of TechCraft Solutions
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-50 border-solid flex sm:flex-1 flex-col gap-[25px] h-[527px] md:h-auto items-start justify-start p-[34.65px] sm:px-5 rounded-[21px] shadow-bs1 w-[389px] sm:w-full">
                  <Img
                    className="h-[34px] md:h-auto object-cover w-[151px] sm:w-full"
                    src="images/img_stars.png"
                    alt="stars"
                  />
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[8.66px] items-start justify-start w-auto">
                      <Text
                        className="leading-[32.00px] max-w-[325px] md:max-w-full text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                        size="txtDMSansBold24"
                      >
                        <>
                          &quot;Transformed Our Business with Innovative
                          Tech!&quot;
                        </>
                      </Text>
                      <Text
                        className="leading-[30.00px] max-w-[326px] md:max-w-full text-[17.32px] text-gray-600"
                        size="txtDMSansRegular1732"
                      >
                        <>
                          &quot;We owe a significant part of our success to
                          [Company Name]. Their custom software solution
                          streamlined our processes, saving us time and
                          resources. Their team&#39;s dedication to innovation
                          and problem-solving is unmatched. We&#39;re grateful
                          for their partnership.&quot;
                        </>
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-gray-300 h-px w-full" />
                  <div className="flex flex-row gap-[13px] items-center justify-center w-auto">
                    <div className="flex flex-col h-[30px] md:h-auto items-center justify-start w-[23px]">
                      <Img
                        className="h-[27px] md:h-auto object-cover w-[23px]"
                        src="images/img_imagotipo1png.png"
                        alt="imagotipo1png"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start w-[83%]">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="sm:text-[16.21px] md:text-[18.21px] text-[20.21px] text-blue_gray-900"
                            size="txtDMSansBold2021"
                          >
                            Mark Williams
                          </Text>
                          <Text
                            className="text-[14.44px] text-gray-600"
                            size="txtDMSansBold1444"
                          >
                            COO of InnovateNow Inc
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-50 border-solid flex sm:flex-1 flex-col gap-[21px] h-[527px] md:h-auto items-start justify-start p-[34.65px] sm:px-5 rounded-[21px] shadow-bs1 w-auto sm:w-full">
                  <Img
                    className="h-[34px] md:h-auto object-cover w-[151px] sm:w-full"
                    src="images/img_stars.png"
                    alt="stars"
                  />
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[8.66px] items-start justify-start w-auto">
                      <Text
                        className="leading-[36.00px] max-w-[326px] md:max-w-full text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                        size="txtDMSansBold24"
                      >
                        <>
                          &quot;Sculpted User Experiences Beyond
                          Imagination!&quot;
                        </>
                      </Text>
                      <Text
                        className="leading-[30.00px] max-w-[326px] md:max-w-full text-[17.32px] text-gray-600"
                        size="txtDMSansRegular1732"
                      >
                        <>
                          &quot;The UI/UX design crafted by [Company Name]
                          turned our app into a masterpiece. The attention to
                          detail, intuitive design, and user-centric approach
                          have resulted in rave reviews from our customers.
                          Their design expertise has taken our brand to a whole
                          new level.&quot;
                        </>
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-gray-300 h-px w-full" />
                  <div className="flex flex-row gap-[18px] items-start justify-start w-auto">
                    <Img
                      className="h-11 w-[39px]"
                      src="images/img_dovetail.svg"
                      alt="dovetail"
                    />
                    <div className="flex flex-col items-center justify-start w-[74%]">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="sm:text-[16.21px] md:text-[18.21px] text-[20.21px] text-blue_gray-900"
                            size="txtDMSansBold2021"
                          >
                            Emily Clark
                          </Text>
                          <Text
                            className="text-[14.44px] text-gray-600"
                            size="txtDMSansBold1444"
                          >
                            CMO of Visionary Apps
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-50 border-solid flex sm:flex-1 flex-col gap-[21px] h-[527px] md:h-auto items-start justify-start p-[34.65px] sm:px-5 rounded-[21px] shadow-bs1 w-auto sm:w-full">
                  <Img
                    className="h-[34px] md:h-auto object-cover w-[156px] sm:w-full"
                    src="images/img_stars.png"
                    alt="stars"
                  />
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[8.66px] items-start justify-start w-auto">
                      <Text
                        className="leading-[36.00px] max-w-[326px] md:max-w-full text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                        size="txtDMSansBold24"
                      >
                        <>
                          &quot;Sculpted User Experiences Beyond
                          Imagination!&quot;
                        </>
                      </Text>
                      <Text
                        className="leading-[30.00px] max-w-[326px] md:max-w-full text-[17.32px] text-gray-600"
                        size="txtDMSansRegular1732"
                      >
                        <>
                          &quot;The UI/UX design crafted by [Company Name]
                          turned our app into a masterpiece. The attention to
                          detail, intuitive design, and user-centric approach
                          have resulted in rave reviews from our customers.
                          Their design expertise has taken our brand to a whole
                          new level.&quot;
                        </>
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-gray-300 h-px w-full" />
                  <div className="flex flex-row gap-[18px] items-start justify-start w-auto">
                    <Img
                      className="h-11 w-[39px]"
                      src="images/img_dovetail.svg"
                      alt="dovetail"
                    />
                    <div className="flex flex-col items-center justify-start w-[74%]">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="sm:text-[16.21px] md:text-[18.21px] text-[20.21px] text-blue_gray-900"
                            size="txtDMSansBold2021"
                          >
                            Emily Clark
                          </Text>
                          <Text
                            className="text-[14.44px] text-gray-600"
                            size="txtDMSansBold1444"
                          >
                            CMO of Visionary Apps
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
              <Img
                className="h-[65px] w-[148px]"
                src="images/img_frame4.svg"
                alt="frameFour"
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-50_01 flex flex-col items-center justify-center max-w-[1344px] mt-[15px] mx-auto md:px-5 py-[70px] rounded-[35px] w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-[41px] justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[66px] items-start justify-end md:ml-[0] ml-[271px] w-[72%] md:w-full">
                <Text
                  className="leading-[62.00px] sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-800 w-[84%] sm:w-full"
                  size="txtEpilogueRomanMedium40"
                >
                  <span className="text-gray-800 font-epilogue font-medium">
                    Choose Us: Your Path to Innovation and{" "}
                  </span>
                  <span className="text-blue-700 font-epilogue font-medium">
                    Success
                  </span>
                </Text>
                <Img
                  className="h-[81px] md:h-auto object-cover rounded-[10px] w-[91px] sm:w-full"
                  src="images/img_vector6.png"
                  alt="vectorEight"
                />
              </div>
              <div className="flex md:flex-col flex-row gap-[38px] items-start justify-start max-w-[1344px] w-full">
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-7 sm:px-5 rounded-[35px] shadow-bs w-[29%] md:w-full">
                  <div className="flex flex-col gap-[19px] items-start justify-start my-[9px] w-auto">
                    <Text
                      className="leading-[32.00px] max-w-[327px] md:max-w-full text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                      size="txtEpilogueRomanMedium24"
                    >
                      Expertise Across the Tech Spectrum
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[329px] md:max-w-full text-base text-blue_gray-700"
                      size="txtEpilogueRomanRegular16"
                    >
                      Our team consists of seasoned developers, designers, and
                      experts who excel in various areas of technology.
                    </Text>
                  </div>
                </div>
                <div className="overflow-x-auto w-[61%]">
                  <div className="gap-[38px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start overflow-auto w-auto">
                    <div className="bg-gradient1  flex flex-col items-center justify-start p-7 sm:px-5 rounded-[35px] shadow-bs w-full">
                      <div className="flex flex-col gap-[19px] items-start justify-start mb-[26px] mt-4 w-auto">
                        <Text
                          className="leading-[32.00px] max-w-[327px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtEpilogueRomanMedium24WhiteA700"
                        >
                          Proven Track Record of Success:
                        </Text>
                        <Text
                          className="leading-[24.00px] max-w-[329px] md:max-w-full text-base text-white-A700"
                          size="txtEpilogueRomanRegular16WhiteA700"
                        >
                          Our portfolio is a testament to our ability to deliver
                          impactful results.
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-col items-end justify-start p-[11px] rounded-[35px] shadow-bs w-full">
                      <div className="flex flex-col gap-[19px] items-start justify-start my-[22px] w-auto">
                        <Text
                          className="leading-[32.00px] max-w-[346px] md:max-w-full text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                          size="txtEpilogueRomanMedium24"
                        >
                          Collaborative Approach, Transparent Communication:
                        </Text>
                        <Text
                          className="leading-[24.00px] max-w-[329px] md:max-w-full text-base text-blue_gray-700"
                          size="txtEpilogueRomanRegular16"
                        >
                          We believe in working hand-in-hand with our clients.
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gradient2  flex flex-col items-center justify-start p-7 sm:px-5 rounded-[35px] shadow-bs w-full">
                      <div className="flex flex-col gap-[19px] items-start justify-start mb-[29px] mt-[13px] w-auto">
                        <Text
                          className="leading-[32.00px] max-w-[327px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtEpilogueRomanMedium24WhiteA700"
                        >
                          Tailored Solutions for Your Unique Needs:
                        </Text>
                        <Text
                          className="leading-[24.00px] max-w-[329px] md:max-w-full text-base text-white-A700"
                          size="txtEpilogueRomanRegular16WhiteA700"
                        >
                          We understand that no two projects are alike.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[147px] w-[45%] md:w-full">
                <Img
                  className="h-[81px] md:h-auto mt-[3px] object-cover rounded-[10px] w-[91px]"
                  src="images/img_vector6.png"
                  alt="vectorSeven"
                />
                <Img
                  className="h-[65px] w-[148px]"
                  src="images/img_frame3.svg"
                  alt="frameThree"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1539px] md:h-[674px] mt-[42px] md:px-5 relative w-full">
          <div className="absolute flex flex-col gap-[57px] h-[703px] md:h-auto inset-x-[0] items-center justify-center max-w-[1438px] mx-auto top-[0] w-full">
            <div className="h-[300px] relative w-[76%] md:w-full">
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[15%] w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                  <Img
                    className="h-[118px] md:h-auto mt-[45px] object-cover rounded-[15px]"
                    src="images/img_vector6.png"
                    alt="vectorTen"
                  />
                  <Img
                    className="h-[118px] md:h-auto mb-[45px] object-cover rounded-[15px]"
                    src="images/img_vector6.png"
                    alt="vectorNine"
                  />
                </div>
              </div>
              <div className="absolute flex inset-[0] m-auto w-[925px] md:w-full">
                <div className="flex my-auto w-[81%] md:w-full">
                  <div className="flex my-auto w-[77%] sm:w-full">
                    <div className="flex my-auto w-[69%] sm:w-full">
                      <div className="flex flex-col gap-[27px] items-center justify-start my-auto w-auto">
                        <Img
                          className="h-[209px] md:h-auto rounded-[50%] w-[209px]"
                          src="images/img_organization.png"
                          alt="organization"
                        />
                        <Text
                          className="leading-[32.00px] text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                          size="txtEpilogueRomanMedium24"
                        >
                          <>
                            Software
                            <br />
                            Developers
                          </>
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[27px] items-center justify-start ml-[-30px] my-auto w-auto z-[1]">
                        <Img
                          className="h-[209px] md:h-auto rounded-[50%] w-[209px]"
                          src="images/img_organization_209x209.png"
                          alt="organization_One"
                        />
                        <Text
                          className="leading-[32.00px] max-w-[139px] md:max-w-full text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                          size="txtEpilogueRomanMedium24"
                        >
                          QA Engineers
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[27px] items-center justify-start ml-[-30px] my-auto w-auto z-[1]">
                      <Img
                        className="h-[209px] md:h-auto rounded-[50%] w-[209px]"
                        src="images/img_organization_1.png"
                        alt="organization_Two"
                      />
                      <Text
                        className="leading-[32.00px] text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                        size="txtEpilogueRomanMedium24"
                      >
                        <>
                          UX <br />
                          Designers
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[27px] items-center justify-start ml-[-30px] my-auto w-auto z-[1]">
                    <Img
                      className="h-[209px] md:h-auto rounded-[50%] w-[209px]"
                      src="images/img_organization_2.png"
                      alt="organization_Three"
                    />
                    <Text
                      className="leading-[32.00px] text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                      size="txtEpilogueRomanMedium24"
                    >
                      <>
                        Data
                        <br />
                        Scientists
                      </>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[27px] items-center justify-start ml-[-30px] my-auto w-auto z-[1]">
                  <Img
                    className="h-[209px] md:h-auto rounded-[50%] w-[209px]"
                    src="images/img_organization_3.png"
                    alt="organization_Four"
                  />
                  <Text
                    className="leading-[32.00px] text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                    size="txtEpilogueRomanMedium24"
                  >
                    <>
                      Project
                      <br />
                      Managers
                    </>
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-800 w-auto"
              size="txtEpilogueRomanMedium40"
            >
              <>Let&#39;s Form Your Crew.</>
            </Text>
            <Button className="cursor-pointer font-medium leading-[normal] min-w-[172px] text-base text-center">
              Schedule a Call
            </Button>
          </div>
          <div className="absolute bottom-[0] md:h-[632px] h-[964px] inset-x-[0] mx-auto md:px-10 px-12 sm:px-5 py-[38px] w-[1437px] md:w-full">
            <div className="absolute bg-gradient3  flex flex-col h-max inset-[0] items-center justify-center m-auto p-[109px] md:px-10 sm:px-5 rounded-[35px] w-[94%] md:w-full">
              <div className="flex flex-col items-center justify-start mb-[186px] w-[81%] md:w-full">
                <div className="flex flex-col gap-[33px] items-center justify-start w-auto md:w-full">
                  <Text
                    className="leading-[68.00px] max-w-[901px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700"
                    size="txtEpilogueRomanSemiBold48"
                  >
                    <>
                      Ready to Transform Your Vision into Reality? Let&#39;s Get
                      Started!
                    </>
                  </Text>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[176px] text-base text-center"
                    color="white_A700"
                  >
                    Schedule a Call
                  </Button>
                </div>
              </div>
            </div>
            <Img
              className="absolute bottom-[4%] h-[409px] inset-x-[0] mx-auto object-cover w-[54%]"
              src="images/img_intersect_409x770.png"
              alt="intersect_One"
            />
          </div>
        </div>
        <footer className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 md:h-[1132px] sm:h-[388px] h-[600px] p-[102px] md:px-10 sm:px-5 relative w-full">
            <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[82%]">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-[21px] items-start justify-start md:mt-0 mt-[37px] w-[14%] md:w-full">
                    <Text
                      className="text-base text-gray-900"
                      size="txtEpilogueRomanRegular16Gray900"
                    >
                      Product
                    </Text>
                    <ul className="flex flex-col items-start justify-start w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-gray-900_87"
                        >
                          <Text size="txtEpilogueRomanRegular16Gray90087">
                            Employee database
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-[15px] text-base text-gray-900_87"
                        >
                          <Text size="txtEpilogueRomanRegular16Gray90087">
                            Payroll
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-[13px] text-base text-gray-900_87"
                        >
                          <Text size="txtEpilogueRomanRegular16Gray90087">
                            Absences
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-4 text-base text-gray-900_87"
                        >
                          <Text size="txtEpilogueRomanRegular16Gray90087">
                            Time tracking
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-3.5 text-base text-gray-900_87"
                        >
                          <Text size="txtEpilogueRomanRegular16Gray90087">
                            Shift planner
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-[15px] text-base text-gray-900_87"
                        >
                          <Text size="txtEpilogueRomanRegular16Gray90087">
                            Recruiting
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[21px] items-start justify-start md:mt-0 mt-[37px] w-[8%] md:w-full">
                    <Text
                      className="text-base text-gray-900"
                      size="txtEpilogueRomanRegular16Gray900"
                    >
                      Information
                    </Text>
                    <ul className="flex flex-col gap-[15px] items-start justify-start md:w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-gray-900_87"
                        >
                          <Text size="txtEpilogueRomanRegular16Gray90087">
                            FAQ
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-gray-900_87"
                        >
                          <Text size="txtEpilogueRomanRegular16Gray90087">
                            Blog
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-gray-900_87"
                        >
                          <Text size="txtEpilogueRomanRegular16Gray90087">
                            Support
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[18px] items-start justify-start md:mt-0 mt-[37px] w-[8%] md:w-full">
                    <Text
                      className="text-base text-gray-900"
                      size="txtEpilogueRomanRegular16Gray900"
                    >
                      Company
                    </Text>
                    <ul className="flex flex-col gap-[15px] items-start justify-start w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-gray-900_87"
                        >
                          <Text size="txtEpilogueRomanRegular16Gray90087">
                            About us
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-gray-900_87"
                        >
                          <Text size="txtEpilogueRomanRegular16Gray90087">
                            Careers
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-gray-900_87"
                        >
                          <Text size="txtEpilogueRomanRegular16Gray90087">
                            Contact us
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-gray-900_87"
                        >
                          <Text size="txtEpilogueRomanRegular16Gray90087">
                            Lift Media
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-indigo-800_0c flex md:flex-1 flex-col items-center justify-end p-[31px] sm:px-5 rounded-[30px] w-[32%] md:w-full">
                    <div className="flex flex-col items-start justify-start mt-1 w-[91%] md:w-full">
                      <Text
                        className="text-base text-gray-900"
                        size="txtEpilogueRomanRegular16Gray900"
                      >
                        Subscribe
                      </Text>
                      <div className="bg-white-A700 border border-indigo-50 border-solid flex flex-row items-center justify-between mt-[23px] sm:pl-5 pl-[23px] rounded-[25px] w-[98%] md:w-full">
                        <Text
                          className="text-gray-900_90 text-sm"
                          size="txtEpilogueRomanRegular14Gray90090"
                        >
                          Email address
                        </Text>
                        <div className="bg-blue-700 border border-blue_gray-100 border-solid flex flex-col items-center justify-end p-[18px] rounded-bl-[25px] rounded-br-[26px] rounded-tl-[25px] rounded-tr-[26px]">
                          <Img
                            className="h-[13px]"
                            src="images/img_arrowleft.svg"
                            alt="arrowleft"
                          />
                        </div>
                      </div>
                      <Text
                        className="leading-[20.00px] mt-5 text-gray-900_90 text-xs w-full"
                        size="txtEpilogueRomanRegular12"
                      >
                        Hello, we are Lift Media. Our goal is to translate the
                        positive effects from revolutionizing how companies
                        engage with their clients & their team.
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="bg-gray-900_5f h-px mt-[54px] outline outline-[0.5px] outline-gray-900_5f w-full" />
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end md:ml-[0] ml-[458px] mt-[37px] w-[61%] md:w-full">
                  <div className="flex flex-row items-start justify-between w-[33%] md:w-full">
                    <Text
                      className="text-gray-900 text-sm"
                      size="txtEpilogueRomanRegular14Gray900"
                    >
                      Terms
                    </Text>
                    <a href="javascript:" className="text-gray-900 text-sm">
                      <Text size="txtEpilogueRomanRegular14Gray900">
                        Privacy
                      </Text>
                    </a>
                    <Text
                      className="text-gray-900 text-sm"
                      size="txtEpilogueRomanRegular14Gray900"
                    >
                      Cookies
                    </Text>
                  </div>
                  <Img
                    className="h-[35px] md:ml-[0] ml-[332px]"
                    src="images/img_user.svg"
                    alt="user"
                  />
                  <Img
                    className="h-[35px] ml-4 md:ml-[0]"
                    src="images/img_facebook.svg"
                    alt="facebook"
                  />
                  <Img
                    className="h-[35px] ml-4 md:ml-[0]"
                    src="images/img_thumbsup_gray_900.svg"
                    alt="thumbsup"
                  />
                </div>
              </div>
            </div>
            <div className="absolute bottom-[17%] flex flex-col items-center justify-start left-[9%] w-[4%]">
              <Img
                className="h-[47px] md:h-auto object-cover w-full"
                src="images/img_screenshot20230807.png"
                alt="screenshot20230_One"
              />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default DesktopPage;
