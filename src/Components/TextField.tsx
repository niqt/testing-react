import React from 'react'

type TextFieldProps = {
  text: string
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextField = (props: TextFieldProps) => {
  return <input value={props.text} onChange={props.handler} />
}
