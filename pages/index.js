import Head from "next/head"

import Link from 'next/link'
import Layout from '../components/Layout'
import Services from '../components/Services'
import Slider from '../components/Slider'

export default () => (
    
    <Layout>
        <Head>
            <title>index Page</title>
            <meta name="description" content="Generic Page" />
        </Head>

        <Slider />

        <Services />

    </Layout>
)
