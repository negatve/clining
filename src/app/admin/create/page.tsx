import AddServiceForm from "@/components/AddServiceForm";

export default function CreateRequestPage() {
     return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Додати нову послугу</h1>
            <AddServiceForm />
        </div>
    );
}