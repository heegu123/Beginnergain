import router from 'next/router';

import DarkHeader from "@/components/layout/DarkHeader";
import BackArrow from "public/assets/svg/arrow-white.svg";
import SmallButton from "@/components/internal/common/SmallButton";
import Divider from "@/components/internal/common/Divider";
import CheckOption from "@/components/internal/common/CheckOption";
import ChatbotButton from "@/components/internal/make-boilerplate/ChatbotButton";

const options = [
  {
    title: 'React.js 라이브러리',
    select: [
      {
        option: 'React Query',
      },
      {
        option: 'React Router',
      },
      {
        option: 'React Responsive',
      },
    ]
  },
  {
    title: 'css 관련 라이브러리 or 프레임워크',
    select: [
      {
        option: 'style-component',
      },
      {
        option: 'Material UI',
      },
      {
        option: 'Chakra UI',
      },
    ]
  },
  {
    title: 'React.js 라이브러리',
    select: [
      {
        option: 'React Query',
      },
      {
        option: 'React Router',
      },
      {
        option: 'React Responsive',
      },
    ]
  }
];

const Screen = () => {
  return (
    <>
      <DarkHeader />
      <div className="flex flex-col items-center bg-blue-300 h-[calc(100vh-54px-4rem)]">
        <div className="pt-6 pl-12 self-start">
          <BackArrow/>
        </div>
        <div className="flex-1 flex flex-col w-9/12 gap-12">
          <div className="flex flex-col">
            <div className="flex justify-between mb-2">
              <p className="text-md text-white font-medium">
                추가할 항목을 선택하세요
              </p>
              <SmallButton
                title="boilerplate 생성"
                color="white"
                isFilled={true}
                onClick={() => router.push("/make-boilerplate/complete")}
              />
            </div>
            <Divider color="gray-200" />
          </div>
          <div className="h-3/5 flex flex-col justify-between">
            {options.map((v, i) => (
              <div key={i} className="flex flex-col gap-3">
                <p className="text-md text-white font-medium">
                  {v.title}
                </p>
                <div className="flex gap-20">
                  {v?.select.map((s, i) => (
                    <CheckOption key={i} title={s.option} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="fixed bottom-12 right-12">
          <ChatbotButton query={'etc'}/>
        </div>
      </div>
    </>
  );
};

export default Screen;