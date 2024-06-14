import Icon from "site/components/ui/Icon.tsx";
import { Button } from "site/components/Button.tsx";
import { asset } from "$fresh/runtime.ts";

const HeaderItem = (
  { href, children }: { href: string; children: React.ReactNode },
) => (
  <a href={href} class="dm-sans text-base text-white font-medium">{children}</a>
);

export default function Header() {
  const band = asset("img/band.png");

  return (
    <header class="page-content left">
      <div class="max-container-auto pt-6">
        <div class="hidden lg:flex flex-row justify-between">
          <div class="w-9 h-9 flex items-center justify-center">
            <a href="/">
              <Icon id="Ticket" width={36} height={36} />
            </a>
          </div>

          <div class="flex flex-row gap-10">
            <HeaderItem href="#events">Eventos</HeaderItem>
            <HeaderItem href="#searchbox">Reservar ingresso</HeaderItem>
            <HeaderItem href="#sponsors">Patrocinadores</HeaderItem>
            <HeaderItem href="#footer">Saiba mais</HeaderItem>
          </div>
        </div>

        <div class="flex flex-row justify-between pb-28 gap-10">
          {band && <img class="hidden lg:block" src={band} loading="lazy" />}
          <div class="flex flex-col justify-center gap-8 pt-9 lg:pt-0">
            <h1 class="dm-sans font-bold text-4xl text-white">
              Arraiá da Amizade!{" "}
              <br />Venha para a melhor festa junina do Brasil!
            </h1>
            <p class="dm-sans font-normal text-lg text-white">
              Vista sua melhor roupa! Use o seu melhor chapéu! <br />
              A melhor festa junina do Brasil está de volta, sô 🔥
            </p>

            <div class="flex flex-col lg:flex-row gap-5">
              <Button customStyles="border-none bg-[#F5167E]">
                Eu vou! 🔥
              </Button>
              <Button>Saiba mais</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
