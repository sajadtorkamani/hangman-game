import React from 'react'
import classNames from 'classnames'

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const Button: React.FC<Props> = (props) => {
  const className = classNames(
    'bg-gray-200 border border-gray-400 hover:bg-gray-300 rounded py-1.5 px-3 text-sm',
    props.className
  )

  return <button {...props} className={className} />
}

export default Button
