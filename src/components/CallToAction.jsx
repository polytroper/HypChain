import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Beat the pants off your competition.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            They'll never see it coming. You can't see hypothetical things
            because that's impossible. Your competition will be lying there,
            pantsless, shivering, wondering to themselves "how did this happen?"
          </p>
          <Button href="#buy" color="white" className="mt-10">
            Get your first HypCoin
          </Button>
        </div>
      </Container>
    </section>
  )
}
