import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import ButtonSecondary from "@/myComponents/common/ButtonSecondary";
import MainWrapper from "@/myComponents/common/MainWrapper";
import SectionContainer from "@/myComponents/common/SectionContainer";

export default function error() {
  return (
    <MainWrapper>
      <SectionContainer>
        <div className="flex flex-col items-center w-fit mx-auto gap-4 my-42">
          <h1 className="text-xl">Ups, ta scena jest pusta!</h1>
          <p>
            Strona której szukasz nie istnieje lub zmieniła adres. W Hoodmood
            dużo się dzieję, wróć na stronę główna i złap odpowiedni rytm!
          </p>
          <div className=" mt-4 flex flex-col gap-4 items-center justify-center  md:flex-row">
            <ButtonSecondary href="/">Strona główna</ButtonSecondary>
            <ButtonSecondary href="/oferta/koszalin">oferta</ButtonSecondary>
            <ButtonSecondary href="/grafik/koszalin">grafik</ButtonSecondary>
          </div>
        </div>
        <AnyQuestionsContact />
      </SectionContainer>
    </MainWrapper>
  );
}
