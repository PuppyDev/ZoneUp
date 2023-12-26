import { OrganizationList } from "@clerk/nextjs";

const CreateWorkspacePage: React.FC = () => {
    return (
        <OrganizationList
            hidePersonal
            afterSelectOrganizationUrl="/w/:id/home"
            afterCreateOrganizationUrl="/w/:id/home"
        />
    );
};

export default CreateWorkspacePage;
