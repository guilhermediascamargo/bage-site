/** Motivo decorativo abstrato; não representa a arte oficial do mascote. */
export default function MembershipBeeMark({
  className,
}: {
  className?: string | undefined;
}) {
  return (
    <svg
      className={className}
      data-membership-bee
      viewBox="0 0 48 48"
      width="36"
      height="36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M24 19 17 12V7M24 19l7-7V7M24 24 13 12H5v9l14 8M24 24l11-12h8v9l-14 8" />
      <path d="m24 17 7 9-2 10-5 7-5-7-2-10Z" />
      <path d="M18 26h12M19 31h10M20 36h8" />
    </svg>
  );
}
