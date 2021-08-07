import s from "./Text.module.css";

const Text = ({
  style,
  className = "",
  variant = "body",
  children,
  html,
  onClick,
  Component = "p",
}) => {
  const componentsMap = {
    body: "div",
    heading: "h1",
    pageHeading: "h1",
    sectionHeading: "h2",
  };

  const htmlContentProps = html
    ? {
        dangerouslySetInnerHTML: { __html: html },
      }
    : {};

  // type Variant = 'heading' | 'body' | 'pageHeading' | 'sectionHeading'

  const rootCN = cn(
    s.root,
    {
      [s.body]: variant === "body",
      [s.heading]: variant === "heading",
      [s.pageHeading]: variant === "pageHeading",
      [s.sectionHeading]: variant === "sectionHeading",
    },
    className
  );

  const classNames = `${s.root},${className}`;

  return (
    <Component
      className={classNames}
      onClick={onClick}
      style={style}
      {...htmlContentProps}
    >
      {children}
    </Component>
  );
};

export default Text;
