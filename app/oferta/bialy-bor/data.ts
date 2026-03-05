export const data = {
  badge: "oferta",
  title: "Oferta - Biały Bór",
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
};

export const kidsBialyBor: Classes[] = [
  {
    name: "Zajęcia taneczne (4–7 lat)",
    description:
      "Zajęcia ruchowo-taneczne dla dzieci w wieku 4–7 lat, prowadzone w formie zabawy. Dzieci uczą się podstaw rytmiki i koordynacji, prostych kroków oraz krótkich układów tanecznych dopasowanych do wieku. Pracujemy nad ogólną sprawnością, poczuciem rytmu, orientacją w przestrzeni i pewnością siebie. Zajęcia wspierają rozwój motoryczny i uczą pracy w grupie. Koszt: 80 zł/miesiąc.",
    age: "4–7 lat",
    localizations: ["Biały Bór"],
    instructor: "Talita Jarzęcka",
    img: "/assets/images/offer/taniec4-6.jpg",
    instructorAvatar: "/assets/images/team/talitaJarzecka.jpg",
  },
  {
    name: "Hip-hop (8–13 lat)",
    description:
      "Zajęcia hip-hop dla dzieci i młodzieży w wieku 8–13 lat. Uczestnicy poznają podstawy techniki, groove’u i pracy z muzyką oraz uczą się choreografii dopasowanych do poziomu grupy. Ćwiczymy koordynację, dynamikę, musicality i pamięć ruchową, a także elementy sceniczne i współpracę w zespole. Zajęcia pomagają budować swobodę ruchu i pewność siebie. Koszt: 80 zł/miesiąc.",
    age: "8–13 lat",
    localizations: ["Biały Bór"],
    instructor: "Talita Jarzęcka",
    img: "/assets/images/offer/qualityCrew.jpg",
    instructorAvatar: "/assets/images/team/talitaJarzecka.jpg",
  },
];
