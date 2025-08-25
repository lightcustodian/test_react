import { MegaNavigation } from '../../src/components/globals/MegaNavigation'
import { Footer } from '../../src/components/globals/Footer'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <MegaNavigation />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}