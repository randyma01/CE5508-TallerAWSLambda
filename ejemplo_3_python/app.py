import boto3

dynamodb = boto3.resource('dynamodb')

def insert_data(data):
    table = dynamodb.Table('Test')
    response = table.put_item(Item=data)


def lambda_handler(event,context):
    try:
        insert_data(event)
        return str("PutItem succeeded!")
    except Exception as e:
        return str(e)
