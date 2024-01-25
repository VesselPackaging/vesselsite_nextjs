import '@styles/globals.css';
import Nav from '@components/Nav';
import Footer from '@components/Footer';

export const metadate = {
    title: "Vessel Packaging",
    description: "The Power of Can"
}

const RootLayout = ({children}) => {
    return (
      <html lang="en">
          <body>
              <div className='main'>
                  <div className='vesselbg'/>
              </div>
  
              <main className='app'>
                  <Nav />
                    {children}
                  <Footer />
              </main>
          </body>
      </html>
    )
  }
  
  export default RootLayout