import { ReactNode, HTMLProps } from "react"
import clsx from "clsx"

type Props = HTMLProps<HTMLDivElement> & {
  children?: ReactNode
  wide?: boolean
}

export default function Container({ children, className, wide, ...props }: Props) {
  return (
    <div {...props} className={clsx("px-4 lg:px-16 mx-auto", { "max-w-7xl": !wide }, className)}>
      {children}
    </div>
  )
}