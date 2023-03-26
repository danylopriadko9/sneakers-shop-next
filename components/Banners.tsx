import { makeRequest } from '@/makeRequest';
import { IBanner, Object as Banner } from '@/types/baner';
import React from 'react';
import { useQuery } from 'react-query';

const fetchBanners = async (): Promise<IBanner> => {
  const response = await makeRequest.get(
    '/baners?populate[0]=img&populate[1]=icon'
  );
  return response.data;
};

const Banners: React.FC = (): JSX.Element => {
  const [bannersFetched, setBannersFetched] = React.useState<boolean>(false);
  const [actualBanner, setActualBanner] = React.useState<Banner | null>(null);

  const { data: banners } = useQuery('banners', fetchBanners, {
    staleTime: Infinity,
    enabled: !bannersFetched,
    onSuccess: () => {
      setBannersFetched(true);
    },
  });

  const handleChangeBanner = (banner: Banner) => {
    setActualBanner(banner);
  };

  React.useEffect(() => {
    if (banners?.data.length) {
      setActualBanner(banners.data[0]);
    }
  }, [banners]);

  return (
    <>
      <div className='w-full overflow-hidden relative tablet:h-[600px] h-[550px]'>
        {actualBanner?.id && (
          <div className='max-w-full max-h-full w-full h-full absolute tablet:p-[100px] p-[50px] flex flex-col gap-5 z-10'>
            <h1 className='text-white tablet:text-6xl text-2xl uppercase font-bold'>
              {actualBanner.attributes.title}
            </h1>
            <p className='tablet:max-w-[30%] max-w-[100%] text-white text-sm tablet:text-base'>
              {actualBanner.attributes.desc}
            </p>
            <button className='rounded-md text-white uppercase border-2 border-white py-2 px-3 max-w-[200px] cursor-pointer hover:bg-white hover:text-black'>
              Перейти
            </button>
          </div>
        )}
        <div className='w-full h-[100px]  absolute bottom-0 z-10 flex uppercase cursor-pointer'>
          {banners?.data.length &&
            banners.data.map((el) => (
              <div
                key={el.id}
                className={`w-1/3 flex flex-col tablet:flex-row gap-2 tablet:gap-5 text-white items-center justify-center ${
                  actualBanner === el ? '' : 'bg-black/[0.7]'
                }`}
                onClick={() => handleChangeBanner(el)}
              >
                <img
                  src={
                    'http://localhost:1337' +
                    el.attributes.icon.data.attributes.url
                  }
                  className='w-[40px] h-[40px]'
                  alt={el.attributes.title}
                />
                <p className='font-bold text-xs tablet:text-lg text-center max-w-[90%]'>
                  {el.attributes.title}
                </p>
              </div>
            ))}
        </div>
        <div
          className={`absolute top-0 right-0 left-0 bottom-0 bg-black/[0.6] z-0`}
        />
        {actualBanner?.id && (
          <img
            src={`http://localhost:1337${actualBanner.attributes.img.data.attributes.url}`}
            alt=''
            className='w-full h-full object-cover'
          />
        )}
      </div>
    </>
  );
};

export default Banners;
