export type CardProps = {
    children: React.ReactNode
    title?: string
}

const CardLine = () => (
    <div className="border border-black border-radius-2 rounded-md bg-black mb-4" />
)

const Card = ({ children, title }: CardProps) => (
    <div className="min-h-screen flex flex-col justify-center max-w-sm mx-auto">
        <div className="flex flex-col justify-center bg-white shadow-md rounded p-4 m-4">
            <span className="text-2xl font-bold mb-4">{title}</span>
            <CardLine />
            {children}
        </div>
    </div>
)

export default Card