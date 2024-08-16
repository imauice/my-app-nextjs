import Navbar from "@/components/navbar/Navbar"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav>
          <Navbar/>
        </nav>
   
        {children}
   
      </section>
    )
  }