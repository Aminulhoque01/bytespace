import Footer from "@/src/components/layout/Footer";
import Navbar from "@/src/components/layout/Navbar";

 
 
export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
       
    

      <main>
        {children}
      </main>

      <Footer/>
    </>
  );
}