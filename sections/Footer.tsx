import { asset } from "$fresh/runtime.ts";
import Icon from "site/components/ui/Icon.tsx";
import { Button } from "site/components/Button.tsx";

export default function Footer() {
  const facebook = asset("img/facebook.png");
  const twitter = asset("img/twitter.png");
  const linkedin = asset("img/linkedin.png");

  return (
    <footer class="bg-[#0A075F] pt-9" id="footer">
      <div class="max-container-auto justify-between flex flex-row flex-wrap pt-14 page-content left">
        <div class="flex flex-row flex-wrap lg:flex-col gap-4 max-w-[333px]">
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

        <div class="flex flex-col gap-6 pt-6 lg:pt-0">
          <p class="dm-sans font-bold text-white text-lg">Plan Events</p>
          <ul>
            <li class="dm-sans font-medium text-[#F3F3F3] text-sm">
              Create and Set Up
            </li>
            <li class="dm-sans font-medium text-[#F3F3F3] text-sm">
              Sell Tickets
            </li>
            <li class="dm-sans font-medium text-[#F3F3F3] text-sm">
              Online RSVP
            </li>
            <li class="dm-sans font-medium text-[#F3F3F3] text-sm">
              Online Events
            </li>
          </ul>
        </div>

        <div class="flex flex-col gap-6 pt-6 lg:pt-0">
          <p class="dm-sans font-bold text-white text-lg">Event</p>
          <ul>
            <li class="dm-sans font-medium text-[#F3F3F3] text-sm">About Us</li>
            <li class="dm-sans font-medium text-[#F3F3F3] text-sm">Press</li>
            <li class="dm-sans font-medium text-[#F3F3F3] text-sm">
              Contact Us
            </li>
            <li class="dm-sans font-medium text-[#F3F3F3] text-sm">
              Help Center
            </li>
            <li class="dm-sans font-medium text-[#F3F3F3] text-sm">
              How it Works
            </li>
            <li class="dm-sans font-medium text-[#F3F3F3] text-sm">Privacy</li>
            <li class="dm-sans font-medium text-[#F3F3F3] text-sm">Terms</li>
          </ul>
        </div>

        <div class="flex flex-col gap-6 max-w-[362px] pt-6 lg:pt-0">
          <p class="dm-sans font-bold text-white text-lg">Stay In The Loop</p>
          <p class="dm-sans font-normal text-[#F3F3F3] text-sm">Join our mailing list to stay in the loop with our newest for Event and concert</p>
          <div class="relative flex flex-row">
            <input type="text" class="w-full min-h-16 border border-[#4C4D8B] rounded-full pl-4 text-[#959595] placeholder:text-[#959595]" placeholder="Enter your email" />
            <Button customStyles="absolute border-none bg-[#F5167E] !py-3 !px-6 right-4 top-1/2 -translate-y-1/2">Subscribe Now</Button>
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
