import { CMS, METADATA } from '@/constants';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { IPost, ITagList } from '@/types/cms';
import { fetchBlogEntriesByTag, fetchTagList } from '@/services/cms';
import Pagination from '@/components/Pagination/Pagination';
import Container from '@/components/Container';
import { Layout } from '@/components/ui';
import { TagPost } from '@/components/posts';
import { ReactElement } from 'react';
import classNames from 'classnames';
import { useState, useMemo } from 'react';

interface Props {
  tagLink: string;
  posts: IPost[];
}

export default function Tag(props: Props): ReactElement {
  const { tagLink, posts } = props;
  const [currentPage, setCurrentPage] = useState(1);
  let PageSize = 10;
  let tagName = tagLink
    .replace(/-/g, ' ')
    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return posts.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, PageSize, posts]);

  return (
    <Layout title={`${tagName} Archives`} metadata={METADATA.BLOG_PAGE}>
      <section className="py-10 bg-gray-250">
        <div className="mx-4 lg:mx-auto">
          <Container
            classes={classNames(
              'pt-16 pb-8 bg-white max-w-5xl bg-gray-150 lg:mx-auto',
              'md:pt-6 md:pb-8 md:px-7',
              'lg:pt-12 lg:pb-8 lg:px-10 lg:w-11/12 xl:pt-12 xl:px-28'
            )}
          >
            <h1
              className={classNames(
                'text-5xl font-semibold py-3 px-2 text-violet-250',
                'lg:mx-3',
                'xl:max-w-4xl'
              )}
            >
              {tagName}
            </h1>
          </Container>
        </div>

        {currentTableData?.map((post, index) => {
          return <TagPost key={`${post.id}${index}`} post={post} />;
        })}

        <Container
          classes={classNames(
            'flex justify-center lg:pl-20 lg:pr-20 lg:pb-10 mt-10'
          )}
        >
          <Pagination
            currentPage={currentPage}
            totalCount={posts.length}
            pageSize={PageSize}
            onPageChange={(page: any) => setCurrentPage(page)}
          />
        </Container>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  console.log(
    `Building: Results for tag "%c${context.params?.tag}"`,
    'color: purple;'
  );
  const tagLink = String(context.params?.tag);

  try {
    const { entries: posts, total: totalPosts } = await fetchBlogEntriesByTag(
      tagLink
    );

    return {
      props: { posts, tagLink },
      revalidate: CMS.CONTENT_REVALIDATE_RATE,
    };
  } catch (err) {
    console.error(err);
    return {
      notFound: true,
      revalidate: CMS.CONTENT_REVALIDATE_RATE,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tags: ITagList = await fetchTagList();
  const paths = Object.values(tags).map((tag) => {
    const tagLink = tag.toLowerCase().replace(/\s/g, '-');
    return {
      params: {
        tag: tagLink,
      },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};
