type ShopeeLogoProps = {
  className?: string;
};

export const ShopeeLogo = ({ className = "h-5 w-5" }: ShopeeLogoProps) => (
  <img
    src="/media/brand/shopee-icon.svg"
    alt=""
    className={className}
    aria-hidden="true"
    width={20}
    height={20}
  />
);
