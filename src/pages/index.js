import React from 'react';

import Layout from '../global/Layout';
import Image from '../components/Image';
import SEO from '../components/Seo';
import Heading from '../components/Heading';
import Text from '../components/Text';
import Page from '../components/Page';
import Counter from '../components/Counter';


const IndexPage = () => (
    <Layout>
        <SEO title={'Home'}/>
        <Page>
            <Image/>
            <Heading as={'h1'} content={'gatsby-starter-redux-storybook'}/>
            <Text content={'Starter'}/>
            <Counter/>
        </Page>
    </Layout>
);

export default IndexPage;
