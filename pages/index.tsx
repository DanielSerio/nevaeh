
import Head from 'next/head'
import { UIEvent, useRef, useState } from 'react'
import Content from '../components/Content/Content'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Page from '../components/Page/Page'
import PageBlock from '../components/Page/PageBlock'


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

        </Hero>
        <PageBlock>
          <h1>About Nevaeh</h1>
          <p>Nevaeh Insurance Solutions is an external facility
            performing functions on behalf of insurance carriers,
            such as underwriting, product development, business acquisition,
            and program management.</p>
          <p>Innovation is paramount to business success; Nevaeh provides
            an outlet for insurance carrier partners to explore new ways
            of doing business without disrupting existing operations.</p>
          <p>It is difficult for many companies to go from concept to
            execution. Nevaeh allows an organization to test and learn
            before making a commitment and investment in new ideas.</p>
          <p>Many insurance companies like to talk about their innovation
            strategies but fall short for many reasons.</p>
          <blockquote>
            <p className="quote">"Let Nevaeh help you measure twice and cut once to attain
              business success without the typical risk
              associated with execution."</p>
            <h2 className="author">Tom DeNoma, CEO/President</h2>
          </blockquote>
        </PageBlock>
        <PageBlock inverted>
          <div className="tom-grid">
            <h1> Getting to know Tom DeNoma</h1>
            <div className="figure-area"></div>
            <div className="card-area">
              <div className="card tom-card">
                <h2 className="h3">Tom DeNoma is Chief Executive Officer
                  and President for Nevaeh Insurance Solutions.</h2>
                <h3 className="p">Nevaeh insurance solutions is an external facility
                  performing functions on behalf of insurance carriers,
                  such as underwriting, product development,
                  business acquisition and overall program management.</h3>
              </div>
            </div>
          </div>
        </PageBlock>
        <PageBlock>
          <div className="offerings-grid">
            <h1>Our Offerings</h1>
            <div className="card offering-card">
              <h2 className="h3">Our Employer Group Products</h2>
              <ul>
                <li>Stop loss</li>
                <li>Supplemental Medical</li>
                <li>Carve out pharmacy</li>
                <li>TBD "All innovative ideas considered"</li>
              </ul>
            </div>
            <div className="card offering-card">
              <h2 className="h3">Program Characteristics</h2>
              <ul>
                <li>Short-tail risk</li>
                <li>Historical track record of profitability</li>
                <li>Turnkey (e.g., administration, underwriting, sales)</li>
                <li>Minimum of five years in the business</li>
                <li>Revenue between $10m-$100m</li>
              </ul>
            </div>
          </div>
        </PageBlock>
      </Content>
      <Footer />
    </Page>
  )
}
