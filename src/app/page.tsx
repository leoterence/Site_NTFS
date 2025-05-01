import Colab from "@/components/Colab"
import Call from "@/components/Call"
import Art from "@/components/Art"
import Seller from "@/components/Seller"
import Popular from "@/components/Popular"
import Hero from "@/components/Hero"
export default function page() {
  return (
    <div className="text-center">
      <Hero />
      <Colab />
      <Popular />
      <Seller />
      <Art />
      <Call />
    </div>
  )
}