import BackArrow from "public/assets/svg/arrow-white.svg";
import QuestionScreen from "public/assets/svg/screen.svg";
import PurpleArrow from "public/assets/svg/arrow-purple.svg";
import ChoiceButton from "@/components/internal/make-boilerplate/ChoiceButton";
import DarkHeader from "@/components/layout/DarkHeader";

const data = {
    title: '어떤 종류의 프로젝트인가요?',
    select: [
        {
            name: '웹',
            nextQuestion: 2,
        },
        {
            name: '앱',
            nextQuestion: 3,
        },
    ]
};

const Screen = ({query} : {query: string | string[] }) => {
    console.log(query);
    return (
      <>
        <DarkHeader />
        <div className="bg-blue-300 h-[calc(100vh-54px-4rem)]">
          <div className="pt-6 pl-12">
            <BackArrow/>
          </div>
          <div className="h-[50vh] w-fit mx-auto relative mt-[6vh]">
            <div className="absolute h-[50vh] w-fit p-28 w-full">
              <div className="flex items-center mb-14">
                <p className="text-sm text-purple-200">1</p>
                <PurpleArrow/>
                <p className="text-md text-white ml-4">{data.title}</p>
              </div>
              <div className="flex flex-col flex-wrap gap-4 h-full">
                {data.select.map((item, index)=>
                  <ChoiceButton
                    key={index}
                    order={String.fromCharCode(index + 65)} //순서를 알파벳으로 표시
                    name={item.name}/>
                )}
              </div>
            </div>
            <QuestionScreen width={"100%"} height={"100%"}/>
          </div>
          <div className="">
          </div>
        </div>
      </>
    );
};

export default Screen;