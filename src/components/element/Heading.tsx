type Props = {
    children?: React.ReactNode
    className?: string
}

export default function Heading({ className, children }: Props) {
    return (
        <div className={`text-foreground text-3xl sm:text-4xl lg:text-5xl font-semibold ${className}`}>
            {children}
        </div>
    )
}