import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Event {
  /** @title Título */
  label: string;
  /** @title Descrição */
  description: string;
  /** @title Image */
  image: ImageWidget;
}

interface Props {
  events?: Event[];
}

const EventItem = ({ event }: { event: Event }) => (
  <div class="flex flex-col">
    <Image
      src={event.image}
      width={340}
      height={340}
      class="cursor-pointer rounded-t-2xl w-[340px] h-[340px] hover:scale-110 transition-all"
    />
    <div class="flex flex-row justify-center gap-5 shadow-custom items-baseline rounded-b-2xl">
      <p class="dm-sans font-bold text-xs text-[#3D37F1]">
        JUN<br />
        <span class="dm-sans font-bold text-2xl text-black">23</span>
      </p>

      <div class="flex flex-col gap-2.5 max-w-[241px] py-5 px-3">
        <h3 class="dm-sans font-bold text-black text-base">{event.label}</h3>
        <p class="dm-sans font-normal text-sm text-[#6A6A6A]">
          {event.description}
        </p>
      </div>
    </div>
  </div>
);

export default function Events({ events }: Props) {
  const buttons = [
    { label: "Weekdays" },
    { label: "Event Type" },
    { label: "Any Category" },
  ];

  return (
    <div class="max-container-auto" id="events">
      <div class="w-full flex flex-row items-center justify-between">
        <h2 class="dm-sans text-[#242565] text-4xl font-bold">
          Próximos eventos
        </h2>
        <div class="space-x-4">
          {buttons.map((button, index) => (
            <button
              key={index}
              class="bg-[#F2F4FF] text-[#1D275F] font-medium dm-sans text-sm px-6 py-4 rounded-full inline-flex items-center"
            >
              {button.label}
              <svg
                class="ml-2 w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.23 7.21l4.29 4.3a1 1 0 0 0 1.42 0l4.29-4.3a1 1 0 0 0-1.42-1.42l-3.58 3.58L6.65 5.8a1 1 0 1 0-1.42 1.42z" />
              </svg>
            </button>
          ))}
        </div>
      </div>

      <div class="grid grid-cols-3 gap-8 mt-20">
        {events?.map((event, index) => <EventItem key={index} event={event} />)}
      </div>
    </div>
  );
}
