import { ImageWidget } from "apps/admin/widgets.ts";
import Slider from "site/components/ui/SliderJS.tsx";
import { useId } from "site/sdk/useId.ts";
import Icon from "site/components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";

interface Food {
  /** @title Nome da comida */
  label?: string;
  /** @title Imagem da comida */
  image: ImageWidget;
}

export interface Props {
  title?: string;
  foods: Food[];
  type: "image" | "banner";
}

const FoodItem = ({ food, type = "image" }: { food: Food, type: "image" | "banner" }) => (
  <div class="relative flex flex-col gap-3 cursor-pointer">
    <Image src={food.image} width={type === "image" ? 140 : 381} height={type === "image" ? 140 : 153} />
    {food.label && <p class="text-center">{food.label}</p>}
  </div>
);

export default function Foods({ title, foods, type = "image" }: Props) {
  const id = useId();

  return (
    <div class="max-container-auto flex flex-col gap-11 my-16">
      <h2 class="text-center dm-sans text-[#242565] font-bold text-4xl">
        Comidas deliciosas para você
      </h2>

      <div
        id={id}
        class="container grid grid-cols-[48px_1fr_48px] px-0 sm:px-5"
      >
        {title && (
          <h2 class="col-span-full text-start mb-6 text-lg">
            <b>{title}</b>
          </h2>
        )}
        <Slider class="carousel carousel-center sm:carousel-end gap-6 col-span-full row-start-2 row-end-6">
          {foods.map((food, index) => (
            <Slider.Item
              index={index}
              class="carousel-item first:pl-6 sm:first:pl-0 last:pr-6 sm:last:pr-0"
            >
              <FoodItem food={food} type={type} />
            </Slider.Item>
          ))}
        </Slider>

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

        <Slider.JS rootId={id} />
      </div>
    </div>
  );
}