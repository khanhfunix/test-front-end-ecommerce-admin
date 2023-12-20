import Chat from "../Components/Chat/Chat";
import PageContent from "../Components/MainLayout/PageContent";
import { useActionData, redirect } from "react-router-dom";

function ChatPage() {
  const chatAdmin = useActionData();
  return (
    <PageContent>
      <Chat chatAdmin={chatAdmin} />
    </PageContent>
  );
}

export default ChatPage;

export async function action(request, params) {
  const data = await request.formData();
  const id = params.hotelid;

  const chatData = {
    adminChat: data.get("adminChat"),
  };
  const response = await fetch(`http://localhost:5000/admin/edit-hotel/${id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(chatData),
  });

  const receiveData = await response.json();

  if (receiveData.status === 422) {
    return null;
  }

  return receiveData.result;
}
