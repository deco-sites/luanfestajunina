import Icon from "site/components/ui/Icon.tsx";
import { Button } from "site/components/Button.tsx";
import { asset } from "$fresh/runtime.ts";

const HeaderItem = ({ children }: { children: React.ReactNode }) => (
  <button class="dm-sans text-base text-white font-medium">{children}</button>
);

export default function Header() {
  const band = asset("img/band.png");

  return (
    <header>
      <div class="max-container-auto pt-6">
        <div class="flex flex-row justify-between">
          <div class="w-9 h-9 flex items-center justify-center">
            <a href="/">
              <Icon id="Ticket" width={36} height={36} />
            </a>
          </div>

          <div class="flex flex-row gap-10">
            <HeaderItem>Schedule</HeaderItem>
            <HeaderItem>Schedule</HeaderItem>
            <HeaderItem>Schedule</HeaderItem>
            <HeaderItem>Schedule</HeaderItem>
            <Button customStyles="!py-2.5 !px-8">Login</Button>
          </div>
        </div>

        <div class="flex flex-row justify-between">
          {band && <img src={band} loading="lazy" />}
          <div class="flex flex-col justify-center gap-8">
            <h1 class="dm-sans font-bold text-4xl text-white">
              SBS MTV The Kpop <br />Show Ticket Package
            </h1>
            <p class="dm-sans font-normal text-lg text-white">
              Look no further! Our SBS The Show tickets are the simplest way for
              you to experience a live Kpop recording.
            </p>

            <div class="flex flex-row gap-5">
              <Button customStyles="border-none bg-[#F5167E]">Get Ticket</Button>
              <Button>Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
