import React, { useState } from "react";

import { Button, Img, Text, Input } from "components";
import colors from "tailwindcss/colors";
import { Link } from "react-router-dom";

const DashboardOwnChiefPage = () => {
  const [value, setValue] = useState("43%");
  const [percent, setPercent] = useState("43%");

  const handleInputChange = (e) => {
    if (parseInt(value) <= 100) {
      setPercent(value);
    } else {
      setPercent("100%");
      setValue("100%");
    }
  };

  return (
    <>
      <div className="bg-gray-300 flex flex-col font-lexenddeca items-center justify-end mx-auto pt-[23px] w-full">
        <div className="flex flex-col gap-[35vh] justify-start w-full">
          <div className="flex items-center justify-center">
            <div className="bg-[#5de194] flex flex-row items-center justify-between p-[5px] md:px-5 rounded-[25px] w-[95%] mt-5">
              <Link to="/main">
                <div className="flex items-center">
                  <img
                    src="/images/icon_main.png"
                    width={60}
                    height={20}
                    alt="icon"
                    className="object-contain"
                  />
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center ml-1"
                    size="txtLexendDecaRegular48"
                  >
                    EasyLang
                  </Text>
                </div>
              </Link>
              <div className="flex flex-row items-center justify-between gap-[3rem]">
                <div className="flex flex-row items-center justify-between gap-10">
                  <div className="flex items-center">
                    <Link to="/main">
                      <Text
                        className="text-2xl sm:text-[38px] md:text-[44px] text-black-400 text-center ml-1 hover:underline cursor-pointer"
                        size="txtLexendDecaRegular48"
                      >
                        home
                      </Text>
                    </Link>
                  </div>
                  <div className="flex items-center ml-3">
                    <Link to="/cheif">
                      <Text
                        className="text-3xl sm:text-[38px] md:text-[44px] text-white-A700 text-center ml-1 underline cursor-pointer mr-2"
                        size="txtLexendDecaRegular48"
                      >
                        My profile
                      </Text>
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <Link to="/about">
                      <Text
                        className="text-2xl sm:text-[38px] md:text-[44px] text-black-400 text-center ml-1 hover:underline cursor-pointer"
                        size="txtLexendDecaRegular48"
                      >
                        about
                      </Text>
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <Link to="/contact">
                      <Text
                        className="text-2xl sm:text-[38px] md:text-[44px] text-black-400 text-center ml-1 hover:underline cursor-pointer"
                        size="txtLexendDecaRegular48"
                      >
                        contact us
                      </Text>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center">
                  {/* <div className="bg-blue_gray-800 flex flex-col items-center md:ml-auto mr-[17px] p-[9px] px-[30px] md:px-5 rounded-[10px] w-full">
                    <div className="h-[25px] relative w-[100%]">
                      <Text
                        className="m-auto text-center text-white-A700 text-xl md:text-[15px] hover:text-back-A200"
                        size="txtLexendDecaRegular20"
                      >
                        log out
                      </Text>
                    </div>
                  </div> */}

                  <div className="bg-blue_gray-800 flex flex-col items-center md:ml-auto mr-[17px] p-[9px] px-[30px] md:px-5 rounded-[10px] w-full hover:text-black">
                    <div className="h-[25px] relative w-[100%]">
                      <Link to="/login">
                        <Text
                          className="m-auto text-center text-white-A700 text-xl md:text-[15px]"
                          size="txtLexendDecaRegular20"
                        >
                          log out
                        </Text>
                      </Link>
                    </div>
                  </div>
                  <div className="bg-blue_gray-800 flex flex-col items-center md:ml-auto mr-[17px] p-[9px] px-[50px] md:px-5 rounded-[10px] w-full">
                    <div className="h-[25px] relative w-full overflow-hidden">
                      <Link to="/ownchief">
                        <Text
                          className="m-auto text-center text-white-A700 text-xl md:text-[15px] whitespace-nowrap"
                          size="txtLexendDecaRegular20"
                        >
                          Chief translator
                        </Text>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-[80px] items-center justify-start w-full">
            <div className="flex flex-col items-start justify-start max-w-[1397px] mx-auto md:px-5 w-full">
              <div className="flex justify-between gap-10">
                <div className="flex sm:flex-col flex-row gap-[33px] items-start justify-start ml-1 md:ml-[0] w-4/5 md:w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
                    size="txtLexendDecaRegular48"
                  >
                    Full name:
                  </Text>
                  <Text
                    className="bg-blue_gray-100 h-[68px] justify-center sm:mt-0 mt-0.5 sm:px-5 px-[35px] py-[21px] rounded-[10px] text-black-900 text-center text-xl w-[300px]"
                    size="txtLexendDecaRegular20Black900"
                  >
                    Belfort Yao
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[33px] items-start justify-start ml-1 md:ml-[0] w-3/5 md:w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
                    size="txtLexendDecaRegular48"
                  >
                    Email:
                  </Text>
                  <Text
                    className="bg-blue_gray-100 h-[68px] justify-center sm:mt-0 mt-0.5 sm:px-5 px-[35px] py-[21px] rounded-[10px] text-black-900 text-center text-xl w-[300px]"
                    size="txtLexendDecaRegular20Black900"
                  >
                    yao.belfort@gmail.com
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[33px] items-start justify-start ml-1 md:ml-[0] w-3/5 md:w-full mt-10">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
                  size="txtLexendDecaRegular48"
                >
                  Position:
                </Text>
                <Text
                  className="bg-blue_gray-100 h-[68px] justify-center sm:mt-0 mt-0.5 sm:px-5 px-[35px] py-[21px] rounded-[10px] text-black-900 text-center text-xl w-[278px]"
                  size="txtLexendDecaRegular20Black900"
                >
                  chief translater
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-[33px] items-start justify-start ml-1 md:ml-[0] w-3/5 md:w-full mt-10">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
                  size="txtLexendDecaRegular48"
                >
                  Current projects:
                </Text>
                <Text
                  className="bg-blue_gray-100 h-[68px] justify-center sm:mt-0 mt-0.5 sm:px-5 px-[35px] py-[21px] rounded-[10px] text-black-900 text-center text-xl w-[178px]"
                  size="txtLexendDecaRegular20Black900"
                >
                  project 1
                </Text>
                <Text
                  className="bg-blue_gray-100 h-[68px] justify-center sm:mt-0 mt-0.5 sm:px-5 px-[35px] py-[21px] rounded-[10px] text-black-900 text-center text-xl w-[178px]"
                  size="txtLexendDecaRegular20Black900"
                >
                  project 2
                </Text>
              </div>
            </div>
            <footer
              className="bg-cover bg-no-repeat flex flex-col h-[111px] items-center justify-center md:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group27.svg')" }}
            >
              <Img
                className="h-[70px] w-[70px] mr-auto ml-5  mt-5"
                src="images/img_clock.svg"
                alt="clock"
              />
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardOwnChiefPage;
