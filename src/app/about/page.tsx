
import Link from "next/link"
import Image from 'next/image';
import woman from '../../../images/woman.jpg'

export default function About() {
    return(
        <div>
<h1>            About page</h1>
<Image src={"woman"}  width={400} height={400} alt=""></Image>
<b>
<button className="m-4 p-3 bg-yellow-500">
<Link href="/about/nested-about"> Nested About</Link>
</button>
      </b>  </div>
    )
}