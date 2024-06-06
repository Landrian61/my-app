import "../globals.css";
import { Toaster } from "@/components/ui/sonner"
import { REM } from "next/font/google";

const rem = REM({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-slate-100 flex justify-center items-center h-screen overflow-hidden p-20 ${rem.className}`}>
        <div className='grid grid-cols-2 divide-x-2 divide-dashed rounded-md bg-white'>
          {children}
        </div>
        {/* <Toaster /> */}
      </body>
    </html>
  );
}

export default AuthLayout;
