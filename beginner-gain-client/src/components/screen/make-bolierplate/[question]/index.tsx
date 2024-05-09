import QuestionScreen from "public/assets/svg/screen.svg";
import PurpleArrow from "public/assets/svg/arrow-purple.svg";
import ChoiceButton from "@/components/internal/make-boilerplate/ChoiceButton";
import ChatbotButton from "@/components/internal/make-boilerplate/ChatbotButton";
import DarkHeader from "@/components/layout/DarkHeader";
import BackArrow from "@/components/internal/common/BackArrow";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import OneButtonModal from "@/components/internal/modal/OneButtonModal";
import {useQuery} from "react-query";
import {getQuestion} from "@/server/question";
import {useSetRecoilState} from "recoil";
import {projectDataState} from "@/recoil/projectDataState";
import {QuestionSelected} from "@/types/Project";

interface IAnswerData {
    id: number,
    name: string,
    nextQuestionId: number,
}

interface IQuestionData {
    id: number,
    content: string,
    answers: IAnswerData[],
}

interface IAnswerButton {
    nextId: number,
    answerId: number,
}

const Screen = () => {
    const [questionData, setQuestionData] = useState<IQuestionData>();
    const setProjectData = useSetRecoilState(projectDataState);

    // 준비중 모달 open 여부
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const router = useRouter();

    const questionId = router.query.question || '1';
    const { data } = useQuery({
        queryKey: ['question', questionId],
        queryFn: () => getQuestion({questionId})});

    useEffect(()=> {
        if(data?.data) {
            console.log(data);
            setQuestionData(data.data);
        }
    },[data]);

    // todo: 다음 질문이 준비되어 있지 않은 서비스면 모달 띄우기

    const handleAnswerButtonClick = ({ nextId, answerId }: IAnswerButton) => {
        if(questionData) {
            // 현재 질문, 답변 recoil 에 저장
            const questionInfo: QuestionSelected = {
                question: questionData?.id.toString(),
                answer: answerId.toString(),
            };
            setProjectData((prev) => ({
                ...prev,
                select: [...prev.select, questionInfo]
            }));
        }
        // 다음 질문이 없을 경우 etc 선택 화면으로 이동
        if(nextId === null) {
            router.push('/make-boilerplate/etc');
        } else {
                router.push(`/make-boilerplate/${nextId}`);
            }
    }

    return (
        <>
          <DarkHeader />
          <div className="flex flex-col bg-blue-300 h-[calc(100vh-54px-4rem)]">
              <div className="pt-6 pl-12">
                  <BackArrow/>
              </div>
              <div className="h-[50vh] w-fit mx-auto relative mt-[6vh]">
                  <div className="absolute h-[50vh] w-fit p-28 w-full">
                      <div className="flex items-center mb-14">
                          <p className="text-sm text-purple-200">{questionData?.id}</p>
                          <PurpleArrow/>
                          <p className="text-md text-white ml-4">{questionData?.content}</p>
                      </div>
                      <div className="flex flex-col flex-wrap gap-4 h-full">
                          {questionData?.answers.map((item, index)=>
                              <ChoiceButton
                                  key={index}
                                  order={String.fromCharCode(index + 65)} //순서를 알파벳으로 표시
                                  name={item.name}
                                  onClick={() =>
                                      handleAnswerButtonClick({
                                          nextId: item.nextQuestionId,
                                          answerId: item.id
                                      })}
                              />
                          )}
                      </div>
                  </div>
                  <QuestionScreen width={"100%"} height={"100%"}/>
              </div>
              <div className="flex items-center self-end flex-1 pr-14">
                  <ChatbotButton query={router.query.question || '1'}/>
              </div>
          </div>
            {isOpenModal && <OneButtonModal closeModal={()=> setIsOpenModal(false)} hasContent/>}
        </>
    );
};

export default Screen;