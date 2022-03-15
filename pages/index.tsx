
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
import { MdReadMore } from 'react-icons/md'
import usePageScroll from '../hooks/use-page-scroll'

export default function Home() {
  const { onScroll, scrolltop } = usePageScroll()

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
            <h1 className="h2">Imagine the possibilities</h1>
            <h2 className="p">Nevaeh Insurance Solutions is an
              external facility performing functions on behalf of
              insurance carriers, such as underwriting, product
              development, business acquisition, and program management.</h2>
            <LinkButton href="/contact">Contact Us</LinkButton>
          </div>
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
          <blockquote className="tom-quote">
            <p className="quote">"Let Nevaeh help you measure twice and cut once to attain
              business success without the typical risk
              associated with execution."</p>
            <h2 className="author"><b>Tom DeNoma</b> CEO/President</h2>
          </blockquote>
        </PageBlock>
        <PageBlock inverted>
          <div className="tom-grid">
            <h1 className='h2'> Getting to know Tom DeNoma</h1>
            <div className="figure-area">
              <Figure
                width={200}
                height={200}
                imgAlt="A picture of Tom DeNoma"
                imgSrc='/tom.jpg'
                caption='Tom DeNoma' />
            </div>
            <div className="card-area">
              <div className="card tom-card">
                <h2 className="h3">Tom DeNoma is Chief Executive Officer
                  and President for Nevaeh Insurance Solutions.</h2>
                <h3 className="p">Nevaeh insurance solutions is an external facility
                  performing functions on behalf of insurance carriers,
                  such as underwriting, product development,
                  business acquisition and overall program management.</h3>
                <LinkButton type="social" href="https://www.linkedin.com/in/tom-denoma-b0386518a/">
                  <span className="icon"><BsLinkedin /></span>
                  <span className="text">Linkedin</span>
                </LinkButton>
                <LinkButton href="/tom-denoma">
                  <span className="icon">
                    <MdReadMore />
                  </span>
                  <span className="text">Read More about Tom DeNoma</span>
                </LinkButton>
              </div>
            </div>
          </div>
        </PageBlock>
        <PageBlock>
          <OfferingsBlock />
        </PageBlock>
      </Content>
      <Footer />
    </Page>
  )
}
