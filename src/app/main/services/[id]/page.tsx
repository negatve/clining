import React from 'react';
import ServiceDetailPage from '@/components/ServiceDetailPage';

const Page = async ({ params }: { params: { id: string } }) => {
  if (!params?.id) {
    return <p>Error: ID is missing</p>;
  }

  return <ServiceDetailPage id={params.id} />;
};

export default Page;



