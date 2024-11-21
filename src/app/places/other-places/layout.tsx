



export default function RootLayout({
  children,

}: {
  children: React.ReactNode;
}) {
 return (
<div className="bg-lime-300 w-50% h-10%">
  <p>
    Karachi is a beautiful city to visit.
    You can fin many places to visit here.
    Top listed are described . other than them few are also
    mentioned here...
  </p>
 
  {children}
</div>

 )
}
