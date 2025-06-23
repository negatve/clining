import React from 'react';
import ServiceDetailPage from '@/components/ServiceDetailPage';
import { PageProps } from 'next';

const Page = ({ params }: PageProps<{ id: string }>) => {
  if (!params?.id) {
    return <p>Error: ID is missing</p>;
  }

  return <ServiceDetailPage id={params.id} />;
};

export default Page;