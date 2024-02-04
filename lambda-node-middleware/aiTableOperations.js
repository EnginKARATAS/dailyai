import setBulk from "./setBulk.js"
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  ScanCommand,
  PutCommand
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});

const dynamo = DynamoDBDocumentClient.from(client);

const tableName = "mockTable";
 
//create a string to get today date like  23.8.2023 format
const todayDate = new Date();
const formattedTodayDate = todayDate.getDate() + "." + (todayDate.getMonth() + 1) + "." + todayDate.getFullYear();
    
export const handler = async (event, context) => {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    switch (event.routeKey) {
      case "GET /mockTable":
          body = await dynamo.send(
          new ScanCommand({mockTable: mockTable,
          FilterExpression : "contains(#mockTable, :mockTable)",
          ExpressionAttributeNames: { "#mockTable": "mockTable" },
          ExpressionAttributeValues: {
            ':mockTable': formattedTodayDate
            } 
          })
        );
        body = body.Items;
        break;
      case "POST /mockTable":
        let requestJSON = JSON.parse(event.body);
        const putPromises = requestJSON.map(async (item)=>{
        const params = {
            TableName: tableName,
            Item: {
              id:  +item.id,
              mockTable: item.mockTable,
              mockTable: item.mockTable,
              mockTable: item.mockTable,
              mockTable: item.mockTable,
              mockTable: item.mockTable,
              mockTable: item.mockTable
            }
          }
        
        try{
          await dynamo.send(new PutCommand(params))
            return `Put item ${JSON.stringify(item)}`;
        }
        catch(err){
          throw new Error(`Error puting item: ${err}`);
        }
    })
        
        try{
          const results = await Promise.all(putPromises);
          body = results.join('\n')
        }
        catch(err){
          throw new Error(err)
        }
        break;
      default:
        throw new Error(`Unsupported route: "${event.routeKey}"`);
    }
    
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers,
  };
};