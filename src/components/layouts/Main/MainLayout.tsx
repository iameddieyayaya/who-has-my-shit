import Navbar from "@/components/Navbar/Navbar"

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  )
}

export default MainLayout
