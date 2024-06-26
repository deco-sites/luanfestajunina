import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";
import Slider from "site/components/ui/SliderJS.tsx";
import { useId } from "site/sdk/useId.ts";

/**
 * @titleBy alt
 */
export interface Testimonial {
  content?: {
    description?: string;
    avatar?: ImageWidget;
    /** @description Image's alt text */
    alt?: string;
    name?: string;
    position?: string;
  };
}

export interface Props {
  title?: string;
  slides?: Testimonial[];
  /**
   * @title Show arrows
   * @description show arrows to navigate through the images
   */
  arrows?: boolean;
  /**
   * @title Show dots
   * @description show dots to navigate through the images
   */
  dots?: boolean;
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

const DEFAULT_PROPS = {
  title: "This is where you'll put your customer testimonials",
  slides: [
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
  ],
};

function SliderItem(
  { slide, id }: { slide: Testimonial; id: string },
) {
  const {
    content,
  } = slide;

  return (
    <div
      id={id}
      class="relative overflow-y-hidden w-full"
    >
      <div class="flex flex-col justify-center items-center gap-4 p-6 border border-[#FF7A00] rounded-[32px] max-w-[300px] lg:max-w-[470px]">
        <Image
          class="cursor-pointer object-cover w-[170px] h-[170px] rounded-full hover:scale-110 transition-all"
          alt={content?.alt}
          src={content?.avatar || ""}
          width={170}
          height={170}
        />
        <p class="dm-sans text-[#3E005B] font-bold text-2xl">{content?.name}</p>
        <p class="dm-sans text-black font-normal text-base">
          {content?.description}
        </p>
      </div>
    </div>
  );
}

function Dots({ slides, interval = 0 }: Props) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @property --dot-progress {
            syntax: '<percentage>';
            inherits: false;
            initial-value: 0%;
          }
          `,
        }}
      />
      <ul class="carousel col-span-full gap-3 z-10">
        {slides?.map((_, index) => (
          <li class="carousel-item">
            <Slider.Dot index={index}>
              <div class="py-5">
                <div
                  class="w-2 h-2 rounded-full group-disabled:animate-progress dot"
                  style={{ animationDuration: `${interval}s` }}
                />
              </div>
            </Slider.Dot>
          </li>
        ))}
      </ul>
    </>
  );
}

function Buttons() {
  return (
    <>
      <div class="hidden relative sm:block z-10 col-start-1 row-start-3">
        <Slider.PrevButton class="disabled:hidden btn btn-circle btn-outline absolute right-1/2 bg-base-100">
          <Icon size={24} id="ChevronLeft" strokeWidth={3} />
        </Slider.PrevButton>
      </div>
      <div class="hidden relative sm:block z-10 col-start-3 row-start-3">
        <Slider.NextButton class="disabled:hidden btn btn-circle btn-outline absolute left-1/2 bg-base-100">
          <Icon size={24} id="ChevronRight" strokeWidth={3} />
        </Slider.NextButton>
      </div>
    </>
  );
}

function Carousel(props: Props) {
  const id = useId();
  const { title, slides, interval } = { ...DEFAULT_PROPS, ...props };

  return (
    <div
      id={id}
      class="max-container-auto flex flex-col gap-11 my-16 page-content right"
    >
      <h2 class="text-center dm-sans text-[#242565] font-bold text-4xl">
        {title}
      </h2>
      <div
        id={id}
        class="container grid lg:grid-cols-[48px_1fr_48px] px-0 sm:px-5"
      >
        <Slider class="carousel carousel-center sm:carousel-end gap-6 col-span-full row-start-2 row-end-6">
          {slides?.map((slide, index) => (
            <Slider.Item
              index={index}
              class="carousel-item sm:first:pl-0 sm:last:pr-0"
            >
              <SliderItem
                slide={slide}
                id={`${id}::${index}`}
              />
            </Slider.Item>
          ))}
        </Slider>

        {props.dots && <Dots slides={slides} interval={interval} />}{" "}
        {props.arrows && <Buttons />}

        <Slider.JS rootId={id} interval={interval && interval * 1e3} infinite />
      </div>
    </div>
  );
}

export default Carousel;
