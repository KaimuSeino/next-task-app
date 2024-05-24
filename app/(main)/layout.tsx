import SideMenu from "@/components/side-menu/side-menu";

const MainLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="flex h-screen">
      <SideMenu />
      <main className="bg-slate-100 flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;