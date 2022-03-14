
import Head from 'next/head'
import { MdMail, MdPhone } from 'react-icons/md'
import ContactForm from '../components/ContactForm/ContactForm'
import Content from '../components/Content/Content'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Page from '../components/Page/Page'
import PageBlock from '../components/Page/PageBlock'

export default function NevaehAdvantage() {

  //TODO: SEO
  return (
    <Page className='simple'>
      <Head>
        <title>Nevaeh Insurance</title>
        <meta name="description" content="Nevaeh Insurance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Content>
        <PageBlock className="contact-block">
          <h1>Contact us, We Are Here to Help You</h1>
          <div className="display-contact">
            <div className="block">
              <div><strong>Email</strong></div>
              <a href="mailto:tom.denoma@nevaehinsurance.com">
                <span className="icon"><MdMail /></span>
                <span className="text">tom.denoma@nevaehinsurance.com</span>
              </a>
            </div>
            <div className="block">
              <div><strong>Phone</strong></div>
              <a href="tel:+16145619904">
                <span className="icon"><MdPhone /></span>
                <span className="text">+1 614-561-9904</span>
              </a>
            </div>
          </div>
          <ContactForm />
        </PageBlock>
      </Content>
      <Footer />
    </Page>
  )
}