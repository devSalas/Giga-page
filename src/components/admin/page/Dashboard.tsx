import CoberageTable from "../CoberageTable";
import NavbarAdmin from "../NavbarAdmin";

function Dashboard() {
    return (
        <div className="w-full min-h-screen">
            <div className="max-w-6xl m-auto">
                <div className="flex flex-col gap-[20px]">
                    <NavbarAdmin  />
                    <div className="text-4xl  font-bold text-black/60">
                    Clientes potenciales que desean el serivico.
                    </div>
                    <div>
                        <CoberageTable />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;