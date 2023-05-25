export type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div className="flex-grow">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout