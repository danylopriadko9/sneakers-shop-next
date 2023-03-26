import { makeRequest } from '@/makeRequest';
import { InstagramData } from '@/types/instagram';
import React from 'react';
import { useQuery } from 'react-query';

const fetchInstagramPosts = async (): Promise<InstagramData> => {
  const response = await makeRequest.get(
    'https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=IGQVJVNFgtSUNsZA0JnWS1DYzJ2VDZAsNk5qdDl1Ymd6ZAzN6b1pFN1kxQnp5OVVvN05tRGZAENVdDYVdtUHE5VVpNTnlKLVRfOTZAUVms3NG1wZAWNwOUpjZA0VJQW9VbnZAJcTJJX1BiZAkVldDRzSXFWVnR3QwZDZD'
  );
  console.log(response.data);
  return response.data;
};

const InstagramFeed = () => {
  const [postsFetched, setPostsFetched] = React.useState<boolean>(false);

  const { data: posts } = useQuery('posts', fetchInstagramPosts, {
    staleTime: Infinity,
    enabled: !postsFetched,
    onSuccess: () => {
      setPostsFetched(true);
    },
  });

  return (
    <div className='w-full py-[50px] flex justify-center'>
      <div className='max-w-[1440px] w-full tablet:px-[50px] px-0'>
        <header className='w-full flex justify-between max-w-full px-2 mb-[20px]'>
          <h2 className='font-bold text-3xl uppercase'>Наш Instagram</h2>
          <button className='rounded-md border-2 border-black px-6 py-4 text-black uppercase hover:bg-black hover:text-white cursor-pointer'>
            Переглянути
          </button>
        </header>

        <div className='flex max-w-full gap-5 flex-wrap w-full justify-center'>
          {posts?.data.map((el, i) =>
            i <= 2 ? (
              <div
                className='w-[200px] tablet:w-[300px] flex flex-col gap-2'
                key={el.media_url}
              >
                <img
                  className='w-full h-full'
                  src={el.media_url}
                  alt='instagram'
                />
                <p className='font-bold'>
                  {String(new Date(el.timestamp).toDateString())}
                </p>
                <p>{el.caption}</p>
                <button className=' border-b-2 border-black px-6 py-2 text-black uppercase hover:border-0 cursor-pointer max-w-[300px] mx-auto'>
                  Переглянути
                </button>
              </div>
            ) : (
              <></>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;
