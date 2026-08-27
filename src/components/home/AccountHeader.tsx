import { UserAvatarIcon, EyeIcon, HelpIcon, ShieldIcon } from "./iconsSvg";

export function AccountHeader() {
  return (
    <header className="px-6 pt-5 pb-6 text-brand-foreground" style={{ backgroundColor: '#591E8C' }}>
      <div className="flex items-center justify-between gap-4">
        <div className="relative w-fit">
          <div className="grid size-12 shrink-0 place-items-center rounded-full" style={{ backgroundColor: '#8032C3' }}>
            <UserAvatarIcon className="size-5" />
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-6">
          <button type="button" aria-label="Ocultar saldo">
            <EyeIcon className="size-[23px]" />
          </button>
          <button type="button" aria-label="Ajuda">
            <HelpIcon className="size-[21px]" />
          </button>
          <button type="button" aria-label="Segurança">
            <ShieldIcon className="size-[21px]" />
          </button>
        </div>
      </div>
      <p className="mt-8 text-lg font-semibold tracking-tight">Olá, Lucas</p>
    </header>
  );
}
