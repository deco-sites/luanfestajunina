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
    <Image src={event.image} width={340} height={340} class="cursor-pointer rounded-t-2xl w-[340px] h-[340px] hover:scale-110 transition-all" />
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
  return (
    <div class="max-container-auto pt-28">
      <h2 class="dm-sans text-[#242565] text-4xl font-bold">
        Próximos eventos
      </h2>

      <div class="grid grid-cols-3 gap-8 mt-20">
        {events?.map((event, index) => <EventItem key={index} event={event} />)}
      </div>
    </div>
  );
}
