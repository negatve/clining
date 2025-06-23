import React from 'react';
import ServiceDetailPage from '@/components/ServiceDetailPage';

type PageProps = {
  params: {
    id: string;
  };
};

const Page = ({ params }: PageProps) => {
  if (!params?.id) {
    return <p>Error: ID is missing</p>;
  }

  return <ServiceDetailPage id={params.id} />;
};

export default Page;
