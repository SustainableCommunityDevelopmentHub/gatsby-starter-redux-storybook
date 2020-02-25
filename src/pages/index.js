import React from 'react';

import Layout from '../components/Layout/Layout';
import Image from '../components/Image/Image';
import SEO from '../components/Seo/SEO';
import Heading from '../components/Heading/Heading';
import Counter from '../components/Counter';
import Quote from '../components/Quote/Quote';
import { PageWrapper } from '../components/Layout/Layout.style';


const IndexPage = () => (
    <Layout>
        <SEO title={'Home'}/>
        <PageWrapper>
            <Image/>
            <Heading as={'h1'} content={'gatsby-starter-redux-storybook'}/>
            <Quote content={'Starter'}/>
            <Counter/>
        </PageWrapper>
    </Layout>
);

export default IndexPage;
