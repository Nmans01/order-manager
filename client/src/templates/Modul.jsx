function Modul({ children }) {

    return (
        <div class="flex items-center justify-center h-full">
            <div class="relative bg-slate-300 text-slate-900 w-96 flex justify-center rounded-lg">
                {children}
            </div>
        </div>
    );
}
export default Modul;