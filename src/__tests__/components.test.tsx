import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { Section } from '../components/Section';
import { ListOfPosts } from '../components/ListOfPosts';
import { Post } from '../components/Post';

describe('Component: ', () => {
  const posts = [
    {
      id: 2,
      title: 'He was an expert but not in a discipline',
      body: 'He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.',
      userId: 13,
      tags: [
        'french',
        'fiction',
        'english',
      ],
      reactions: 2,
    },
    {
      id: 4,
      title: 'All he wanted was a candy bar.',
      body: "All he wanted was a candy bar. It didn't seem like a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request. It might have had something to do with the gun pointed at his face.",
      userId: 12,
      tags: [
        'mystery',
        'english',
        'american',
      ],
      reactions: 1,
    },
  ];

  test('SECTION - renders a section to the screen with "section" prop value in h2 tag', () => {
    render(<Section section="test" posts={posts}/>);
    expect(screen.getByText('#test')).toBeTruthy();
    expect(screen.getByText('#test')).toBeInTheDocument();
  });

  test('LISTOFPOSTS - renders correct posts filtered by section and corresponding tags', () => {
    render(<ListOfPosts section="american" posts={posts}/>);
    expect(screen.getByTestId('postsContainer')).toBeTruthy();
    expect(screen.getAllByTestId('postItem')).toHaveLength(1);
  });

  test('POST - shows post body text after clicking the post title', () => {
    render(<Post post={posts[0]}/>);
    expect(screen.getByText('He was an expert but not in a discipline')).toBeVisible();
    const openButton = screen.getByTestId('postTitleBtn');
    const postBody = screen.getByTestId('postBody');
    expect(postBody).not.toHaveClass('postBodyAccodion-enter postBodyAccodion-enter-active');
    fireEvent.click(openButton);
    expect(postBody).toHaveClass('postBodyAccodion-enter postBodyAccodion-enter-active');
  });
});
