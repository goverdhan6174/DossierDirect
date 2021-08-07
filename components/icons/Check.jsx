const Check = ({ ...props }) => {
  return (
    <svg
      width={24 * props.scale || 1}
      height={24 * props.scale || 1}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      {...props}
    >
      <path
        d="M20 6L9 17L4 12"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Check;
