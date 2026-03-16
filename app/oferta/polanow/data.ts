export const data = {
  badge: "oferta",
  title: "Oferta - Polanów",
  description:
    "Wybierz zajęcia dopasowane do wieku, poziomu i charakteru Twojego dziecka – albo Twojego własnego. W Hoodmood znajdziesz grupy dla maluchów, dzieci, młodzieży i dorosłych, zajęcia hip-hop, taniec współczesny, akrobatykę, K-POP oraz grupy turniejowe. Sprawdź, co najlepiej pasuje do Ciebie!",
};

type Classes = {
  name: string;
  description: string;
  age: string;
  localizations: string[];
  instructor: string;
  img: string;
  instructorAvatar: string;
  experience: string;
};

export const kidsPolanow: Classes[] = [
  {
    name: "Taniec dla 4–6 latków",
    description:
      "To zajęcia ruchowo-taneczne dla najmłodszych, które wprowadzają dzieci w świat tańca przez zabawę. Ćwiczymy podstawowe kroki, rytm i prostą koordynację ruchową. Wykorzystujemy muzykę, gry ruchowe i krótkie układy taneczne. Zajęcia wspierają rozwój motoryczny, samodzielność i oswajanie pracy w grupie. Koszt: 120 zł/miesiąc.",
    age: "4–6 lat",
    localizations: ["Polanów"],
    instructor: "Talita Jarzęcka",
    img: "/assets/images/offer/taniec4-6.jpg",
    instructorAvatar: "/assets/images/team/talitaJarzecka.jpg",
    experience: "Zaawansowani",
  },
  {
    name: "Hip-hop (7–14 lat)",
    description:
      "Zajęcia hip-hop dla dzieci i młodzieży w wieku 7–14 lat. Uczestnicy uczą się podstaw techniki, groove’u i pracy z muzyką oraz choreografii dopasowanych do wieku i poziomu grupy. Ćwiczymy koordynację, dynamikę, musicality i pamięć ruchową, a także elementy sceniczne i współpracę w zespole. Koszt: 150 zł/miesiąc.",
    age: "7–14 lat",
    localizations: ["Polanów"],
    instructor: "Talita Jarzęcka",
    img: "/assets/images/offer/theBeatHunters10-12.jpg",
    instructorAvatar: "/assets/images/team/talitaJarzecka.jpg",
    experience: "Zaawansowani",
  },
];
