"use client";

import ButtonPrimary from "@/myComponents/common/ButtonPrimary";
import ButtonSecondary from "@/myComponents/common/ButtonSecondary";
import SectionContainer from "@/myComponents/common/SectionContainer";

export default function error() {
  return <SectionContainer>
    <h2>Ups, ta scena jest pusta!</h2>
    <p>Strona której szukasz nie istnieje lub zmieniła adres.
      W Hoodmood dużo się dzieję, wróć na stronę główna i złap odpowiedni rytm!
    </p>
    <div>
      <ButtonSecondary href="/oferta">oferta</ButtonSecondary>
      <ButtonSecondary href="/grafik">grafik</ButtonSecondary>
      <ButtonPrimary href="/">Strona główna</ButtonPrimary>
    </div>
  </SectionContainer>;
}
