import ToggleButton from "@components/buttons/ToggleButton";
import DiaryList from "@components/diary/list/DiaryList";
import HeaderWithProfile from "@components/header/HeaderWithProfile";
import { useDateControl } from "@hooks/useDateControl";
import DateManipulationBar from "@pages/MainPage/components/DateManipulationBar";
import { useToggleStore } from "@store/useToggleStore";
import EmptyState from "@components/empty/EmptyState";
import { useLikedDiaries } from "@api/liked/useLikedDiaries";
import { format } from "date-fns";

const LikedPage = () => {
  const { currentDate, prevMonthHandler, nextMonthHandler } = useDateControl();
  const { isTotalView } = useToggleStore();
  const { data: likedDiaries, isPending } = useLikedDiaries(
    isTotalView,
    format(currentDate, "yyyyMM"),
  );

  console.log(likedDiaries);

  if (isPending) return <div>Loading...</div>;

  const DiarySection = () => {
    if (likedDiaries) {
      if (likedDiaries.length === 0) {
        return (
          <div className="w-full h-full flex justify-center items-center">
            <EmptyState message="좋아요한 일기가 없어요! 소중한 일기들을 하나씩 모아봐요" />
          </div>
        );
      } else {
        return <DiaryList diaries={likedDiaries!} />;
      }
    }
  };

  return (
    <div className="flex flex-col h-screen w-full">
      <HeaderWithProfile title="좋아요한 일기들" />
      <div className="flex flex-grow items-center flex-col gap-[48px] px-[130px] py-[53px]">
        <div className="flex justify-start w-full min-w-[990px]">
          <ToggleButton leftTitle="전체보기" rightTitle="날짜별" />
        </div>
        <div className="w-full flex-grow flex flex-col items-center gap-[64px]">
          {!isTotalView && (
            <DateManipulationBar
              date={currentDate}
              prevMonthHandler={prevMonthHandler}
              nextMonthHandler={nextMonthHandler}
            />
          )}
          <DiarySection />
        </div>
      </div>
    </div>
  );
};

export default LikedPage;
