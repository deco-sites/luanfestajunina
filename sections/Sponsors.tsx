import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";

interface Sponsor {
  /** @title Imagem */
  image: ImageWidget;
  /** @title Nome */
  label: string;
}

interface Props {
  sponsors?: Sponsor[];
}

export default function Sponsors({ sponsors }: Props) {
  return (
    <div class="max-container-auto flex flex-col items-center justify-center mt-16">
      <h2 class="dm-sans text-[#242565] font-bold text-4xl">
        Nossos patrocinadores
      </h2>
      <p class="dm-sans font-normal text-[#6A6A6A] text-lg mt-5">
        Tivemos o prazer de trabalhar com marcas que definem o setor. Estes são
        apenas alguns deles.
      </p>

      <div class="mt-16 grid grid-cols-5 gap-6">
        <div class="cursor-pointer flex items-center justify-center w-[80px] h-[80px] relative">
          <Icon id="Petz" width={80} height={80} class="absolute top-1/2 hover:scale-110 transition-all" />
        </div>
        {sponsors?.map((sponsor, index) => (
          <Image
            key={index}
            src={sponsor.image}
            alt={sponsor.label}
            class="w-[80px] h-[80px] cursor-pointer hover:scale-110 transition-all"
            width={80}
            height={80}
          />
        ))}
      </div>
    </div>
  );
}
