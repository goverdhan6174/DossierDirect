import React from 'react'

const Container = ({
  children,
  className,
  el = 'div',
  clean,
}) => {

  const rootClassName = `${className} ${!clean ? "mx-auto max-w-8xl px-6" : ""}`

  let Component = el 

  return <Component className={rootClassName}>{children}</Component>
}

export default Container
