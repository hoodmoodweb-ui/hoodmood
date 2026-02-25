export const data = {
  badge: "oferta",
  title: "Oferta - Koszalin",
  description:
    "Wybierz zajęcia dopasowane do wieku, poziomu i charakteru Twojego dziecka – albo Twojego własnego. W Hoodmood znajdziesz grupy dla maluchów, dzieci, młodzieży i dorosłych, zajęcia hip-hop, taniec współczesny, akrobatykę, K-POP oraz grupy turniejowe. Sprawdź, co najlepiej pasuje do Ciebie!",
};

type Classes = {
  nazwa: string;
  opis: string;
  dlaKogo: string;
  lokalizacje: string[];
  prowadzacy: string;
  img: string;
};

export const kids: Classes[] = [
  {
    nazwa: "Balet",
    opis: "Na zajęciach baletu dzieci uczą się podstawowych pozycji, pracy rąk i nóg oraz poruszania się w rytmie muzyki. Ćwiczymy koordynację, równowagę i poprawną postawę ciała. Zajęcia rozwijają wrażliwość muzyczną, koncentrację i estetykę ruchu. Pracujemy w spokojnej atmosferze, dopasowanej do wieku uczestników. Zajęcia są przeznaczone dla dzieci.",
    dlaKogo: "Dzieci",
    lokalizacje: ["Koszalin", "Polanów", "Biały Bór"],
    prowadzacy: "Anna Kowalska",
    img: "",
  },
  {
    nazwa: "KPOP",
    opis: "Na zajęciach KPOP dzieci uczą się choreografii inspirowanych popularnymi utworami i teledyskami. Pracujemy nad rytmiką, pamięcią ruchową i dynamiką tańca. Ćwiczymy elementy sceniczne, pewność siebie oraz pracę w grupie. Zajęcia są energiczne i prowadzone w sposób angażujący młodszych uczestników. Zajęcia są przeznaczone dla dzieci.",
    dlaKogo: "Dzieci",
    lokalizacje: ["Koszalin", "Polanów", "Biały Bór"],
    prowadzacy: "Anna Kowalska",
    img: "",
  },
  {
    nazwa: "Taniec dla 4–6 latków",
    opis: "To zajęcia ruchowo-taneczne dla najmłodszych, które wprowadzają dzieci w świat tańca przez zabawę. Ćwiczymy podstawowe kroki, rytm i prostą koordynację ruchową. Wykorzystujemy muzykę, gry ruchowe i krótkie układy taneczne. Zajęcia wspierają rozwój motoryczny, samodzielność i oswajanie pracy w grupie. Zajęcia są przeznaczone dla dzieci w wieku 4–6 lat.",
    dlaKogo: "Dzieci 4–6 lat",
    lokalizacje: ["Koszalin", "Polanów", "Biały Bór"],
    prowadzacy: "Anna Kowalska",
    img: "",
  },
  {
    nazwa: "Akrobatyka 4–6 latki",
    opis: "Na zajęciach dzieci poznają podstawy akrobatyki w bezpiecznej i zabawowej formie. Ćwiczymy skoczność, równowagę, gibkość oraz wzmacnianie całego ciała. Wprowadzamy proste elementy, takie jak przewroty i ćwiczenia na materacach. Duży nacisk kładziemy na prawidłowe nawyki ruchowe i bezpieczeństwo. Zajęcia są przeznaczone dla dzieci w wieku 4–6 lat.",
    dlaKogo: "Dzieci 4–6 lat",
    lokalizacje: ["Koszalin", "Polanów", "Biały Bór"],
    prowadzacy: "Anna Kowalska",
    img: "",
  },
  {
    nazwa: "Young Generation (hip-hop 7–9 lat)",
    opis: "To zajęcia hip-hop dla dzieci, które chcą rozwijać swój ruch i poczucie rytmu. Uczymy podstawowych kroków, groove’u i prostych choreografii dopasowanych do wieku. Ćwiczymy koordynację, energię ruchu oraz pracę zespołową. Zajęcia pomagają budować pewność siebie i swobodę na parkiecie. Zajęcia są przeznaczone dla dzieci w wieku 7–9 lat.",
    dlaKogo: "Dzieci 7–9 lat",
    lokalizacje: ["Koszalin", "Polanów", "Biały Bór"],
    prowadzacy: "Anna Kowalska",
    img: "",
  },
  {
    nazwa: "Akrobatyka 7–9 lat",
    opis: "Na zajęciach rozwijamy siłę, gibkość i koordynację poprzez ćwiczenia akrobatyczne dostosowane do wieku uczestników. Uczymy techniki podstawowych elementów i bezpiecznego wykonywania ćwiczeń. Pracujemy nad stabilizacją, mobilnością i świadomością ciała. Zajęcia mają formę aktywną i motywującą, ale z zachowaniem zasad bezpieczeństwa. Zajęcia są przeznaczone dla dzieci w wieku 7–9 lat.",
    dlaKogo: "Dzieci 7–9 lat",
    lokalizacje: ["Koszalin", "Polanów", "Biały Bór"],
    prowadzacy: "Anna Kowalska",
    img: "",
  },
  {
    nazwa: "The Beat Hunters (hip-hop 10–12 lat)",
    opis: "To grupa hip-hop dla dzieci starszych, w której rozwijamy technikę, rytmikę i pamięć choreograficzną. Uczestnicy uczą się bardziej złożonych kombinacji i pracy z muzyką. Ćwiczymy dynamikę, izolacje oraz elementy freestyle’u na poziomie podstawowym. Zajęcia wzmacniają pewność siebie i umiejętność współpracy w grupie. Zajęcia są przeznaczone dla dzieci w wieku 10–12 lat.",
    dlaKogo: "Dzieci 10–12 lat",
    lokalizacje: ["Koszalin", "Polanów", "Biały Bór"],
    prowadzacy: "Anna Kowalska",
    img: "",
  },
  {
    nazwa: "Akrobatyka 10–14 lat",
    opis: "Na zajęciach uczestnicy rozwijają sprawność ogólną, siłę i elastyczność potrzebną w akrobatyce. Ćwiczymy technikę elementów akrobatycznych na materacach oraz kontrolę ciała w ruchu. Wprowadzamy stopniowo trudniejsze ćwiczenia, dostosowując poziom do możliwości grupy. Ważna jest dla nas poprawność wykonania i bezpieczeństwo. Zajęcia są przeznaczone dla dzieci i młodzieży w wieku 10–14 lat.",
    dlaKogo: "Dzieci i młodzież 10–14 lat",
    lokalizacje: ["Koszalin", "Polanów", "Biały Bór"],
    prowadzacy: "Anna Kowalska",
    img: "",
  },
  {
    nazwa: "Taniec Współczesny 8–12 lat",
    opis: "Na zajęciach tańca współczesnego dzieci poznają podstawy pracy z ruchem, przestrzenią i muzyką. Ćwiczymy płynność, koordynację oraz ekspresję poprzez krótkie kombinacje i choreografie. Zajęcia rozwijają świadomość ciała, kreatywność i wrażliwość artystyczną. Wprowadzamy elementy techniki i improwizacji w przyjaznej atmosferze. Zajęcia są przeznaczone dla dzieci w wieku 8–12 lat.",
    dlaKogo: "Dzieci 8–12 lat",
    lokalizacje: ["Koszalin", "Polanów", "Biały Bór"],
    prowadzacy: "Anna Kowalska",
    img: "",
  },
  {
    nazwa: "Taniec Współczesny 13–18 lat",
    opis: "To zajęcia dla młodzieży, które rozwijają technikę tańca współczesnego oraz świadomą pracę z ciałem. Ćwiczymy sekwencje ruchowe, dynamikę, jakość ruchu i ekspresję sceniczną. Pojawiają się także elementy improwizacji i interpretacji muzyki. Zajęcia pomagają budować własny styl i pewność w tańcu. Zajęcia są przeznaczone dla młodzieży w wieku 13–18 lat.",
    dlaKogo: "Młodzież 13–18 lat",
    lokalizacje: ["Koszalin", "Polanów", "Biały Bór"],
    prowadzacy: "Anna Kowalska",
    img: "",
  },
  {
    nazwa: "Quality Crew (grupa zaawansowana hip-hop)",
    opis: "To grupa zaawansowana dla osób, które mają doświadczenie w hip-hopie i chcą rozwijać się intensywniej. Pracujemy nad techniką, choreografią, dokładnością wykonania i jakością ruchu. Ćwiczymy także musicality, pracę formacji oraz przygotowanie do pokazów. Zajęcia są dynamiczne i wymagają regularności oraz zaangażowania. Grupa jest przeznaczona głównie dla dzieci i młodzieży z doświadczeniem.",
    dlaKogo: "Dzieci i młodzież (grupa zaawansowana)",
    lokalizacje: ["Koszalin", "Polanów", "Biały Bór"],
    prowadzacy: "Anna Kowalska",
    img: "",
  },
  {
    nazwa: "Partnerowanie Akro",
    opis: "Na zajęciach uczymy współpracy w parach i podstaw partnerowania w akrobatyce. Ćwiczymy zaufanie, komunikację, stabilizację oraz bezpieczne wejścia i zejścia z figur. Zajęcia rozwijają siłę, równowagę i kontrolę ciała w pracy z partnerem. Poziom ćwiczeń jest dobierany do umiejętności uczestników. Zajęcia są przeznaczone dla dzieci, młodzieży i dorosłych.",
    dlaKogo: "Dzieci, młodzież i dorośli",
    lokalizacje: ["Koszalin", "Polanów", "Biały Bór"],
    prowadzacy: "Anna Kowalska",
    img: "",
  },
  {
    nazwa: "Lekcje Indywidualne",
    opis: "To zajęcia 1:1 dopasowane do potrzeb uczestnika i jego poziomu zaawansowania. Możemy pracować nad techniką taneczną, akrobatyką, przygotowaniem choreografii lub rozwojem konkretnych umiejętności. Plan zajęć ustalamy indywidualnie w zależności od celu i wieku uczestnika. Zajęcia pozwalają na szybszy progres dzięki pełnej uwadze instruktora. Lekcje są przeznaczone dla dzieci, młodzieży i dorosłych.",
    dlaKogo: "Dzieci, młodzież i dorośli",
    lokalizacje: ["Koszalin", "Polanów", "Biały Bór"],
    prowadzacy: "Anna Kowalska",
    img: "",
  },
];

export const adults: Classes[] = [
  {
    nazwa: "Feminine Flow 18+",
    opis: "To zajęcia taneczne dla dorosłych, skupione na płynności ruchu, świadomości ciała i kobiecej ekspresji. Pracujemy nad choreografiami, pewnością siebie oraz estetyką ruchu. Ćwiczymy koordynację, muzykalność i pracę z emocją w tańcu. Zajęcia odbywają się w komfortowej atmosferze, sprzyjającej rozwojowi i swobodzie. Zajęcia są przeznaczone dla osób 18+.",
    dlaKogo: "Dorośli 18+",
    lokalizacje: ["Koszalin", "Polanów", "Biały Bór"],
    prowadzacy: "Anna Kowalska",
    img: "",
  },
  {
    nazwa: "Formacja dla Dorosłych",
    opis: "Na zajęciach uczestnicy uczą się choreografii grupowych i pracy w zespole. Ćwiczymy synchronizację, ustawienia sceniczne oraz dokładność wykonania ruchu. Zajęcia rozwijają kondycję, koordynację i pamięć ruchową. To dobra opcja dla osób, które lubią regularny trening i wspólne przygotowanie układów. Zajęcia są przeznaczone dla dorosłych.",
    dlaKogo: "Dorośli",
    lokalizacje: ["Koszalin", "Polanów", "Biały Bór"],
    prowadzacy: "Anna Kowalska",
    img: "",
  },
  {
    nazwa: "Partnerowanie Akro",
    opis: "Na zajęciach uczymy współpracy w parach i podstaw partnerowania w akrobatyce. Ćwiczymy zaufanie, komunikację, stabilizację oraz bezpieczne wejścia i zejścia z figur. Zajęcia rozwijają siłę, równowagę i kontrolę ciała w pracy z partnerem. Poziom ćwiczeń jest dobierany do umiejętności uczestników. Zajęcia są przeznaczone dla dzieci, młodzieży i dorosłych.",
    dlaKogo: "Dzieci, młodzież i dorośli",
    lokalizacje: ["Koszalin", "Polanów", "Biały Bór"],
    prowadzacy: "Anna Kowalska",
    img: "",
  },
  {
    nazwa: "Lekcje Indywidualne",
    opis: "To zajęcia 1:1 dopasowane do potrzeb uczestnika i jego poziomu zaawansowania. Możemy pracować nad techniką taneczną, akrobatyką, przygotowaniem choreografii lub rozwojem konkretnych umiejętności. Plan zajęć ustalamy indywidualnie w zależności od celu i wieku uczestnika. Zajęcia pozwalają na szybszy progres dzięki pełnej uwadze instruktora. Lekcje są przeznaczone dla dzieci, młodzieży i dorosłych.",
    dlaKogo: "Dzieci, młodzież i dorośli",
    lokalizacje: ["Koszalin", "Polanów", "Biały Bór"],
    prowadzacy: "Anna Kowalska",
    img: "",
  },
];
