import { useRouter } from "next/router";

export default function ClientProjectPage() {
  const router = useRouter();
  function loadProjectHandler() {
    // ...load data
    // router.push("/clients/vatsa/projecta");
    // router.replace("/clients/vatsa/projecta");
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "vatsa", clientprojectid: "projecta" },
    });
  }
  return (
    <div>
      <h1>The Client Project Page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
