import Link from "next/link"
import Images from "../ui/images"

export default function Page() {
   return (
      <>
         <h1>dashboard</h1>
         <Images />
         <Link href="/dashboard/some">Some</Link>
      </>

   )
}