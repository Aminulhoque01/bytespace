import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

/* =========================================================
   404 NOT FOUND PAGE
========================================================= */

export default function NotFound() {
  return (
    <main
      className="
        relative
        flex
        min-h-screen
        w-full
        flex-col
        overflow-hidden
        bg-[#073FDC]
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.13]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(255,255,255,0.65) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.65) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <Navbar/>

      {/* =====================================================
          404 CONTENT
      ====================================================== */}

      <section
        className="
          relative
          z-10
          flex
          flex-1
          items-center
          justify-center
          px-[20px]
          pb-[55px]
          pt-[125px]
          sm:px-[30px]
          sm:pb-[70px]
        "
      >
        <div
          className="
            flex
            w-full
            max-w-[620px]
            flex-col
            items-center
            text-center
          "
        >
          {/* =================================================
              404 NUMBER
          ================================================== */}

          <div
            aria-hidden="true"
            className="
              select-none
              bg-gradient-to-b
              from-[#D4FB20]
              via-[#C8F51D]
              to-[#8A9D6A]
              bg-clip-text
              text-[150px]
              font-medium
              leading-[0.76]
              tracking-[-10px]
              text-transparent
              sm:text-[185px]
              sm:tracking-[-13px]
              md:text-[200px]
            "
          >
            404
          </div>

          {/* =================================================
              HEADING
          ================================================== */}

          <h1
            className="
              mt-[12px]
              max-w-[1200px]
              text-[42px]
              font-semibold
              leading-[120%]
             
              text-white
              sm:mt-[13px]
              sm: text-[35px]
              sm: tracking-[-1.4px]
            "
          >
            The page you are looking
            <br />
            for doesn’t exist
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <p
            className="
              mt-[19px]
              text-[8px]
              font-normal
              leading-[14px]
              text-white/55
              sm:text-[9px]
            "
          >
            Try to use a correct url or go back to homepage to start again
          </p>

          {/* =================================================
              BACK HOME BUTTON
          ================================================== */}

          <Link
            href="/"
            className="
              mt-[17px]
              flex
              h-[46px]
              min-w-[163px]
              items-center
              justify-center
              rounded-full
              bg-[#D4FB20]
              px-[13px]
              text-[16px]
              font-medium
              leading-none
              text-[#111111]
              transition-all
              duration-150
              hover:brightness-95
              hover:shadow-[0_5px_18px_rgba(212,251,32,0.20)]
              active:scale-[0.97]
            "
          >
            Back to Home
          </Link>
        </div>
      </section>

      <Footer/>
    </main>
  );
}