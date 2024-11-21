import Link from "next/link";


export default function Places() {
    return(
        <div>
<h1>Places page</h1>
<b>
<button className="m-4 p-3 bg-yellow-500 rounded-full border-black border-double">
<Link href="/places/other-places">More Places</Link>
</button>
      </b>  
      
      </div>
    )
}