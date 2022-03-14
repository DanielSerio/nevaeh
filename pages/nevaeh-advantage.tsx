
import Head from 'next/head'
import Aside from '../components/Aside/Aside'
import Content from '../components/Content/Content'
import LinkButton from '../components/controls/LinkButton'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Page from '../components/Page/Page'
import PageBlock from '../components/Page/PageBlock'
import usePageScroll from '../hooks/use-page-scroll'

export default function NevaehAdvantage() {
  const { onScroll, scrolltop } = usePageScroll()

  //TODO: SEO
  return (
    <Page className='sidebar' onScroll={onScroll}>
      <Head>
        <title>Nevaeh Insurance</title>
        <meta name="description" content="Nevaeh Insurance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero url="/beach.jpg" scrolltop={scrolltop}>
        <div className="hero-box">
          <h1 className="h4" style={{ textAlign: 'center' }}>Nevaeh Advantage</h1>
          <p className="text-small" style={{ maxWidth: '38ch', marginBottom: '2.76rem' }}>
            Increases in the cost of healthcare shape how we compete globally,
            and unfortunately, this is a battle American employers have
            been losing.</p>
          <LinkButton href="/contact">Contact Us</LinkButton>
        </div>
      </Hero>
      <Content>
        <PageBlock>
          <h1>The Nevaeh Advantage</h1>
          <h2 className="p">Increases in the cost of healthcare
            shape how we compete globally, and unfortunately, this is
            a battle American employers have been losing.</h2>
          <p>Our mission at Nevaeh is to provide solutions that impact
            cost, drive better outcomes, and engage employees to make
            better health care choices.</p>
          <p>We have developed products in the following areas that
            deliver more efficient and effective healthcare solutions:</p>
          <ul className="developed-products-list">
            <li>Fully Insured PBM Carveout</li>
            <li>Stop-Loss</li>
            <li>Accident & Supplemental Medical</li>
          </ul>
          <p>These products have their own distinct advantages, but in tandem,
            provide a leveraging effect we call the <b>Nevaeh Advantage.</b></p>
          <p>These products/solutions are driven by Nevaeh & Markel
            Insurance and powered by the technical expertise of
            our partners:</p>
          <h4 className="p">
            <strong>
              Nevaeh is looking for Brokers/Consultants and Employers</strong>
            that want to leverage government tax deductions to the max,
            obtain better discounts and provide more innovative plan design
            options to mitigate increasing Healthcare cost for
            employers and employees.
          </h4>
        </PageBlock>
      </Content>
      <Aside />
      <Footer />
    </Page>
  )
}
