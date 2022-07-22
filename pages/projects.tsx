import { styled, theme } from '../lib/styles/stitches.config';
import PageTitle from '../_common/components/PageTitle';
import Link from '../_common/components/Link';
import { NextSeo } from 'next-seo';
import Content from '../_common/components/Content';
import { OctocatOcticon } from '../_common/components/Icons';
import { authorSocial } from "../lib/config";


const Wrapper = styled("div", {
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "100%",
  fontSize: "1.1em",
  lineHeight: 1.1
});

const ViewMore = styled('p', {
  textAlign: 'center',
  marginBottom: 0,
  fontSize: '1.1em',
  fontWeight: 500
});

const GitHubLogo = styled(OctocatOcticon, {
  width: "1.2em",
  height: "1.2em",
  verticalAlign: "-0.2em",
  margin: "0 0.15em",
  fill: theme.colors.text
});

const Projects = () => {
  return (
    <>
      <NextSeo
        title='Projects'
        openGraph={ {
          title: "Projects"
        } }
      />
      <PageTitle>💾 Projects</PageTitle>

      <Content>
        <Wrapper>

        </Wrapper>
        <ViewMore>
          <Link href={ `https://github.com/${ authorSocial.github }` }>
            View more on <GitHubLogo /> GitHub...
          </Link>
        </ViewMore>
      </Content>
    </>
  )
}

export default Projects;
