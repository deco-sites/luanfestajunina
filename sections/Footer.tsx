import { asset } from "$fresh/runtime.ts";
import Icon from "site/components/ui/Icon.tsx";

export default function Footer() {
  const facebook = asset("img/facebook.png");
  const twitter = asset("img/twitter.png");
  const linkedin = asset("img/linkedin.png");

  return (
    <footer class="bg-[#0A075F] mt-9">
      <div class="max-w-[1240px] mx-auto flex flex-row pt-14">
        <div class="flex flex-col gap-4 max-w-[333px]">
          <Icon id="Ticket" width={34} height={34} />
          <p class="dm-sans text-[#F3F3F3] text-sm font-normal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
            mollitia repellat illum quam? Id corporis, odit dolorum distinctio
            nemo pariatur laudantium aperiam reprehenderit aut dolorem
            obcaecati, inventore nihil doloribus! A?
          </p>

          <div class="flex flex-row gap-4">
            <a href="/">
              <img
                src={facebook}
                loading="lazy"
                width={36}
                height={36}
                alt="Facebook"
              />
            </a>
            <a href="/">
              <img
                src={twitter}
                loading="lazy"
                width={36}
                height={36}
                alt="Twitter"
              />
            </a>
            <a href="https://www.linkedin.com/in/luanargolo/" target="_blank">
              <img
                src={linkedin}
                loading="lazy"
                width={36}
                height={36}
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center gap-4 pt-16 pb-5">
        <hr class="border border-[#4C4D8B] max-w-[1200px] w-full" />
        <a href="https://www.luanlemos.dev/" target="_blank">
          <p class="dm-sans text-[#FEFEFE] font-normal text-sm text-center">
            Copyright © 2024 Luan Lemos
          </p>
        </a>
      </div>
    </footer>
  );
}
