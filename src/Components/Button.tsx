import React from 'react'

type ButtonProps = {
  handler: (e: React.MouseEvent) => void
}

function Button({
  handler,
  ...restProp
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...restProp} onClick={handler}>
      Click
    </button>
  )
}

export default Button
