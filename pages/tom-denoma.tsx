import Head from 'next/head'
import { BsLinkedin } from 'react-icons/bs'
import { MdMail, MdPhone } from 'react-icons/md'
import Content from '../components/Content/Content'
import LinkButton from '../components/controls/LinkButton'
import Figure from '../components/Figure/Figure'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Page from '../components/Page/Page'
import PageBlock from '../components/Page/PageBlock'
import usePageScroll from '../hooks/use-page-scroll'

export default function Navaeh() {
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
            <h1 className="h4" style={{ textAlign: 'center' }}>Tom DeNoma</h1>
            <p style={{ maxWidth: '30ch' }}><strong>Tom DeNoma</strong> is Chief Executive Officer and
              President for Nevaeh Insurance Solutions.
              Nevaeh is an external facility performing functions on behalf of
              insurance carriers, such as underwriting, product development,
              business acquisition, and program management.</p>
          </div>
        </Hero>
        <PageBlock className="about-tom-block">
          <div className="about-tom">
            <p>Launching Nevaeh in 2019, Tom is responsible for managing
              business acquisition, carrier partnerships,
              and vendor relationships.</p>
            <p>Tom has worked in the insurance industry for more than 30 years.
              Before starting Nevaeh, he worked for nearly 20 years at
              Nationwide Mutual insurance company. Tom was the architect,
              engineer, and head of business development for Nationwide
              Specialty Insurance, a program business model specializing
              in P&C and Accident and Health
              insurance.</p>
            <p>Tom won the Nationwide sales award in 2018 and 2019, the Vision
              Center CEO award in 2005, and was recognized as the Nationwide
              Health Plans employee of the year in 2000.</p>
            <p>Before Nationwide, Tom was director for Delta Dental of Ohio.</p>
            <p>Tom earned an associate business degree from
              Raymond Walter College and a bachelor’s in business administration
              degree at the University of Cincinnati.</p>
            <p>Honorably served in the U.S.
              Navy as an air traffic controller.</p>
            <p>Tom is a member of the Self-Insurance Institute of America (SIIA)
              and Inter-Company Marketing Group (ICMG).</p>
          </div>
          <div className="figure-wrap">
            <Figure
              width={200}
              height={400}
              imgAlt="A picture of Tom DeNoma"
              imgSrc='/tom.jpg'
              caption='Tom DeNoma' />
            <div className="links">
              <a href="tel:+16145619904">
                <span className="icon"><MdPhone /></span>
                <span className="text">+1 614-561-9904</span>
              </a>
              <a href="mailto:tom.denoma@nevaehinsurance.com">
                <span className="icon"><MdMail /></span>
                <span className="text">tom.denoma@nevaehinsurance.com</span>
              </a>
              <LinkButton type="social" href="https://www.linkedin.com/in/tom-denoma-b0386518a/">
                <span className="icon"><BsLinkedin /></span>
                <span className="text">Linkedin</span>
              </LinkButton>
            </div>
          </div>
        </PageBlock>
      </Content>
      <Footer />
    </Page>
  )
}
