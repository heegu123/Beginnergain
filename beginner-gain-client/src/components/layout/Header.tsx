import React from 'react';
import Link from 'next/link';
import router from 'next/router';

import BeginnerGainLogo from 'public/assets/svg/beginnergain-logo-black.svg';
import SmallButton from "@/components/internal/common/SmallButton";
import UserButton from "@/components/internal/common/UserButton";

// export interface IHeader {
//   isVisible: boolean;
// }

const Header = () => {
  return (
    <header className="flex items-center py-8 px-10 justify-between gap-5">
      <Link href={'/'}>
        <BeginnerGainLogo />
      </Link>
      <ul className="w-1/3 flex justify-between min-w-48">
        <li>
          <Link href={'/'} className="text-xs">
            MENU
          </Link>
        </li>
        <li>
          <Link href={'/'} className="text-xs">
            MENU
          </Link>
        </li>
        <li>
          <Link href={'/'} className="text-xs">
            MENU
          </Link>
        </li>
      </ul>
      {/*<ul className="flex gap-5">*/}
      {/*  <li>*/}
      {/*    <SmallButton*/}
      {/*      title="로그인"*/}
      {/*      isFilled={false}*/}
      {/*      onClick={() => router.push("/login")}*/}
      {/*    />*/}
      {/*  </li>*/}
      {/*  <li>*/}
      {/*    <SmallButton*/}
      {/*      title="회원가입"*/}
      {/*      isFilled={true}*/}
      {/*      onClick={() => router.push("/join")}*/}
      {/*    />*/}
      {/*  </li>*/}
      {/*</ul>*/}
      <UserButton color="black" />
    </header>
  );
};

export default Header;
