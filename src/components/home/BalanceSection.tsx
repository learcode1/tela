import { ChevronRight } from "lucide-react";

import { EditableAmount } from "./EditableAmount";
import { BarcodeIcon, CardIcon, PhoneIcon, PixIcon, QrIcon } from "./icons";

const actions = [
  { icon: PixIcon, label: "Área Pix e Transferir" },
  { icon: BarcodeIcon, label: "Pagar" },
  { icon: QrIcon, label: "Pagar com\nPix QR code" },
  { icon: PhoneIcon, label: "Recarga de celular" },
];

export function BalanceSection() {
  return (
    <section className="px-6 pt-5 pb-5">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-base font-semibold tracking-tight">Saldo em conta</span>
        <ChevronRight className="size-5 shrink-0 text-subtle" strokeWidth={2} />
      </button>
      <p className="mt-1 text-lg font-medium">
        <EditableAmount value="900" label="Editar saldo em conta" />
      </p>

      <div className="mt-6 grid grid-cols-4 gap-1.5">
        {actions.map(({ icon: Icon, label }) => (
          <button key={label} type="button" className="flex flex-col items-center gap-2">
            <span className="grid size-[75px] place-items-center rounded-full bg-surface">
              <Icon className={Icon === PixIcon ? "size-[24px]" : "size-5"} />
            </span>
            <span className="text-center text-[11px] leading-[1.2] font-semibold whitespace-pre-line">
              {label}
            </span>
          </button>
        ))}
      </div>

      <button
        type="button"
        className="mt-5 flex w-full items-center gap-3 rounded-none bg-surface px-4 py-5 text-left"
      >
        <CardIcon className="size-5 shrink-0" />
        <span className="text-sm font-semibold">Meus cartões</span>
      </button>
    </section>
  );
}
