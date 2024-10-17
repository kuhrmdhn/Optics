type Props = {
    className?: string
    children?: React.ReactNode
}

export default function HeadingBody({ className, children }: Props) {
    return (
        <div className={`text-justify text-xs sm:text-base ${className}`}>
            {children}
        </div>
    )
}