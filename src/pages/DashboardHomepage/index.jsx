import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const DashboardHomepagePage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/login");
  return (
    <>
      <div className="bg-gray-300 flex flex-col font-lexenddeca relative mx-auto w-full h-screen">
        {/* <Button
          className="absolute top-0 cursor-pointer min-w-[300px] text-center text-xl right-0 mt-5 mr-4"
          color="blue_gray_800"
          size="xs"
          onClick={handleNavigate}
        >
          Login
        </Button> */}
        <div className="flex items-center justify-center">
          <div className="bg-[#5de194] flex flex-row items-center justify-between p-[5px] md:px-5 rounded-[25px] w-[95%] mt-5">
            <Link to="/">
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
            <div className="flex flex-row items-center justify-between gap-[20rem]">
              <div className="flex flex-row items-center justify-between gap-10">
                <div className="flex items-center">
                  <Link to="/">
                    <Text
                      className="text-2xl sm:text-[38px] md:text-[44px] text-black-400 text-center ml-1 underline cursor-pointer"
                      size="txtLexendDecaRegular48"
                    >
                      home
                    </Text>
                  </Link>
                </div>
                <div className="flex items-center ml-3">
                  <Link to="/">
                    <Text
                      className="text-3xl sm:text-[38px] md:text-[44px] text-white-A700 text-center ml-1 hover:underline cursor-pointer mr-2"
                      size="txtLexendDecaRegular48"
                    >
                      Welcome Page
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
                <div className="bg-blue_gray-800 flex flex-col items-center md:ml-auto mr-[17px] p-[9px] px-[50px] md:px-5 rounded-[10px] w-full">
                  <div className="h-[25px] relative w-full overflow-hidden">
                    <Link to="/login">
                      <Text
                        className="m-auto text-center text-white-A700 text-xl md:text-[15px]"
                        size="txtLexendDecaRegular20"
                      >
                        login
                      </Text>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full mt-5 gap-3">
          <div className="mt-[100px]">
            <Text
              className="text-center md:text-4xl text-[64px] text-blue_gray-800 text-center mt-5"
              size="txtLexendDecaRegular64"
            >
              Welcome to our platform
            </Text>
            <Text
              className="text-4xl md:text-2xl text-blue_gray-800 text-center mt-5" //sm:text-[32px]
              size="txtLexendDecaRegular36"
            >
              please to start your work sign in
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <footer
            className="bg-cover bg-no-repeat flex flex-col h-[111px] items-center justify-center md:px-5 w-full"
            style={{ backgroundImage: "url('images/img_group27.svg')" }}
          >
            <Img
              className="h-[70px] w-[70px] mr-auto ml-5 mt-5" //ml-9 md:ml-[0] mr-[1174px] mt-5
              src="images/img_clock.svg"
              alt="clock"
            />
          </footer>
        </div>
      </div>
    </>
  );
};

export default DashboardHomepagePage;
