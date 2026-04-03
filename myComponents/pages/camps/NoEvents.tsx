import ButtonSecondary from "@/myComponents/common/ButtonSecondary";

export default function NoEvents() {
  return (
    <section className="mx-auto text-center space-y-2 my-16">
      <p className="text-lg">
        Aktualnie nie mamy aktywynych obozów, kolonii ani wydarzeń specjalnych
      </p>
      <p className="text-muted-foreground ">
        Ale spokojnie! Takie akcje pojawiają się u nas regularnie. Obserwuj nas,
        żeby być na bieżąco.
      </p>
      <div className="flex gap-8 mx-auto w-fit mt-4">
        <ButtonSecondary href="/tiktok">
          <img src={"/icons/tiktok.svg"} className="w-4 dark:invert" />
          tiktok
        </ButtonSecondary>
        <ButtonSecondary href={"/facebook"}>
          <img src={"/icons/facebook.svg"} className="w-4 dark:invert" />
          facebook
        </ButtonSecondary>
        <ButtonSecondary href={"/instagram"}>
          <img src={"/icons/instagram.svg"} className="w-4 dark:invert" />
          instagram
        </ButtonSecondary>
      </div>
    </section>
  );
}
