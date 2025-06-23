import { Metadata } from 'next';
import { FC } from 'react';
import ServiceDetailPage from '@/components/ServiceDetailPage';

interface PageProps {
  params: { id: string };
}

const Page: FC<PageProps> = ({ params }) => {
  if (!params?.id) {
    return <p>Error: ID is missing</p>;
  }

  return <ServiceDetailPage id={params.id} />;
};

export default Page;


