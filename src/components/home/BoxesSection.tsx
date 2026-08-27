import { ChevronRight, Plus, TriangleIcon, X } from "lucide-react";
import { useMemo, useState } from "react";

import { EditableAmount } from "./EditableAmount";
import { EditableText } from "./EditableText";

import boxFuturo from "@/assets/box-futuro.jpg";
import boxKeys from "@/assets/box-keys.jpg";
import boxMoto from "@/assets/box-moto.jpeg";
import boxSummer from "@/assets/box-summer.jpg";
import { formatAmount, parseAmount } from "@/lib/currency";

type Box = { id: string; name: string; amount: string; image: string };

const images = [boxMoto, boxFuturo, boxKeys, boxSummer];

const initialBoxes: Box[] = [
  { id: "moto", name: "MOTO", amount: "0,09", image: boxMoto },
  { id: "futuro", name: "Futuro", amount: "0,00", image: boxFuturo },
];

export function BoxesSection() {
  const [boxes, setBoxes] = useState<Box[]>(initialBoxes);

  const total = useMemo(
    () => formatAmount(boxes.reduce((sum, box) => sum + parseAmount(box.amount), 0)),
    [boxes],
  );

  const updateBox = (id: string, patch: Partial<Box>) =>
    setBoxes((prev) => prev.map((box) => (box.id === id ? { ...box, ...patch } : box)));

  const removeBox = (id: string) => setBoxes((prev) => prev.filter((box) => box.id !== id));



  return (
    <section className="pt-5 pb-5">
      <div className="px-6">
        <button type="button" className="flex w-full items-center justify-between gap-4 text-left">
          <span className="text-base font-semibold tracking-tight">Total em Caixinhas</span>
          <ChevronRight className="size-5 shrink-0 text-subtle" strokeWidth={2} />
        </button>
        <p className="mt-1 text-lg font-medium">
          R$ {total}
        </p>
      </div>

      <div className="mt-5 flex gap-3 overflow-x-auto pb-1 [&>*:first-child]:ml-4 [&>*:last-child]:mr-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {boxes.map((box) => {
          const positive = parseAmount(box.amount) > 0;
          return (
            <article key={box.id} className="w-[30%] shrink-0">
              <div className="relative">
                <img
                  src={box.image}
                  alt={`Caixinha ${box.name}`}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="aspect-square w-full rounded-md object-cover"
                  style={{ border: '2px solid #012147' }}
                />
              </div>
              <p className="mt-2 text-[13px] font-semibold">
                <EditableText
                  value={box.name}
                  label={`Editar nome da Caixinha ${box.name}`}
                  onValueChange={(name) => updateBox(box.id, { name })}
                />
              </p>
              <p
                className={`mt-0.5 flex items-center gap-1 text-[13px]`}
              >
                <EditableAmount
                  value={box.amount}
                  label={`Editar valor da Caixinha ${box.name}`}
                  onValueChange={(amount) => updateBox(box.id, { amount })}
                />
                {positive ? <TriangleIcon className="size-2 fill-up text-up" /> : null}
              </p>
            </article>
          );
        })}


        <article className="w-[30%] shrink-0">
          <div className="grid aspect-square w-full grid-rows-2 gap-1.5 overflow-hidden rounded-md" style={{ border: '2px solid #012147' }}>
            <img
              src={boxKeys}
              alt=""
              loading="lazy"
              width={860}
              height={512}
              className="size-full object-cover"
            />
            <img
              src={boxSummer}
              alt=""
              loading="lazy"
              width={860}
              height={512}
              className="size-full object-cover"
            />
          </div>
          <p className="mt-2 text-[13px] font-semibold">Acessar todas</p>
        </article>
      </div>
    </section>
  );
}
