import ServiceDetailPage from '@/components/ServiceDetailPage';

const Page = ({ params }: { params: { id: string } }) => {
  if (!params?.id) {
    return <p>Error: ID is missing</p>;
  }

  return <ServiceDetailPage id={params.id} />;
};

export default Page;



