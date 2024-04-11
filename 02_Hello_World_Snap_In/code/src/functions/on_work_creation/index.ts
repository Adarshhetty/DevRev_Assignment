import { client, publicSDK } from "@devrev/typescript-sdk";

export async function handleEvent(
  event: any,
) {
  const devrevPAT = event.context.secrets.service_account_token;
  const APIBase = event.execution_metadata.devrev_endpoint;
  const devrevSDK = client.setup({
    endpoint: APIBase,
    token: devrevPAT,
  })
 const workCreated=event.payload.work_created.work;
 let comment="Hello World printed on the work "+workCreated.display_id
   const data={
    object:workCreated.id,
    type:'timeline_comment',
    body:comment
   }
   const reponse=await devrevSDK.timelineEntriesCreate(data as any)
   return reponse
  }
  

export const run = async (events: any[]) => {
  
  for (let event of events) {
    const response=await handleEvent(event);
    console.log(JSON.stringify(response.data))
  }
};

export default run;
