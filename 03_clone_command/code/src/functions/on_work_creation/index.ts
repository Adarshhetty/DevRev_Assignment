import { client, publicSDK } from "@devrev/typescript-sdk";
import { title } from "process";

export async function handleEvent(
  event: any,
) {
  const devrevPAT = event.context.secrets.service_account_token;
  const APIBase = event.execution_metadata.devrev_endpoint;
  const devrevSDK = client.setup({
    endpoint: APIBase,
    token: devrevPAT,
  })
  
 const workItem = await devrevSDK.worksGet({
   id: event.payload.work_created.work.id,
 } as any);
 const workData=workItem.data
 const body = {
   type: workData.work.type,
   owned_by: workData.work.owned_by,
   title: `[CLONE_WORK]${workData.work.title}`,
   applies_to_part: workData.work.applies_to_part,
 };
 await devrevSDK.worksCreate(body as any)
 const data = {
   object: event.payload.work_created.work.id,
   type: 'timeline_comment',
   body: `[CLONE_WORK]${workData.work.title}`,
 };
 const reponse = await devrevSDK.timelineEntriesCreate(data as any);
 return reponse;
 
}

export const run = async (events: any[]) => {
  /*
  Put your code here to handle the event.
  */
  for (let event of events) {
    const response=await handleEvent(event);
    console.log(JSON.stringify(JSON.stringify(response)))
    
  }
};

export default run;
