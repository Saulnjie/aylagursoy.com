import Image from 'next/image'
import Container from '../components/Container'
import aboutimage from '../public/img/aboutprofile.jpg'

const exhibitions = [
  "Bergen interior and designfair 2018",
  "Stockholm furniture fair 2018",
  "Stockholm furniture fair 2019",
  "Kraft Bergen 2019",
  "Oslo design fair 2019",
  "Fjell festning light festival 2019",
  "Havrommet opening minifestival 2020",
  "Akvariet Bergen 2020",
]

const otherItems = [
  "Internship at Anderssen and Voll 2018",
  "Bachelor in furniture and spatial design/interior architecture - KMD university in Bergen 2019",
  "Exhibitiondesign for Fjordfiesta, Oslo designfair 2019",
  "Stylist at Heem Bergen (current)",
  "Master in Design - KMD university in Bergen (current)",
]

export default function Home() {
  return (
    <Container className='grid gap-6 lg:grid-cols-2'>
      <div className='grid gap-6'>
        <section>
          <h1 className='text-2xl	text-zinc-900 font-bold'>About</h1>
          <p className='prose max-w-none mt-2'>Furniture designer based in Bergen.
            Ayla focuses on the meeting between form, materials and humans, and she is driven by her curiosity and
            attention to details. She is a hands
            -
            on designer, using physical prototyping as her main tool in her design
            process.

            Her process results in a functional, clean, yet bold aesthetic.
            She is currently taking her master in
            furniture and spatial design at the University of Bergen.

            She is working in different fields within design. Interior stylist at Heem Bergen, building her
            studio and her vision for it, and also establishing Ytre Studio together with two other Bergen based
            designers.
          </p>
        </section>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-1'>
          <section>
            <InfoList title='Exhibitions' items={exhibitions} />
          </section>
          <section>
            <InfoList title='Other' items={otherItems} />
          </section>
        </div>
      </div>
      <section>
        <Image
          src={aboutimage}
        />
        <h3 className='text-xl text-zinc-900 font-bold mt-4'>Contact</h3>
        <p className='prose'>For any questions or inquiries, please do not hesitate to contact me through social media or by email.</p>
        <div className='text-zinc-600 flex flex-row w-14 items-center -ml-1 mt-2'>
          <a href="https://www.instagram.com/aylagursoy/">
            <img src="/svg/instagram.svg" alt="https://www.instagram.com/aylagursoy/" className="h-7 w-7" />
          </a>
          <a href="mailto:me@aylagursoy.com">
            <img src="/svg/letter.svg" className="h-6 w-6" alt="mailto:me@aylagursoy.com" />
          </a>
        </div>
      </section>
    </Container>
  )
}

type InfoListProps = {
  title: string
  items: string[]
}

function InfoList({ items, title }: InfoListProps) {
  return (
    <div>
      <h2 className='text-2xl	text-zinc-800 mb-3 font-bold'>{title}</h2>
      <ul className='text-gray-700 max-w-none mt-2 list-disc space-y-3'>
        {items.map((item, index) => {
          return (
            <li key={index}>{item}</li>
          )
        })}
      </ul>
    </div>
  )
}