type ShopeeIconProps = {
  className?: string;
};

export const ShopeeIcon = ({ className = "h-5 w-5" }: ShopeeIconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d="M12 2c.6 0 1.1.4 1.3 1l1.1 3.4h4.1c.7 0 1.3.6 1.3 1.3 0 .2 0 .4-.1.6l-2.2 6.4c-.2.6-.8 1-1.4 1H5.9c-.6 0-1.2-.4-1.4-1L2.3 8.3c-.2-.6.2-1.3.8-1.5.1 0 .2-.1.4-.1h4.1L8.7 3c.2-.6.7-1 1.3-1Zm-1.2 5.2L9.9 4.6h4.2l-.9 2.6H10.8Zm-5.1 1.5 1.8 5.2h9.1l1.8-5.2H5.7Zm2.8 8.3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm6 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
  </svg>
);
