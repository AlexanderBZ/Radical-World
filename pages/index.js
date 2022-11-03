import Banner from 'components/Banner'
import Collection from 'components/Collection'
import Layout from 'components/Layout'
import NotableDrops from 'components/NotableDrops'
import Subscribe from 'components/Subscribe'

export default function Home() {
  return (
    <Layout title="Home">
      <Banner />
      <NotableDrops />
      <Collection />
      <Subscribe />
    </Layout>
  )
}
