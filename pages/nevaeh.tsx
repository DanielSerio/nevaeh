
import Head from 'next/head'
import { UIEvent, useState } from 'react'
import Content from '../components/Content/Content'
import LinkButton from '../components/controls/LinkButton'
import Figure from '../components/Figure/Figure'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import OfferingsBlock from '../components/OfferingsBlock/OfferingsBlock'
import Page from '../components/Page/Page'
import PageBlock from '../components/Page/PageBlock'
import { BsLinkedin } from 'react-icons/bs'
import { MdLocalOffer, MdReadMore } from 'react-icons/md'
import TabContent from '../components/TabContent/TabContent'
import NevaehContent from '../components/NevaehContent'
import { AiOutlineSafety } from 'react-icons/ai'

export default function Home() {
  const [scrolltop, setScrolltop] = useState<number>(0)

  function onScroll(e: UIEvent) {
    const { scrollTop } = e.target as HTMLDivElement
    if (scrollTop <= 600) setScrolltop(scrollTop)
  }

  //TODO: SEO
  return (
    <Page className='simple' onScroll={onScroll}>
      <Head>
        <title>Nevaeh Insurance</title>
        <meta name="description" content="Nevaeh Insurance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Content>
        <Hero url="/beach.jpg" scrolltop={scrolltop}>
          <div className="hero-box">
            <h1 className="h4" style={{ textAlign: 'center' }}>NEVAEH INSURANCE SOLUTIONS</h1>
            <p className="text-small" style={{ maxWidth: '38ch', marginBottom: '2.76rem' }}>
              Nevaeh Insurance Solutions is an external facility
              performing functions on behalf of insurance carriers,
              such as underwriting, product development, business
              acquisition, and program management.
            </p>
            <LinkButton href="/contact">Contact Us</LinkButton>
          </div>
        </Hero>
        <PageBlock>
          <TabContent tabs={[
            {
              name: 'About Nevaeh',
              icon: <AiOutlineSafety />,
              content: <NevaehContent />
            },
            {
              name: 'Offerings',
              icon: <MdLocalOffer />,
              content: <OfferingsBlock />
            }
          ]} />
        </PageBlock>
      </Content>
      <Footer />
    </Page>
  )
}
